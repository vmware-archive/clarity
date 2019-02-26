/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClarityDocComponent } from '../clarity-doc';

import * as UiBasic from './ui/basic.html';
import * as UiFull from './ui/full.html';
import * as UiError from './ui/error.html';
import * as UiInline from './ui/inline.html';
import * as UiDisabled from './ui/disabled.html';

import * as NgBasic from './ng/basic.html';
import * as NgLabel from './ng/label.html';
import * as NgHelpers from './ng/helpers.html';
import * as NgInline from './ng/inline.html';
import * as NgDisabled from './ng/disabled.html';

@Component({
  templateUrl: './toggles.demo.html',
  host: {
    '[class.content-area]': 'true',
    '[class.dox-content-panel]': 'true',
  },
})
export class TogglesDemo extends ClarityDocComponent {
  constructor() {
    super('toggle-switches');
  }

  exampleOne = {
    one: false,
    two: false,
  };
  exampleTwo = {
    one: false,
    two: false,
  };
  exampleThree = {
    one: false,
    two: false,
  };

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
}
