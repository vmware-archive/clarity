/*
 * Copyright (c) 2016-2017 VMWare, Inc. All Rights Reserved.
 * This software is released under MIT License.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ClarityModule } from "@clr/angular";

import { RouterModule } from "@angular/router";
import { DocWrapperModule } from "../_doc-wrapper/doc-wrapper.module";
import { UtilsModule } from "../../../utils/utils.module";

import {ThemesDemo} from "./themes.demo";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClarityModule,
        RouterModule.forChild([{path: "", component: ThemesDemo}]),
        DocWrapperModule,
        UtilsModule
    ],
    declarations: [
        ThemesDemo
    ]
})
export class ThemesDemoModule {
}

