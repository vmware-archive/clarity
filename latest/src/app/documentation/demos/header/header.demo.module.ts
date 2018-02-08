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
import {HeaderDemo} from "./header.demo";
import {HeaderLinksDemo} from "./header-links";
import {HeaderTypesDemo} from "./header-types";
import {HeaderColorsDemo} from "./header-colors";
import {SubNavDemo} from "./sub-nav";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        DocWrapperModule,
        RouterModule.forChild([{path: "", component: HeaderDemo}]),
        UtilsModule
    ],
    declarations: [
        HeaderColorsDemo,
        HeaderLinksDemo,
        HeaderTypesDemo,
        SubNavDemo,
        HeaderDemo
    ],
    exports: [
        HeaderDemo
    ]
})
export class HeaderDemoModule {
}
