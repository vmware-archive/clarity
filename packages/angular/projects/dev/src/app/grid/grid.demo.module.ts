/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';

import { GridHorizontalAlignmentDemo } from './alignment/horizontal/horizontal-alignment';
import { GridVerticalAlignmentDemo } from './alignment/vertical/vertical-alignment';
import { GridAutoLayoutEqualWidthMultiRowDemo } from './auto-layout/equal-width-multi-row/equal-width-multi-row';
import { GridAutoLayoutEqualWidthDemo } from './auto-layout/equal-width/equal-width';
import { GridOneColWidthDemo } from './auto-layout/one-col-width/one-col-width';
import { GridVariableWidthContentDemo } from './auto-layout/variable-width-content/variable-width-content';
import { GridColumnWrappingDemo } from './column-wrapping/column-wrapping';
import { GridColumnsDemo } from './columns/grid-columns';
import { GridDemo } from './grid.demo';
import { ROUTING } from './grid.demo.routing';
import { GridNestingDemo } from './nesting/nesting';
import { GridNoGuttersDemo } from './no-gutters/no-gutters';
import { GridColumnOffsettingDemo } from './offsets/grid-column-offsetting';
import { GridOrderingDemo } from './ordering/ordering';
import { GridColumnStackingDemo } from './stacking/grid-column-stacking';

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING],
  declarations: [
    GridDemo,
    GridColumnsDemo,
    GridColumnStackingDemo,
    GridColumnOffsettingDemo,
    GridAutoLayoutEqualWidthDemo,
    GridOneColWidthDemo,
    GridVariableWidthContentDemo,
    GridAutoLayoutEqualWidthMultiRowDemo,
    GridNoGuttersDemo,
    GridHorizontalAlignmentDemo,
    GridVerticalAlignmentDemo,
    GridColumnWrappingDemo,
    GridOrderingDemo,
    GridNestingDemo,
  ],
  exports: [
    GridDemo,
    GridColumnsDemo,
    GridColumnStackingDemo,
    GridColumnOffsettingDemo,
    GridAutoLayoutEqualWidthDemo,
    GridOneColWidthDemo,
    GridVariableWidthContentDemo,
    GridAutoLayoutEqualWidthMultiRowDemo,
    GridNoGuttersDemo,
    GridHorizontalAlignmentDemo,
    GridVerticalAlignmentDemo,
    GridColumnWrappingDemo,
    GridOrderingDemo,
    GridNestingDemo,
  ],
})
export class GridDemoModule {}
