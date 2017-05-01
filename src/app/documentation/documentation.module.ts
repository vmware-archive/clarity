import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ClarityModule} from "clarity-angular";

import {UtilsModule} from "../utils/utils.module";
import {DocumentationRoutingModule} from "./documentation-routing.module";
import {DocumentationComponent} from "./documentation.component";
import {DocumentationNavLinksComponent} from "./documentation-nav-links.component";
import {ComponentStatusComponent} from "./component-status/component-status.component";
import {NewLayoutAlertComponent} from "./utils/new-layout-alert.component";
import {StatusDotComponent} from "./component-status/status-dot.component";
import {BadgesDemoModule} from "./demos/badges/badges.demo.module";
import {AlertsDemoModule} from "./demos/alert/alerts.demo.module";
import {AppLayoutDemoModule} from "./demos/app-layout/app-layout.demo.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UtilsModule,
        ClarityModule.forChild(),
        AlertsDemoModule,
        AppLayoutDemoModule,
        BadgesDemoModule,
        DocumentationRoutingModule
    ],
    declarations: [
        DocumentationComponent,
        DocumentationNavLinksComponent,
        ComponentStatusComponent,
        StatusDotComponent,
        NewLayoutAlertComponent
    ]
})
export class DocumentationModule {
}
