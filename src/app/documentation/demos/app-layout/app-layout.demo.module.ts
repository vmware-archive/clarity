/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "clarity-angular";

import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {AppLayoutDemo} from "./app-layout.demo";
import {LayoutDemoModule} from "../layout/layout.demo.module";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forChild(),
        DocWrapperModule,
        LayoutDemoModule,
        RouterModule
    ],
    declarations: [
        AppLayoutDemo
    ],
    exports: [
        AppLayoutDemo
    ]
})
export class AppLayoutDemoModule {
}
