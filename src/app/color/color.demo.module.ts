/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ROUTING} from "./color.demo.routing";
import {ColorsDemo} from "./color.demo";
import {ColorLuminanceDemo} from "./color-luminance";
import {ColorContrastDemo} from "./color-contrast";
import { ColorPalette } from "./color-palette";

@NgModule({
    imports: [
        CommonModule,
        ROUTING
    ],
    declarations: [
        ColorsDemo,
        ColorPalette,
        ColorLuminanceDemo,
        ColorContrastDemo
    ],
    exports: [
        ColorsDemo,
        ColorPalette,
        ColorLuminanceDemo,
        ColorContrastDemo
    ]
})
export default class ColorDemoModule {
}
