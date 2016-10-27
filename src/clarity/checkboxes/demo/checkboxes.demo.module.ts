import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./checkboxes.demo.routing";
import {CheckboxesDemo} from "./checkboxes.demo";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        CheckboxesDemo
    ],
    exports: [
        CheckboxesDemo
    ]
})
export default class CheckboxesDemoModule {
}