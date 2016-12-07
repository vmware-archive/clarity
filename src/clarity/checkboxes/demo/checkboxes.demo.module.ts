/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./checkboxes.demo.routing";
import {CheckboxesDemo} from "./checkboxes.demo";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        CheckboxesDemo
    ],
    exports: [
        CheckboxesDemo
    ]
})
export default class CheckboxesDemoModule {

}