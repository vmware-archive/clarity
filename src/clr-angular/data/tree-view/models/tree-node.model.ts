/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClrSelectedState } from './selected-state.enum';
import { BehaviorSubject } from 'rxjs';

export abstract class TreeNodeModel<T> {
  selected = new BehaviorSubject<ClrSelectedState>(ClrSelectedState.UNSELECTED);
  disabled = new BehaviorSubject<boolean>(false);
  // A local condition which is given higher priority than the parent node's 'isSelectionDisabled' policy
  isDisabledInputSetToTrue: boolean = false;
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
    this.disabled.complete();
  }

  // Propagate by default when eager, don't propagate in the lazy-loaded tree.
  setSelected(state: ClrSelectedState, propagateUp: boolean, propagateDown: boolean) {
    if (state === this.selected.value || this.disabled.value) {
      return;
    }
    if (propagateDown && state !== ClrSelectedState.INDETERMINATE && this.children && this.children.length > 0) {
      this.children.filter(child => !child.disabled.value).forEach(child => child.setSelected(state, false, true));
      // If there are any children, then we have to always calculate the selection state from the children after they are set.
      // This is because, the state sent by parent is not always the state set on children because of the possibility of any
      // disabled descended nodes persisting their selection states.
      this._updateSelectionFromChildren();
    } else {
      this.selected.next(state);
    }
    if (propagateUp && this.parent) {
      this.parent._updateSelectionFromChildren();
    }
  }

  setDisabled(value: boolean, propagateUp: boolean, propagateDown: boolean) {
    if (this.disabled.value === value) {
      return;
    }
    // If selection of the parent is disabled, then this node also has to be disabled
    const disabledValue = this.parent && this.parent.disabled.value ? true : value;
    this.disabled.next(disabledValue);
    // Don't change the disableSelection state of the children for which the clrDisableSelection is set to true
    if (propagateDown && this.children && this.children.length) {
      this.children
        .filter(child => !child.isDisabledInputSetToTrue)
        .forEach(child => child.setDisabled(this.disabled.value, false, true));
    }
    // Parent has to disable itself when all the children are disabled
    if (propagateUp && this.disabled.value && this.parent) {
      this.parent._updateDisabledStateFromChildren();
    }
  }

  toggleSelection(propagate: boolean, event?: Event) {
    // Both unselected and indeterminate toggle to selected
    const newState =
      this.selected.value === ClrSelectedState.SELECTED ? ClrSelectedState.UNSELECTED : ClrSelectedState.SELECTED;
    // NOTE: we always propagate selection up in this method because it is only called when the user takes an action.
    // It should never be called from lifecycle hooks or app-provided inputs.
    this.setSelected(newState, true, propagate);
    if (event) {
      // When a user triggers the click event on checkbox inputs, checkbox has toggled its state from checked to unchecked or vice versa.
      // And that does not get over written by the equality operations being bound to 'checked' & 'indeterminate' DOM properties in the HTML template.
      // This is because Angular simply does not update the bindings if they remained the same since the last time the view was checked.
      // So, they are programatically being set here.
      const inputElement = event.srcElement as HTMLInputElement;
      inputElement.checked = this.selected.value === ClrSelectedState.SELECTED;
      inputElement.indeterminate = this.selected.value === ClrSelectedState.INDETERMINATE;
    }
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

  private get areAllChildrenDisabled(): boolean {
    return this.children.every(child => child.disabled.value);
  }

  /*
  * Internal, but needs to be called by other nodes
  */
  _updateDisabledStateFromChildren() {
    if (!this.areAllChildrenDisabled) {
      return;
    }
    this.disabled.next(true);
    if (this.parent) {
      this.parent._updateDisabledStateFromChildren();
    }
  }
}
