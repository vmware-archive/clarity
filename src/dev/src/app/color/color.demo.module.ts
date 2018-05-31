/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorContrastDemo } from './color-contrast';
import { ColorLuminanceDemo } from './color-luminance';
import { ColorPalette } from './color-palette';
import { ColorsDemo } from './color.demo';
import { ROUTING } from './color.demo.routing';

@NgModule({
  imports: [CommonModule, ROUTING],
  declarations: [ColorsDemo, ColorPalette, ColorLuminanceDemo, ColorContrastDemo],
  exports: [ColorsDemo, ColorPalette, ColorLuminanceDemo, ColorContrastDemo],
})
export class ColorDemoModule {}
