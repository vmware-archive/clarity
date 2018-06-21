/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';

@Component({ selector: 'clr-wizard-form-validation', templateUrl: './wizard-form-validation.demo.html' })
export class WizardFormValidation {
  @ViewChild('wizard') wizard: ClrWizard;
  @ViewChild('number') numberField: any;

  model = { name: '', favorite: '', number: '' };
}
