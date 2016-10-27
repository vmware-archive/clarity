import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./labels.demo.routing";

import {LabelsDemo} from "./labels.demo";
import {LabelsWithBadgesDemo} from "./labels-with-badges";
import {LabelsStatusDemo} from "./labels-status";
import {LabelsClickableDemo} from "./labels-clickable";
import {LabelsColorOptionsDemo} from "./labels-color-options";
import {LabelsDefaultDemo} from "./labels-default";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        LabelsDemo,
        LabelsWithBadgesDemo,
        LabelsStatusDemo,
        LabelsClickableDemo,
        LabelsColorOptionsDemo,
        LabelsDefaultDemo
    ],
    exports: [
        LabelsDemo,
        LabelsWithBadgesDemo,
        LabelsStatusDemo,
        LabelsClickableDemo,
        LabelsColorOptionsDemo,
        LabelsDefaultDemo
    ]
})
export default class LabelsDemoModule {
}
