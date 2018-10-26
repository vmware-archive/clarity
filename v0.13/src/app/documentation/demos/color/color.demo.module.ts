/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClarityModule } from "@clr/angular";

import { ColorLuminanceDemo } from "./color-luminance";
import { ColorContrastDemo } from "./color-contrast";
import { ColorPalette } from "./color-palette";
import { ColorFunctional } from "./color-palette-functional";
import { ColorScheme } from "./color-scheme";
import { RouterModule } from "@angular/router";
import { DocWrapperModule } from "../_doc-wrapper/doc-wrapper.module";
import { ColorDemo } from "./color.demo";
import { ClipboardInput } from "./clipboard-input";


@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        RouterModule.forChild([{path: "", component: ColorDemo}]),
        DocWrapperModule
    ],
    declarations: [
        ColorPalette,
        ColorFunctional,
        ColorScheme,
        ClipboardInput,
        ColorLuminanceDemo,
        ColorContrastDemo,
        ColorDemo
    ],
    exports: [
        ColorDemo
    ]
})
export class ColorDemoModule {
}
