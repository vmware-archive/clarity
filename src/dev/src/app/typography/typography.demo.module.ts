/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';

import { TypographyFontCharTestDemo } from './typography-font-char-test';
import { TypographyFontWeightDemo } from './typography-font-weight';
import { TypographyHeadersDemo } from './typography-headers';
import { TypographyLinksDemo } from './typography-links';
import { TypographyTextDemo } from './typography-text';
import { TypographyDemo } from './typography.demo';
import { ROUTING } from './typography.demo.routing';

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING],
  declarations: [
    TypographyDemo,
    TypographyFontWeightDemo,
    TypographyHeadersDemo,
    TypographyTextDemo,
    TypographyLinksDemo,
    TypographyFontCharTestDemo,
  ],
  exports: [
    TypographyDemo,
    TypographyFontWeightDemo,
    TypographyHeadersDemo,
    TypographyTextDemo,
    TypographyLinksDemo,
    TypographyFontCharTestDemo,
  ],
})
export class TypographyDemoModule {}
