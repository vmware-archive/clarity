import {NgModule}             from "@angular/core";
import {RouterModule, Routes, PreloadAllModules} from "@angular/router";

import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
    {
        path: "**",
        component: PageNotFoundComponent,
        data: {
            bodyClass: "layout-error",
            browserTitle: "Page Not Found"
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
