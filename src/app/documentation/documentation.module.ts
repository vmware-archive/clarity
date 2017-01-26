import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ClarityModule} from "clarity-angular";

import {UtilsModule} from "../utils/utils.module";
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from "./documentation.component";
import {DocumentationNavLinksComponent} from "./documentation-nav-links.component";
import {ComponentStatusComponent} from "./component-status/component-status.component";
import {NewLayoutAlertComponent} from "./utils/new-layout-alert.component";
import {StatusDotComponent} from "./component-status/status-dot.component";
import {ALL_DOCS} from "./component-page/component-doc-pages";
import {DemosModule} from "../../demos/demos.module";
import { componentList } from "../utils/component-list";

@NgModule({
  declarations: [
    DocumentationComponent,
    DocumentationNavLinksComponent,
    ComponentStatusComponent,
    StatusDotComponent,
    NewLayoutAlertComponent,
    ALL_DOCS.map(componentList)
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilsModule,
    DocumentationRoutingModule,
    ClarityModule.forChild(),
    DemosModule
  ],
  providers: []
})
export class DocumentationModule { }
