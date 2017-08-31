/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "clarity-angular";
import {FormsModule}   from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";

import {FormFieldsDemo} from "./form-fields";
import {FormTestDemo} from "./form-test";
import {FormValidationDemo} from "./form-validation";
import {FormCompactDemo} from "./form-compact";
import {FormGridDemo} from "./form-grid";

import {TemplateDrivenFormsDemo} from "./template-driven-forms/template-driven-forms";
import {ReactiveFormsDemo} from "./reactive-forms/reactive-forms";

import {FormsDemo} from "./forms.demo";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {RouterModule} from "@angular/router";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forChild(),
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        DocWrapperModule,
        UtilsModule
    ],
    declarations: [
        FormFieldsDemo,
        FormGridDemo,
        FormTestDemo,
        FormValidationDemo,
        FormCompactDemo,
        TemplateDrivenFormsDemo,
        ReactiveFormsDemo,
        FormsDemo
    ],
    exports: [
        FormsDemo
    ]
})
export class FormsDemoModule {
}
