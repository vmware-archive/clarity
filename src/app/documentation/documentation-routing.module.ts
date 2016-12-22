import {NgModule}             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DocumentationComponent} from "./documentation.component";
import {ComponentStatusComponent} from "./component-status/component-status.component";
import {ALL_DOCS} from "./component-page/component-doc-pages";

const documentationRoutes: Routes = [
  {
    path: "",
    component: DocumentationComponent,
    data: {
      bodyClass: "layout-documentation",
      browserTitle: "Documentation"
    },
    children: [
      ...ALL_DOCS,
      {
        path: "",
        component: ComponentStatusComponent,
        data: {
          bodyClass: "page-documentation",
          browserTitle: "Documentation"
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
export class DocumentationRoutingModule {}
