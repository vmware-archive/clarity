import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {ColorsDemo} from "./color.demo";
import {ColorPaletteBaseDemo} from "./color-palette-base";
import {ColorPaletteStoplightDemo} from "./color-palette-stoplight";
import {ColorPaletteHighlightDemo} from "./color-palette-highlight";
import {ColorLuminanceDemo} from "./color-luminance";
import {ColorContrastDemo} from "./color-contrast";

const ROUTES: Routes = [
    {
        path: "",
        component: ColorsDemo,
        children: [
            { path: "", redirectTo: "color-palette-base", pathMatch: "full" },
            { path: "color-palette-base", component: ColorPaletteBaseDemo },
            { path: "color-palette-stoplight", component: ColorPaletteStoplightDemo},
            { path: "color-palette-highlight", component: ColorPaletteHighlightDemo},
            { path: "color-luminance", component: ColorLuminanceDemo },
            { path: "color-contrast", component: ColorContrastDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders  = RouterModule.forChild(ROUTES);