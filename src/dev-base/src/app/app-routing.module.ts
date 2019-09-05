/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeDemoComponent } from './home/home.demo';

const routes: Routes = [
  { path: '', component: HomeDemoComponent },
  {
    path: 'typography',
    loadChildren: () => import('./typography/typography.demo.module').then(m => m.TypographyDemoModule),
  },
  { path: 'layout', loadChildren: () => import('./layout/layout.demo.module').then(m => m.LayoutDemoModule) },
  { path: 'button', loadChildren: () => import('./button/button.demo.module').then(m => m.ButtonDemoModule) },
  { path: 'dropdown', loadChildren: () => import('./dropdown/dropdown.demo.module').then(m => m.DropdownDemoModule) },
  { path: 'icon', loadChildren: () => import('./icon/icon.demo.module').then(m => m.IconDemoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
