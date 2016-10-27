import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {AlertsDemo} from "./alert.demo";

import {AlertStaticDemo} from "./static/alert-static";
import {AlertStylesDemo} from "./static/alert-styles";
import {AlertTypesDemo} from "./static/alert-types";
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
                    { path: "types", component: AlertTypesDemo },
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
