/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TypographyFontCharTestDemo } from './typography-font-char-test';
import { TypographyFontWeightDemo } from './typography-font-weight';
import { TypographyHeadersDemo } from './typography-headers';
import { TypographyLinksDemo } from './typography-links';
import { TypographyTextDemo } from './typography-text';
import { TypographyDemo } from './typography.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: TypographyDemo,
    children: [
      { path: '', redirectTo: 'typography-font-weight', pathMatch: 'full' },
      { path: 'typography-font-weight', component: TypographyFontWeightDemo },
      { path: 'typography-headers', component: TypographyHeadersDemo },
      { path: 'typography-text', component: TypographyTextDemo },
      { path: 'typography-links', component: TypographyLinksDemo },
      { path: 'typography-font-char-test', component: TypographyFontCharTestDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
