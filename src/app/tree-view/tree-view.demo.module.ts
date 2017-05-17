/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ROUTING} from "./tree-view.demo.routing";
import {TreeViewDemo} from "./tree-view.demo";
import {ClarityModule} from "../../clarity-angular/clarity.module";
import {TreeNodeBasicStructureDemo} from "./basic-tree-node/tree-node-basic";
import {BasicSelectionTreeDemo} from "./basic-selection-tree/basic-selection-tree";
import {ChildNodeSelectedDemo} from "./child-node-selected/child-node-selected";
import {TreeNode10kDemo} from "./trees-10k/tree-10k.demo";
import {LazyLoadingTreeNodeDemo} from "./lazy-loading-tree-node/lazy-loading-tree-node";
import {UtilsDemoModule} from "../_utils/utils.module";
import {RecursiveTreeDemo} from "./recursive-tree/recursive-tree";
import {RecursiveStructureComponent} from "./recursive-tree/recursive-structure";
import {RecursiveSelectableTreeDemo} from "./recursive-selectable-tree/recursive-selectable-tree";
import {RecursiveSelectableStructureComponent} from "./recursive-selectable-tree/recursive-selectable-structure";
import {TreeNodeRoutingDemo} from "./tree-node-routing/tree-node-routing";
import {TreeNodeRoutingAbbeyRoadDemo} from "./tree-node-routing/tree-node-routing-abbey-road";
import {TreeNodeRoutingRevolverDemo} from "./tree-node-routing/tree-node-routing-revolver";
import {TreeNodeRoutingRubberSoulDemo} from "./tree-node-routing/tree-node-routing-rubber-soul";
import {TreeNodeBasicExpandedStructureDemo} from "./basic-tree-node-expanded/tree-node-basic-expanded";
import {TreeNodeLabelChangeOnExpandDemo} from "./label-change-on-expand/label-change-on-expand";
import {Example} from "./utils/example";
import {TreeViewDynamicDemo} from "./tree-view-dynamic/tree-view-dynamic";
import {TreeViewDynamicTestDemo} from "./tree-view-dynamic/tree-view-dynamic-test";
import {IndeterminateNodeDemo} from "./intedeterminate-node/indeterminate-node";
import {RecursiveLazyLoadStructureComponent} from "./recursive-lazy-load/recursive-lazy-load-structure";
import {RecursiveLazyLoadComponent} from "./recursive-lazy-load/recursive-lazy-load";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING,
        UtilsDemoModule
    ],
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
    exports: [
        TreeViewDemo
    ]
})
export default class TreeDemoModule {
}
