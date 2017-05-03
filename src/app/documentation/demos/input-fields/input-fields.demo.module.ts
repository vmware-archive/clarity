/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "clarity-angular";
import {InputFieldsDemo} from "./input-fields.demo";
import {InputFieldsTypesDemo} from "./input-fields-types.demo";
import {RouterModule} from "@angular/router";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {FormValidationDemo} from "./form-validation";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forChild(),
        RouterModule,
        DocWrapperModule,
        UtilsModule
    ],
    declarations: [
        InputFieldsTypesDemo,
        InputFieldsDemo,
        FormValidationDemo
    ],
    exports: [
        InputFieldsDemo
    ]
})
export class InputFieldsDemoModule {
}
