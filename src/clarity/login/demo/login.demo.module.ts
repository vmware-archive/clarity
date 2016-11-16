/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./login.demo.routing";
import {LoginDemo} from "./login.demo";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        LoginDemo
    ],
    exports: [
        LoginDemo
    ]
})
export default class LoginDemoModule {
}