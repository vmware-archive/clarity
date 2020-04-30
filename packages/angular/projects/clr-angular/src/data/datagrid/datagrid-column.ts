/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  Component,
  ContentChild,
  EventEmitter,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewContainerRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { HostWrapper } from '../../utils/host-wrapping/host-wrapper';
import { DatagridPropertyComparator } from './built-in/comparators/datagrid-property-comparator';
import { DatagridPropertyStringFilter } from './built-in/filters/datagrid-property-string-filter';
import { DatagridPropertyNumericFilter } from './built-in/filters/datagrid-property-numeric-filter';
import { DatagridStringFilterImpl } from './built-in/filters/datagrid-string-filter-impl';
import { DatagridNumericFilterImpl } from './built-in/filters/datagrid-numeric-filter-impl';
import { ClrDatagridSortOrder } from './enums/sort-order.enum';
import { ClrDatagridComparatorInterface } from './interfaces/comparator.interface';
import { CustomFilter } from './providers/custom-filter';
import { FiltersProvider } from './providers/filters';
import { Sort } from './providers/sort';
import { DatagridFilterRegistrar } from './utils/datagrid-filter-registrar';
import { ClrDatagridFilterInterface } from './interfaces/filter.interface';
import { WrappedColumn } from './wrapped-column';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { ClrPopoverPositionService } from '../../utils/popover/providers/popover-position.service';
import { ClrPopoverEventsService } from '../../utils/popover/providers/popover-events.service';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { DetailService } from './providers/detail.service';

@Component({
  selector: 'clr-dg-column',
  template: `
    <div class="datagrid-column-flex">
      <button
        class="datagrid-column-title"
        [attr.aria-label]="commonStrings.keys.sortColumn"
        *ngIf="sortable"
        (click)="sort()"
        type="button"
      >
        <ng-container *ngTemplateOutlet="columnTitle"></ng-container>
        <clr-icon *ngIf="sortIcon" [attr.shape]="sortIcon" class="sort-icon"></clr-icon>
      </button>
      <!-- I'm really not happy with that select since it's not very scalable -->
      <ng-content select="clr-dg-filter, clr-dg-string-filter, clr-dg-numeric-filter"></ng-content>

      <clr-dg-string-filter
        *ngIf="field && !customFilter && colType == 'string'"
        [clrDgStringFilter]="registered"
        [(clrFilterValue)]="filterValue"
      ></clr-dg-string-filter>

      <clr-dg-numeric-filter
        *ngIf="field && !customFilter && colType == 'number'"
        [clrDgNumericFilter]="registered"
        [(clrFilterValue)]="filterValue"
      ></clr-dg-numeric-filter>

      <ng-template #columnTitle>
        <ng-content></ng-content>
      </ng-template>

      <span class="datagrid-column-title" *ngIf="!sortable">
        <ng-container *ngTemplateOutlet="columnTitle"></ng-container>
      </span>

      <clr-dg-column-separator *ngIf="showSeparator"></clr-dg-column-separator>
    </div>
  `,
  providers: [ClrPopoverPositionService, ClrPopoverEventsService, ClrPopoverToggleService],
  host: {
    '[class.datagrid-column]': 'true',
    '[attr.aria-sort]': 'ariaSort',
    role: 'columnheader',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClrDatagridColumn<T = any> extends DatagridFilterRegistrar<T, ClrDatagridFilterInterface<T>>
  implements OnDestroy, OnInit {
  constructor(
    private _sort: Sort<T>,
    filters: FiltersProvider<T>,
    private vcr: ViewContainerRef,
    private detailService: DetailService,
    private changeDetectorRef: ChangeDetectorRef,
    public commonStrings: ClrCommonStringsService
  ) {
    super(filters);
    this.subscriptions.push(this.listenForSortingChanges());
    this.subscriptions.push(this.listenForDetailPaneChanges());
  }

  public showSeparator = true;

  /**
   * Subscription to the sort service changes
   */
  private subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private listenForDetailPaneChanges() {
    return this.detailService.stateChange.subscribe(state => {
      if (this.showSeparator !== !state) {
        this.showSeparator = !state;
        // Have to manually change because of OnPush
        this.changeDetectorRef.markForCheck();
      }
    });
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

  /*
   * What type is this column?  This defaults to STRING, but can also be
   * set to NUMBER.  Unsupported types default to STRING. Users can set it
   * via the [clrDgColType] input by setting it to 'string' or 'number'.
   */

  private _colType: 'string' | 'number' = 'string';

  get colType() {
    return this._colType;
  }

  // TODO: We might want to make this an enum in the future
  @Input('clrDgColType')
  set colType(value: 'string' | 'number') {
    this._colType = value;
    if (!this.customFilter && !this.filter && this._colType && this._field) {
      this.setupDefaultFilter(this._field, this._colType);
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

  @Input('clrDgField')
  public set field(field: string) {
    if (typeof field === 'string') {
      this._field = field;
      if (!this.customFilter && this._colType) {
        this.setupDefaultFilter(this._field, this._colType);
      }
      if (!this._sortBy) {
        this._sortBy = new DatagridPropertyComparator(this._field);
      }
    }
  }

  private setupDefaultFilter(field: string, colType: 'string' | 'number') {
    if (colType === 'number') {
      this.setFilter(new DatagridNumericFilterImpl(new DatagridPropertyNumericFilter(field)));
    } else if (colType === 'string') {
      this.setFilter(new DatagridStringFilterImpl(new DatagridPropertyStringFilter(field)));
    }
    if (this.filter && this.initFilterValue) {
      this.updateFilterValue = this.initFilterValue;
      // This initFilterValue should be used only once after the filter registration
      // So deleting this property value to prevent it from being used again
      // if this field property is set again
      delete this.initFilterValue;
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

  public sortIcon: string | null;
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

  @ContentChild(CustomFilter)
  public set projectedFilter(custom: any) {
    if (custom) {
      this.deleteFilter();
      this.customFilter = true;
    }
  }

  @Input('clrFilterValue')
  public set updateFilterValue(newValue: string | [number, number]) {
    if (this.filter) {
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
    } else {
      this.initFilterValue = newValue;
    }
  }

  // This property holds filter value temporarily while this.filter property is not yet registered
  // When this.filter is registered, this property value would be used update this.filter.value
  private initFilterValue: string | [number, number];

  public get filterValue() {
    if (this.filter instanceof DatagridStringFilterImpl || this.filter instanceof DatagridNumericFilterImpl) {
      return this.filter.value;
    }
    return null;
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
