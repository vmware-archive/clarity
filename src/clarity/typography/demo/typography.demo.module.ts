/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./typography.demo.routing";
import {TypographyDemo} from "./typography.demo";
import {TypographyFontWeightDemo} from "./typography-font-weight";
import {TypographyHeadersDemo} from "./typography-headers";
import {TypographyTextDemo} from "./typography-text";
import {TypographyLinksDemo} from "./typography-links";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        TypographyDemo,
        TypographyFontWeightDemo,
        TypographyHeadersDemo,
        TypographyTextDemo,
        TypographyLinksDemo
    ],
    exports: [
        TypographyDemo,
        TypographyFontWeightDemo,
        TypographyHeadersDemo,
        TypographyTextDemo,
        TypographyLinksDemo
    ]
})
export default class TypographyDemoModule {
}