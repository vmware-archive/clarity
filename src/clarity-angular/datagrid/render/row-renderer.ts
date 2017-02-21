/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ContentChildren, QueryList, OnDestroy, AfterViewInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {DatagridRenderOrganizer} from "./render-organizer";
import {DatagridCellRenderer} from "./cell-renderer";

@Directive({
    selector: "clr-dg-row"
})
export class DatagridRowRenderer implements OnDestroy, AfterViewInit {

    constructor(private organizer: DatagridRenderOrganizer) {
        this.subscription = organizer.alignColumns.subscribe(() => this.setWidths());
    }

    private subscription: Subscription;
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    @ContentChildren(DatagridCellRenderer) cells: QueryList<DatagridCellRenderer>;

    private setWidths() {
        if (this.organizer.widths.length === 0) {
            return;
        }
        this.cells.forEach((cell, index) => {
            let width = this.organizer.widths[index];
            cell.setWidth(width.strict, width.px);
        });
    }

    /*
     * Are directives even allowed to do that?
     * It works because it's always attached on the same element as a component since they share the same selector,
     * but it feels like cheating.
     */
    ngAfterViewInit() {
        this.setWidths();
    }
}