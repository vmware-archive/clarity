/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, TrackByFunction } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

import { FiltersProvider } from './filters';
import { Items } from './items';
import { SelectionType } from '../enums/selection-type';

let nbSelection = 0;

@Injectable()
export class Selection<T = any> {
  public id: string;
  public preserveSelection = false;
  private prevSelectionRefs: T[] = []; // Refs of selected items
  private prevSingleSelectionRef: T; // Ref of single selected item
  private lockedRefs: T[] = []; // Ref of locked items

  constructor(private _items: Items<T>, private _filters: FiltersProvider<T>) {
    this.id = 'clr-dg-selection' + nbSelection++;

    this.subscriptions.push(
      this._filters.change.subscribe(() => {
        if (!this._selectable || this.preserveSelection) {
          return;
        }
        this.clearSelection();
      })
    );

    this.subscriptions.push(
      this._items.allChanges.subscribe(updatedItems => {
        // Reset the lockedRefs;
        const updateLockedRef: T[] = [];

        switch (this.selectionType) {
          case SelectionType.None: {
            break;
          }

          case SelectionType.Single: {
            let newSingle: any;
            const trackBy: TrackByFunction<T> = this._items.trackBy;
            let selectionUpdated = false;

            // if the currentSingle has been set before data was loaded, we look up and save the ref from current data set
            if (this.currentSingle && !this.prevSingleSelectionRef) {
              if (this._items.all && this._items.trackBy) {
                const lookup = this._items.all.findIndex(maybe => maybe === this.currentSingle);
                this.prevSingleSelectionRef = this._items.trackBy(lookup, this.currentSingle);
              }
            }

            updatedItems.forEach((item, index) => {
              const ref = trackBy(index, item);
              // If one of the updated items is the previously selectedSingle, set it as the new one
              if (this.prevSingleSelectionRef === ref) {
                newSingle = item;
                selectionUpdated = true;
              }
              if (this.lockedRefs.indexOf(ref) > -1) {
                updateLockedRef.push(ref);
              }
            });

            // If we're using smart datagrids, we expect all items to be present in the updatedItems array.
            // Therefore, we should delete the currentSingle if it used to be defined but doesn't exist anymore.
            // No explicit "delete" is required, since newSingle would be undefined at this point.
            // Marking it as selectionUpdated here will set currentSingle to undefined below in the setTimeout.
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
            let selectionUpdated = false;

            // if the current has been set before data was loaded, we look up and save the ref from current data set
            if (this.current.length > 0 && this.prevSelectionRefs.length !== this.current.length) {
              if (this._items.all && this._items.trackBy) {
                this.prevSelectionRefs = [];
                this.current.forEach(item => {
                  const lookup = this._items.all.findIndex(maybe => maybe === item);
                  this.prevSelectionRefs.push(this._items.trackBy(lookup, item));
                });
              }
            }

            // Duplicate loop, when the issue is issue#2342 is revisited keep in mind that
            // we need to go over every updated item and check to see if there are valid to be
            // locked or not and update it. When only add items that are found in the lockedRefs back.
            //
            // The both loops below that goes over updatedItems could be combined into one.
            updatedItems.forEach((item, index) => {
              const ref = trackBy(index, item);
              if (this.lockedRefs.indexOf(ref) > -1) {
                updateLockedRef.push(ref);
              }
            });

            // TODO: revisit this when we work on https://github.com/vmware/clarity/issues/2342
            // currently, the selection is cleared when filter is applied, so the logic inside
            // the if statement below results in broken behavior.
            if (leftOver.length > 0) {
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
            }
            break;
          }

          default: {
            break;
          }
        }
        // Sync locked items
        this.lockedRefs = updateLockedRef;
      })
    );
  }

