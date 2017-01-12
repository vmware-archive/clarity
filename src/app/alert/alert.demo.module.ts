/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity-angular";
import {ROUTING} from "./alert.demo.routing";
import {AlertsDemo} from "./alert.demo";

import {AlertStaticDemo} from "./static/alert-static";
import {AlertStylesDemo} from "./static/alert-styles";
import {AlertStylesOldDemo} from "./static/alert-styles-old";
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

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        AlertsDemo,
        AlertStaticDemo,
        AlertStylesDemo,
        AlertStylesOldDemo,
        AlertContentAreaDemo,
        AlertCardsDemo,
        AlertModalsDemo,
        AlertSizesDemo,
        AlertAppLevelDemo,

        AlertAngularDemo,
        AlertAngularAppLevelDemo,
        AlertAngularNotClosableDemo,
        AlertAngularSuccessDemo,
        AlertAngularSmallDemo,
        AlertAngularCloseEventDemo
    ],
    exports: [
        AlertsDemo,
        AlertStaticDemo,
        AlertStylesDemo,
        AlertStylesOldDemo,
        AlertContentAreaDemo,
        AlertCardsDemo,
        AlertModalsDemo,
        AlertSizesDemo,
        AlertAppLevelDemo,

        AlertAngularDemo,
        AlertAngularAppLevelDemo,
        AlertAngularNotClosableDemo,
        AlertAngularSuccessDemo,
        AlertAngularSmallDemo,
        AlertAngularCloseEventDemo
    ]
})
export default class AlertDemoModule {
}
