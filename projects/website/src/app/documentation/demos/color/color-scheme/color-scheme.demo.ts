/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { MONOCHROME_NEUTRAL_SCHEMES, MULTI_COLOR_SCHEMES } from './color-schemes';

@Component({
  selector: 'clr-color-scheme',
  templateUrl: './color-scheme.demo.html',
  styleUrls: ['./color-scheme.demo.scss'],
})
export class ColorSchemeDemo {
  monochromeNeutralSchemes = MONOCHROME_NEUTRAL_SCHEMES;
  multicolorSchemes = MULTI_COLOR_SCHEMES;
}
