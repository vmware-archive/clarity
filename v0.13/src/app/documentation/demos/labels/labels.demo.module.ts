/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from '@clr/angular';


import {LabelsWithBadgesDemo} from "./labels-with-badges";
import {LabelsStatusDemo} from "./labels-status";
import {LabelsClickableDemo} from "./labels-clickable";
import {LabelsColorOptionsDemo} from "./labels-color-options";
import {LabelsDefaultDemo} from "./labels-default";
import {LabelsDemo} from "./labels.demo";
import {RouterModule} from "@angular/router";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {UtilsModule} from "../../../utils/utils.module";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        RouterModule.forChild([{path: "", component: LabelsDemo}]),
        DocWrapperModule,
        UtilsModule
    ],
    declarations: [
        LabelsWithBadgesDemo,
        LabelsStatusDemo,
        LabelsClickableDemo,
        LabelsColorOptionsDemo,
        LabelsDefaultDemo,
        LabelsDemo
    ],
    exports: [
        LabelsDemo
    ]
})
export class LabelsDemoModule {
}
