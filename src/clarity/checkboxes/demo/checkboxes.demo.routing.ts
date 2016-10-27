import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {CheckboxesDemo} from "./checkboxes.demo";

const ROUTES: Routes = [
    { path: "", component: CheckboxesDemo }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);