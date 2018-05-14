/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {RouterModule, Routes} from "@angular/router";

import {BasicNgSelectDemo} from "./basic-ng-select";
import {SelectStaticDemo} from "./select-static";
import {SelectsDemo} from "./selects.demo";

const ROUTES: Routes = [{
    path: "",
    component: SelectsDemo,
    children: [
        {path: "", redirectTo: "select-static", pathMatch: "full"},
        {path: "select-static", component: SelectStaticDemo},
        {path: "basic-select", component: BasicNgSelectDemo},
    ]
}];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
