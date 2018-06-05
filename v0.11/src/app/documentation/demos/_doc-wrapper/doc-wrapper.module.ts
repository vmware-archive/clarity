/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "@clr/angular";

import {UtilsModule} from "../../../utils/utils.module";
import {RouterModule} from "@angular/router";
import {DocWrapper} from "./doc-wrapper";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        UtilsModule,
        RouterModule
    ],
    declarations: [
        DocWrapper
    ],
    exports: [
        DocWrapper
    ]
})
export class DocWrapperModule {
}
