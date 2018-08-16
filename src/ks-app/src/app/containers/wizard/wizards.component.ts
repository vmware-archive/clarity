/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import {
  ClrWizard,
  ClrWizardButton,
  ClrWizardCustomTags,
  ClrWizardHeaderAction,
  ClrWizardPageButtons,
  ClrWizardPageHeaderActions,
  ClrWizardPageNavTitle,
  ClrWizardPageTitle,
  ClrWizardStepnav,
} from '@clr/angular';

@Component({ templateUrl: './wizards.component.html' })
export class KSWizards {
  /**
   * @description
   * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
   */
  private aClrWizardStepnav: ClrWizardStepnav;
  private aClrWizardButton: ClrWizardButton;
  private aClrWizardHeaderAction: ClrWizardHeaderAction;
  private aClrWizardCustomTags: ClrWizardCustomTags;
  private aClrWizardPageTitle: ClrWizardPageTitle;
  private aClrWizardPageNavTitle: ClrWizardPageNavTitle;
  private aClrWizardPageButtons: ClrWizardPageButtons;
  private aClrWizardPageHeaderActions: ClrWizardPageHeaderActions;

  // Form Wizard Demo
  @ViewChild('formWizard') formWizard: ClrWizard;
  formOpen: boolean = false;
  formModel = { name: '', favorite: '', number: '' };

  // inlineWizard demo
  @ViewChild('inlineWizard') inlineWizard: ClrWizard;
  inlineOpen: boolean = false;
}
