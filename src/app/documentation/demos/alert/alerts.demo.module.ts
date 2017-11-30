/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "@clr/angular";

import {AlertStylesDemo} from "./static/alert-styles";
import {AlertContentAreaDemo} from "./static/alert-content-area";
import {AlertCardsDemo} from "./static/alert-cards";
import {AlertModalsDemo} from "./static/alert-modals";
import {AlertSizesDemo} from "./static/alert-sizes";
import {AlertAppLevelDemo} from "./static/alert-app-level";

import {AlertAngularAppLevelDemo} from "./angular/alert-angular-app-level";
import {AlertAngularAppLevelAlertsDemo} from "./angular/alert-angular-app-level-alerts";
import {AlertAngularNotClosableDemo} from "./angular/alert-angular-not-closable";
import {AlertAngularSuccessDemo} from "./angular/alert-angular-success";
import {AlertAngularSmallDemo} from "./angular/alert-angular-small";
import {AlertAngularCloseEventDemo} from "./angular/alert-angular-close-event";
import {AlertsDemo} from "./alerts.demo";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {RouterModule} from "@angular/router";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        DocWrapperModule,
        UtilsModule,
        RouterModule.forChild([{path: "", component: AlertsDemo}])
    ],
    declarations: [
        AlertStylesDemo,
        AlertContentAreaDemo,
        AlertCardsDemo,
        AlertModalsDemo,
        AlertSizesDemo,
        AlertAppLevelDemo,

        AlertAngularAppLevelDemo,
        AlertAngularAppLevelAlertsDemo,
        AlertAngularNotClosableDemo,
        AlertAngularSuccessDemo,
        AlertAngularSmallDemo,
        AlertAngularCloseEventDemo,

        AlertsDemo
    ],
    exports: [
        AlertsDemo
    ]
})
export class AlertsDemoModule {
}
