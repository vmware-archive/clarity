/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "@clr/angular";

import {TreeNodeBasicStructureDemo} from "./basic-tree-node/tree-node-basic";
import {TreeViewBasicStructureDemo} from "./basic-tree-view/tree-view-basic";
import {TreeViewDynamicDemo} from "./tree-view-dynamic/tree-view-dynamic";
import {TreeNodeLazyLoadingDemo} from "./lazy-loading/lazy-loading";
import {TreeNodeLabelChangeOnExpandDemo} from "./label-change-on-expand/label-change-on-expand";
import {TreeNodeSelectionDemo} from "./tree-node-selection/tree-node-selection";
import {TreeNodeRoutingDemo} from "./tree-node-routing/tree-node-routing";
import {TreeViewPrepopulateDemo} from "./tree-view-prepopulate/tree-view-prepopulate";
import {TreeNodeBasicStructureDMDemo} from "./basic-tree-node-DM/tree-node-basic-DM";

import {TreeViewDemo} from "./tree-view.demo";
import {RouterModule} from "@angular/router";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {LazyLoadedLocationsComponent} from "./lazy-loading/lazy-loaded-locations";
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
        TreeNodeBasicStructureDemo,
        TreeNodeBasicStructureDMDemo,
        TreeViewBasicStructureDemo,
        TreeViewDynamicDemo,
        LazyLoadedLocationsComponent,
        TreeNodeLazyLoadingDemo,
        TreeNodeLabelChangeOnExpandDemo,
        TreeNodeSelectionDemo,
        TreeNodeRoutingDemo,
        TreeViewPrepopulateDemo,
        TreeViewDemo
    ],
    exports: [
        TreeViewDemo
    ]
})
export class TreeDemoModule {
}
