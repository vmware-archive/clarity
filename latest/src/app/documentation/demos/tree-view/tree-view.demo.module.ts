/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "@clr/angular";

import {TreeBasicDemo} from "./basic-tree/tree-basic";
import {BooleanSelectionTreeDemo} from "./boolean-selection-tree/boolean-selection-tree";
import {TreeViewDynamicDemo} from "./tree-view-dynamic/tree-view-dynamic";
import {LazyLoadingTreeDemo} from "./lazy-loading-tree/lazy-loading-tree";
import {TreeNodeLabelChangeOnExpandDemo} from "./label-change-on-expand/label-change-on-expand";
import {SelectionTreeDemo} from "./selection-tree/selection-tree";
import {TreeNodeRoutingDemo} from "./tree-node-routing/tree-node-routing";
import {SmallSelectionTreeDemo} from "./small-selection-tree/small-selection-tree";
import {TreeBasicDMDemo} from "./basic-tree-DM/tree-basic-DM";
import {RecursiveTreeDemo} from "./recursive-tree/recursive-tree";
import {LazyLoadingSelectionTreeDemo} from "./lazy-loading-selection-tree/lazy-loading-selection-tree";
import {GroceryItemsComponent} from "./lazy-loading-selection-tree/grocery-items";
import {LazyLoadingRecursiveTreeDemo} from "./lazy-loading-recursive-tree/lazy-loading-recursive-tree";

import {TreeViewDemo} from "./tree-view.demo";
import {RouterModule} from "@angular/router";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        RouterModule.forChild([{path: "", component: TreeViewDemo}]),
        DocWrapperModule,
        UtilsModule
    ],
    declarations: [
        TreeBasicDemo,
        TreeBasicDMDemo,
        BooleanSelectionTreeDemo,
        TreeViewDynamicDemo,
        LazyLoadingTreeDemo,
        TreeNodeLabelChangeOnExpandDemo,
        SelectionTreeDemo,
        TreeNodeRoutingDemo,
        SmallSelectionTreeDemo,
        TreeViewDemo,
        RecursiveTreeDemo,
        LazyLoadingSelectionTreeDemo,
        GroceryItemsComponent,
        LazyLoadingRecursiveTreeDemo
    ],
    exports: [
        TreeViewDemo
    ]
})
export class TreeDemoModule {
}
