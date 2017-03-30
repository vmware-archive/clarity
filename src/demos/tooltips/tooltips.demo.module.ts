/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from 'clarity-angular';

import {TooltipsSizesDemo} from "./tooltips-sizes";
import {TooltipsDirectionsDemo} from "./tooltips-directions";
import {TooltipsIconDemo} from "./tooltips-icons";
import {TooltipsTextDemo} from "./tooltips-text";
import {TooltipsButtonsDemo} from "./tooltips-buttons";
import {TooltipsAngularDemo} from "./tooltips-angular";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forChild(),
    ],
    declarations: [
        TooltipsSizesDemo,
        TooltipsDirectionsDemo,
        TooltipsIconDemo,
        TooltipsTextDemo,
        TooltipsButtonsDemo,
        TooltipsAngularDemo
    ],
    exports: [
        TooltipsSizesDemo,
        TooltipsDirectionsDemo,
        TooltipsIconDemo,
        TooltipsTextDemo,
        TooltipsButtonsDemo,
        TooltipsAngularDemo
    ]
})
export default class TooltipsDemoModule {
}
