/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';

import { ClrWizard } from '@clr/angular';

@Component({ selector: 'clr-wizard-basic', templateUrl: './wizard-not-closable.demo.html' })
export class WizardNotClosableDemo {
  @ViewChild('wizard') wizard: ClrWizard;
  open: boolean = false;
}
