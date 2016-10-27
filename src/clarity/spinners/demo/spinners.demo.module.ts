import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./spinners.demo.routing";
import {SpinnerDemo} from "./spinner.demo";
import {SpinnerSizesDemo} from "./spinner-sizes";
import {SpinnerTypesDemo} from "./spinner-types";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        SpinnerDemo,
        SpinnerSizesDemo,
        SpinnerTypesDemo
    ],
    exports: [
        SpinnerDemo,
        SpinnerSizesDemo,
        SpinnerTypesDemo
    ]
})
export default class SpinnersDemoModule {
}