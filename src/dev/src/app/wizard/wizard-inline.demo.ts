/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';

import { ClrWizard } from '@clr/angular';

@Component({ selector: 'clr-wizard-inline', templateUrl: './wizard-inline.demo.html' })
export class WizardInlineDemo {
  @ViewChild('wizard') wizard: ClrWizard;

  public open: boolean = true;
}
