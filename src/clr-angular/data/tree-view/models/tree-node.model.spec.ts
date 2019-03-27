/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
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

    describe('with disabled nodes', function() {
      it('offers a disabled BehaviorSubject', function() {
        expect(root.disabled instanceof BehaviorSubject).toBeTrue();
      });

      it('allows to set the disabled state of a node without propagating', function() {
        child.setDisabled(true, false, false);
        expect(child.disabled.value).toBe(true);
        [root, ...child.children].forEach(n => expect(n.disabled.value).toBe(false));
      });

      it('emits disabled changes only when it actually changes', function() {
        let numberOfChanges = 0;
        child.disabled.subscribe(_ => numberOfChanges++);
        // BehaviorSubject sends us the first state on subscription
        expect(numberOfChanges).toBe(1);
        child.setDisabled(false, false, false);
        expect(numberOfChanges).toBe(1);
        child.setDisabled(true, false, false);
        expect(numberOfChanges).toBe(2);
      });

      it('can propagate the disabled state to parents', function() {
        // Disabling all children of a node will make it disabled
        child.children.forEach(c => c.setDisabled(true, true, false));
        expect(child.disabled.value).toBe(true);
        // Once the parent is disabled, a child cannot be enabled
        child.children[0].setDisabled(false, false, false);
        expect(child.children[1].disabled.value).toBe(true);
      });

      it('can propagate the disabled state to children', function() {
        const totalNodeCount = [...root.children, ...child.children].length;
        // Disabling a parent disables all the children down the tree
        root.setDisabled(true, false, true);
        const disabledNodeCount = [...root.children, ...child.children].reduce((a, n) => {
          if (n.disabled.value) {
            a += 1;
          }
          return a;
        }, 0);
        expect(disabledNodeCount).toEqual(totalNodeCount);
        // Enabling a parent enables all the children down the tree
        root.setDisabled(false, false, true);
        const enabledNodeCount = [...root.children, ...child.children].reduce((a, n) => {
          if (!n.disabled.value) {
            a += 1;
          }
          return a;
        }, 0);
        expect(enabledNodeCount).toEqual(totalNodeCount);
        // In the case of dynamically changing parent/children, the local condition should be given
        // higher priority than the parent policy.
        child.setDisabled(true, false, true);
        expect(child.children[0].disabled.value).toBe(true);
        expect(child.children[1].disabled.value).toBe(true);
        // local condition
        child.children[1].isDisabledInputSetToTrue = true;
        child.setDisabled(false, false, true);
        expect(child.children[0].disabled.value).toBe(false);
        expect(child.children[1].disabled.value).toBe(true);
      });

      it('completes the disabled Observable on destroy', function() {
        let complete = false;
        root.disabled.subscribe({ complete: () => (complete = true) });
        root.destroy();
        expect(complete).toBeTrue();
      });

      describe('Selection', function() {
        it('does not toggle the selection of disabled nodes and only toggles the enabled nodes', function() {
          root.children[1].setDisabled(true, false, false);
          expect(root.children[0].selected.value).toBe(ClrSelectedState.UNSELECTED);
          expect(root.children[1].selected.value).toBe(ClrSelectedState.UNSELECTED);
          root.toggleSelection(true);
          expect(root.children[0].selected.value).toBe(ClrSelectedState.SELECTED);
          expect(root.children[1].selected.value).toBe(ClrSelectedState.UNSELECTED);
        });

        describe('Indeterminate parent', function() {
          beforeEach(function() {
            // Unselected and disabeld child
            root.children[1].setDisabled(true, false, false);
            root.toggleSelection(true);
          });

          it('selecting a parent with some nodes that are unselected and also disabled, results in indeterminate state of the parent', function() {
            expect(root.children[0].selected.value).toBe(ClrSelectedState.SELECTED);
            expect(root.children[1].selected.value).toBe(ClrSelectedState.UNSELECTED);
            expect(root.selected.value).toBe(ClrSelectedState.INDETERMINATE);
          });

          it('selects only the nodes that are unselected and also enabled when indeterminate parent is clicked', function() {
            root.children[0].setSelected(ClrSelectedState.UNSELECTED, false, false);
            root.toggleSelection(true);
            expect(root.children[0].selected.value).toBe(ClrSelectedState.SELECTED);
            expect(root.children[1].selected.value).toBe(ClrSelectedState.UNSELECTED);
          });

          it('toggling persists the indeterminate state when some of the nodes are disabled and also unselected', function() {
            root.toggleSelection(true);
            expect(root.selected.value).toBe(ClrSelectedState.INDETERMINATE);
          });

          it('toggling the indeterminate state of a parent with enabled children that are already selected, does not unselect them', function() {
            root.toggleSelection(true);
            // remains same
            expect(root.children[0].selected.value).toBe(ClrSelectedState.SELECTED);
            expect(root.children[1].selected.value).toBe(ClrSelectedState.UNSELECTED);
          });

          it('toggling indeterminate state with child nodes that are disabled and selected results in selected state', function() {
            // Enable the node that is disabled in before each above
            root.children[1].setDisabled(false, false, false);
            // Selected and disabled child
            root.children[1].setSelected(ClrSelectedState.SELECTED, false, false);
            root.children[1].setDisabled(true, false, false);

            expect(root.selected.value).toBe(ClrSelectedState.INDETERMINATE);
            root.toggleSelection(true);

            expect(root.selected.value).toBe(ClrSelectedState.SELECTED);
          });
        });
      });
    });
  });
}
