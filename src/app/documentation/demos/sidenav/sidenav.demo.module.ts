/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "clarity-angular";

import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {RouterModule} from "@angular/router";
import {SidenavDemo} from "./sidenav.demo";
import {SidenavExample} from "./sidenav";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forChild(),
        DocWrapperModule,
        RouterModule,
        UtilsModule
    ],
    declarations: [
        SidenavDemo,
        SidenavExample
    ],
    exports: [
        SidenavDemo
    ]
})
export class SidenavDemoModule {
}
