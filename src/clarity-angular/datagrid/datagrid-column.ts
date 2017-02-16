/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    AfterViewInit, ChangeDetectorRef, Component, ContentChild, HostBinding, Input, Output, EventEmitter
} from "@angular/core";
import {Subscription} from "rxjs";

import {DatagridPropertyComparator} from "./built-in/comparators/datagrid-property-comparator";
import {DatagridPropertyStringFilter} from "./built-in/filters/datagrid-property-string-filter";
import {Comparator} from "./interfaces/comparator";
import {CustomFilter} from "./providers/custom-filter";
import {Sort} from "./providers/sort";
import {FilterRegisterer} from "./utils/filter-registerer";
import {Filters} from "./providers/filters";
import {StringFilterImpl} from "./built-in/filters/string-filter-impl";

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
        </div>
    `,
    host: {
        "[class.datagrid-column]": "true"
    }
})
export class DatagridColumn extends FilterRegisterer<StringFilterImpl> implements AfterViewInit {
    constructor(private _sort: Sort, private _cdr: ChangeDetectorRef, filters: Filters) {
        super(filters);
        this._sortSubscription = _sort.change.subscribe(sort => {
            // We're only listening to make sure we emit an event when the column goes from sorted to unsorted
            if (this.sorted && sort.comparator !== this.sortBy) {
                this._sorted = false;
                this.sortedChange.emit(false);
            }
        });
    }

    /**
     * Subscription to the sort service changes
     */
    private _sortSubscription: Subscription;

    ngOnDestroy() {
        this._sortSubscription.unsubscribe();
    }

    ngAfterViewInit() {
        /*
         * Several bindings in our template and on the host depend on ContentChildren and
         * ViewChildren, so we need to re-trigger change detection once everything is ready.
         *
         * TODO: check if still needed?
         */
        // this._cdr.detectChanges();
        console.log("Column View init");
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

    /**
     * Indicates if the column is currently sorted
     */
    private _sorted = false;
    public get sorted() {
        return this._sorted;
    }

    @Input("clrDgSorted")
    public set sorted(value: boolean) {
        if (!value && this.sorted) {
            this._sorted = false;
            this._sort.clear();
        } else if (value && !this.sorted) {
            this.sort();
        }
    };

    @Output("clrDgSortedChange") public sortedChange = new EventEmitter<boolean>();

    /**
     * Sorts the datagrid based on this column
     */
    public sort() {
        if (!this.sortable) {
            return;
        }
        this._sorted = true;
        this._sort.toggle(this.sortBy);
        this.sortedChange.emit(true);
    }

    /**
     * Indicates if the column is currently sorted in ascending order
     */
    @HostBinding("class.asc")
    public get asc() {
        return this.sorted && !this._sort.reverse;
    }

    /**
     * Indicates if the column is currently sorted in descending order
     */
    @HostBinding("class.desc")
    public get desc() {
        return this.sorted && this._sort.reverse;
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
                this.filter = new StringFilterImpl(new DatagridPropertyStringFilter(field));
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
        console.log("Column, setting value to", newValue);
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