/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { DomAdapter } from '../../utils/dom-adapter/dom-adapter';
import { ClrDragEvent } from '../../utils/drag-and-drop/drag-event';
import { HostWrapper } from '../../utils/host-wrapping/host-wrapper';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { ClrPopoverEventsService } from '../../utils/popover/providers/popover-events.service';
import { ClrPopoverPositionService } from '../../utils/popover/providers/popover-position.service';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { DatagridPropertyComparator } from './built-in/comparators/datagrid-property-comparator';
import { DatagridNumericFilterImpl } from './built-in/filters/datagrid-numeric-filter-impl';
import { DatagridPropertyNumericFilter } from './built-in/filters/datagrid-property-numeric-filter';
import { DatagridPropertyStringFilter } from './built-in/filters/datagrid-property-string-filter';
import { DatagridStringFilterImpl } from './built-in/filters/datagrid-string-filter-impl';
import { DROP_ANIM_STATE, SHIFT_ANIM_STATE } from './enums/column-reorder-animation.enum';
import { ClrDatagridSortOrder } from './enums/sort-order.enum';
import { ClrDatagridComparatorInterface } from './interfaces/comparator.interface';
import { ClrDatagridFilterInterface } from './interfaces/filter.interface';
import { ViewAccessor } from './interfaces/view-accessor.interface';
import { ColumnReorderService, ReorderAnimRequest } from './providers/column-reorder.service';
import { CustomFilter } from './providers/custom-filter';
import { FiltersProvider } from './providers/filters';
import { Sort } from './providers/sort';
import { DatagridFilterRegistrar } from './utils/datagrid-filter-registrar';
import { WrappedColumn } from './wrapped-column';

