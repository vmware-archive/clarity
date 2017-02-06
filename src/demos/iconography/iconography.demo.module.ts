/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClarityModule } from 'clarity-angular';
import { IconSelectionDemo } from "./icon-selection";
import { IconColorsDemo } from "./icon-colors";
import { IconSizeDemo } from "./icon-size";
import { IconOrientationDemo } from "./icon-orientation";
import { IconInverseColorDemo } from "./icon-inverse-color";
import { IconVariantsDemo } from "./icon-variants";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forRoot(),
    ],
    declarations: [
        IconColorsDemo,
        IconOrientationDemo,
        IconSelectionDemo,
        IconSizeDemo,
        IconInverseColorDemo,
        IconVariantsDemo
    ],
    exports: [
        IconColorsDemo,
        IconOrientationDemo,
        IconSelectionDemo,
        IconSizeDemo,
        IconInverseColorDemo,
        IconVariantsDemo
    ],
    // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class IconographyDemoModule {
}
