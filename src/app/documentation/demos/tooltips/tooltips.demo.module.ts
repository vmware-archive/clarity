/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "@clr/angular";

import {TooltipsSizesDemo} from "./tooltips-sizes";
import {TooltipsDirectionsDemo} from "./tooltips-directions";
import {TooltipsIconDemo} from "./tooltips-icons";
import {TooltipsTextDemo} from "./tooltips-text";
import {TooltipsButtonsDemo} from "./tooltips-buttons";
import {TooltipsAngularDemo} from "./tooltips-angular";
import {TooltipsDemo} from "./tooltips.demo";
import {RouterModule} from "@angular/router";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        RouterModule.forChild([{path: "", component: TooltipsDemo}]),
        DocWrapperModule,
        UtilsModule
    ],
    declarations: [
        TooltipsSizesDemo,
        TooltipsDirectionsDemo,
        TooltipsIconDemo,
        TooltipsTextDemo,
        TooltipsButtonsDemo,
        TooltipsAngularDemo,
        TooltipsDemo
    ],
    exports: [
        TooltipsDemo
    ]
})
export class TooltipsDemoModule {
}
