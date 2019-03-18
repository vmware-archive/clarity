/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClarityDocComponent } from '../clarity-doc';

import * as UiBasic from 'raw-loader!./ui/basic.html';
import * as UiFull from 'raw-loader!./ui/full.html';
import * as UiError from 'raw-loader!./ui/error.html';

import * as NgBasic from 'raw-loader!./ng/basic.html';
import * as NgLabel from 'raw-loader!./ng/label.html';
import * as NgHelpers from 'raw-loader!./ng/helpers.html';

@Component({
  templateUrl: './select.demo.html',
  host: {
    '[class.content-area]': 'true',
    '[class.dox-content-panel]': 'true',
  },
})
export class SelectDemo extends ClarityDocComponent {
  constructor() {
    super('select');
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
