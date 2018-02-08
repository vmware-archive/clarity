import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';

import {UtilsModule} from "../utils/utils.module";
import { CommunityComponent } from "./community.component";
import {RouterModule, Routes} from "@angular/router";

const route: Routes = [
  {
    path: "",
    component: CommunityComponent,
    data: {
      bodyClass: "layout-community",
      browserTitle: "Community"
    }
  }
];


@NgModule({
  declarations: [
    CommunityComponent,
  ],
  imports: [
    CommonModule,
    UtilsModule,
    RouterModule.forChild(route)
  ],
  providers: []
})
export class CommunityModule { }
