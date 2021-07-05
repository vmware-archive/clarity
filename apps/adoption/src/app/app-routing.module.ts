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
import { ButtonPage } from './pages/button.page';
import { DatalistPage } from './pages/detalist.page';
import { FormPage } from './pages/form.page';
import { InputPage } from './pages/input.page';
import { ListPage } from './pages/list.page';
import { ModalPage } from './pages/modal.page';
import { PasswordPage } from './pages/password.page';
import { RadioPage } from './pages/radio.page';
import { RangePage } from './pages/range.page';
import { SelectPage } from './pages/select.page';
import { TextareaPage } from './pages/textarea.page';
import { TogglePage } from './pages/toggle.page';
import { CardPage } from './pages/card.page';

const routes: Routes = [
  { path: '', redirectTo: '/getting-started', pathMatch: 'full' },
  { path: 'getting-started', component: GettingStartedPage },
  { path: 'accordion', component: AccordionPage },
  { path: 'alert', component: AlertPage },
  { path: 'badge', component: BadgePage },
  { path: 'button', component: ButtonPage },
  { path: 'card', component: CardPage },
  { path: 'checkbox', component: CheckboxPage },
  { path: 'datalist', component: DatalistPage },
  { path: 'form', component: FormPage },
  { path: 'icons', component: IconsPage },
  { path: 'input', component: InputPage },
  { path: 'label', component: LabelPage },
  { path: 'list', component: ListPage },
  { path: 'modal', component: ModalPage },
  { path: 'password', component: PasswordPage },
  { path: 'radio', component: RadioPage },
  { path: 'range', component: RangePage },
  { path: 'select', component: SelectPage },
  { path: 'textarea', component: TextareaPage },
  { path: 'toggle', component: TogglePage },
  { path: 'adoption-tooling', component: AdoptionToolingPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
