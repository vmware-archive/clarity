/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from '@clr/angular';

import {TypographyFontWeightDemo} from "./typography-font-weight";
import {TypographyHeadersDemo} from "./typography-headers";
import {TypographyTextDemo} from "./typography-text";
import {TypographyLinksDemo} from "./typography-links";
import {TypographyFontCharTestDemo} from "./typography-font-char-test";
import {TypographyDemo} from "./typography.demo";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {RouterModule} from "@angular/router";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        DocWrapperModule,
        RouterModule.forChild([{path: "", component: TypographyDemo}]),
        UtilsModule
    ],
    declarations: [
        TypographyFontWeightDemo,
        TypographyHeadersDemo,
        TypographyTextDemo,
        TypographyLinksDemo,
        TypographyFontCharTestDemo,
        TypographyDemo
    ],
    exports: [
        TypographyDemo
    ]
})
export class TypographyDemoModule {
}
