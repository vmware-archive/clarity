import {NgModule}             from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {DocumentationComponent} from "./documentation.component";
import {ComponentStatusComponent} from "./component-status/component-status.component";
import {BadgesDemo} from "./demos/badges/badges.demo";
import {AlertsDemo} from "./demos/alert/alerts.demo";

const documentationRoutes: Routes = [
    {
        path: "",
        component: DocumentationComponent,
        data: {
            bodyClass: "layout-documentation",
            browserTitle: "Documentation"
        },
        children: [
            {
                path: "",
                component: ComponentStatusComponent,
                data: {
                    bodyClass: "page-documentation",
                    browserTitle: "Documentation"
                }
            },
            {
                path: "alerts",
                component: AlertsDemo,
                data: {
                    bodyClass: "page-alerts",
                    browserTitle: "Alerts"
                }
            },
            {
                path: "badges",
                component: BadgesDemo,
                data: {
                    bodyClass: "page-badges",
                    browserTitle: "Badges"
                }
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(documentationRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DocumentationRoutingModule {
}
