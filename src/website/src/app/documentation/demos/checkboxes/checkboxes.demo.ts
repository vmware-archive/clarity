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
import * as UiInline from 'raw-loader!./ui/inline.html';
import * as UiDisabled from 'raw-loader!./ui/disabled.html';

import * as NgBasic from 'raw-loader!./ng/basic.html';
import * as NgLabel from 'raw-loader!./ng/label.html';
import * as NgHelpers from 'raw-loader!./ng/helpers.html';
import * as NgInline from 'raw-loader!./ng/inline.html';
import * as NgDisabled from 'raw-loader!./ng/disabled.html';
import * as NgIndeterminate from 'raw-loader!./ng/indeterminate.html';

@Component({
  templateUrl: './checkboxes.demo.html',
  host: {
    '[class.content-area]': 'true',
    '[class.dox-content-panel]': 'true',
  },
})
export class CheckboxesDemo extends ClarityDocComponent {
  constructor() {
    super('checkboxes');
  }

  exampleOne = '';
  exampleTwo = '';
  exampleThree = '';
  exampleFour = '';

  uiBasic: any = UiBasic;
  uiFull: any = UiFull;
  uiError: any = UiError;
  uiInline: any = UiInline;
  uiDisabled: any = UiDisabled;

  ngBasic: any = NgBasic;
  ngLabel: any = NgLabel;
  ngHelpers: any = NgHelpers;
  ngInline: any = NgInline;
  ngDisabled: any = NgDisabled;
  ngIndeterminate: any = NgIndeterminate;

  indeterminateState = true;
}
