/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {ButtonsDemo} from "./buttons.demo";
import {RealButtonDemo} from "./real-button";
import {PrimaryButtonDemo} from "./primary-button";
import {SecondaryButtonDemo} from "./secondary-button";
import {TertiaryButtonDemo} from "./tertiary-button";
import {InverseButtonDemo} from "./inverse-button";
import {ButtonStatesDemo} from "./button-states";
import {ButtonLoadingDemo} from "./button-loading";
import {ButtonSizesDemo} from "./button-sizes";
import {ToggleDemo} from "./toggles";
import {ButtonsTestDemo} from "./buttons-test";
import {ButtonsIconsDemo} from "./buttons-icons";

const ROUTES: Routes = [
    {
        path: "",
        component: ButtonsDemo,
        children: [
            { path: "", redirectTo: "real-button", pathMatch: "full" },
            { path: "real-button", component: RealButtonDemo },
            { path: "primary-button", component: PrimaryButtonDemo },
            { path: "secondary-button", component: SecondaryButtonDemo },
            { path: "tertiary-button", component: TertiaryButtonDemo },
            { path: "inverse-button", component: InverseButtonDemo },
            { path: "button-states", component: ButtonStatesDemo },
            { path: "button-loading", component: ButtonLoadingDemo },
            { path: "button-sizes", component: ButtonSizesDemo },
            { path: "toggles", component: ToggleDemo },
            { path: "buttons-test", component: ButtonsTestDemo },
            { path: "icons", component: ButtonsIconsDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
