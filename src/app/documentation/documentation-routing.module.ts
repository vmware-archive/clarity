import {NgModule}             from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {DocumentationComponent} from "./documentation.component";
import {ComponentStatusComponent} from "./component-status/component-status.component";
import {BadgesDemo} from "./demos/badges/badges.demo";
import {AlertsDemo} from "./demos/alert/alerts.demo";
import {AppLayoutDemo} from "./demos/app-layout/app-layout.demo";
import {ButtonsDemo} from "./demos/buttons/buttons.demo";
import {CardsDemo} from "./demos/card/cards.demo";
import {ListsDemo} from "./demos/lists/lists.demo";
import {ProgressBarsDemo} from "./demos/progress-bars/progress-bars.demo";
import {ButtonGroupDemo} from "./demos/button-group/button-group.demo";

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
                path: "app-layout",
                component: AppLayoutDemo,
                data: {
                    bodyClass: "page-app-layout",
                    browserTitle: "Application Layout"
                }
            },
            {
                path: "badges",
                component: BadgesDemo,
                data: {
                    bodyClass: "page-badges",
                    browserTitle: "Badges"
                }
            },
            {
                path: "buttons",
                component: ButtonsDemo,
                data: {
                    bodyClass: "page-buttons",
                    browserTitle: "Buttons"
                }
            },
            {
                path: "button-group",
                component: ButtonGroupDemo,
                data: {
                    bodyClass: "page-button-group",
                    browserTitle: "Button Group"
                }
            },
            {
                path: "cards",
                component: CardsDemo,
                data: {
                    bodyClass: "page-cards",
                    browserTitle: "Cards"
                }
            },
            {
                path: "lists",
                component: ListsDemo,
                data: {
                    bodyClass: "page-lists",
                    browserTitle: "Lists"
                }
            },
            {
                path: "progress",
                component: ProgressBarsDemo,
                data: {
                    bodyClass: "page-progress",
                    browserTitle: "Progress Bars"
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
