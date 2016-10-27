import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./input-fields.demo.routing";
import {InputFieldsDemo} from "./input-fields.demo";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        InputFieldsDemo
    ],
    exports: [
        InputFieldsDemo
    ]
})
export default class InputFieldsDemoModule {
}