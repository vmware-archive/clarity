/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "@clr/angular";
import {FormsModule} from "@angular/forms";

import {TextareaDemo} from "./textarea.demo";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {RouterModule} from "@angular/router";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        FormsModule,
        RouterModule.forChild([{path: "", component: TextareaDemo}]),
        DocWrapperModule,
        UtilsModule
    ],
    declarations: [
        TextareaDemo
    ],
    exports: [
        TextareaDemo
    ]
})
export class TextareaDemoModule {
}
