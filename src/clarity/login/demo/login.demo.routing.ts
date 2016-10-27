import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {LoginDemo} from "./login.demo";

const ROUTES: Routes = [
    { path: "", component: LoginDemo }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);