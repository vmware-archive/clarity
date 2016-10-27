import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {ImagesDemo} from "./images.demo";

const ROUTES: Routes = [
    { path: "", component: ImagesDemo }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);