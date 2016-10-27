import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./iconography.demo.routing";
import {IconsDemo} from "./iconography.demo";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        IconsDemo
    ],
    exports: [
        IconsDemo
    ]
})
export default class IconographyDemoModule {
}