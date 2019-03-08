/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClarityDocComponent } from '../clarity-doc';

import * as UiErrors from 'raw-loader!./ui/errors.html';
import * as UiForm from 'raw-loader!./ui/form.html';
import * as UiGrid from 'raw-loader!./ui/grid.html';
import * as UiLayouts from 'raw-loader!./ui/layouts.html';
import * as UiStructure from 'raw-loader!./ui/structure.html';

import * as NgErrors from 'raw-loader!./ng/errors.html';
import * as NgForm from 'raw-loader!./ng/form.html';
import * as NgHelpers from 'raw-loader!./ng/helpers.html';
import * as NgLayouts from 'raw-loader!./ng/layouts.html';
import * as NgReactiveTs from '!raw-loader!./ng/reactive.txt';
import * as NgReactiveHtml from 'raw-loader!./ng/reactive.html';
import * as NgStructure from 'raw-loader!./ng/structure.html';
import * as NgOverride from 'raw-loader!./ng/override.html';
import * as NgOptional from 'raw-loader!./ng/optional.html';
import * as NgReset from '!raw-loader!./ng/reset.txt';
import * as NgValidate from '!raw-loader!./ng/validate.txt';

@Component({
  selector: 'clr-forms-demo',
  templateUrl: './forms.demo.html',
  host: {
    '[class.content-area]': 'true',
    '[class.dox-content-panel]': 'true',
  },
})
export class FormsDemo extends ClarityDocComponent {
  constructor() {
    super('forms');
  }

  uiErrors: any = UiErrors;
  uiForm: any = UiForm;
  uiGrid: any = UiGrid;
  uiLayouts: any = UiLayouts;
  uiStructure: any = UiStructure;

  ngErrors: any = NgErrors;
  ngForm: any = NgForm;
  ngHelpers: any = NgHelpers;
  ngLayouts: any = NgLayouts;
  ngReactiveTs: any = NgReactiveTs;
  ngReactiveHtml: any = NgReactiveHtml;
  ngStructure: any = NgStructure;
  ngOptional: any = NgOptional;
  ngOverride: any = NgOverride;
  ngReset: any = NgReset;
  ngValidate: any = NgValidate;
}
