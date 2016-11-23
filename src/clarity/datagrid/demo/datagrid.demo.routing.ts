/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
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

const ROUTES: Routes = [
    {
        path: "",
        component: DatagridDemo,
        children: [
            {path: "", redirectTo: "structure", pathMatch: "full" },
            {path: "structure", component: DatagridBasicStructureDemo},
            {path: "custom-rendering", component: DatagridCustomRenderingDemo},
            {path: "smart-iterator", component: DatagridSmartIteratorDemo},
            {path: "binding-properties", component: DatagridBindingPropertiesDemo},
            {path: "sorting", component: DatagridSortingDemo},
            {path: "filtering", component: DatagridFilteringDemo},
            {path: "string-filtering", component: DatagridStringFilteringDemo},
            {path: "pagination", component: DatagridPaginationDemo},
            {path: "selection", component: DatagridSelectionDemo},
            {path: "server-driven", component: DatagridServerDrivenDemo},
            {path: "placeholder", component: DatagridPlaceholderDemo},
            {path: "full", component: DatagridFullDemo},
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);