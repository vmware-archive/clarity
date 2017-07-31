/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable, TrackByFunction} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {Subscription} from "rxjs/Subscription";

import {FiltersProvider} from "./filters";
import {Page} from "./page";
import {Sort} from "./sort";

@Injectable()
export class Items {
    constructor(private _filters: FiltersProvider, private _sort: Sort, private _page: Page) {}

    /**
     * Indicates if the data is currently loading
     */
    public loading = false;

    // TODO: Verify that trackBy is registered for the *ngFor case too
    /**
     * Tracking function to identify objects. Default is reference equality.
     */
    public trackBy: TrackByFunction<any> = (index: number, item: any) => item;

    /**
     * Subscriptions to the other providers changes.
     */
    private _filtersSub: Subscription;
    private _sortSub: Subscription;
    private _pageSub: Subscription;
    /**
     * Cleans up our subscriptions to other providers
     */
    public destroy() {
        if (this._filtersSub) {
            this._filtersSub.unsubscribe();
        }
        if (this._sortSub) {
            this._sortSub.unsubscribe();
        }
        if (this._pageSub) {
            this._pageSub.unsubscribe();
        }
    }

    /**
     * Whether we should use smart items for this datagrid or let the user handle
     * everything.
     */
    private _smart = false;
    public get smart(): boolean {
        return this._smart;
    }
    public smartenUp() {
        this._smart = true;
        /*
         * These observers trigger a chain of function: filter -> sort -> paginate
         * An observer up the chain re-triggers all the operations that follow it.
         */
        this._filtersSub = this._filters.change.subscribe(() => this._filterItems());
        this._sortSub = this._sort.change.subscribe(() => {
            // Special case, if the datagrid went from sorted to unsorted, we have to re-filter
            // to get the original order back
            if (!this._sort.comparator) {
                this._filterItems();
            } else {
                this._sortItems();
            }
        });
        this._pageSub = this._page.change.subscribe(() => this._changePage());
    }

    /**
     * List of all items in the datagrid
     */
    private _all: any[];
    public set all(items: any[]) {
        if (this.smart) {
            this._all = items;
            this.emitAllChanges();
            this._filterItems();
        } else {
            this._displayed = items;
            this.emitChange();
        }
    }

    /**
     * Manually recompute the list of displayed items
     */
    public refresh() {
        if (this.smart) {
            this._filterItems();
        }
    }

    /**
     * Internal temporary step, which we preserve to avoid re-filtering or re-sorting if not necessary
     */
    private _filtered: any[];

    /**
     * List of items currently displayed
     */
    private _displayed: any[] = [];
    public get displayed(): any[] {
        // Ideally we could return an immutable array, but we don't have it in Clarity yet.
        return this._displayed;
    }

    /**
     * The Observable that lets other classes subscribe to items changes
     */
    private _change = new Subject<any[]>();
    private emitChange() {
        this._change.next(this.displayed);
    }
    // We do not want to expose the Subject itself, but the Observable which is read-only
    public get change(): Observable<any[]> {
        return this._change.asObservable();
    }

    private _allChanges = new Subject<any[]>();
    private emitAllChanges(): void {
        if (this.smart) {
            this._allChanges.next(this._all);
        }
    }

    public get allChanges(): Observable<any[]> {
        return this._allChanges.asObservable();
    }

    /**
     * Checks if we don't have data to process yet, to abort early operations
     */
    private get uninitialized() {
        return !this._all;
    }

    /**
     * FiltersProvider items from the raw list
     */
    private _filterItems() {
        if (this.uninitialized) {
            return;
        }
        if (this._filters.hasActiveFilters()) {
            this._filtered = this._all.filter((item) => this._filters.accepts(item));
        } else {
            // Work on a shallow copy of the array, to not modify the user's model
            this._filtered = this._all.slice();
        }
        this._page.totalItems = this._filtered.length;
        this._sortItems();
    }

    /**
     * Sorts items in the filtered list
     */
    private _sortItems() {
        if (this.uninitialized) {
            return;
        }
        if (this._sort.comparator) {
            this._filtered.sort((a, b) => this._sort.compare(a, b));
        }
        this._changePage();
    }

    /**
     * Extracts the current page from the sorted list
     */
    private _changePage() {
        if (this.uninitialized) {
            return;
        }
        if (this._page.size > 0) {
            this._displayed = this._filtered.slice(this._page.firstItem, this._page.lastItem + 1);
        } else {
            this._displayed = this._filtered;
        }
        this.emitChange();
    }
}