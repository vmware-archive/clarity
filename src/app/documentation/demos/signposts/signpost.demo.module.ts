/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ClarityModule } from "@clr/angular";

import { RouterModule } from "@angular/router";
import { DocWrapperModule } from "../_doc-wrapper/doc-wrapper.module";
import { UtilsModule } from "../../../utils/utils.module";

import { SignpostDemo } from "./signpost.demo";
import { SignpostParagraphDemo } from "./signpost-paragraph.demo";
import { SignpostPositionsDemo } from "./signpost-positions.demo";
import { SignpostTriggersDemo } from "./signpost-triggers.demo";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClarityModule,
        RouterModule.forChild([{path: "", component: SignpostDemo}]),
        DocWrapperModule,
        UtilsModule
    ],
    declarations: [
        SignpostDemo,
        SignpostParagraphDemo,
        SignpostPositionsDemo,
        SignpostTriggersDemo
    ]
})
export class SignpostDemoModule {
}
