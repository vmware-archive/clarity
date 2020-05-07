/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardClickableDemo } from './card-clickable';
import { CardDropdownDemo } from './card-dropdown';
import { CardGridDemo } from './card-grid';
import { CardImagesDemo } from './card-images';
import { CardLayoutDemo } from './card-layout';
import { CardListGroupDemo } from './card-list-group';
import { CardMasonryDemo } from './card-masonry';
import { CardMediaBlockDemo } from './card-media-block';
import { CardOldDemo } from './card-old';
import { CardDemo } from './card.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: CardDemo,
    children: [
      { path: '', redirectTo: 'grid', pathMatch: 'full' },
      { path: 'grid', component: CardGridDemo },
      { path: 'clickable', component: CardClickableDemo },
      { path: 'dropdown', component: CardDropdownDemo },
      { path: 'images', component: CardImagesDemo },
      { path: 'layout', component: CardLayoutDemo },
      { path: 'masonry', component: CardMasonryDemo },
      { path: 'media-block', component: CardMediaBlockDemo },
      { path: 'list-group', component: CardListGroupDemo },
      { path: 'old', component: CardOldDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
