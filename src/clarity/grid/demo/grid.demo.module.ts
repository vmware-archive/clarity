import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./grid.demo.routing";
import {GridAutoLayout1Demo} from "./grid-auto-layout-1";
import {GridAutoLayout2Demo} from "./grid-auto-layout-2";
import {GridColumnsDemo} from "./grid-columns";
import {GridColumnStackingDemo} from "./grid-column-stacking";
import {GridColumnOffsettingDemo} from "./grid-column-offsetting";
import {GridColumnPushDemo} from "./grid-column-push";
import {GridColumnPullDemo} from "./grid-column-pull";
import {GridDemo} from "./grid.demo";
import {GridItemsHorizontalAlignmentDemo} from "./grid-items-horizontal-alignment";
import {GridItemsIndividualVerticalAlignmentDemo} from "./grid-items-individual-vertical-alignment";
import {GridItemsVerticalAlignmentDemo} from "./grid-items-vertical-alignment";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        GridAutoLayout1Demo,
        GridAutoLayout2Demo,
        GridColumnsDemo,
        GridColumnStackingDemo,
        GridColumnOffsettingDemo,
        GridColumnPushDemo,
        GridColumnPullDemo,
        GridDemo,
        GridItemsHorizontalAlignmentDemo,
        GridItemsIndividualVerticalAlignmentDemo,
        GridItemsVerticalAlignmentDemo
    ],
    exports: [
        GridAutoLayout1Demo,
        GridAutoLayout2Demo,
        GridColumnsDemo,
        GridColumnStackingDemo,
        GridColumnOffsettingDemo,
        GridColumnPushDemo,
        GridColumnPullDemo,
        GridDemo,
        GridItemsHorizontalAlignmentDemo,
        GridItemsIndividualVerticalAlignmentDemo,
        GridItemsVerticalAlignmentDemo
    ]
})
export default class GridDemoModule {
}