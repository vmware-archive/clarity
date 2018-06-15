import {NgModule}             from "@angular/core";
import {RouterModule, Routes, PreloadAllModules} from "@angular/router";
import {environment} from "../environments/environment";

import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
    {
        path: "icons",
        loadChildren: "app/icons/icons.module#IconsModule",
        data: {
            bodyClass: "layout-icons"
        }
    },
    {
        path: "community",
        loadChildren: "app/community/community.module#CommunityModule",
    },
    {
        path: "news",
        loadChildren: "app/news/news.module#NewsModule",
    },
    {
        path: "",
        component: HomeComponent,
        data: {
            bodyClass: "layout-home"
        }
    },

    // just in case people who may have bookmarked the old iconography url, redirect them to the new url.
    {
        path: "documentation/iconography",
        redirectTo: '/icons/clarity-icons'
    },
    {
        path: "get-started",
        redirectTo: `documentation/${environment.version}/get-started`
    },
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
