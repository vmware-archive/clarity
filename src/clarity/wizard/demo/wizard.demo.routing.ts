/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {WizardDemo} from "./wizard.demo";
import {WizardAngularDemo} from "./wizard-angular";
import {WizardStaticDemo} from "./wizard-static.demo";

const ROUTES: Routes = [
    {
        path: "",
        component: WizardDemo,
        children: [
            { path: "", redirectTo: "static", pathMatch: "full" },
            { path: "static", component: WizardStaticDemo },
            { path: "angular", component: WizardAngularDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);