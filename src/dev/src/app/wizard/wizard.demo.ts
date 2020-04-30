/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'clr-wizard-demo',
  template: `
    <h2>New Wizard</h2>
    <div class="clr-row">
      <div class="clr-col-12 clr-col-sm-6">
        <ul>
          <li><a [routerLink]="['./basic']">Basic wizard</a></li>
          <li><a [routerLink]="['./skip-page']">Skip page in a wizard</a></li>
          <li><a [routerLink]="['./form-validation']">Form validation</a></li>
          <li><a [routerLink]="['./async-validation']">Async validation</a></li>
          <li><a [routerLink]="['./not-closable']">Not closable</a></li>
          <li><a [routerLink]="['./custom-buttons']">Custom buttons</a></li>
          <li><a [routerLink]="['./jump-to']">Jump-to page</a></li>
          <li><a [routerLink]="['./step-error']">Step error</a></li>
        </ul>
      </div>
      <div class="clr-col-12 clr-col-sm-6">
        <ul>
          <li><a [routerLink]="['./reset']">Reset on cancel/finish</a></li>
          <li><a [routerLink]="['./header-actions']">Header actions</a></li>
          <li><a [routerLink]="['./alt-cancel']">Alt cancel</a></li>
          <li><a [routerLink]="['./alt-next']">Alt next</a></li>
          <li><a [routerLink]="['./inline']">Inline/static wizard</a></li>
          <li><a [routerLink]="['./force-forward']">Force forward</a></li>
          <li><a [routerLink]="['./stop-navigation']">Stop navigation</a></li>
        </ul>
      </div>
    </div>

    <router-outlet></router-outlet>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class WizardDemo {}
