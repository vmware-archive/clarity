import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./alert.demo.routing";
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
        AlertTypesDemo,
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
        AlertTypesDemo,
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
