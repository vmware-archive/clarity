/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, TrackByFunction } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';

import { FiltersProvider } from './filters';
import { Items } from './items';

let nbSelection: number = 0;

export enum SelectionType {
  None,
  Single,
  Multi,
}

@Injectable()
export class Selection {
  public id: string;
  private prevSelectionRefs: any[] = []; // Refs of selected items
  private prevSingleSelectionRef: any; // Ref of single selected item

  constructor(private _items: Items, private _filters: FiltersProvider) {
    this.id = 'clr-dg-selection' + nbSelection++;

    this.subscriptions.push(
      this._filters.change.subscribe(() => {
        if (!this._selectable) {
          return;
        }
        this.clearSelection();
      })
    );

    this.subscriptions.push(
      this._items.allChanges.subscribe(updatedItems => {
        switch (this.selectionType) {
          case SelectionType.None: {
            break;
          }

          case SelectionType.Single: {
            let newSingle: any;
            const trackBy: TrackByFunction<any> = this._items.trackBy;
            let selectionUpdated: boolean = false;

            updatedItems.forEach((item, index) => {
              const ref = trackBy(index, item);
              // If one of the updated items is the previously selectedSingle, set it as the new one
              if (this.prevSingleSelectionRef === ref) {
                newSingle = item;
                selectionUpdated = true;
              }
            });

            // Delete the currentSingle if it doesn't exist anymore if we're using smart datagrids
            // where we expect all items to be present.
            // No explicit "delete" is required, since it would still be undefined at this point.
            // Marking it as selectionUpdated will emit the change when the currentSingle is updated below.
            if (this._items.smart && !newSingle) {
              selectionUpdated = true;
            }

            // TODO: Discussed this with Eudes and this is fine for now.
            // But we need to figure out a different pattern for the
            // child triggering the parent change detection problem.
            // Using setTimeout for now to fix this.
            setTimeout(() => {
              if (selectionUpdated) {
                this.currentSingle = newSingle;
              }
            }, 0);
            break;
          }

          case SelectionType.Multi: {
            let leftOver: any[] = this.current.slice();
            const trackBy: TrackByFunction<any> = this._items.trackBy;
            let selectionUpdated: boolean = false;

            updatedItems.forEach((item, index) => {
              const ref = trackBy(index, item);
              // Look in current selected refs array if item is selected, and update actual value
              const selectedIndex = this.prevSelectionRefs.indexOf(ref);
              if (selectedIndex > -1) {
                leftOver[selectedIndex] = item;
                selectionUpdated = true;
              }
            });

            // Filter out any unmatched items if we're using smart datagrids where we expect all items to be
            // present
            if (this._items.smart) {
              leftOver = leftOver.filter(selected => updatedItems.indexOf(selected) > -1);
              if (this.current.length !== leftOver.length) {
                selectionUpdated = true;
              }
            }

            // TODO: Discussed this with Eudes and this is fine for now.
            // But we need to figure out a different pattern for the
            // child triggering the parent change detection problem.
            // Using setTimeout for now to fix this.
            setTimeout(() => {
              if (selectionUpdated) {
                this.current = leftOver;
              }
            }, 0);
            break;
          }

          default: {
            break;
          }
        }
      })
    );
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

  public rowSelectionMode: boolean = false;

  private get _selectable(): boolean {
    return this._selectionType === SelectionType.Multi || this._selectionType === SelectionType.Single;
  }
  /**
   * Ignore items changes in the same change detection cycle.
   */
  private debounce: boolean = false;

  /**
   * Subscriptions to the other providers changes.
   */
  private subscriptions: Subscription[] = [];

  /**
   * Cleans up our subscriptions to other providers
   */
  public destroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
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
    if (this._items.all && this._items.trackBy && value) {
      const lookup = this._items.all.findIndex(maybe => maybe === value);
      this.prevSingleSelectionRef = this._items.trackBy(lookup, value);
    }
    this.emitChange();
    // Ignore items changes in the same change detection cycle.
    // @TODO This can likely be removed!
    this.debounce = true;
    setTimeout(() => (this.debounce = false));
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
    // @TODO This can likely be removed!
    this.debounce = true;
    setTimeout(() => (this.debounce = false));
  }

  /**
   * The Observable that lets other classes subscribe to selection changes
   */
  private _change = new Subject<any[] | any>();
  private emitChange() {
    if (this._selectionType === SelectionType.Single) {
      this._change.next(this.currentSingle);
    } else if (this._selectionType === SelectionType.Multi) {
      this._change.next(this.current);
    }
  }
  // We do not want to expose the Subject itself, but the Observable which is read-only
  public get change(): Observable<any[] | any> {
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
   * Selects an item
   */
  private selectItem(item: any): void {
    this.current.push(item);
    if (this._items.trackBy) {
      // Push selected ref onto array
      const lookup = this._items.all.findIndex(maybe => maybe === item);
      this.prevSelectionRefs.push(this._items.trackBy(lookup, item));
    }
  }

  /**
   * Deselects an item
   */
  private deselectItem(indexOfItem: number): void {
    this.current.splice(indexOfItem, 1);
    if (this._items.trackBy && indexOfItem < this.prevSelectionRefs.length) {
      // Keep selected refs array in sync
      this.prevSelectionRefs.splice(indexOfItem, 1);
    }
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
          this.deselectItem(index);
          this.emitChange();
        } else if (index < 0 && selected) {
          this.selectItem(item);
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
    if (this._selectionType !== SelectionType.Multi || !this._items.displayed) {
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
         * If every currently displayed item is already selected, we clear them.
         * If at least one item isn't selected, we select every currently displayed item.
         */
    if (this.isAllSelected()) {
      this._items.displayed.forEach(item => {
        const currentIndex = this.current.indexOf(item);
        if (currentIndex > -1) {
          this.deselectItem(currentIndex);
        }
      });
    } else {
      this._items.displayed.forEach(item => {
        if (this.current.indexOf(item) < 0) {
          this.selectItem(item);
        }
      });
    }
    this.emitChange();
  }
}
