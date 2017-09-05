/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {AfterContentInit, ContentChildren, Directive, OnDestroy, QueryList} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {DatagridCellRenderer} from "./cell-renderer";
import {DatagridRenderOrganizer} from "./render-organizer";

@Directive({selector: "clr-dg-row, clr-dg-row-detail"})
export class DatagridRowRenderer implements AfterContentInit, OnDestroy {
    constructor(private organizer: DatagridRenderOrganizer) {
        this.subscription = organizer.alignColumns.subscribe(() => this.setWidths());
    }

    private subscription: Subscription;
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    @ContentChildren(DatagridCellRenderer) cells: QueryList<DatagridCellRenderer>;

    private setWidths() {
        if (this.organizer.widths.length !== this.cells.length) {
            return;
        }
        this.cells.forEach((cell, index) => {
            const width = this.organizer.widths[index];
            cell.setWidth(width.strict, width.px);
        });
    }

    ngAfterContentInit() {
        this.cells.changes.subscribe(() => {
            this.setWidths();
        });
    }

    ngAfterViewInit() {
        this.setWidths();
    }
}
