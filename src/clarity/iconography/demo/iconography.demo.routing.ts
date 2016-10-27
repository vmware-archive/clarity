import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {IconsDemo} from "./iconography.demo";

const ROUTES: Routes = [
    { path: "", component: IconsDemo }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);