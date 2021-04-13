/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'icons',
    loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule),
    data: {
      bodyClass: 'layout-icons',
    },
  },
  {
    path: 'community',
    loadChildren: () => import('./community/community.module').then(m => m.CommunityModule),
  },
  // {
  //   path: 'news',
  //   loadChildren: () => import('./news/news.module').then(m => m.NewsModule),
  // },
  {
    path: '',
    component: HomeComponent,
    data: {
      bodyClass: 'layout-home',
    },
  },

  // just in case people who may have bookmarked the old iconography url, redirect them to the new url.
  {
    path: 'documentation/iconography',
    redirectTo: '/icons',
  },
  {
    path: 'get-started',
    redirectTo: `documentation/get-started`,
  },
  {
    path: 'icons/clarity-icons',
    redirectTo: `icons/get-started`,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      bodyClass: 'layout-error',
      browserTitle: 'Page Not Found',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