  public clearSelection(): void {
    this.current.length = 0;
    this.prevSelectionRefs = [];
    this._currentSingle = null;
    this.prevSingleSelectionRef = null;
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
      this.updateCurrent([], false);
    }
  }

  /** @deprecated since 2.0, remove in 3.0 */
  public rowSelectionMode = false;

  private get _selectable(): boolean {
    return this._selectionType === SelectionType.Multi || this._selectionType === SelectionType.Single;
  }

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
  private _currentSingle: T;
  public get currentSingle(): T {
    return this._currentSingle;
  }
  public set currentSingle(value: T) {
    if (value === this._currentSingle) {
      return;
    }

    this._currentSingle = value;
    if (this._items.all && this._items.trackBy && value) {
      const lookup = this._items.all.findIndex(maybe => maybe === value);
      this.prevSingleSelectionRef = this._items.trackBy(lookup, value);
    }
    this.emitChange();
  }

  /**
   * The current selection
   */
  private _current: T[];
  public get current(): T[] {
    return this._current;
  }
  public set current(value: T[]) {
    this.updateCurrent(value, true);
  }

  public updateCurrent(value: T[], emit: boolean) {
    this._current = value;
    if (emit) {
      this.emitChange();
    }
  }

  /**
   * The Observable that lets other classes subscribe to selection changes
   */
  private _change = new Subject<T[] | T>();
  private emitChange() {
    if (this._selectionType === SelectionType.Single) {
      this._change.next(this.currentSingle);
    } else if (this._selectionType === SelectionType.Multi) {
      this._change.next(this.current);
    }
  }
  // We do not want to expose the Subject itself, but the Observable which is read-only
  public get change(): Observable<T[] | T> {
    return this._change.asObservable();
  }

  /**
   * Checks if an item is currently selected
   */
  public isSelected(item: T): boolean {
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
  private selectItem(item: T): void {
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
      const removedItems = this.prevSelectionRefs.splice(indexOfItem, 1);
      // locked reference is no longer needed (if any)
      this.lockedRefs = this.lockedRefs.filter(locked => locked !== removedItems[0]);
    }
  }

  /**
   * Selects or deselects an item
   */
  public setSelected(item: T, selected: boolean) {
    const index = this.current ? this.current.indexOf(item) : -1;

    switch (this._selectionType) {
      case SelectionType.None:
        break;
      case SelectionType.Single:
        // in single selection, set currentSingle method should be used
        break;
      case SelectionType.Multi:
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
    // make sure to exclude the locked items from the list when counting
    const displayedItems: T[] = this._items.displayed.filter(item => {
      return this.isLocked(item) === false;
    });

    const nbDisplayed = displayedItems.length;
    if (nbDisplayed < 1) {
      return false;
    }
    const temp: T[] = displayedItems.filter(item => this.current.indexOf(item) > -1);
    return temp.length === displayedItems.length;
  }

  private canItBeLocked() {
    // We depend on the trackBy and all so there are part of the requirment of is item could be locked
    return this._selectionType !== SelectionType.None;
  }

  /**
   * Lock and unlock item
   */
  public lockItem(item: T, lock: boolean) {
    if (this.canItBeLocked()) {
      const ref = this._items.trackBy(
        this._items.all.findIndex(maybe => maybe === item),
        item
      );
      if (lock === true) {
        // Add to lockedRef
        this.lockedRefs.push(ref);
      } else {
        // Remove from lockedRef
        this.lockedRefs = this.lockedRefs.filter(lockedItem => ref !== lockedItem);
      }
    }
  }

  /**
   * Check is item locked or not by searcing into lockedRefs for entry
   */
  public isLocked(item: T): boolean {
    /**
     * The check for selectionType will boost the performence by NOT searching
     * into the array when there is no need for that.
     */
    if (this.canItBeLocked()) {
      const ref = this._items.trackBy(
        this._items.all.findIndex(maybe => maybe === item),
        item
      );
      return this.lockedRefs.indexOf(ref) > -1;
    }

    return false;
  }

  /**
   * Selects or deselects all currently displayed items
   */
  public toggleAll() {
    if (this._selectionType === SelectionType.None || this._selectionType === SelectionType.Single) {
      return;
    }
    /**
     * If every currently displayed item is already selected, we clear them.
     * If at least one item isn't selected, we select every currently displayed item.
     */
    if (this.isAllSelected()) {
      this._items.displayed.forEach(item => {
        const currentIndex = this.current.indexOf(item);
        if (currentIndex > -1 && this.isLocked(item) === false) {
          this.deselectItem(currentIndex);
        }
      });
    } else {
      this._items.displayed.forEach(item => {
        if (this.current.indexOf(item) < 0 && this.isLocked(item) === false) {
          this.selectItem(item);
        }
      });
    }
    this.emitChange();
  }
}
