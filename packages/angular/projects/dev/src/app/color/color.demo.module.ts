/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorPalette } from './color-palette';
import { ColorsDemo } from './color.demo';
import { ROUTING } from './color.demo.routing';
import { ClarityModule } from '@clr/angular';

@NgModule({
  imports: [CommonModule, ROUTING, ClarityModule],
  declarations: [ColorsDemo, ColorPalette],
  exports: [ColorsDemo, ColorPalette],
})
export class ColorDemoModule {}
