/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RouterModule, Routes } from '@angular/router';

import { WizardAltCancelDemo } from './wizard-alt-cancel.demo';
import { WizardAltNextDemo } from './wizard-alt-next.demo';
import { WizardAsyncValidation } from './wizard-async-validation.demo';
import { WizardBasicDemo } from './wizard-basic.demo';
import { WizardCustomButtonsDemo } from './wizard-custom-buttons.demo';
import { WizardForceForwardDemo } from './wizard-force-forward.demo';
import { WizardFormValidation } from './wizard-form-validation.demo';
import { WizardHeaderActionsDemo } from './wizard-header-actions.demo';
import { WizardInlineDemo } from './wizard-inline.demo';
import { WizardJumpToDemo } from './wizard-jump-to.demo';
import { WizardNotClosableDemo } from './wizard-not-closable.demo';
import { WizardResetDemo } from './wizard-reset.demo';
import { WizardSkipPageDemo } from './wizard-skip-page.demo';
import { WizardStopNavigation } from './wizard-stop-navigation.demo';
import { WizardDemo } from './wizard.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: WizardDemo,
    children: [
      { path: '', redirectTo: 'basic', pathMatch: 'full' },
      { path: 'basic', component: WizardBasicDemo },
      { path: 'skip-page', component: WizardSkipPageDemo },
      { path: 'form-validation', component: WizardFormValidation },
      { path: 'async-validation', component: WizardAsyncValidation },
      { path: 'not-closable', component: WizardNotClosableDemo },
      { path: 'custom-buttons', component: WizardCustomButtonsDemo },
      { path: 'header-actions', component: WizardHeaderActionsDemo },
      { path: 'alt-cancel', component: WizardAltCancelDemo },
      { path: 'inline', component: WizardInlineDemo },
      { path: 'jump-to', component: WizardJumpToDemo },
      { path: 'reset', component: WizardResetDemo },
      { path: 'alt-next', component: WizardAltNextDemo },
      { path: 'force-forward', component: WizardForceForwardDemo },
      { path: 'stop-navigation', component: WizardStopNavigation },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
