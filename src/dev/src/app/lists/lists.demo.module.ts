/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';

import { ListsCompactDemo } from './lists-compact';
import { ListsInCardsDemo } from './lists-in-cards';
import { ListsMixedDemo } from './lists-mixed';
import { ListsOlDemo } from './lists-ol';
import { ListsUlDemo } from './lists-ul';
import { ListsUnstyledDemo } from './lists-unstyled';
import { ListsDemo } from './lists.demo';
import { ROUTING } from './lists.demo.routing';
import { OldListsInCardsDemo } from './old-lists-in-cards';

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING],
  declarations: [
    ListsDemo,
    ListsUlDemo,
    ListsOlDemo,
    ListsUnstyledDemo,
    ListsCompactDemo,
    ListsMixedDemo,
    ListsInCardsDemo,
    OldListsInCardsDemo,
  ],
  exports: [ListsDemo, ListsUlDemo, ListsOlDemo, ListsUnstyledDemo, ListsCompactDemo, ListsMixedDemo, ListsInCardsDemo],
})
export class ListsDemoModule {}
