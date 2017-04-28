import {NgModule}             from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {NewsComponent} from "./news.component";

const newsRoutes: Routes = [
    {
        path: "",
        component: NewsComponent,
        data: {
            bodyClass: "layout-news",
            browserTitle: "Releases"
        },
        children: [
            {
                path: "0.9.1",
                data: {
                    browserTitle: "0.9.1"
                }
            },
            {
                path: "0.9.0",
                data: {
                    browserTitle: "0.9.0"
                }
            }
        ]
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
