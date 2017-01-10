/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable} from "@angular/core";
import {Subject, Observable, Subscription} from "rxjs";

import {Items} from "./items";

@Injectable()
export class Selection {
    constructor(private _items: Items) {
        this._itemsSub = _items.change.subscribe(() => {
            if (!this._selectable || this.debounce) {
                return;
            }
            /* TODO */
            this.current.length = 0;
            this.emitChange();
        });
    }

    /**
     * Ignore items changes in the same change detection cycle.
     */
    private debounce = false;

    /**
     * Subscriptions to the other providers changes.
     */
    private _itemsSub: Subscription;
    /**
     * Cleans up our subscriptions to other providers
     */
    public destroy() {
        this._itemsSub.unsubscribe();
    }

    /**
     * Indicates if the datagrid's rows are selectable
     */
    private _selectable = false;
    public get selectable(): boolean {
        return this._selectable;
    }
    public set selectable(value: boolean) {
        this._selectable = value;
        if (!value) {
            delete this.current;
        } else if (!this.current) {
            this.current = [];
        }
    }

    /**
     * The current selection
     */
    private _current: any[];
    public get current(): any[] {
        return this._current;
    }
    public set current(value: any[]) {
        this._current = value;
        this.emitChange();
        // Ignore items changes in the same change detection cycle.
        this.debounce = true;
        setTimeout(() => this.debounce = false);
    }

    /**
     * The Observable that lets other classes subscribe to selection changes
     */
    private _change = new Subject<any[]>();
    private emitChange() {
        this._change.next(this.current);
    }
    // We do not want to expose the Subject itself, but the Observable which is read-only
    public get change(): Observable<any[]> {
        return this._change.asObservable();
    };

    /**
     * Checks if an item is currently selected
     */
    public isSelected(item: any): boolean {
        return this._selectable && this.current.indexOf(item) >= 0;
    }

    /**
     * Selects or deselects an item
     */
    public setSelected(item: any, selected: boolean) {
        if (!this._selectable) {
            return;
        }
        let index = this.current.indexOf(item);
        if (index >= 0 && !selected) {
            this.current.splice(index, 1);
            this.emitChange();
        } else if (index < 0 && selected) {
            this.current.push(item);
            this.emitChange();
        }
    }

    /**
     * Checks if all currently displayed items are selected
     */
    public isAllSelected(): boolean {
        if (!this._selectable || !this._items.displayed) {
            return false;
        }
        let nbDisplayed = this._items.displayed.length;
        return nbDisplayed > 0 && this.current.length === nbDisplayed;
    }

    /**
     * Selects or deselects all currently displayed items
     */
    public toggleAll() {
        if (!this._selectable) {
            return;
        }
        /*
         * If everything is already selected, we clear.
         * If at least one row isn't selected, we select everything.
         */
        if (this.isAllSelected()) {
            this.current.length = 0;
        } else {
            this._items.displayed.forEach(item => {
                if (this.current.indexOf(item) < 0) {
                    this.current.push(item);
                }
            });
        }
        this.emitChange();
    }
}