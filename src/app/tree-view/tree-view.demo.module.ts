/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity-angular";
import {ROUTING} from "./tree-view.demo.routing";

import {TreeViewDemo} from "./tree-view.demo";
import {TreeNodeBasicStructureDemo} from "./basic-tree-node/tree-node-basic";
import {TreeViewBasicStructureDemo} from "./basic-tree-view/tree-view-basic";
import {TreeViewDynamicDemo} from "./tree-view-dynamic/tree-view-dynamic";
import {TreeNodeLazyLoadingDemo} from "./lazy-loading/lazy-loading";
import {TreeNodeLabelChangeOnExpandDemo} from "./label-change-on-expand/label-change-on-expand";
import {TreeViewCompactDemo} from "./tree-view-compact/tree-view-compact";
import {TreeNodeSelectionDemo} from "./tree-node-selection/tree-node-selection";
import {TreeNodeRoutingDemo} from "./tree-node-routing/tree-node-routing";
import {TreeNodeRoutingRubberSoulDemo} from "./tree-node-routing/tree-node-routing-rubber-soul";
import {TreeNodeRoutingAbbeyRoadDemo} from "./tree-node-routing/tree-node-routing-abbey-road";
import {TreeNodeRoutingRevolverDemo} from "./tree-node-routing/tree-node-routing-revolver";
import {TreeViewPrepopulateDemo} from "./tree-view-prepopulate/tree-view-prepopulate";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        TreeViewDemo,
        TreeNodeBasicStructureDemo,
        TreeViewBasicStructureDemo,
        TreeViewDynamicDemo,
        TreeNodeLazyLoadingDemo,
        TreeNodeLabelChangeOnExpandDemo,
        TreeViewCompactDemo,
        TreeNodeSelectionDemo,
        TreeNodeRoutingDemo,
        TreeNodeRoutingRubberSoulDemo,
        TreeNodeRoutingAbbeyRoadDemo,
        TreeNodeRoutingRevolverDemo,
        TreeViewPrepopulateDemo
    ],
    exports: [
        TreeViewDemo,
        TreeNodeBasicStructureDemo,
        TreeViewBasicStructureDemo,
        TreeViewDynamicDemo,
        TreeNodeLazyLoadingDemo,
        TreeNodeLabelChangeOnExpandDemo,
        TreeViewCompactDemo,
        TreeNodeSelectionDemo,
        TreeNodeRoutingDemo,
        TreeNodeRoutingRubberSoulDemo,
        TreeNodeRoutingAbbeyRoadDemo,
        TreeNodeRoutingRevolverDemo,
        TreeViewPrepopulateDemo
    ]
})
export default class TreeDemoModule {
}
