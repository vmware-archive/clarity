import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./tooltips.demo.routing";
import {TooltipsDemo} from "./tooltips.demo";
import {TooltipsSizesDemo} from "./tooltips-sizes";
import {TooltipsDirectionsDemo} from "./tooltips-directions";
import {TooltipsIconDemo} from "./tooltips-icons";
import {TooltipsTextDemo} from "./tooltips-text";
import {TooltipsButtonsDemo} from "./tooltips-buttons";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        TooltipsDemo,
        TooltipsSizesDemo,
        TooltipsDirectionsDemo,
        TooltipsIconDemo,
        TooltipsTextDemo,
        TooltipsButtonsDemo
    ],
    exports: [
        TooltipsDemo,
        TooltipsSizesDemo,
        TooltipsDirectionsDemo,
        TooltipsIconDemo,
        TooltipsTextDemo,
        TooltipsButtonsDemo
    ]
})
export default class TooltipsDemoModule {
}