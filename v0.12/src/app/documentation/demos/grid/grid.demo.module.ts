/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from '@clr/angular';

import {GridAutoLayout1Demo} from "./grid-auto-layout-1";
import {GridAutoLayout2Demo} from "./grid-auto-layout-2";
import {GridColumnsDemo} from "./grid-columns";
import {GridColumnStackingDemo} from "./grid-column-stacking";
import {GridColumnOffsettingDemo} from "./grid-column-offsetting";
import {GridItemsHorizontalAlignmentDemo} from "./grid-items-horizontal-alignment";
import {GridItemsIndividualVerticalAlignmentDemo} from "./grid-items-individual-vertical-alignment";
import {GridItemsVerticalAlignmentDemo} from "./grid-items-vertical-alignment";
import {GridDemo} from "./grid.demo";
import {DocWrapperModule} from "../_doc-wrapper/doc-wrapper.module";
import {RouterModule} from "@angular/router";
import {UtilsModule} from "../../../utils/utils.module";
import {GridColumnOrderingDemo} from "./grid-column-ordering";
import {GridAutoLayout3Demo} from "./grid-auto-layout-3";
import {GridAutoLayout4Demo} from "./grid-auto-layout-4";
import {GridColumnWrappingDemo} from "./grid-column-wrapping";
import {GridNestingDemo} from "./grid-nesting";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        RouterModule.forChild([{path: "", component: GridDemo}]),
        DocWrapperModule,
        UtilsModule
    ],
    declarations: [
        GridAutoLayout1Demo,
        GridAutoLayout2Demo,
        GridAutoLayout3Demo,
        GridAutoLayout4Demo,
        GridColumnsDemo,
        GridColumnStackingDemo,
        GridColumnWrappingDemo,
        GridColumnOffsettingDemo,
        GridColumnOrderingDemo,
        GridItemsHorizontalAlignmentDemo,
        GridItemsIndividualVerticalAlignmentDemo,
        GridItemsVerticalAlignmentDemo,
        GridNestingDemo,
        GridDemo
    ],
    exports: [
        GridDemo
    ]
})
export class GridDemoModule {
}
