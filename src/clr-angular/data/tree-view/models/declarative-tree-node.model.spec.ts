/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { DeclarativeTreeNodeModel } from './declarative-tree-node.model';
import { TreeNodeModel } from './tree-node.model';

export default function(): void {
  describe('DeclarativeTreeNodeModel', () => {
    let parent: DeclarativeTreeNodeModel<void>;

    beforeEach(function() {
      parent = new DeclarativeTreeNodeModel(null);
    });

    afterEach(function() {
      parent.destroy();
    });

    it('extends TreeNodeModel', function() {
      expect(parent instanceof TreeNodeModel).toBeTrue();
    });

    it('registers to its parent on creation and the parent keeps track of the children', function() {
      const child1 = new DeclarativeTreeNodeModel<void>(parent);
      const child2 = new DeclarativeTreeNodeModel<void>(parent);
      expect(parent.children).toEqual([child1, child2]);
      child1.destroy();
      child2.destroy();
    });

    it('unregisters from its parent when destroyed', function() {
      const child1 = new DeclarativeTreeNodeModel<void>(parent);
      const child2 = new DeclarativeTreeNodeModel<void>(parent);
      child1.destroy();
      expect(parent.children).toEqual([child2]);
      child2.destroy();
      expect(parent.children).toEqual([]);
    });
  });
}
