/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { BehaviorSubject } from 'rxjs';

import { TreeNodeModel } from './tree-node.model';
import { ClrSelectedState } from './selected-state.enum';

class TestModel extends TreeNodeModel<string> {
  constructor(name: string, parent: TestModel) {
    super();
    this.model = name;
    this.parent = parent;
  }

  children: TestModel[];
  parent: TestModel | null;
}

export default function(): void {
  describe('TreeNodeModel', () => {
    let root: TestModel;
    let child: TestModel;

    beforeEach(function() {
      root = new TestModel('A', null);
      child = new TestModel('AA', root);
      child.children = [new TestModel('AAA', child), new TestModel('AAB', child)];
      root.children = [child, new TestModel('AB', root)];
    });

    afterEach(function() {
      child.children.forEach(c => c.destroy());
      root.children.forEach(c => c.destroy());
      root.destroy();
    });

    it('offers a selected BehaviorSubject', function() {
      expect(root.selected instanceof BehaviorSubject).toBeTrue();
    });

    it('starts unselected', function() {
      expect(root.selected.value).toBe(ClrSelectedState.UNSELECTED);
    });

    it('allows to set the selection state of a node without propagating', function() {
      // Selected
      child.setSelected(ClrSelectedState.SELECTED, false, false);
      expect(child.selected.value).toBe(ClrSelectedState.SELECTED);
      [root, ...child.children].forEach(n => expect(n.selected.value).toBe(ClrSelectedState.UNSELECTED));
      // Indeterminate
      child.setSelected(ClrSelectedState.INDETERMINATE, false, false);
      expect(child.selected.value).toBe(ClrSelectedState.INDETERMINATE);
      [root, ...child.children].forEach(n => expect(n.selected.value).toBe(ClrSelectedState.UNSELECTED));
    });

    it('emits selection changes only when it actually changes', function() {
      let nbChanges = 0;
      child.selected.subscribe(_ => nbChanges++);
      // BehaviorSubject sends us the first state on subscription
      expect(nbChanges).toBe(1);
      child.setSelected(ClrSelectedState.UNSELECTED, false, false);
      expect(nbChanges).toBe(1);
      child.setSelected(ClrSelectedState.SELECTED, false, false);
      expect(nbChanges).toBe(2);
      child.setSelected(ClrSelectedState.SELECTED, false, false);
      expect(nbChanges).toBe(2);
    });

    it('can propagate the selection to parents', function() {
      // Selecting only one grandchild sets all parents up the tree to indeterminate
      child.children[0].setSelected(ClrSelectedState.SELECTED, true, false);
      expect(child.selected.value).toBe(ClrSelectedState.INDETERMINATE);
      expect(root.selected.value).toBe(ClrSelectedState.INDETERMINATE);
      // Selecting all children of a node will make it selected
      child.children[1].setSelected(ClrSelectedState.SELECTED, true, false);
      expect(child.selected.value).toBe(ClrSelectedState.SELECTED);
      root.children[1].setSelected(ClrSelectedState.SELECTED, true, false);
      expect(root.selected.value).toBe(ClrSelectedState.SELECTED);
    });

    it('can propagate the selection to children', function() {
      // Selecting a parent selects all the children down the tree
      root.setSelected(ClrSelectedState.SELECTED, false, true);
      [...root.children, ...child.children].forEach(n => expect(n.selected.value).toBe(ClrSelectedState.SELECTED));
      // Unselecting a parent unselects all the children down the tree
      root.setSelected(ClrSelectedState.UNSELECTED, false, true);
      [...root.children, ...child.children].forEach(n => expect(n.selected.value).toBe(ClrSelectedState.UNSELECTED));
    });

    it('does not propagate indeterminate state down', function() {
      child.setSelected(ClrSelectedState.SELECTED, false, true);
      root.setSelected(ClrSelectedState.INDETERMINATE, false, true);
      // The children are left untouched, in whatever state they were before
      expect(root.children[1].selected.value).toBe(ClrSelectedState.UNSELECTED);
      [child, ...child.children].forEach(n => expect(n.selected.value).toBe(ClrSelectedState.SELECTED));
    });

    it('toggles from unselected to selected', function() {
      child.setSelected(ClrSelectedState.UNSELECTED, false, false);
      const spy = spyOn(child, 'setSelected');
      child.toggleSelection(true);
      expect(spy).toHaveBeenCalledWith(ClrSelectedState.SELECTED, true, true);
    });

    it('toggles from selected to unselected', function() {
      child.setSelected(ClrSelectedState.SELECTED, false, false);
      const spy = spyOn(child, 'setSelected');
      child.toggleSelection(true);
      expect(spy).toHaveBeenCalledWith(ClrSelectedState.UNSELECTED, true, true);
    });

    it('toggles from indeterminate to selected', function() {
      child.setSelected(ClrSelectedState.INDETERMINATE, false, false);
      const spy = spyOn(child, 'setSelected');
      child.toggleSelection(true);
      expect(spy).toHaveBeenCalledWith(ClrSelectedState.SELECTED, true, true);
    });

    it('can toggle without propagating down', function() {
      const spy = spyOn(child, 'setSelected');
      child.toggleSelection(false);
      expect(spy).toHaveBeenCalledWith(ClrSelectedState.SELECTED, true, false);
    });

    it('completes the selected Observable on destroy', function() {
      let complete = false;
      root.selected.subscribe({ complete: () => (complete = true) });
      root.destroy();
      expect(complete).toBeTrue();
    });
  });
}
