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
import {Items} from "./items";

let nbSelection: number = 0;

export enum SelectionType {
    None,
    Single,
    Multi
}

interface Reference {
    reference: any;
    original: any;
}

@Injectable()
export class Selection {
    public id: string;
    private allReferences: Reference[] = [];

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
                this.allReferences = [];
                const trackBy: TrackByFunction<Function> = this._items.trackBy;
                const updatedTracked: any[] = updatedItems.map((item, index) => {
                    const ref = trackBy(index, item);
                    // Push instance of every computed reference into list for later checking
                    this.allReferences.push({reference: ref, original: item});
                    return ref;
                });
                // When all the items change, we need to rebuild the list based on trackBy references
                leftOver = updatedItems.filter((item, index) => {
                    return this.current.indexOf(trackBy(index, item)) > -1;
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
    public isSelected(item: any, rowIndex?: number): boolean {
        // Check if we are running with ngFor
        if (!this.allReferences.length) {
            const trackBy = this._items.trackBy;
            if (this._selectionType === SelectionType.Single) {
                // We use the rowIndex for trackBy as provided by the grid, but this won't really work in reality.
                // Since each row is destroyed and recreated with pagination, the index will not reflect the true
                // index of the item in the list (because it is not known to the grid in anyway), so this is
                // broken but broken in a way that tries to use the closest approximation of index.
                return (this.currentSingle) ? trackBy(rowIndex, this.currentSingle) === trackBy(rowIndex, item) : false;
            } else if (this._selectionType === SelectionType.Multi) {
                return this.current.findIndex((selected: any) => {
                    // Same as the comment above with rowIndex
                    return trackBy(rowIndex, selected) === trackBy(rowIndex, item);
                }) >= 0;
            }
            return false;
        }

        // Have to lookup against the precalculated
        const index = this.allReferences.findIndex((refItem: Reference) => {
            return refItem.original === item;
        });
        if (this._selectionType === SelectionType.Single && this.allReferences[index]) {
            return (this.currentSingle) ? this.currentSingle === this.allReferences[index].original : false;
        } else if (this._selectionType === SelectionType.Multi && this.allReferences[index]) {
            return this.current.indexOf(this.allReferences[index].reference) >= 0;
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
                let index;
                let ref = item;
                // check if we have clrDgItems in use
                if (this.allReferences.length) {
                    let refIndex;
                    // look up actual item against all items
                    refIndex = this.allReferences.findIndex((refItem: Reference) => {
                        return refItem.original === item;
                    });

                    // For some odd reason, if we couldn't find the ref, break for sanity
                    if (refIndex < 0) {
                        break;
                    }

                    // Set reference value to the trackby calculation when
                    ref = this.allReferences[refIndex].reference;
                    index = this.current.indexOf(ref);
                } else {
                    // we are using ngFor, so just use index of item
                    index = this.current.indexOf(item);
                }

                if (index >= 0 && !selected) {
                    // already selected, unselect it
                    this.current.splice(index, 1);
                    this.emitChange();
                } else if (index < 0 && selected) {
                    // not selected, add it to list
                    this.current.push(ref);
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
