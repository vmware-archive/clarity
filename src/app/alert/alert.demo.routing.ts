/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {AlertsDemo} from "./alert.demo";

import {AlertStaticDemo} from "./static/alert-static";
import {AlertStylesDemo} from "./static/alert-styles";
import {AlertContentAreaDemo} from "./static/alert-content-area";
import {AlertCardsDemo} from "./static/alert-cards";
import {AlertModalsDemo} from "./static/alert-modals";
import {AlertSizesDemo} from "./static/alert-sizes";
import {AlertAppLevelDemo} from "./static/alert-app-level";

import {AlertAngularDemo} from "./angular/alert-angular";
import {AlertAngularAppLevelDemo} from "./angular/alert-angular-app-level";
import {AlertAngularNotClosableDemo} from "./angular/alert-angular-not-closable";
import {AlertAngularSuccessDemo} from "./angular/alert-angular-success";
import {AlertAngularSmallDemo} from "./angular/alert-angular-small";
import {AlertAngularCloseEventDemo} from "./angular/alert-angular-close-event";

const ROUTES: Routes = [
    {
        path: "",
        component: AlertsDemo,
        children: [
            { path: "",  redirectTo: "static", pathMatch: "full" },
            {
                path: "static",
                component: AlertStaticDemo,
                children: [
                    { path: "", redirectTo: "styles", pathMatch: "full" },
                    { path: "styles", component: AlertStylesDemo },
                    { path: "content-area", component: AlertContentAreaDemo },
                    { path: "cards", component: AlertCardsDemo },
                    { path: "modals", component: AlertModalsDemo },
                    { path: "sizes", component: AlertSizesDemo },
                    { path: "app-level", component: AlertAppLevelDemo}
                ]
            },
            {
                path: "angular",
                component: AlertAngularDemo,
                children: [
                    { path: "", redirectTo: "not-closable", pathMatch: "full" },
                    { path: "not-closable", component: AlertAngularNotClosableDemo },
                    { path: "app-level", component: AlertAngularAppLevelDemo },
                    { path: "success", component: AlertAngularSuccessDemo },
                    { path: "small", component: AlertAngularSmallDemo },
                    { path: "close-events", component: AlertAngularCloseEventDemo }
                ]
            }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
