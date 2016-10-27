import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./radios.demo.routing";
import {RadiosDemo} from "./radios.demo";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        RadiosDemo
    ],
    exports: [
        RadiosDemo
    ]
})
export default class RadiosDemoModule {
}