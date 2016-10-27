import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./toggles.demo.routing";
import {TogglesDemo} from "./toggles.demo";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        TogglesDemo
    ],
    exports: [
        TogglesDemo
    ]
})
export default class TogglesDemoModule {
}