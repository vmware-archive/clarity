/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

const templateExample = `
<form clrStepper #contactForm="ngForm" (ngSubmit)="templateFormSubmit(contactForm.value)">
  <clr-stepper-panel ngModelGroup="name">
    <clr-step-title>Legal Name</clr-step-title>
    <clr-step-description>Description goes here.</clr-step-description>
    <clr-step-content>
      <clr-input-container>
        <label>First Name</label>
        <input clrInput [ngModel]="templateForm.name.firstName" name="firstName" required />
      </clr-input-container>

      <clr-input-container>
        <label>Last Name</label>
        <input clrInput [ngModel]="templateForm.name.lastName" name="lastName" required />
      </clr-input-container>

      <button clrStepButton="next">next</button>
    </clr-step-content>
  </clr-stepper-panel>

  <clr-stepper-panel ngModelGroup="contact">
    <clr-step-title>Contact Information</clr-step-title>
    <clr-step-description>...</clr-step-description>
    <clr-step-content>
      ...
      <button clrStepButton="next">next</button>
    </clr-step-content>
  </clr-stepper-panel>

  <clr-stepper-panel ngModelGroup="password">
    <clr-step-title>Password</clr-step-title>
    <clr-step-description>...</clr-step-description>
    <clr-step-content>
      ...
      <button clrStepButton="submit">submit</button>
    </clr-step-content>
  </clr-stepper-panel>
</form>
`;

const componentExample = `
import { Component } from '@angular/core';

@Component({
  selector: 'clr-angular-stepper-template-demo',
  templateUrl: './angular-stepper-template.demo.html',
})
export class AngularStepperTemplateDemo {
  templateForm = {
    name: {
      firstName: '',
      lastName: '',
    },
    contact: {
      email: '',
      phone: '',
    },
    password: {
      password: '',
      confirm: '',
    },
  };

  templateFormSubmit(templateFormValues: {}) {
    console.log('template form submit', templateFormValues);
  }
}
`;

@Component({
  selector: 'clr-angular-stepper-template-demo',
  templateUrl: './angular-stepper-template.demo.html',
})
export class AngularStepperTemplateDemo {
  templateExample = templateExample;
  componentExample = componentExample;

  templateForm = {
    name: {
      firstName: '',
      lastName: '',
    },
    contact: {
      email: '',
      phone: '',
    },
    password: {
      password: '',
      confirm: '',
    },
  };

  templateFormSubmit(templateFormValues: {}) {
    console.log('template form submit', templateFormValues);
  }
}
