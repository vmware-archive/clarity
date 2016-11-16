/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";
import { Routes, RouterModule } from "@angular/router";
import { IconsDemo } from "./iconography.demo";
import { IconSelectionDemo } from "./icon-selection";
import { IconColorsDemo } from "./icon-colors";
import { IconSizeDemo } from "./icon-size";
import { IconOrientationDemo } from "./icon-orientation";
import { IconInverseColorDemo } from "./icon-inverse-color";

const ROUTES: Routes = [
    {
        path: "",
        component: IconsDemo,
        children: [
            { path: "", redirectTo: "selection", pathMatch: "full" },
            { path: "selection", component: IconSelectionDemo },
            { path: "color-options", component: IconColorsDemo },
            { path: "inverse-color", component: IconInverseColorDemo },
            { path: "size", component: IconSizeDemo },
            { path: "orientation", component: IconOrientationDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
