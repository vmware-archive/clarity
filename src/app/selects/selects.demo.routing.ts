/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {RouterModule, Routes} from "@angular/router";

import {BasicSelectDemo} from "./angular/basic-select/basic-select";
import {SelectAngularDemo} from "./angular/select-angular";
import {SelectsDemo} from "./selects.demo";

const ROUTES: Routes = [
    {path: "", component: SelectsDemo}, {
        path: "angular",
        component: SelectAngularDemo,
        children: [
            {path: "", redirectTo: "bae", pathMatch: "full"},
            {path: "basic", component: BasicSelectDemo},
        ]
    }

];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);