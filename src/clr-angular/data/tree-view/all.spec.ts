/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import TreeNodeModelSpecs from './models/tree-node.model.spec';
import DeclarativeTreeNodeModelSpecs from './models/declarative-tree-node.model.spec';
import RecursiveTreeNodeModelSpecs from './models/recursive-tree-node.model.spec';
import TreeNodeSpec from './tree-node.spec';
import TreeSpecs from './tree.spec';
import RecursiveForOfSpecs from './recursive-for-of.spec';
import RecursiveChildrenSpecs from './recursive-children.spec';

describe('Tree View', () => {
  describe('Models', () => {
    TreeNodeModelSpecs();
    DeclarativeTreeNodeModelSpecs();
    RecursiveTreeNodeModelSpecs();
  });

  describe('Components', () => {
    TreeNodeSpec();
    TreeSpecs();
    RecursiveForOfSpecs();
    RecursiveChildrenSpecs();
  });
});
