import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {RadiosDemo} from "./radios.demo";

const ROUTES: Routes = [
    { path: "", component: RadiosDemo }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);