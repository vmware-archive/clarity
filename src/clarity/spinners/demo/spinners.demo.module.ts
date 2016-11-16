/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./spinners.demo.routing";
import {SpinnerDemo} from "./spinner.demo";
import {SpinnerSizesDemo} from "./spinner-sizes";
import {SpinnerTypesDemo} from "./spinner-types";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        SpinnerDemo,
        SpinnerSizesDemo,
        SpinnerTypesDemo
    ],
    exports: [
        SpinnerDemo,
        SpinnerSizesDemo,
        SpinnerTypesDemo
    ]
})
export default class SpinnersDemoModule {
}