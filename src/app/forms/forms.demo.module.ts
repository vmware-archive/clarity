/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity-angular/clarity.module";
import {ROUTING} from "./forms.demo.routing";
import {FormsModule}   from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {FormsDemo} from "./forms.demo";
import {FormFieldsDemo} from "./form-fields/form-fields";
import {FormTestDemo} from "./form-test/form-test";
import {FormValidationDemo} from "./form-validation-static/form-validation";
import {FormCompactDemo} from "./compact-forms/form-compact";
import {FormGridDemo} from "./form-grid/form-grid";
import {TemplateDrivenFormsDemo} from "./template-driven-forms/template-driven-forms";
import {ReactiveFormsDemo} from "./reactive-forms/reactive-forms";
import {Example} from "./utils/example";
import {FormGridValidationDemo} from "./form-grid-validation/form-grid-validation";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        FormsDemo,
        FormFieldsDemo,
        FormGridDemo,
        FormTestDemo,
        FormValidationDemo,
        FormGridValidationDemo,
        FormCompactDemo,
        TemplateDrivenFormsDemo,
        ReactiveFormsDemo,
        Example
    ],
    exports: [
        FormsDemo,
        FormFieldsDemo,
        FormGridDemo,
        FormTestDemo,
        FormValidationDemo,
        FormGridValidationDemo,
        FormCompactDemo,
        TemplateDrivenFormsDemo,
        ReactiveFormsDemo
    ]
})
export default class FormsDemoModule {
}
