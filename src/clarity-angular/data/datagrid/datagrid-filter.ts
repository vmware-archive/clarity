/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, EventEmitter, Input, Output} from "@angular/core";

import {Point, PopoverOptions} from "../../popover/common/popover";

import {Filter} from "./interfaces/filter";
import {CustomFilter} from "./providers/custom-filter";
import {FiltersProvider, RegisteredFilter} from "./providers/filters";
import {DatagridFilterRegistrar} from "./utils/datagrid-filter-registrar";


/**
 * Custom filter that can be added in any column to override the default object property string filter.
 * The reason this is not just an input on DatagridColumn is because we need the filter's template to be projected,
 * since it can be anything (not just a text input).
 */
@Component({
    selector: "clr-dg-filter",
    // We register this component as a CustomFilter, for the parent column to detect it.
    providers: [{provide: CustomFilter, useExisting: DatagridFilter}],
    template: `
        <button #anchor class="datagrid-filter-toggle" (click)="toggle()"
            [class.datagrid-filter-open]="open" [class.datagrid-filtered]="active"
            type="button"></button>

        <ng-template [(clrPopoverOld)]="open" [clrPopoverOldAnchor]="anchor" [clrPopoverOldAnchorPoint]="anchorPoint"
             [clrPopoverOldPopoverPoint]="popoverPoint" [clrPopoverOldOptions]="popoverOptions">
            <div class="datagrid-filter">
                <!-- FIXME: this whole filter part needs a final design before we can try to have a cleaner DOM -->
                <div class="datagrid-filter-close-wrapper">
                    <button type="button" class="close" 
                        aria-label="Close" (click)="open = false"
                        type="button">
                        <clr-icon aria-hidden="true" shape="close"></clr-icon>
                    </button>
                </div>
    
                <ng-content></ng-content>
            </div>
        </ng-template>
    `
})
export class DatagridFilter extends DatagridFilterRegistrar<Filter<any>> implements CustomFilter {
    constructor(_filters: FiltersProvider) {
        super(_filters);
    }

    public anchorPoint: Point = Point.RIGHT_BOTTOM;
    public popoverPoint: Point = Point.RIGHT_TOP;
    public popoverOptions: PopoverOptions = {allowMultipleOpen: true};
    /**
     * Tracks whether the filter dropdown is open or not
     */
    private _open = false;
    public get open() {
        return this._open;
    }

    @Input("clrDgFilterOpen")
    public set open(open: boolean) {
        const boolOpen = !!open;
        if (boolOpen !== this._open) {
            this._open = boolOpen;
            this.openChanged.emit(boolOpen);
        }
    }

    @Output("clrDgFilterOpenChange") public openChanged = new EventEmitter<boolean>(false);


    @Input("clrDgFilter")
    public set customFilter(filter: Filter<any>|RegisteredFilter<Filter<any>>) {
        this.setFilter(filter);
    }

    /**
     * Indicates if the filter is currently active
     */
    public get active() {
        return !!this.filter && this.filter.isActive();
    }

    /**
     * Shows/hides the filter dropdown
     */
    public toggle() {
        this.open = !this.open;
    }
}
