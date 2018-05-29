/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';

import { TooltipsAngularDemo } from './tooltips-angular';
import { TooltipsButtonsDemo } from './tooltips-buttons';
import { TooltipsDirectionsDemo } from './tooltips-directions';
import { TooltipsIconDemo } from './tooltips-icons';
import { TooltipsSizesDemo } from './tooltips-sizes';
import { TooltipsTextDemo } from './tooltips-text';
import { TooltipsDemo } from './tooltips.demo';
import { ROUTING } from './tooltips.demo.routing';

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING],
  declarations: [
    TooltipsDemo,
    TooltipsSizesDemo,
    TooltipsDirectionsDemo,
    TooltipsAngularDemo,
    TooltipsIconDemo,
    TooltipsTextDemo,
    TooltipsButtonsDemo,
  ],
  exports: [
    TooltipsDemo,
    TooltipsSizesDemo,
    TooltipsDirectionsDemo,
    TooltipsAngularDemo,
    TooltipsIconDemo,
    TooltipsTextDemo,
    TooltipsButtonsDemo,
  ],
})
export class TooltipsDemoModule {}
