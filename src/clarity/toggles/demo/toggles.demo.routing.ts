import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {TogglesDemo} from "./toggles.demo";

const ROUTES: Routes = [
    { path: "", component: TogglesDemo }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
