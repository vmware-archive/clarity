/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";

import {DatagridBasicStructureDemo} from "./basic-structure/basic-structure";
import {DatagridBindingPropertiesDemo} from "./binding-properties/binding-properties";
import {DatagridCustomRenderingDemo} from "./custom-rendering/custom-rendering";
import {DatagridDemo} from "./datagrid.demo";
import {DatagridFilteringDemo} from "./filtering/filtering";
import {DatagridFullDemo} from "./full/full";
import {DatagridPaginationDemo} from "./pagination/pagination";
import {DatagridSelectionDemo} from "./selection/selection";
import {DatagridServerDrivenDemo} from "./server-driven/server-driven";
import {DatagridSmartIteratorDemo} from "./smart-iterator/smart-iterator";
import {DatagridSortingDemo} from "./sorting/sorting";
import {DatagridStringFilteringDemo} from "./string-filtering/string-filtering";
import {DatagridPlaceholderDemo} from "./placeholder/placeholder";
import {DatagridSelectionSingleDemo} from "./single-selection/single-selection";
import {DatagridExpandableRowsDemo} from "./expandable-rows/expandable-rows";
import {DatagridHideShowColumnsDemo} from "./hide-show-columns/hide-show-columns";
import {DatagridBatchActionDemo} from "./batch-action/batch-action";
import {DatagridSingleActionDemo} from "./single-action/single-action";

const ROUTES: Routes = [
    {
        path: "",
        component: DatagridDemo,
        children: [
            {path: "", redirectTo: "structure"},
            {path: "structure", component: DatagridBasicStructureDemo},
            {path: "custom-rendering", component: DatagridCustomRenderingDemo},
            {path: "smart-iterator", component: DatagridSmartIteratorDemo},
            {path: "binding-properties", component: DatagridBindingPropertiesDemo},
            {path: "custom-sorting", component: DatagridSortingDemo},
            {path: "custom-filtering", component: DatagridFilteringDemo},
            {path: "string-filtering", component: DatagridStringFilteringDemo},
            {path: "pagination", component: DatagridPaginationDemo},
            {path: "selection", component: DatagridSelectionDemo},
            {path: "selection-single", component: DatagridSelectionSingleDemo},
            {path: "batch-action", component: DatagridBatchActionDemo},
            {path: "single-action", component: DatagridSingleActionDemo},
            {path: "server-driven", component: DatagridServerDrivenDemo},
            {path: "placeholder", component: DatagridPlaceholderDemo},
            {path: "expandable-rows", component: DatagridExpandableRowsDemo},
            {path: "hide-show", component: DatagridHideShowColumnsDemo},
            {path: "full", component: DatagridFullDemo}
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
