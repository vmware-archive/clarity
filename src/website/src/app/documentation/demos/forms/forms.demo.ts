/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClarityDocComponent } from '../clarity-doc';

/* eslint-disable @typescript-eslint/no-var-requires */
const UiErrors = require('raw-loader!./ui/errors.html');
const UiForm = require('raw-loader!./ui/form.html');
const UiGrid = require('raw-loader!./ui/grid.html');
const UiLayouts = require('raw-loader!./ui/layouts.html');
const UiStructure = require('raw-loader!./ui/structure.html');

const NgErrors = require('raw-loader!./ng/errors.html');
const NgForm = require('raw-loader!./ng/form.html');
const NgHelpers = require('raw-loader!./ng/helpers.html');
const NgLayouts = require('raw-loader!./ng/layouts.html');
const NgReactiveTs = require('!raw-loader!./ng/reactive.txt');
const NgReactiveHtml = require('raw-loader!./ng/reactive.html');
const NgStructure = require('raw-loader!./ng/structure.html');
const NgOverride = require('raw-loader!./ng/override.html');
const NgOptional = require('raw-loader!./ng/optional.html');
const NgReset = require('!raw-loader!./ng/reset.txt');
const NgValidate = require('!raw-loader!./ng/validate.txt');
const NgLabelSize = require('!raw-loader!./ng/label-size.html');
const NgGenericTs = require('!raw-loader!./ng/generic.txt');
const NgGenericHtml = require('!raw-loader!./ng/generic.html');

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
  newLayout = true;

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
  ngLabelSize: any = NgLabelSize;
  ngGenericTs: any = NgGenericTs;
  ngGenericHtml: any = NgGenericHtml;
}
