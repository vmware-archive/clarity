import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./card.demo.routing";
import {CardDemo} from "./card.demo";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        CardDemo
    ],
    exports: [
        CardDemo
    ]
})
export default class CardDemoModule {
}