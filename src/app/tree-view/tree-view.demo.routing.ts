/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";

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

const ROUTES: Routes = [
    {
        path: "",
        component: TreeViewDemo,
        children: [
            { path: "", redirectTo: "basic-tree-node", pathMatch: "full" },
            { path: "basic-tree-node", component: TreeNodeBasicStructureDemo },
            { path: "basic-tree-view", component: TreeViewBasicStructureDemo },
            { path: "lazy-loading", component: TreeNodeLazyLoadingDemo },
            { path: "tree-view-dynamic", component: TreeViewDynamicDemo },
            { path: "tree-node-label-change-expand", component: TreeNodeLabelChangeOnExpandDemo},
            { path: "tree-view-compact", component: TreeViewCompactDemo},
            { path: "tree-node-selection", component: TreeNodeSelectionDemo},
            {
                path: "tree-node-routing",
                component: TreeNodeRoutingDemo,
                children: [
                    { path: "", redirectTo: "album1", pathMatch: "full" },
                    { path: "album1", component: TreeNodeRoutingAbbeyRoadDemo},
                    { path: "album2", component: TreeNodeRoutingRevolverDemo},
                    { path: "album3", component: TreeNodeRoutingRubberSoulDemo }
                ]
            },
            { path: "tree-node-prepopulate", component: TreeViewPrepopulateDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
