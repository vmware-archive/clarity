import {NgModule}             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NewsComponent} from "./news.component";
import {RELEASE_ROUTES} from "./release-page/release-pages";

const newsRoutes: Routes = [
  {
    path: "",
    component: NewsComponent,
    data: {
      bodyClass: "layout-news",
      browserTitle: "Releases"
    },
    children: RELEASE_ROUTES
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
export class NewsRoutingModule {}
