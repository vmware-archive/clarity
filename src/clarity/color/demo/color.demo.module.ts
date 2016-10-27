import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./color.demo.routing";
import {ColorsDemo} from "./color.demo";
import {ColorPaletteBaseDemo} from "./color-palette-base";
import {ColorPaletteStoplightDemo} from "./color-palette-stoplight";
import {ColorPaletteHighlightDemo} from "./color-palette-highlight";
import {ColorLuminanceDemo} from "./color-luminance";
import {ColorContrastDemo} from "./color-contrast";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        ColorsDemo,
        ColorPaletteBaseDemo,
        ColorPaletteStoplightDemo,
        ColorPaletteHighlightDemo,
        ColorLuminanceDemo,
        ColorContrastDemo
    ],
    exports: [
        ColorsDemo,
        ColorPaletteBaseDemo,
        ColorPaletteStoplightDemo,
        ColorPaletteHighlightDemo,
        ColorLuminanceDemo,
        ColorContrastDemo
    ]
})
export default class ColorDemoModule {
}