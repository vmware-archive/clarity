/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { CLARITY_PALETTES, DEPRECATED_COLOR_PALETTES } from './color-palettes';
import { ClipboardCopyService } from '../clipboard-copy.service';

@Component({
  selector: 'clr-color-palette',
  styleUrls: ['./color-palette.demo.scss'],
  templateUrl: './color-palette.demo.html',
})
export class ColorPaletteDemo {
  deprecatedPalettes = DEPRECATED_COLOR_PALETTES;
  clarityPalettes = CLARITY_PALETTES;

  constructor(private clipboardCopy: ClipboardCopyService) {}

  copyToClipboard(color: string) {
    console.log('copied');
    this.clipboardCopy.executeCopy(color);
  }
}
