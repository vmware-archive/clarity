/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "@clr/angular";

import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {AppLayoutDemo} from "./app-layout.demo";
import {RouterModule} from "@angular/router";
import {LayoutAllDemo} from "./layout-all";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        DocWrapperModule,
        UtilsModule,
        RouterModule.forChild([{path: "", component: AppLayoutDemo}])
    ],
    declarations: [
        AppLayoutDemo,
        LayoutAllDemo
    ],
    exports: [
        AppLayoutDemo
    ]
})
export class AppLayoutDemoModule {
}
