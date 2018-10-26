/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "@clr/angular";

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
import {ButtonsDemo} from "./buttons.demo";

import {RouterModule} from "@angular/router";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {ButtonsIconsSmallDemo} from "./buttons-icons-sm";
import {UtilsModule} from "../../../utils/utils.module";
import {IconButtonsDemo} from "./icon-buttons";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        DocWrapperModule,
        RouterModule.forChild([{path: "", component: ButtonsDemo}]),
        UtilsModule
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
        ButtonsIconsSmallDemo,
        ButtonLoadingDemo,
        IconButtonsDemo,

        ButtonsDemo
    ],
    exports: [
        ButtonsDemo
    ]
})
export class ButtonsDemoModule {
}
