import {NgModule}             from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {NewsComponent} from "./news.component";
import {AUTO_GENERATED_ROUTES} from "../../releases/final-template/auto-generated-routes";

const newsRoutes: Routes = [
    {
        path: "",
        component: NewsComponent,
        data: {
            bodyClass: "layout-news",
            browserTitle: "Releases"
        },
        children: AUTO_GENERATED_ROUTES
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(newsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class NewsRoutingModule {
}
