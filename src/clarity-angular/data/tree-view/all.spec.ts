/* * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import AbstractTreeSelectionSpecs from "./abstract-tree-selection.spec";
import TreeNodeSpecs from "./tree-node.spec";
import TreeViewSpecs from "./tree-view.spec";
import TreeSelectionSpecs from "./providers/treeSelection.spec";

describe("Tree View Directives", () => {
    AbstractTreeSelectionSpecs();
    TreeNodeSpecs();
    TreeViewSpecs();
    TreeSelectionSpecs();
});