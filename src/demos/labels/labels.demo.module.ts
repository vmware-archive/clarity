/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from 'clarity-angular';


import {LabelsWithBadgesDemo} from "./labels-with-badges";
import {LabelsStatusDemo} from "./labels-status";
import {LabelsClickableDemo} from "./labels-clickable";
import {LabelsColorOptionsDemo} from "./labels-color-options";
import {LabelsDefaultDemo} from "./labels-default";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forRoot(),
    ],
    declarations: [
        LabelsWithBadgesDemo,
        LabelsStatusDemo,
        LabelsClickableDemo,
        LabelsColorOptionsDemo,
        LabelsDefaultDemo
    ],
    exports: [
        LabelsWithBadgesDemo,
        LabelsStatusDemo,
        LabelsClickableDemo,
        LabelsColorOptionsDemo,
        LabelsDefaultDemo
    ]
})
export default class LabelsDemoModule {
}
