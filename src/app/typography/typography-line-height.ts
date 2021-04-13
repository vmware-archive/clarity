/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { FontPreset } from './utils/font-presets';

function getLineHeightGap(lineHeight: number) {
  if (lineHeight < 1) {
    return 0;
  }
  return (lineHeight - 1) / 2;
}

function calcPullUp(fontObj: FontPreset, lineHeight = 1.1): number {
  const pullUp = fontObj.topGap + getLineHeightGap(lineHeight);
  return -1 * pullUp;
}

function calcPullDown(fontObj: FontPreset, lineHeight = 1.1): number {
  const descenderHeight = calcDescenderHeight(fontObj);
  const pushDown = descenderHeight + getLineHeightGap(lineHeight);
  return -1 * pushDown;
}

function calcDescenderHeight(fontObj: FontPreset): number {
  return 1 - fontObj.topGap - fontObj.ascender - fontObj.xHeight;
}

let myStyleSheet: HTMLStyleElement;

function updateFontProperties(fontObj: FontPreset): void {
  if (!myStyleSheet) {
    myStyleSheet = document.createElement('style');
    document.head.appendChild(myStyleSheet);
  }

  const newStyles = `
    .test-subject, .test-subject > * {
      font-family: "${fontObj.font}";
    }
    .line-height-eraser::before {
      margin-bottom: ${calcPullUp(fontObj).toString().substr(0, 8)}em !important;
    }
    .line-height-eraser::after {
      margin-top: ${calcPullDown(fontObj).toString().substr(0, 8)}em !important;
    }
    h1.line-height-eraser::before {
      margin-bottom: ${calcPullUp(fontObj, 1.6).toString().substr(0, 8)}em !important;
    }
    h1.line-height-eraser::after {
      margin-top: ${calcPullDown(fontObj, 1.6).toString().substr(0, 8)}em !important;
    }

  `;

  myStyleSheet.innerHTML = newStyles;
}

@Component({
  selector: 'clr-typography-line-height',
  styleUrls: ['./line-height.demo.scss'],
  templateUrl: './typography-line-height.html',
})
export class TypographyLineHeightDemo {
  showBackgrounds = false;
  showOverlay = false;

  currentFont = 'Metropolis';

  changeFont(fontPreset: FontPreset) {
    updateFontProperties(fontPreset);
    this.currentFont = fontPreset.font;
  }
}
