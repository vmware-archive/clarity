/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClrSelectedState } from './selected-state.enum';
import { BehaviorSubject } from 'rxjs';

export abstract class TreeNodeModel<T> {
  selected = new BehaviorSubject<ClrSelectedState>(ClrSelectedState.UNSELECTED);
  model: T | null;
  /*
   * Ideally, I would like to use a polymorphic this type here to ensure homogeneity of the tree, something like:
   * abstract parent: this<T> | null;
   * abstract children: this<T>[];
   * But I'm hitting limitations on typescript not allowing that type in constructors or static methods.
   * So I'm resorting to forcing override with more precise types by marking these abstract.
   */
  abstract parent: TreeNodeModel<T> | null;
  abstract children: TreeNodeModel<T>[];

  /*
   * Being able to push this down to the RecursiveTreeNodeModel would require too much work on the angular components
   * right now for them to know which kind of model they are using. So I'm lifting the public properties to this
   * abstract parent class for now and we can revisit it later, when we're not facing such a close deadline.
   */
  loading = false;

  destroy() {
    // Just to be safe
    this.selected.complete();
  }

  // Propagate by default when eager, don't propagate in the lazy-loaded tree.
  setSelected(state: ClrSelectedState, propagateUp: boolean, propagateDown: boolean) {
    if (state === this.selected.value) {
      return;
    }
    this.selected.next(state);
    if (propagateDown && state !== ClrSelectedState.INDETERMINATE && this.children) {
      this.children.forEach(child => child.setSelected(state, false, true));
    }
    if (propagateUp && this.parent) {
      this.parent._updateSelectionFromChildren();
    }
  }

  toggleSelection(propagate: boolean) {
    // Both unselected and indeterminate toggle to selected
    const newState =
      this.selected.value === ClrSelectedState.SELECTED ? ClrSelectedState.UNSELECTED : ClrSelectedState.SELECTED;
    // NOTE: we always propagate selection up in this method because it is only called when the user takes an action.
    // It should never be called from lifecycle hooks or app-provided inputs.
    this.setSelected(newState, true, propagate);
  }

  private computeSelectionStateFromChildren() {
    let oneSelected = false;
    let oneUnselected = false;
    // Using a good old for loop to exit as soon as we can tell, for better performance on large trees.
    for (const child of this.children) {
      switch (child.selected.value) {
        case ClrSelectedState.INDETERMINATE:
          return ClrSelectedState.INDETERMINATE;
        case ClrSelectedState.SELECTED:
          oneSelected = true;
          if (oneUnselected) {
            return ClrSelectedState.INDETERMINATE;
          }
          break;
        case ClrSelectedState.UNSELECTED:
        default:
          // Default is the same as unselected, in case an undefined somehow made it all the way here.
          oneUnselected = true;
          if (oneSelected) {
            return ClrSelectedState.INDETERMINATE;
          }
          break;
      }
    }
    if (!oneSelected) {
      return ClrSelectedState.UNSELECTED;
    } else if (!oneUnselected) {
      return ClrSelectedState.SELECTED;
    }
  }

  /*
   * Internal, but needs to be called by other nodes
   */
  _updateSelectionFromChildren() {
    const newState = this.computeSelectionStateFromChildren();
    if (newState === this.selected.value) {
      return;
    }
    this.selected.next(newState);
    if (this.parent) {
      this.parent._updateSelectionFromChildren();
    }
  }
}