@Component({
  selector: 'clr-dg-column',
  template: `
    <div class="datagrid-column-wrapper"
         [clrDraggable]="_view"
         [clrGroup]="columnsGroupId"
         (clrDragStart)="inDragMode = true;"
         (clrDragMove)="_markForCheck = true;"
         (clrDragEnd)="inDragMode = false;"
         (@reorderDropAnimation.done)="resetDropAnimation()"
         [@reorderDropAnimation]="dropAnimationTrigger"
         (@reorderShiftAnimation.done)="resetShiftAnimation()"
         [@reorderShiftAnimation]="shiftAnimationTrigger">
      <div class="datagrid-column-flex">
          <!-- I'm really not happy with that select since it's not very scalable -->
          <ng-content select="clr-dg-filter, clr-dg-string-filter, clr-dg-numeric-filter"></ng-content>

          <clr-dg-string-filter
                  *ngIf="field && !customFilter && (colType=='string')"
                  [clrDgStringFilter]="registered"
                  [(clrFilterValue)]="filterValue"></clr-dg-string-filter>

          <clr-dg-numeric-filter
                  *ngIf="field && !customFilter && (colType=='number')"
                  [clrDgNumericFilter]="registered"
                  [(clrFilterValue)]="filterValue"></clr-dg-numeric-filter>

          <ng-template #columnTitle>
              <ng-content></ng-content>
          </ng-template>

          <button
            class="datagrid-column-title"
            [attr.aria-label]="commonStrings.keys.sortColumn"
            *ngIf="sortable"
            (click)="sort()"
            type="button">
              <ng-container  *ngTemplateOutlet="columnTitle"></ng-container>
              <clr-icon
                      *ngIf="sortIcon"
                      [attr.shape]="sortIcon"
                      class="sort-icon"></clr-icon>
          </button>

          <span class="datagrid-column-title" *ngIf="!sortable">
              <ng-container *ngTemplateOutlet="columnTitle"></ng-container>
          </span>
      </div>
      </div>
      <clr-dg-column-separator></clr-dg-column-separator>
      <div class="datagrid-column-droppable" 
      clrDroppable 
      [clrGroup]="columnsGroupId"
      (clrDragStart)="_markForCheck = true; closeFilterWhenDragStart()"
      (clrDrop)="requestReorder($event);">
        <div class="datagrid-column-drop-line"></div>
      </div>
    `,
  providers: [ClrPopoverPositionService, ClrPopoverEventsService, ClrPopoverToggleService],
  host: {
    '[class.datagrid-column]': 'true',
    '[class.datagrid-column-drag-mode]': 'inDragMode',
    '[class.datagrid-column-reorder-drop]': 'inReorderDrop',
    '[class.datagrid-column-reorder-shift]': 'inReorderShift',
    '[attr.aria-sort]': 'ariaSort',
    role: 'columnheader',
  },
  animations: [
    trigger('reorderDropAnimation', [
      transition(`${DROP_ANIM_STATE.INACTIVE} => ${DROP_ANIM_STATE.ACTIVE}`, [
        style({
          position: 'fixed',
          width: '{{width}}px',
          height: '{{height}}px',
          top: '{{fromTop}}px',
          left: '{{fromLeft}}px',
        }),
        animate('0.2s 0.1s ease-in-out', style({ top: '{{toTop}}px', left: '{{toLeft}}px' })),
      ]),
    ]),
    trigger('reorderShiftAnimation', [
      transition(`${SHIFT_ANIM_STATE.INACTIVE} => ${SHIFT_ANIM_STATE.ACTIVE}`, [
        style({ position: 'relative', left: '{{fromLeft}}px' }),
        animate('0.2s ease-in-out', style({ left: '0px' })),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClrDatagridColumn<T = any> extends DatagridFilterRegistrar<T, ClrDatagridFilterInterface<T>>
  implements ViewAccessor, OnDestroy, OnInit {
  constructor(
    private _sort: Sort<T>,
    filters: FiltersProvider<T>,
    private vcr: ViewContainerRef,
    private changeDetectorRef: ChangeDetectorRef,
    public commonStrings: ClrCommonStringsService,
    private columnReorderService: ColumnReorderService,
    private filterPopoverToggleService: ClrPopoverToggleService,
    private domAdapter: DomAdapter
  ) {
    super(filters);
    this.subscriptions.push(this.listenForSortingChanges());
    this.subscriptions.push(this.listenForReorderAnimRequest());
  }

  // TODO: remove once OnPush change detection strategy is removed
  _markForCheck = false;

  /**
   * Subscription to the sort service changes
   */
  private subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private listenForSortingChanges() {
    return this._sort.change.subscribe(sort => {
      // Need to manually mark the component to be checked
      // for both activating and deactivating sorting
      this.changeDetectorRef.markForCheck();
      // We're only listening to make sure we emit an event when the column goes from sorted to unsorted
      if (this.sortOrder !== ClrDatagridSortOrder.UNSORTED && sort.comparator !== this._sortBy) {
        this._sortOrder = ClrDatagridSortOrder.UNSORTED;
        this.sortOrderChange.emit(this._sortOrder);
        // removes the sortIcon when column becomes unsorted
        this.sortIcon = null;
      }
      // deprecated: to be removed - START
      if (this.sorted && sort.comparator !== this._sortBy) {
        this._sorted = false;
        this.sortedChange.emit(false);
      }
      // deprecated: to be removed - END
    });
  }

  private listenForReorderAnimRequest() {
    return this.columnReorderService.reorderAnimRequested.subscribe(reorderAnimRequest => {
      if (this._order === reorderAnimRequest.targetOrder) {
        this.triggerDropAnimation(reorderAnimRequest);
      } else if (reorderAnimRequest.sourceOrder <= this._order && this._order < reorderAnimRequest.targetOrder) {
        this.triggerShiftAnimation(reorderAnimRequest, 1);
      } else if (reorderAnimRequest.sourceOrder >= this._order && this._order > reorderAnimRequest.targetOrder) {
        this.triggerShiftAnimation(reorderAnimRequest, -1);
      }
    });
  }

  // Drop animation when the column gets successfully dropped on its target Droppable
  private triggerDropAnimation(reorderAnimRequest: ReorderAnimRequest) {
    const sourceClientRect = this.domAdapter.clientRect(reorderAnimRequest.dragSourceElement);
    const [fromTop, fromLeft] = [
      reorderAnimRequest.ghostAnchorPosition.pageY,
      reorderAnimRequest.ghostAnchorPosition.pageX,
    ];
    const [toTop, toLeft] = [sourceClientRect.top, sourceClientRect.left];
    const [width, height] = [sourceClientRect.width, sourceClientRect.height];
    this.dropAnimationTrigger = {
      value: DROP_ANIM_STATE.ACTIVE,
      params: { fromTop, fromLeft, toTop, toLeft, width, height },
    };
  }

  // Shift animation for the other columns when the dragged column gets successfully dropped on its target Droppable
  private triggerShiftAnimation(reorderAnimRequest: ReorderAnimRequest, ltr: 1 | -1) {
    const sourceClientRect = this.domAdapter.clientRect(reorderAnimRequest.dragSourceElement);
    this.changeDetectorRef.markForCheck();
    this.shiftAnimationTrigger = {
      value: SHIFT_ANIM_STATE.ACTIVE,
      params: { fromLeft: ltr * sourceClientRect.width },
    };
  }

  // Every datagrid column should have unique group id.
  // Otherwise, they would get polluted with other datagrids draggable columns.
  get columnsGroupId() {
    return this.columnReorderService.columnsGroupId;
  }

  // We need to apply certain styles during dragging
  inDragMode: boolean = false;

  // We process the user given order before emitting
  // so here we have async event emitter to circumvent chocolate error.
  @Output('clrDgColumnOrderChange') private orderChange = new EventEmitter<number>(true);

  private _order: number;
  private _userDefinedOrder: number;

  get order(): number {
    return this._order;
  }

  get userDefinedOrder(): number {
    return this._userDefinedOrder;
  }

  set order(value: number) {
    const oldOrder = this._order;
    this._order = value;
    // when order gets set for the first time, don't emit it.
    if (typeof oldOrder !== 'undefined' && oldOrder !== this._order) {
      this.orderChange.emit(this._order);
    }
  }

  @Input('clrDgColumnOrder')
  set userDefinedOrder(value: number) {
    if (typeof value === 'number') {
      this._userDefinedOrder = value;
      if (typeof this._order === 'number' && value !== this._order) {
        this.columnReorderService.requestReorder(this._order, value);
      }
    }
  }

  dropAnimationTrigger: any = DROP_ANIM_STATE.INACTIVE;
  shiftAnimationTrigger: any = SHIFT_ANIM_STATE.INACTIVE;

  get inReorderDrop() {
    return this.dropAnimationTrigger && this.dropAnimationTrigger.value === DROP_ANIM_STATE.ACTIVE;
  }

  get inReorderShift() {
    return this.shiftAnimationTrigger && this.shiftAnimationTrigger.value === SHIFT_ANIM_STATE.ACTIVE;
  }

  resetDropAnimation() {
    this.dropAnimationTrigger = { value: DROP_ANIM_STATE.INACTIVE };
  }

  resetShiftAnimation() {
    this.shiftAnimationTrigger = { value: SHIFT_ANIM_STATE.INACTIVE };
  }

  requestReorder(event: ClrDragEvent<ViewRef>) {
    this.columnReorderService.reorderViews(event.dragDataTransfer, this._view, event);
  }

  closeFilterWhenDragStart() {
    if (this.filterPopoverToggleService.open) {
      this.filterPopoverToggleService.open = false;
    }
  }

  /*
     * Simple object property shortcut, activates both sorting and filtering
     * based on native comparison of the specified property on the items.
     */
  private _field: string;
  public get field() {
    return this._field;
  }

  /*
  * What type is this column?  This defaults to STRING, but can also be
  * set to NUMBER.  Unsupported types default to STRING. Users can set it
  * via the [clrDgColType] input by setting it to 'string' or 'number'.
  */

  // TODO: We might want to make this an enum in the future
  @Input('clrDgColType') colType: 'string' | 'number' = 'string';

  @Input('clrDgField')
  public set field(field: string) {
    if (typeof field === 'string') {
      this._field = field;
      if (!this.customFilter) {
        if (this.colType === 'number') {
          this.setFilter(new DatagridNumericFilterImpl(new DatagridPropertyNumericFilter(field)));
        } else {
          this.setFilter(new DatagridStringFilterImpl(new DatagridPropertyStringFilter(field)));
        }
      }
      if (!this._sortBy) {
        this._sortBy = new DatagridPropertyComparator(field);
      }
    }
  }

  /**
   * ClrDatagridComparatorInterface to use when sorting the column
   */

  private _sortBy: ClrDatagridComparatorInterface<T>;

  public get sortBy() {
    return this._sortBy;
  }

  @Input('clrDgSortBy')
  public set sortBy(comparator: ClrDatagridComparatorInterface<T> | string) {
    if (typeof comparator === 'string') {
      this._sortBy = new DatagridPropertyComparator(comparator);
    } else {
      if (comparator) {
        this._sortBy = comparator;
      } else {
        if (this._field) {
          this._sortBy = new DatagridPropertyComparator(this._field);
        } else {
          delete this._sortBy;
        }
      }
    }
  }

  /**
   * Indicates if the column is sortable
   */
  public get sortable(): boolean {
    return !!this._sortBy;
  }

  // deprecated: to be removed - START
  /**
   * Indicates if the column is currently sorted
   *
   * @deprecated This will be removed soon, in favor of the sortOrder mechanism
   */
  private _sorted = false;
  public get sorted() {
    return this._sorted;
  }

  /**
   * @deprecated This will be removed soon, in favor of the sortOrder mechanism
   */
  @Input('clrDgSorted')
  public set sorted(value: boolean) {
    if (!value && this.sorted) {
      this._sorted = false;
      this._sort.clear();
    } else if (value && !this.sorted) {
      this.sort();
    }
  }

  /**
   * @deprecated This will be removed soon, in favor of the sortOrder mechanism
   */
  @Output('clrDgSortedChange') public sortedChange = new EventEmitter<boolean>();

  // deprecated: to be removed - END

  /**
   * Indicates how the column is currently sorted
   */
  private _sortOrder: ClrDatagridSortOrder = ClrDatagridSortOrder.UNSORTED;
  public get sortOrder() {
    return this._sortOrder;
  }

  @Input('clrDgSortOrder')
  public set sortOrder(value: ClrDatagridSortOrder) {
    if (typeof value === 'undefined') {
      return;
    }

    // only if the incoming order is different from the current one
    if (this._sortOrder === value) {
      return;
    }

    switch (value) {
      // the Unsorted case happens when the current state is either Asc or Desc
      default:
      case ClrDatagridSortOrder.UNSORTED:
        this._sort.clear();
        break;
      case ClrDatagridSortOrder.ASC:
        this.sort(false);
        break;
      case ClrDatagridSortOrder.DESC:
        this.sort(true);
        break;
    }
  }

  public get ariaSort() {
    switch (this._sortOrder) {
      default:
      case ClrDatagridSortOrder.UNSORTED:
        return 'none';
      case ClrDatagridSortOrder.ASC:
        return 'ascending';
      case ClrDatagridSortOrder.DESC:
        return 'descending';
    }
  }

  @Output('clrDgSortOrderChange') public sortOrderChange = new EventEmitter<ClrDatagridSortOrder>();

  public sortIcon: string;
  /**
   * Sorts the datagrid based on this column
   */
  public sort(reverse?: boolean) {
    if (!this.sortable) {
      return;
    }

    this._sort.toggle(this._sortBy, reverse);

    // setting the private variable to not retrigger the setter logic
    this._sortOrder = this._sort.reverse ? ClrDatagridSortOrder.DESC : ClrDatagridSortOrder.ASC;
    // Sets the correct icon for current sort order
    this.sortIcon = this._sortOrder === ClrDatagridSortOrder.DESC ? 'arrow down' : 'arrow';
    this.sortOrderChange.emit(this._sortOrder);

    // deprecated: to be removed - START
    this._sorted = true;
    this.sortedChange.emit(true);
    // deprecated: to be removed - END
  }

  /**
   * A custom filter for this column that can be provided in the projected content
   */
  public customFilter = false;

  @ContentChild(CustomFilter, { static: false })
  public set projectedFilter(custom: any) {
    if (custom) {
      this.deleteFilter();
      this.customFilter = true;
    }
  }

  public get filterValue() {
    if (this.filter instanceof DatagridStringFilterImpl || this.filter instanceof DatagridNumericFilterImpl) {
      return this.filter.value;
    }
  }

  @Input('clrFilterValue')
  public set updateFilterValue(newValue: string | [number, number]) {
    if (!this.filter) {
      return;
    }
    if (this.filter instanceof DatagridStringFilterImpl) {
      if (!newValue || typeof newValue !== 'string') {
        newValue = '';
      }
      if (newValue !== this.filter.value) {
        this.filter.value = newValue;
      }
    } else if (this.filter instanceof DatagridNumericFilterImpl) {
      if (!newValue || !(newValue instanceof Array)) {
        newValue = [null, null];
      }
      if (newValue.length === 2 && (newValue[0] !== this.filter.value[0] || newValue[1] !== this.filter.value[1])) {
        this.filter.value = newValue;
      }
    }
  }

  public set filterValue(newValue: string | [number, number]) {
    if (this.filter instanceof DatagridStringFilterImpl || this.filter instanceof DatagridNumericFilterImpl) {
      this.updateFilterValue = newValue;
      this.filterValueChange.emit(this.filter.value);
    }
  }

  @Output('clrFilterValueChange') filterValueChange = new EventEmitter();

  private wrappedInjector: Injector;

  ngOnInit() {
    this.wrappedInjector = new HostWrapper(WrappedColumn, this.vcr);
  }

  public get _view() {
    return this.wrappedInjector.get(WrappedColumn, this.vcr).columnView;
  }
}
