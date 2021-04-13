/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { ColorPaletteDemo } from './color-palette/color-palette.demo';
import { ColorFunctionalDemo } from './color-palette-functional/color-palette-functional.demo';
import { ColorSchemeDemo } from './color-scheme/color-scheme.demo';
import { RouterModule } from '@angular/router';
import { DocWrapperModule } from '../_doc-wrapper/doc-wrapper.module';
import { ColorDemo } from './color.demo';
import { ClipboardCopyService } from './clipboard-copy.service';
import { ColorSchemeDonut } from './color-scheme/color-scheme-donut.demo';

@NgModule({
  imports: [CommonModule, ClarityModule, RouterModule.forChild([{ path: '', component: ColorDemo }]), DocWrapperModule],
  declarations: [ColorPaletteDemo, ColorFunctionalDemo, ColorSchemeDemo, ColorDemo, ColorSchemeDonut],
  providers: [ClipboardCopyService],
  exports: [ColorDemo],
})
export class ColorDemoModule {}
