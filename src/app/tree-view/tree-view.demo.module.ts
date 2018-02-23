/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClarityModule} from "../../clr-angular/clr-angular.module";
import {UtilsDemoModule} from "../_utils/utils.module";

import {BasicSelectionTreeDemo} from "./basic-selection-tree/basic-selection-tree";
import {TreeNodeBasicExpandedStructureDemo} from "./basic-tree-node-expanded/tree-node-basic-expanded";
import {TreeNodeBasicStructureDemo} from "./basic-tree-node/tree-node-basic";
import {ChildNodeSelectedDemo} from "./child-node-selected/child-node-selected";
import {IndeterminateNodeDemo} from "./intedeterminate-node/indeterminate-node";
import {TreeNodeLabelChangeOnExpandDemo} from "./label-change-on-expand/label-change-on-expand";
import {LazyLoadingTreeNodeDemo} from "./lazy-loading-tree-node/lazy-loading-tree-node";
import {RecursiveLazyLoadComponent} from "./recursive-lazy-load/recursive-lazy-load";
import {RecursiveLazyLoadStructureComponent} from "./recursive-lazy-load/recursive-lazy-load-structure";
import {RecursiveSelectableStructureComponent} from "./recursive-selectable-tree/recursive-selectable-structure";
import {RecursiveSelectableTreeDemo} from "./recursive-selectable-tree/recursive-selectable-tree";
import {RecursiveStructureComponent} from "./recursive-tree/recursive-structure";
import {RecursiveTreeDemo} from "./recursive-tree/recursive-tree";
import {TreeNodeRoutingDemo} from "./tree-node-routing/tree-node-routing";
import {TreeNodeRoutingAbbeyRoadDemo} from "./tree-node-routing/tree-node-routing-abbey-road";
import {TreeNodeRoutingRevolverDemo} from "./tree-node-routing/tree-node-routing-revolver";
import {TreeNodeRoutingRubberSoulDemo} from "./tree-node-routing/tree-node-routing-rubber-soul";
import {TreeViewDynamicDemo} from "./tree-view-dynamic/tree-view-dynamic";
import {TreeViewDynamicTestDemo} from "./tree-view-dynamic/tree-view-dynamic-test";
import {TreeViewDemo} from "./tree-view.demo";
import {ROUTING} from "./tree-view.demo.routing";
import {TreeNode10kDemo} from "./trees-10k/tree-10k.demo";
import {Example} from "./utils/example";

@NgModule({
    imports: [CommonModule, ClarityModule, ROUTING, UtilsDemoModule],
    declarations: [
        RecursiveStructureComponent,
        RecursiveSelectableStructureComponent,
        RecursiveLazyLoadStructureComponent,
        TreeViewDemo,
        TreeNodeBasicStructureDemo,
        BasicSelectionTreeDemo,
        ChildNodeSelectedDemo,
        TreeNode10kDemo,
        LazyLoadingTreeNodeDemo,
        RecursiveTreeDemo,
        RecursiveSelectableTreeDemo,
        RecursiveLazyLoadComponent,
        TreeNodeRoutingDemo,
        TreeNodeRoutingAbbeyRoadDemo,
        TreeNodeRoutingRevolverDemo,
        TreeNodeRoutingRubberSoulDemo,
        TreeNodeBasicExpandedStructureDemo,
        TreeNodeLabelChangeOnExpandDemo,
        TreeViewDynamicDemo,
        TreeViewDynamicTestDemo,
        IndeterminateNodeDemo,
        Example
    ],
    exports: [TreeViewDemo]
})
export class TreeViewDemoModule {}
