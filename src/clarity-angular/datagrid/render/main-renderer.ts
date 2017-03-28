/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, ContentChildren, QueryList, AfterContentInit, AfterViewInit, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {DomAdapter} from "./dom-adapter";
import {DatagridRenderOrganizer} from "./render-organizer";
import {DatagridHeaderRenderer} from "./header-renderer";
import {DatagridRowRenderer} from "./row-renderer";

@Directive({
    selector: "clr-datagrid",
    providers: [DomAdapter]
})
export class DatagridMainRenderer implements AfterContentInit, AfterViewInit, OnDestroy {

    constructor(private organizer: DatagridRenderOrganizer) {
        this._subscriptions.push(organizer.computeWidths.subscribe(() => this.computeHeadersWidth()));
    }

    @ContentChildren(DatagridHeaderRenderer) public headers: QueryList<DatagridHeaderRenderer>;
    @ContentChildren(DatagridRowRenderer) public rows: QueryList<DatagridRowRenderer>;

    /*
     * Are directives even allowed to do that?
     * It works because it's always attached on the same element as a component since they share the same selector,
     * but it feels like cheating.
     */
    ngAfterContentInit() {
        this._subscriptions.push(this.headers.changes.subscribe(() => {
            // TODO: only re-stabilize if a column was added or removed. Reordering is fine.
            this.columnsSizesStable = false;
            this.stabilizeColumns();
        }));

        this._subscriptions.push(this.rows.changes.subscribe(() => {
            this.stabilizeColumns();
        }));
    }

    ngAfterViewInit() {
        this.stabilizeColumns();
    }

    private _subscriptions: Subscription[] = [];
    ngOnDestroy() {
        this._subscriptions.forEach(sub => sub.unsubscribe());
    }

    /**
     * Makes each header compute its width.
     */
    private computeHeadersWidth() {
        this.headers.forEach((header, index) => {
            let width = header.computeWidth();
            this.organizer.widths[index] = {px: width, strict: !!header.strictWidth};
        });
    }

    /**
     * Indicates if we want to re-compute columns width. This should only happen:
     * 1) When headers change, with columns being added or removed
     * 2) When rows are lazily loaded for the first time
     */
    private columnsSizesStable = false;

    /**
     * Triggers a whole re-rendring cycle to set column sizes, if needed.
     */
    private stabilizeColumns() {
        if (this.columnsSizesStable) { return; }
        // No point resizing if there are no rows, we wait until they are actually loaded.
        if (this.rows.length > 0) {
            this.organizer.resize();
            this.columnsSizesStable = true;
        }
    }
}