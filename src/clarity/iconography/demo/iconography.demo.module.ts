import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClarityModule } from "../../clarity.module";
import { ROUTING } from "./iconography.demo.routing";
import { IconsDemo } from "./iconography.demo";
import { IconSelectionDemo } from "./icon-selection";
import { IconColorsDemo } from "./icon-colors";
import { IconSizeDemo } from "./icon-size";
import { IconOrientationDemo } from "./icon-orientation";
import { IconInverseColorDemo } from "./icon-inverse-color";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        IconsDemo,
        IconColorsDemo,
        IconOrientationDemo,
        IconSelectionDemo,
        IconSizeDemo,
        IconInverseColorDemo
    ],
    exports: [
        IconsDemo,
        IconColorsDemo,
        IconOrientationDemo,
        IconSelectionDemo,
        IconSizeDemo,
        IconInverseColorDemo
    ]
})
export default class IconographyDemoModule {
}
