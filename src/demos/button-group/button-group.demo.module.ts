/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from 'clarity-angular';
import {ButtonGroupBasicStructureDemo} from "./basic-structure";
import {ButtonGroupTypes} from "./types";
import {MixedButtonGroupDemo} from "./mixed";
import {ButtonGroupIconsDemo} from "./icons";
import {ButtonGroupCheckboxDemo} from "./checkbox";
import {ButtonGroupRadioDemo} from "./radio";
import {ButtonGroupAngularBasicStructureDemo} from "./angular-basic-structure";
import {ButtonGroupAngularTypes} from "./angular-types";
import {ButtonGroupAngularDirectionsDemo} from "./angular-directions";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forChild(),
    ],
    declarations: [
        ButtonGroupBasicStructureDemo,
        ButtonGroupTypes,
        MixedButtonGroupDemo,
        ButtonGroupIconsDemo,
        ButtonGroupCheckboxDemo,
        ButtonGroupRadioDemo,
        ButtonGroupAngularBasicStructureDemo,
        ButtonGroupAngularTypes,
        ButtonGroupAngularDirectionsDemo
    ],
    exports: [
        ButtonGroupBasicStructureDemo,
        ButtonGroupTypes,
        MixedButtonGroupDemo,
        ButtonGroupIconsDemo,
        ButtonGroupCheckboxDemo,
        ButtonGroupRadioDemo,
        ButtonGroupAngularBasicStructureDemo,
        ButtonGroupAngularTypes,
        ButtonGroupAngularDirectionsDemo
    ]
})
export default class ButtonGroupDemoModule {
}
