/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "@clr/angular";
import {InputFieldsDemo} from "./input-fields.demo";
import {InputFieldsTypesDemo} from "./input-fields-types.demo";
import {RouterModule} from "@angular/router";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {FormValidationDemo} from "./form-validation";
import {UtilsModule} from "../../../utils/utils.module";
import {RequiredFieldsDemo} from "./required-fields.demo";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        RouterModule.forChild([{path: "", component: InputFieldsDemo}]),
        DocWrapperModule,
        UtilsModule
    ],
    declarations: [
        InputFieldsTypesDemo,
        InputFieldsDemo,
        FormValidationDemo,
        RequiredFieldsDemo
    ],
    exports: [
        InputFieldsDemo
    ]
})
export class InputFieldsDemoModule {
}
