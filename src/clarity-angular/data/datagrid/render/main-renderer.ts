/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    AfterContentInit,
    AfterViewChecked,
    ContentChildren,
    Directive,
    ElementRef,
    OnDestroy,
    QueryList,
    Renderer2
} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {Items} from "../providers/items";
import {Page} from "../providers/page";

import {DomAdapter} from "./dom-adapter";
import {DatagridHeaderRenderer} from "./header-renderer";
import {DatagridRenderOrganizer} from "./render-organizer";

@Directive({selector: "clr-datagrid", providers: [DomAdapter]})
export class DatagridMainRenderer implements AfterContentInit, AfterViewChecked, OnDestroy {
    constructor(private organizer: DatagridRenderOrganizer, private items: Items, private page: Page,
                private domAdapter: DomAdapter, private el: ElementRef, private renderer: Renderer2) {
        this._subscriptions.push(organizer.computeWidths.subscribe(() => this.computeHeadersWidth()));
        this._subscriptions.push(this.page.sizeChange.subscribe(() => {
            if (this._heightSet) {
                this.resetDatagridHeight();
            }
        }));
        this._subscriptions.push(this.items.change.subscribe(() => this.shouldStabilizeColumns = true));
    }

    @ContentChildren(DatagridHeaderRenderer) public headers: QueryList<DatagridHeaderRenderer>;

    ngAfterContentInit() {
        this._subscriptions.push(this.headers.changes.subscribe(() => {
            // TODO: only re-stabilize if a column was added or removed. Reordering is fine.
            this.columnsSizesStable = false;
            this.stabilizeColumns();
        }));
    }

    ngAfterViewChecked() {
        if (this.shouldStabilizeColumns) {
            this.stabilizeColumns();
        }
        if (this.shouldComputeHeight()) {
            setTimeout(() => {
                this.computeDatagridHeight();
            });
        }
    }

    private _heightSet: boolean = false;

    private shouldComputeHeight(): boolean {
        if (!this._heightSet && this.page.size > 0) {
            if (this.items.displayed.length === this.page.size) {
                return true;
            }
        }
        return false;
    }

    /**
     * Computes the height of the datagrid.
     *
     * NOTE: We had to choose to set the height instead of the min-height because
     * IE 11 requires the height on the parent for the children flex grow/shrink properties to work.
     * When we used min-height, 1 1 auto doesn't used to work in IE11 :-(
     * But this doesn't affect the fix. It works in both fixed & variable height datagrids.
     *
     * Refer: http://stackoverflow.com/questions/24396205/flex-grow-not-working-in-internet-explorer-11-0
     */
    private computeDatagridHeight() {
        const value: number = this.domAdapter.computedHeight(this.el.nativeElement);
        this.renderer.setStyle(this.el.nativeElement, "height", value + "px");
        this._heightSet = true;
    }

    private resetDatagridHeight() {
        this.renderer.setStyle(this.el.nativeElement, "height", "");
        this._heightSet = false;
    }

    private _subscriptions: Subscription[] = [];

    ngOnDestroy() {
        this._subscriptions.forEach(sub => sub.unsubscribe());
    }

    /**
     * Makes each header compute its width.
     */
    private computeHeadersWidth() {
        const nbColumns: number = this.headers.length;
        let allStrict = true;

        this.headers.forEach((header, index) => {

            // On the last header column check whether all columns have strict widths.
            // If all columns have strict widths, remove the strict width from the last column and make it the column's
            // minimum width so that when all previous columns shrink, it will get a flexible width and cover the empty
            // gap in the Datagrid.

            if (!header.strictWidth) {
                allStrict = false;
            }

            if (nbColumns === index + 1 && allStrict) {
                header.strictWidth = 0;
            }

            const width = header.computeWidth();
            this.organizer.widths[index] = {px: width, strict: !!header.strictWidth};
        });
    }

    /**
     * Indicates if we want to re-compute columns width. This should only happen:
     * 1) When headers change, with columns being added or removed
     * 2) When rows are lazily loaded for the first time
     */
    private columnsSizesStable = false;

    private shouldStabilizeColumns = true;

    /**
     * Triggers a whole re-rendring cycle to set column sizes, if needed.
     */
    private stabilizeColumns() {
        this.shouldStabilizeColumns = false;
        if (this.columnsSizesStable) {
            // change in items might have introduced/taken away the scrollbar
            this.organizer.scrollbar.next();
            return;
        }
        // No point resizing if there are no rows, we wait until they are actually loaded.
        if (this.items.displayed.length > 0) {
            this.organizer.resize();
            this.columnsSizesStable = true;
        }
    }
}
