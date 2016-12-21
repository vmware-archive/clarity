/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {BadgesDemo} from "./badges.demo";
import {BadgeColorsDemo} from "./badge-colors";
import {BadgeStatusesDemo} from "./badge-statuses";

const ROUTES: Routes = [
    {
        path: "",
        component: BadgesDemo,
        children: [
            { path: "", redirectTo: "color-options", pathMatch: "full" },
            { path: "color-options", component: BadgeColorsDemo },
            { path: "status", component: BadgeStatusesDemo}
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
