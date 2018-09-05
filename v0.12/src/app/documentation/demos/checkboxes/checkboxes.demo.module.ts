/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ClarityModule} from "@clr/angular";

import {CheckboxesDemo} from "./checkboxes.demo";

import {Status} from "./data/status";
import {CheckboxesTypesDemo} from "./checkboxes-types.demo";
import {RouterModule} from "@angular/router";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClarityModule,
        DocWrapperModule,
        RouterModule.forChild([{path: "", component: CheckboxesDemo}]),
        UtilsModule
    ],
    declarations: [
        CheckboxesTypesDemo,
        CheckboxesDemo
    ],
    providers: [
        Status
    ],
    exports: [
        CheckboxesDemo
    ]
})
export class CheckboxesDemoModule {
}
