/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from 'clarity-angular';

import {RealButtonDemo} from "./real-button";
import {PrimaryButtonDemo} from "./primary-button";
import {SecondaryButtonDemo} from "./secondary-button";
import {TertiaryButtonDemo} from "./tertiary-button";
import {InverseButtonDemo} from "./inverse-button";
import {ButtonStatesDemo} from "./button-states";
import {ButtonSizesDemo} from "./button-sizes";
import {ToggleDemo} from "./toggles";
import {ButtonsTestDemo} from "./buttons-test";
import {ButtonsIconsDemo} from "./buttons-icons";
import {ButtonLoadingDemo} from "./button-loading";
import {Example} from "./utils/example";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forChild(),
    ],
    declarations: [
        RealButtonDemo,
        PrimaryButtonDemo,
        SecondaryButtonDemo,
        TertiaryButtonDemo,
        InverseButtonDemo,
        ButtonStatesDemo,
        ButtonSizesDemo,
        ToggleDemo,
        ButtonsTestDemo,
        ButtonsIconsDemo,
        ButtonLoadingDemo,
        Example
    ],
    exports: [
        RealButtonDemo,
        PrimaryButtonDemo,
        SecondaryButtonDemo,
        TertiaryButtonDemo,
        InverseButtonDemo,
        ButtonStatesDemo,
        ButtonSizesDemo,
        ToggleDemo,
        ButtonsTestDemo,
        ButtonsIconsDemo,
        ButtonLoadingDemo
    ]
})
export default class ButtonsDemoModule {
}
