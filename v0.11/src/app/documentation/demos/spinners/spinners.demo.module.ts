/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from '@clr/angular';

import {SpinnerSizesDemo} from "./spinner-sizes";
import {SpinnerTypesDemo} from "./spinner-types";
import {SpinnerDemo} from "./spinner.demo";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {RouterModule} from "@angular/router";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        DocWrapperModule,
        RouterModule.forChild([{path: "", component: SpinnerDemo}]),
        UtilsModule
    ],
    declarations: [
        SpinnerSizesDemo,
        SpinnerTypesDemo,
        SpinnerDemo
    ],
    exports: [
        SpinnerDemo
    ]
})
export class SpinnersDemoModule {
}
