/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule, ClrFormsNextModule} from "@clr/angular";
import {FormsModule} from "@angular/forms";

import {RadioDemo} from "./radio.demo";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {RouterModule} from "@angular/router";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ClrFormsNextModule,
        FormsModule,
        RouterModule.forChild([{path: "", component: RadioDemo}]),
        DocWrapperModule,
        UtilsModule
    ],
    declarations: [
        RadioDemo
    ],
    exports: [
        RadioDemo
    ]
})
export class RadioDemoModule {
}
