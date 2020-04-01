/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './news.component';
// eslint-disable-next-line clarity/no-barrel-imports
import { AUTO_GENERATED_ROUTES } from '../../releases/final-template/auto-generated-routes';

const newsRoutes: Routes = [
  {
    path: '',
    component: NewsComponent,
    data: {
      bodyClass: 'layout-news',
      browserTitle: 'Releases',
    },
    children: AUTO_GENERATED_ROUTES,
  },
];

@NgModule({
  imports: [RouterModule.forChild(newsRoutes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
