/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {RouterModule, Routes} from "@angular/router";

import {GridAutoLayout1Demo} from "./grid-auto-layout-1";
import {GridAutoLayout2Demo} from "./grid-auto-layout-2";
import {GridColumnOffsettingDemo} from "./grid-column-offsetting";
import {GridColumnPullDemo} from "./grid-column-pull";
import {GridColumnPushDemo} from "./grid-column-push";
import {GridColumnStackingDemo} from "./grid-column-stacking";
import {GridColumnsDemo} from "./grid-columns";
import {GridItemsHorizontalAlignmentDemo} from "./grid-items-horizontal-alignment";
import {GridItemsIndividualVerticalAlignmentDemo} from "./grid-items-individual-vertical-alignment";
import {GridItemsVerticalAlignmentDemo} from "./grid-items-vertical-alignment";
import {GridDemo} from "./grid.demo";

const ROUTES: Routes = [{
    path: "",
    component: GridDemo,
    children: [
        {path: "", redirectTo: "grid-columns", pathMatch: "full"}, {path: "grid-columns", component: GridColumnsDemo},
        {path: "grid-column-stacking", component: GridColumnStackingDemo},
        {path: "grid-column-offsetting", component: GridColumnOffsettingDemo},
        {path: "grid-column-push", component: GridColumnPushDemo},
        {path: "grid-column-pull", component: GridColumnPullDemo},
        {path: "grid-auto-layout-1", component: GridAutoLayout1Demo},
        {path: "grid-auto-layout-2", component: GridAutoLayout2Demo},
        {path: "grid-items-vertical-alignment", component: GridItemsVerticalAlignmentDemo},
        {path: "grid-items-individual-vertical-alignment", component: GridItemsIndividualVerticalAlignmentDemo},
        {path: "grid-items-horizontal-alignment", component: GridItemsHorizontalAlignmentDemo}
    ]
}];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);