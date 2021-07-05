/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertPage } from './pages/alert.page';
import { GettingStartedPage } from './pages/getting-started.page';
import { BadgePage } from './pages/badge.page';
import { LabelPage } from './pages/label.page';
import { IconsPage } from './pages/icons.page';
import { AccordionPage } from './pages/accordion.page';
import { CheckboxPage } from './pages/checkbox.page';
import { AdoptionToolingPage } from './pages/adoption-tooling.page';
import { CardPage } from './pages/card.page';

const routes: Routes = [
  { path: '', redirectTo: '/getting-started', pathMatch: 'full' },
  { path: 'getting-started', component: GettingStartedPage },
  { path: 'accordion', component: AccordionPage },
  { path: 'alert', component: AlertPage },
  { path: 'badge', component: BadgePage },
  { path: 'card', component: CardPage },
  { path: 'checkbox', component: CheckboxPage },
  { path: 'icons', component: IconsPage },
  { path: 'label', component: LabelPage },
  { path: 'adoption-tooling', component: AdoptionToolingPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
