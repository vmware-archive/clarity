/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClarityModule} from "../../clarity-angular/clarity.module";

import {LabelsClickableDemo} from "./labels-clickable";
import {LabelsColorOptionsDemo} from "./labels-color-options";
import {LabelsDefaultDemo} from "./labels-default";
import {LabelsStatusDemo} from "./labels-status";
import {LabelsWithBadgesDemo} from "./labels-with-badges";
import {LabelsDemo} from "./labels.demo";
import {ROUTING} from "./labels.demo.routing";

@NgModule({
    imports: [CommonModule, ClarityModule, ROUTING],
    declarations: [
        LabelsDemo, LabelsWithBadgesDemo, LabelsStatusDemo, LabelsClickableDemo, LabelsColorOptionsDemo,
        LabelsDefaultDemo
    ],
    exports: [
        LabelsDemo, LabelsWithBadgesDemo, LabelsStatusDemo, LabelsClickableDemo, LabelsColorOptionsDemo,
        LabelsDefaultDemo
    ]
})
export default class LabelsDemoModule {
}
