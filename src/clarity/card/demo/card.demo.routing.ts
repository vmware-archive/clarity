import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {CardDemo} from "./card.demo";

const ROUTES: Routes = [
    { path: "", component: CardDemo }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);