/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {Items} from "./providers/items";
import {Page} from "./providers/page";

@Component({
    selector: "clr-dg-placeholder",
    template: `
        <!--
            I hate doing this, with these 36px being baselineRem(1.5) hardcoded here,
            but I don't see a better solution right now.
        -->
        <div class="datagrid-placeholder" [style.min-height]="(36*nbEmptyRows)+'px'"
            *ngIf="nbEmptyRows > 0" [class.datagrid-empty]="emptyDatagrid">
            <div class="datagrid-placeholder-image" *ngIf="emptyDatagrid"></div>
            <ng-content *ngIf="emptyDatagrid"></ng-content>
        </div>
    `,
    styles: [`:host { display: block; }`]
})
export class DatagridPlaceholder {
    constructor(private items: Items, private page: Page) {}

    /**
     * Tests if the datagrid is empty, meaning it doesn't contain any items
     */
    public get emptyDatagrid() {
        return !this.items.loading && (!this.items.displayed || this.items.displayed.length === 0);
    }

    /**
     * Number of empty rows to display to ensure we preserve a fixed height on the datagrid,
     * even if the last page has less items than the previous ones
     */
    get nbEmptyRows() {
        let rowsDisplayed = 0;
        if (this.items.displayed) {
            rowsDisplayed = this.items.displayed.length;
        }
        // Always leave space for at least 2 rows even if the datagrid isn't paginated
        return Math.max(this.page.size, 2) - rowsDisplayed;
    }
}