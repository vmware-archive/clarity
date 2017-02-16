/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity-angular";
import {ROUTING} from "./buttons.demo.routing";
import {BasicButtonGroupDemo} from "./basic-button-group";
import {ButtonGroupDemo} from "./button-group.demo";
import {StaticButtonGroupDemo} from "./static-button-group";
import {HideOverflowMenuDemo} from "./hide-overflow-menu";
import {MenuDirectionsDemo} from "./menu-directions";
import {ProjectionUpdateTestDemo} from "./projection-update-test";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        ButtonGroupDemo,
        BasicButtonGroupDemo,
        StaticButtonGroupDemo,
        HideOverflowMenuDemo,
        MenuDirectionsDemo,
        ProjectionUpdateTestDemo
    ],
    exports: [
        ButtonGroupDemo,
        BasicButtonGroupDemo,
        StaticButtonGroupDemo,
        HideOverflowMenuDemo,
        MenuDirectionsDemo,
        ProjectionUpdateTestDemo
    ]
})
export default class ButtonGroupDemoModule {
}
