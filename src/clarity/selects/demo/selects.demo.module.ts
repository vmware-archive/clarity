import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./selects.demo.routing";
import {SelectsDemo} from "./selects.demo";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        SelectsDemo
    ],
    exports: [
        SelectsDemo
    ]
})
export default class SelectsDemoModule {
}