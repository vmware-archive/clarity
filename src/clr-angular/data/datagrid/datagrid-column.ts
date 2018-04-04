/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostBinding,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { HostWrapper } from '../../utils/host-wrapping/host-wrapper';

import { DatagridPropertyComparator } from './built-in/comparators/datagrid-property-comparator';
import { DatagridPropertyStringFilter } from './built-in/filters/datagrid-property-string-filter';
import { DatagridStringFilterImpl } from './built-in/filters/datagrid-string-filter-impl';
import { DatagridHideableColumnModel } from './datagrid-hideable-column.model';
import { ClrDatagridSortOrder } from './enums/sort-order.enum';
import { ClrDatagridComparatorInterface } from './interfaces/comparator.interface';
import { CustomFilter } from './providers/custom-filter';
import { DragDispatcher } from './providers/drag-dispatcher';
import { FiltersProvider } from './providers/filters';
import { Sort } from './providers/sort';
import { DatagridFilterRegistrar } from './utils/datagrid-filter-registrar';
import { WrappedColumn } from './wrapped-column';

let nbCount: number = 0;

@Component({
  selector: 'clr-dg-column',
  template: `
        <div class="datagrid-column-flex">
            <!-- I'm really not happy with that select since it's not very scalable -->
            <ng-content select="clr-dg-filter, clr-dg-string-filter"></ng-content>

            <clr-dg-string-filter
                    *ngIf="field && !customFilter"
                    [clrDgStringFilter]="registered"
                    [(clrFilterValue)]="filterValue"></clr-dg-string-filter>

            <ng-template #columnTitle>
                <ng-content></ng-content>
            </ng-template>

            <button class="datagrid-column-title" *ngIf="sortable" (click)="sort()" type="button">
                <ng-container *ngTemplateOutlet="columnTitle"></ng-container>
            </button>

            <span class="datagrid-column-title" *ngIf="!sortable">
               <ng-container *ngTemplateOutlet="columnTitle"></ng-container>
            </span>

            <div class="datagrid-column-separator">
                <button #columnHandle class="datagrid-column-handle" tabindex="-1" type="button"></button>
                <div #columnHandleTracker class="datagrid-column-handle-tracker"></div>
            </div>
        </div>
    `,
  host: {
    '[class.datagrid-column]': 'true',
    '[class.datagrid-column--hidden]': 'hidden',
    '[attr.aria-sort]': 'ariaSort',
    role: 'columnheader',
  },
})
export class ClrDatagridColumn<T = any> extends DatagridFilterRegistrar<T, DatagridStringFilterImpl<T>>
  implements OnDestroy, OnInit {
  constructor(
    private _sort: Sort<T>,
    filters: FiltersProvider<T>,
    private _dragDispatcher: DragDispatcher,
    private vcr: ViewContainerRef
  ) {
    super(filters);
    this._sortSubscription = _sort.change.subscribe(sort => {
      // We're only listening to make sure we emit an event when the column goes from sorted to unsorted
      if (this.sortOrder !== ClrDatagridSortOrder.UNSORTED && sort.comparator !== this._sortBy) {
        this._sortOrder = ClrDatagridSortOrder.UNSORTED;
        this.sortOrderChange.emit(this._sortOrder);
      }
      // deprecated: to be removed - START
      if (this.sorted && sort.comparator !== this._sortBy) {
        this._sorted = false;
        this.sortedChange.emit(false);
      }
      // deprecated: to be removed - END
    });

    this.columnId = 'dg-col-' + nbCount.toString(); // Approximate a GUID
    nbCount++;
  }

  /**
   * @property columnId
   *
   * @description
   * A ClrDatagridColumn class variable that holds the number of ClrDatagridColumn instances for a Datagrid.
   * It is used to generate a unique id for the ClrDatagridColumn instance.
   *
   */
  public columnId: string;

  /**
   * @property hidden
   *
   * @description
   * A property that allows the column to be hidden / shown with css
   * Note the default allows the ClrDatagridColumn to have an *ngIf on it. (EHCAIWC - will occur if its not
   * initialized)
   *
   * @default false
   *
   */
  public get hidden(): boolean {
    return !!this.hideable && this.hideable.hidden;
  }

  @ViewChild('columnHandle')
  set handleElRef(value: ElementRef) {
    this._dragDispatcher.handleRef = value;
  }

  @ViewChild('columnHandleTracker')
  set handleTrackerElRef(value: ElementRef) {
    this._dragDispatcher.handleTrackerRef = value;
  }

  /**
   * Subscription to the sort service changes
   */
  private _sortSubscription: Subscription;

  ngOnDestroy() {
    this._sortSubscription.unsubscribe();
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
      if (!this.customFilter) {
        this.setFilter(new DatagridStringFilterImpl(new DatagridPropertyStringFilter(field)));
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
    this.sortOrderChange.emit(this._sortOrder);

    // deprecated: to be removed - START
    this._sorted = true;
    this.sortedChange.emit(true);
    // deprecated: to be removed - END
  }

  /**
   * Indicates if the column is currently sorted in ascending order
   */
  @HostBinding('class.asc')
  public get asc() {
    // deprecated: if condition to be removed - START
    if (typeof this.sortOrder === 'undefined') {
      return this.sorted && !this._sort.reverse;
    } else {
      return this.sortOrder === ClrDatagridSortOrder.ASC;
    }
    // deprecated: if condition to be removed - END
  }

  /**
   * Indicates if the column is currently sorted in descending order
   */
  @HostBinding('class.desc')
  public get desc() {
    // deprecated: if condition to be removed - START
    if (typeof this.sortOrder === 'undefined') {
      return this.sorted && this._sort.reverse;
    } else {
      return this.sortOrder === ClrDatagridSortOrder.DESC;
    }
    // deprecated: if condition to be removed - END
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

  public get filterValue() {
    return this.filter.value;
  }

  @Input('clrFilterValue')
  public set updateFilterValue(newValue: string) {
    if (!this.filter) {
      return;
    }
    if (!newValue) {
      newValue = '';
    }
    if (newValue !== this.filter.value) {
      this.filter.value = newValue;
    }
  }

  public set filterValue(newValue: string) {
    this.updateFilterValue = newValue;
    this.filterValueChange.emit(this.filter.value);
  }

  @Output('clrFilterValueChange') filterValueChange = new EventEmitter();

  /***********
   *
   * @property hideable
   *
   * @description
   * When a column is hideable this is defined with an instance of DatagridHideableColumnModel.
   * When its not hideable should be undefined.
   *
   */
  public hideable: DatagridHideableColumnModel;

  private wrappedInjector: Injector;

  ngOnInit() {
    this.wrappedInjector = new HostWrapper(WrappedColumn, this.vcr);
  }

  public get _view() {
    return this.wrappedInjector.get(WrappedColumn, this.vcr).columnView;
  }
}
