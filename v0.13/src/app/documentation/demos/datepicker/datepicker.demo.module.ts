/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "@clr/angular";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {RouterModule} from "@angular/router";
import {UtilsModule} from "../../../utils/utils.module";
import {DatepickerDemo} from "./datepicker.demo";
import {DatepickerAPIDemo} from "./demos/datepicker-api.demo";
import {DatepickerFRDemo} from "./demos/datepicker-fr.demo";
import {DatepickerENUSDemo} from "./demos/datepicker-enUS.demo";
import {DatepickerInternationalizationDemo} from "./demos/datepicker-internationalization.demo";
import {DatepickerIODemo} from "./demos/datepicker-io.demo";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DatepickerDateIODemo} from "./demos/datepicker-date-io.demo";
import {DatepickerTemplateDrivenFormsDemo} from "./demos/datepicker-template-driven-forms";
import {DatepickerReactiveFormsDemo} from "./demos/datepicker-reactive-forms";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        FormsModule,
        UtilsModule,
        DocWrapperModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([{path: "", component: DatepickerDemo}])
    ],
    declarations: [
        DatepickerAPIDemo,
        DatepickerDemo,
        DatepickerFRDemo,
        DatepickerENUSDemo,
        DatepickerInternationalizationDemo,
        DatepickerIODemo,
        DatepickerDateIODemo,
        DatepickerTemplateDrivenFormsDemo,
        DatepickerReactiveFormsDemo
    ],
    exports: [
        DatepickerDemo
    ]
})
export class DatepickerDemoModule {
}
