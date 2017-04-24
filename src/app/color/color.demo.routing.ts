/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {ColorsDemo} from "./color.demo";
import {ColorLuminanceDemo} from "./color-luminance";
import {ColorContrastDemo} from "./color-contrast";
import { ColorPalette } from "./color-palette";

const ROUTES: Routes = [
    {
        path: "",
        component: ColorsDemo,
        children: [
            { path: "", redirectTo: "color-palette", pathMatch: "full" },
            { path: "color-palette", component: ColorPalette },
            { path: "color-luminance", component: ColorLuminanceDemo },
            { path: "color-contrast", component: ColorContrastDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders  = RouterModule.forChild(ROUTES);