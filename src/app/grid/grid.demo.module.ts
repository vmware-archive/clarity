/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClarityModule} from "../../clarity-angular/clarity.module";

import {GridAutoLayout1Demo} from "./grid-auto-layout-1";
import {GridAutoLayout2Demo} from "./grid-auto-layout-2";
import {GridColumnOffsettingDemo} from "./grid-column-offsetting";
import {GridColumnPullDemo} from "./grid-column-pull";
import {GridColumnPushDemo} from "./grid-column-push";
import {GridColumnStackingDemo} from "./grid-column-stacking";
import {GridColumnsDemo} from "./grid-columns";
import {GridItemsHorizontalAlignmentDemo} from "./grid-items-horizontal-alignment";
import {GridItemsIndividualVerticalAlignmentDemo} from "./grid-items-individual-vertical-alignment";
import {GridItemsVerticalAlignmentDemo} from "./grid-items-vertical-alignment";
import {GridDemo} from "./grid.demo";
import {ROUTING} from "./grid.demo.routing";

@NgModule({
    imports: [CommonModule, ClarityModule, ROUTING],
    declarations: [
        GridAutoLayout1Demo, GridAutoLayout2Demo, GridColumnsDemo, GridColumnStackingDemo, GridColumnOffsettingDemo,
        GridColumnPushDemo, GridColumnPullDemo, GridDemo, GridItemsHorizontalAlignmentDemo,
        GridItemsIndividualVerticalAlignmentDemo, GridItemsVerticalAlignmentDemo
    ],
    exports: [
        GridAutoLayout1Demo, GridAutoLayout2Demo, GridColumnsDemo, GridColumnStackingDemo, GridColumnOffsettingDemo,
        GridColumnPushDemo, GridColumnPullDemo, GridDemo, GridItemsHorizontalAlignmentDemo,
        GridItemsIndividualVerticalAlignmentDemo, GridItemsVerticalAlignmentDemo
    ]
})
export default class GridDemoModule {}
