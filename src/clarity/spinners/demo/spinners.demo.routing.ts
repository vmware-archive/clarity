/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {SpinnerDemo} from "./spinner.demo";
import {SpinnerTypesDemo} from "./spinner-types";
import {SpinnerSizesDemo} from "./spinner-sizes";

const ROUTES: Routes = [
    {
        path: "",
        component: SpinnerDemo,
        children: [
            { path: "", redirectTo: "spinner-types", pathMatch: "full" },
            { path: "spinner-types", component: SpinnerTypesDemo },
            { path: "spinner-sizes", component: SpinnerSizesDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);