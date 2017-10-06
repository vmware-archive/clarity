/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClarityModule} from "../../clarity-angular/clarity.module";

import {ButtonLoadingDemo} from "./button-loading";
import {ButtonSizesDemo} from "./button-sizes";
import {ButtonStatesDemo} from "./button-states";
import {ButtonsIconsDemo} from "./buttons-icons";
import {ButtonsTestDemo} from "./buttons-test";
import {ButtonsDemo} from "./buttons.demo";
import {ROUTING} from "./buttons.demo.routing";
import {IconButtonsDemo} from "./icon-buttons";
import {InverseButtonDemo} from "./inverse-button";
import {PrimaryButtonDemo} from "./primary-button";
import {RealButtonDemo} from "./real-button";
import {SecondaryButtonDemo} from "./secondary-button";
import {TertiaryButtonDemo} from "./tertiary-button";
import {ToggleDemo} from "./toggles";

@NgModule({
    imports: [CommonModule, ClarityModule, ROUTING],
    declarations: [
        ButtonsDemo, RealButtonDemo, PrimaryButtonDemo, SecondaryButtonDemo, TertiaryButtonDemo, InverseButtonDemo,
        ButtonStatesDemo, ButtonLoadingDemo, ButtonSizesDemo, ToggleDemo, ButtonsTestDemo, ButtonsIconsDemo,
        IconButtonsDemo
    ],
    exports: [
        ButtonsDemo, RealButtonDemo, PrimaryButtonDemo, SecondaryButtonDemo, TertiaryButtonDemo, InverseButtonDemo,
        ButtonStatesDemo, ButtonLoadingDemo, ButtonSizesDemo, ToggleDemo, ButtonsTestDemo, ButtonsIconsDemo,
        IconButtonsDemo
    ]
})
export default class ButtonsDemoModule {}
