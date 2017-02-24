/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {TabsDemo} from "./tabs.demo";
import {TabsStaticDemo} from "./tabs-static";
import {TabsAngularDemo} from "./tabs-angular";
import {VTabsStaticDemo} from "./vtabs-static";
import {VTabsAngularDemo} from "./vtabs-angular";

const ROUTES: Routes = [
    {
        path: "",
        component: TabsDemo,
        children: [
            { path: "", redirectTo: "static", pathMatch: "full" },
            { path: "static", component: TabsStaticDemo },
            { path: "angular", component: TabsAngularDemo },
            { path: "vtabs-static", component: VTabsStaticDemo },
            { path: "vtabs-angular", component: VTabsAngularDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
