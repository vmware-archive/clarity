/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {ButtonGroupDemo} from "./button-group.demo";
import {BasicButtonGroupDemo} from "./basic-button-group";
import {StaticButtonGroupDemo} from "./static-button-group";
import {HideOverflowMenuDemo} from "./hide-overflow-menu";
import {MenuDirectionsDemo} from "./menu-directions";
import {ProjectionUpdateTestDemo} from "./projection-update-test";

const ROUTES: Routes = [
    {
        path: "",
        component: ButtonGroupDemo,
        children: [
            { path: "", redirectTo: "basic-button-group", pathMatch: "full" },
            { path: "basic-button-group", component: BasicButtonGroupDemo },
            { path: "static-button-group", component: StaticButtonGroupDemo },
            { path: "hide-overflow-menu", component: HideOverflowMenuDemo },
            { path: "menu-directions", component: MenuDirectionsDemo },
            { path: "projection-update-test", component: ProjectionUpdateTestDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
