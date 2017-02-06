/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "clarity-angular";

import {TreeNodeBasicStructureDemo} from "./basic-tree-node/tree-node-basic";
import {TreeViewBasicStructureDemo} from "./basic-tree-view/tree-view-basic";
import {TreeViewDynamicDemo} from "./tree-view-dynamic/tree-view-dynamic";
import {TreeNodeLazyLoadingDemo} from "./lazy-loading/lazy-loading";
import {TreeNodeLabelChangeOnExpandDemo} from "./label-change-on-expand/label-change-on-expand";
import {TreeViewCompactDemo} from "./tree-view-compact/tree-view-compact";
import {TreeNodeSelectionDemo} from "./tree-node-selection/tree-node-selection";
import {TreeNodeRoutingDemo} from "./tree-node-routing/tree-node-routing";
import {TreeViewPrepopulateDemo} from "./tree-view-prepopulate/tree-view-prepopulate";
import {TreeNodeBasicStructureDMDemo} from "./basic-tree-node-DM/tree-node-basic-DM";

import {Example} from "./utils/example";
import {TreeSelectionCodeSnippetDemo} from "./tree-selection-code-snippet/tree-selection-code-snippet";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forRoot()
    ],
    declarations: [
        TreeNodeBasicStructureDemo,
        TreeNodeBasicStructureDMDemo,
        TreeViewBasicStructureDemo,
        TreeViewDynamicDemo,
        TreeNodeLazyLoadingDemo,
        TreeNodeLabelChangeOnExpandDemo,
        TreeViewCompactDemo,
        TreeNodeSelectionDemo,
        TreeNodeRoutingDemo,
        TreeViewPrepopulateDemo,
        TreeSelectionCodeSnippetDemo,
        Example
    ],
    exports: [
        TreeNodeBasicStructureDemo,
        TreeNodeBasicStructureDMDemo,
        TreeViewBasicStructureDemo,
        TreeViewDynamicDemo,
        TreeNodeLazyLoadingDemo,
        TreeNodeLabelChangeOnExpandDemo,
        TreeViewCompactDemo,
        TreeNodeSelectionDemo,
        TreeNodeRoutingDemo,
        TreeViewPrepopulateDemo,
        TreeSelectionCodeSnippetDemo
    ]
})
export default class TreeDemoModule {
}
