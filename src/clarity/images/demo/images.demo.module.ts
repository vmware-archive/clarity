import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./images.demo.routing";
import {ImagesDemo} from "./images.demo";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        ImagesDemo
    ],
    exports: [
        ImagesDemo
    ]
})
export default class ImagesDemoModule {
}