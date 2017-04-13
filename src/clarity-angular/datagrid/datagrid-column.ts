/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    Component, ContentChild, HostBinding, Input, Output, EventEmitter
} from "@angular/core";
import { Subscription } from "rxjs";

import { DatagridPropertyComparator } from "./built-in/comparators/datagrid-property-comparator";
import { DatagridPropertyStringFilter } from "./built-in/filters/datagrid-property-string-filter";
import { Comparator } from "./interfaces/comparator";
import { CustomFilter } from "./providers/custom-filter";
import { Sort } from "./providers/sort";
import { DatagridFilterRegistrar } from "./utils/datagrid-filter-registrar";
import { FiltersProvider } from "./providers/filters";
import { DatagridStringFilterImpl } from "./built-in/filters/datagrid-string-filter-impl";
import { SortOrder } from "./interfaces/sort-order";

@Component({
    selector: "clr-dg-column",
    template: `
        <div class="datagrid-column-flex">
            <!-- I'm really not happy with that select since it's not very scalable -->
            <ng-content select="clr-dg-filter, clr-dg-string-filter"></ng-content>

            <clr-dg-string-filter
                *ngIf="field && !customFilter"
                [clrDgStringFilter]="registered"
                [(clrFilterValue)]="filterValue"></clr-dg-string-filter>

            <button class="datagrid-column-title" [disabled]="!sortable" (click)="sort()">
                <ng-content></ng-content>
            </button>
            <div class="datagrid-column-separator"></div>        
        </div>
    `,
    host: {
        "[class.datagrid-column]": "true"
    }
})
export class DatagridColumn extends DatagridFilterRegistrar<DatagridStringFilterImpl> {
    constructor(private _sort: Sort, filters: FiltersProvider) {
        super(filters);
        this._sortSubscription = _sort.change.subscribe(sort => {
            // We're only listening to make sure we emit an event when the column goes from sorted to unsorted
            if (this.sortOrder !== SortOrder.Unsorted && sort.comparator !== this.sortBy) {
                this._sortOrder = SortOrder.Unsorted;
                this.sortOrderChange.emit(this._sortOrder);
            }
            // deprecated: to be removed - START
            if (this.sorted && sort.comparator !== this.sortBy) {
                this._sorted = false;
                this.sortedChange.emit(false);
            }
            // deprecated: to be removed - END
        });
    }

    /**
     * Subscription to the sort service changes
     */
    private _sortSubscription: Subscription;

    ngOnDestroy() {
        this._sortSubscription.unsubscribe();
    }

    /**
     * Comparator to use when sorting the column
     */
    @Input("clrDgSortBy") public sortBy: Comparator<any>;

    /**
     * Indicates if the column is sortable
     */
    public get sortable(): boolean {
        return !!this.sortBy;
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
    @Input("clrDgSorted")
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
    @Output("clrDgSortedChange") public sortedChange = new EventEmitter<boolean>();

    // deprecated: to be removed - END

    /**
     * Indicates how the column is currently sorted
     */
    private _sortOrder: SortOrder = SortOrder.Unsorted;
    public get sortOrder() {
        return this._sortOrder;
    }

    @Input("clrDgSortOrder")
    public set sortOrder(value: SortOrder) {
        // only if the incoming order is different from the current one
        if (this._sortOrder === value) {
            return;
        }

        switch (value) {
            // the Unsorted case happens when the current state is either Asc or Desc
            default: case SortOrder.Unsorted:
                this._sort.clear();
                break;
            case SortOrder.Asc:
                this.sort(false);
                break;
            case SortOrder.Desc:
                this.sort(true);
                break;
        }
    };

    @Output("clrDgSortOrderChange") public sortOrderChange = new EventEmitter<SortOrder>();

    /**
     * Sorts the datagrid based on this column
     */
    public sort(reverse?: boolean) {
        if (!this.sortable) {
            return;
        }

        this._sort.toggle(this.sortBy, reverse);

        // setting the private variable to not retrigger the setter logic
        this._sortOrder = this._sort.reverse ? SortOrder.Desc : SortOrder.Asc;
        this.sortOrderChange.emit(this._sortOrder);

        // deprecated: to be removed - START
        this._sorted = true;
        this.sortedChange.emit(true);
        // deprecated: to be removed - END
    }

    /**
     * Indicates if the column is currently sorted in ascending order
     */
    @HostBinding("class.asc")
    public get asc() {
        // deprecated: if condition to be removed - START
        if (typeof this.sortOrder === "undefined") {
            return this.sorted && !this._sort.reverse;
        } else {
            return this.sortOrder === SortOrder.Asc;
        }
        // deprecated: if condition to be removed - END
    }

    /**
     * Indicates if the column is currently sorted in descending order
     */
    @HostBinding("class.desc")
    public get desc() {
        // deprecated: if condition to be removed - START
        if (typeof this.sortOrder === "undefined") {
            return this.sorted && this._sort.reverse;
        } else {
            return this.sortOrder === SortOrder.Desc;
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

    /*
     * Simple object property shortcut, activates both sorting and filtering
     * based on native comparison of the specified property on the items.
     */
    private _field: string;
    public get field() {
        return this._field;
    }
    @Input("clrDgField")
    public set field(field: string) {
        if (typeof field === "string") {
            this._field = field;
            if (!this.customFilter) {
                this.setFilter(new DatagridStringFilterImpl(new DatagridPropertyStringFilter(field)));
            }
            if (!this.sortBy) {
                this.sortBy = new DatagridPropertyComparator(field);
            }
        }
    }

    public get filterValue() {
        return this.filter.value;
    }
    @Input("clrFilterValue")
    public set filterValue(newValue: string) {
        if (!this.filter) { return; }
        if (!newValue) {
            newValue = "";
        }
        if (newValue !== this.filter.value) {
            this.filter.value = newValue;
            this.filterValueChange.emit(newValue);
        }
    }

    @Output("clrFilterValueChange") filterValueChange = new EventEmitter();

}
