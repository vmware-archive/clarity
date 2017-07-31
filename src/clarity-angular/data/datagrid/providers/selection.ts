/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable, TrackByFn} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {Subscription} from "rxjs/Subscription";

import {FiltersProvider} from "./filters";
import {Items} from "./items";

let nbSelection: number = 0;

export enum SelectionType {
    None,
    Single,
    Multi
}

@Injectable()
export class Selection {
    public id: string;

    constructor(private _items: Items, private _filters: FiltersProvider) {
        this.id = "clr-dg-selection" + (nbSelection++);

        this._filtersSub = this._filters.change.subscribe(() => {
            if (!this._selectable) {
                return;
            }
            this.clearSelection();
        });

        this._itemsSub = this._items.allChanges.subscribe((updatedItems) => {
            if (!this._selectable) {
                return;
            }
            let leftOver: any[];
            if (this._items.trackBy) {
                const trackBy: TrackByFn = this._items.trackBy;
                const updatedTracked: any[] = updatedItems.map((item, index) => trackBy(index, item));
                leftOver = this.current.filter((selected, index) => {
                    return updatedTracked.indexOf(trackBy(index, selected)) > -1;
                });
            } else {
                leftOver = this.current.filter(selected => updatedItems.indexOf(selected) > -1);
            }
            if (this.current.length !== leftOver.length) {
                // TODO: Discussed this with Eudes and this is fine for now.
                // But we need to figure out a different pattern for the
                // child triggering the parent change detection problem.
                // Using setTimeout for now to fix this.
                setTimeout(() => {
                    this.current = leftOver;
                }, 0);
            }
        });
    }

    public clearSelection(): void {
        this.current.length = 0;
        this.emitChange();
    }

    private _selectionType: SelectionType = SelectionType.None;
    public get selectionType(): SelectionType {
        return this._selectionType;
    }
    public set selectionType(value: SelectionType) {
        if (value === this.selectionType) {
            return;
        }
        this._selectionType = value;
        if (value === SelectionType.None) {
            delete this.current;
        } else {
            this.current = [];
        }
    }
    private get _selectable(): boolean {
        return (this._selectionType === SelectionType.Multi) || (this._selectionType === SelectionType.Single);
    }
    /**
     * Ignore items changes in the same change detection cycle.
     */
    private debounce: boolean = false;

    /**
     * Subscriptions to the other providers changes.
     */
    private _itemsSub: Subscription;
    private _filtersSub: Subscription;


    /**
     * Cleans up our subscriptions to other providers
     */
    public destroy() {
        this._itemsSub.unsubscribe();
        this._filtersSub.unsubscribe();
    }

    /**
     * The current selection in single selection type
     */
    private _currentSingle: any;
    public get currentSingle(): any {
        return this._currentSingle;
    }
    public set currentSingle(value: any) {
        if (value === this._currentSingle) {
            return;
        }
        this._currentSingle = value;
        this.emitChange();
        // Ignore items changes in the same change detection cycle.
        this.debounce = true;
        setTimeout(() => this.debounce = false);
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
    private _change = new Subject<any[]|any>();
    private emitChange() {
        if (this._selectionType === SelectionType.Single) {
            this._change.next(this.currentSingle);
        } else if (this._selectionType === SelectionType.Multi) {
            this._change.next(this.current);
        }
    }
    // We do not want to expose the Subject itself, but the Observable which is read-only
    public get change(): Observable<any[]|any> {
        return this._change.asObservable();
    }

    /**
     * Checks if an item is currently selected
     */
    public isSelected(item: any): boolean {
        if (this._selectionType === SelectionType.Single) {
            return this.currentSingle === item;
        } else if (this._selectionType === SelectionType.Multi) {
            return this.current.indexOf(item) >= 0;
        }
        return false;
    }

    /**
     * Selects or deselects an item
     */
    public setSelected(item: any, selected: boolean) {
        switch (this._selectionType) {
            case SelectionType.None:
                break;
            case SelectionType.Single:
                // in single selection, set currentSingle method should be used
                break;
            case SelectionType.Multi:
                const index = this.current.indexOf(item);
                if (index >= 0 && !selected) {
                    this.current.splice(index, 1);
                    this.emitChange();
                } else if (index < 0 && selected) {
                    this.current.push(item);
                    this.emitChange();
                }
                break;
            default:
                break;
        }
    }

    /**
     * Checks if all currently displayed items are selected
     */
    public isAllSelected(): boolean {
        if ((this._selectionType !== SelectionType.Multi) || !this._items.displayed) {
            return false;
        }
        const displayedItems: any[] = this._items.displayed;
        const nbDisplayed = this._items.displayed.length;
        if (nbDisplayed < 1) {
            return false;
        }
        const temp: any[] = displayedItems.filter(item => this.current.indexOf(item) > -1);
        return temp.length === displayedItems.length;
    }

    /**
     * Selects or deselects all currently displayed items
     */
    public toggleAll() {
        if (this._selectionType === SelectionType.None || this._selectionType === SelectionType.Single) {
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