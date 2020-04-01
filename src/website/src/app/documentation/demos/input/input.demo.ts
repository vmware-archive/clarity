/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClarityDocComponent } from '../clarity-doc';

/* eslint-disable @typescript-eslint/no-var-requires */
const UiBasic = require('raw-loader!./ui/basic.html');
const UiFull = require('raw-loader!./ui/full.html');
const UiError = require('raw-loader!./ui/error.html');

const NgBasic = require('raw-loader!./ng/basic.html');
const NgLabel = require('raw-loader!./ng/label.html');
const NgHelpers = require('raw-loader!./ng/helpers.html');

@Component({
  selector: 'clr-input-demo',
  templateUrl: './input.demo.html',
  host: {
    '[class.content-area]': 'true',
    '[class.dox-content-panel]': 'true',
  },
})
export class InputDemo extends ClarityDocComponent {
  constructor() {
    super('input');
  }

  exampleOne = '';
  exampleTwo = '';
  exampleThree = '';

  uiBasic: any = UiBasic;
  uiFull: any = UiFull;
  uiError: any = UiError;

  ngBasic: any = NgBasic;
  ngLabel: any = NgLabel;
  ngHelpers: any = NgHelpers;
}
