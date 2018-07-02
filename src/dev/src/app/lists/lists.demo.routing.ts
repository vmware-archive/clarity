/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListsCompactDemo } from './lists-compact';
import { ListsInCardsDemo } from './lists-in-cards';
import { ListsMixedDemo } from './lists-mixed';
import { ListsOlDemo } from './lists-ol';
import { ListsUlDemo } from './lists-ul';
import { ListsUnstyledDemo } from './lists-unstyled';
import { ListsDemo } from './lists.demo';
import { OldListsInCardsDemo } from './old-lists-in-cards';

const ROUTES: Routes = [
  {
    path: '',
    component: ListsDemo,
    children: [
      { path: '', redirectTo: 'lists-ul', pathMatch: 'full' },
      { path: 'lists-ul', component: ListsUlDemo },
      { path: 'lists-ol', component: ListsOlDemo },
      { path: 'lists-in-cards', component: ListsInCardsDemo },
      { path: 'lists-unstyled', component: ListsUnstyledDemo },
      { path: 'lists-mixed', component: ListsMixedDemo },
      { path: 'lists-compact', component: ListsCompactDemo },
      { path: 'old-lists-in-cards', component: OldListsInCardsDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
