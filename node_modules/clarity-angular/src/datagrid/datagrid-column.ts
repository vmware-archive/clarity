/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {AfterViewInit, ChangeDetectorRef, Component, ContentChild, HostBinding, Input} from "@angular/core";

import {DatagridPropertyComparator} from "./built-in/comparators/datagrid-property-comparator";
import {DatagridPropertyStringFilter} from "./built-in/filters/datagrid-property-string-filter";
import {Comparator} from "./interfaces/comparator";
import {StringFilter} from "./interfaces/string-filter";
import {CustomFilter} from "./providers/custom-filter";
import {Sort} from "./providers/sort";

@Component({
    selector: "clr-dg-column",
    template: `
        <!-- I'm really not happy with that select since it's not very scalable -->
        <div class="datagrid-column-flex">
            <ng-content select="clr-dg-filter, clr-dg-string-filter"></ng-content>

            <clr-dg-string-filter
                *ngIf="field && !customFilter"
                [clrDgStringFilter]="defaultFieldFilter"
            ></clr-dg-string-filter>

            <button class="datagrid-column-title" [disabled]="!sortable" (click)="sort()">
                <ng-content></ng-content>
            </button>
        </div>
    `,
    host: {
        "[class.datagrid-column]": "true"
    }
})
export class DatagridColumn implements AfterViewInit {
    constructor(private _sort: Sort, private _cdr: ChangeDetectorRef) {}

    ngAfterViewInit() {
        /*
         * Several bindings in our template and on the host depend on ContentChildren and
         * ViewChildren, so we need to re-trigger change detection once everything is ready.
         */
        this._cdr.detectChanges();
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
     * Sorts the datagrid based on this column
     */
    public sort() {
        if (!this.sortable) {
            return;
        }
        this._sort.toggle(this.sortBy);
    }

    /**
     * Indicates if the column is currently sorted
     */
    public get sorted() {
        return this.sortable && this.sortBy && this._sort.comparator === this.sortBy;
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
    private customFilter = false;
    @ContentChild(CustomFilter)
    public set projectedFilter(custom: any) {
        if (custom) {
            this.customFilter = true;
        }
    }

    /**
     * Default property filter when using the object property shortcut
     */
    private defaultFieldFilter: StringFilter<any>;

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
            this.defaultFieldFilter = new DatagridPropertyStringFilter(field);
            if (!this.sortBy) {
                this.sortBy = new DatagridPropertyComparator(field);
            }
        }
    }
}