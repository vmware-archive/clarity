/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./forms.demo.routing";
import {FormsDemo} from "./forms.demo";
import {FormFieldsDemo} from "./form-fields";
import {FormTestDemo} from "./form-test";
import {FormValidationDemo} from "./form-validation";
import {FormCompactDemo} from "./form-compact";
import {FormGridDemo} from "./form-grid";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        FormsDemo,
        FormFieldsDemo,
        FormGridDemo,
        FormTestDemo,
        FormValidationDemo,
        FormCompactDemo
    ],
    exports: [
        FormsDemo,
        FormFieldsDemo,
        FormGridDemo,
        FormTestDemo,
        FormValidationDemo,
        FormCompactDemo
    ]
})
export default class FormsDemoModule {
}