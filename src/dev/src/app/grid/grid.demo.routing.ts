/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GridHorizontalAlignmentDemo } from './alignment/horizontal/horizontal-alignment';
import { GridVerticalAlignmentDemo } from './alignment/vertical/vertical-alignment';
import { GridAutoLayoutEqualWidthMultiRowDemo } from './auto-layout/equal-width-multi-row/equal-width-multi-row';
import { GridAutoLayoutEqualWidthDemo } from './auto-layout/equal-width/equal-width';
import { GridOneColWidthDemo } from './auto-layout/one-col-width/one-col-width';
import { GridVariableWidthContentDemo } from './auto-layout/variable-width-content/variable-width-content';
import { GridColumnWrappingDemo } from './column-wrapping/column-wrapping';
import { GridColumnsDemo } from './columns/grid-columns';
import { GridDemo } from './grid.demo';
import { GridNestingDemo } from './nesting/nesting';
import { GridNoGuttersDemo } from './no-gutters/no-gutters';
import { GridColumnOffsettingDemo } from './offsets/grid-column-offsetting';
import { GridOrderingDemo } from './ordering/ordering';
import { GridColumnStackingDemo } from './stacking/grid-column-stacking';

const ROUTES: Routes = [
  {
    path: '',
    component: GridDemo,
    children: [
      { path: '', redirectTo: 'grid-columns', pathMatch: 'full' },
      { path: 'grid-columns', component: GridColumnsDemo },
      { path: 'grid-columns-stacking', component: GridColumnStackingDemo },
      { path: 'grid-columns-offsetting', component: GridColumnOffsettingDemo },
      { path: 'grid-equal-widths', component: GridAutoLayoutEqualWidthDemo },
      { path: 'grid-one-col-width', component: GridOneColWidthDemo },
      { path: 'grid-variable-width-content', component: GridVariableWidthContentDemo },
      { path: 'grid-equal-width-multi-row', component: GridAutoLayoutEqualWidthMultiRowDemo },
      { path: 'grid-no-gutters', component: GridNoGuttersDemo },
      { path: 'grid-horizontal-alignment', component: GridHorizontalAlignmentDemo },
      { path: 'grid-vertical-alignment', component: GridVerticalAlignmentDemo },
      { path: 'grid-column-wrapping', component: GridColumnWrappingDemo },
      { path: 'grid-ordering', component: GridOrderingDemo },
      { path: 'grid-nesting', component: GridNestingDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
