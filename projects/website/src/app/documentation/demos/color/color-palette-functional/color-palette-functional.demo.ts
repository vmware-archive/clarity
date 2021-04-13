/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { DARK_THEME_COLOR_PALETTES, LIGHT_THEME_COLOR_PALETTES } from './functional-color-palettes';
import { ClipboardCopyService } from '../clipboard-copy.service';

@Component({
  selector: 'clr-color-palette-functional',
  styleUrls: ['./color-palette-functional.demo.scss'],
  templateUrl: './color-palette-functional.demo.html',
})
export class ColorFunctionalDemo {
  private lightThemePalettes = LIGHT_THEME_COLOR_PALETTES;
  private darkThemePalettes = DARK_THEME_COLOR_PALETTES;

  constructor(private clipboardCopy: ClipboardCopyService) {}

  lightThemeContext = {
    themeColorPalettes: this.lightThemePalettes,
  };

  darkThemeContext = {
    themeColorPalettes: this.darkThemePalettes,
    darkTheme: true,
  };

  copyToClipboard(color: string) {
    this.clipboardCopy.executeCopy(color);
  }
}
