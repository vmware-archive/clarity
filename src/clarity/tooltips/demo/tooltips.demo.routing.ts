import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {TooltipsDemo} from "./tooltips.demo";
import {TooltipsSizesDemo} from "./tooltips-sizes";
import {TooltipsDirectionsDemo} from "./tooltips-directions";
import {TooltipsIconDemo} from "./tooltips-icons";
import {TooltipsTextDemo} from "./tooltips-text";
import {TooltipsButtonsDemo} from "./tooltips-buttons";

const ROUTES: Routes = [
    {
        path: "",
        component: TooltipsDemo,
        children: [
            { path: "", redirectTo: "sizes", pathMatch: "full" },
            { path: "sizes", component: TooltipsSizesDemo },
            { path: "directions", component: TooltipsDirectionsDemo },
            { path: "icon-tooltips", component: TooltipsIconDemo },
            { path: "text-tooltips", component: TooltipsTextDemo },
            { path: "button-tooltips", component: TooltipsButtonsDemo }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);