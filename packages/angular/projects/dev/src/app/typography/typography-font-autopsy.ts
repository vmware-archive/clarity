/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FontPreset, fontPresets } from './utils/font-presets';
import { getPreset } from './utils/font-presets';

@Component({
  selector: 'clr-typography-font-autopsy',
  styleUrls: ['./font-autopsy.demo.scss'],
  templateUrl: './typography-font-autopsy.html',
})
export class TypographyFontAutopsyDemo {
  presetSwitcher = new FormGroup({
    preset: new FormControl('Metropolis'),
  });

  model = new FormGroup({
    font: new FormControl('Metropolis', [Validators.required]),
    demoLetter: new FormControl('x', [Validators.maxLength(1)]),
    topGap: new FormControl(0.147, [Validators.min(0)]),
    ascender: new FormControl(0.17, [Validators.min(0)]),
    xHeight: new FormControl(0.517, [Validators.min(0)]),
    descenderOverage: new FormControl(0.013, [Validators.min(0)]),
    fontWeight: new FormControl(400, [Validators.required, Validators.min(100)]),
  });

  presets = fontPresets.map(presetTuple => presetTuple[0]).sort();

  noop() {
    return;
  }

  fontField = 'Metropolis';

  checkForPreset(fontName: string) {
    const sanitizedFontName = fontName.replace(/["']/g, '');
    const preset = getPreset(sanitizedFontName);

    if (!preset) {
      this.fontField = '';
      return;
    }

    this.loadPreset(preset);
  }

  loadPreset(presetToLoad: FontPreset) {
    this.fontField = presetToLoad.font;
    this.model.patchValue(presetToLoad);
  }

  get descenderValue() {
    let myVal = 1 - this.model.value.topGap - this.model.value.ascender - this.model.value.xHeight;
    myVal = myVal > 0 ? myVal : 0;
    return myVal.toString().substr(0, 6);
  }

  get topGapHeight() {
    return pixelifyValues(millifyValues(parseFloat(this.model.value.topGap)));
  }

  get ascenderHeight() {
    return pixelifyValues(millifyValues(parseFloat(this.model.value.ascender)));
  }

  get xHeightHeight() {
    return pixelifyValues(millifyValues(parseFloat(this.model.value.xHeight)));
  }

  get descenderOverageHeight() {
    return pixelifyValues(millifyValues(parseFloat(this.model.value.descenderOverage)));
  }
}

function millifyValues(num: number) {
  return num * 1000;
}

function pixelifyValues(num: number) {
  return num + 'px';
}
