/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

const templateExample = `
<form clrStepper [formGroup]="form" (ngSubmit)="submit()">
  <clr-stepper-panel formGroupName="name">
    <clr-step-title>Legal Name</clr-step-title>
    <clr-step-description>Description goes here.</clr-step-description>
    <clr-step-content *clrIfExpanded>
      <clr-input-container>
        <label>First Name</label>
        <input clrInput formControlName="first" />
        <clr-control-error *clrIfError="'required'">First Name Required</clr-control-error>
      </clr-input-container>

      <clr-input-container>
        <label>Last Name</label>
        <input clrInput formControlName="last" />
        <clr-control-error *clrIfError="'required'">Last Name Required</clr-control-error>
      </clr-input-container>

      <button clrStepButton="next">next</button>
    </clr-step-content>
  </clr-stepper-panel>

  <clr-stepper-panel formGroupName="contact">
    <clr-step-title>Contact Information</clr-step-title>
    <clr-step-description>...</clr-step-description>
    <clr-step-content *clrIfExpanded>
      ...
      <button clrStepButton="next">next</button>
    </clr-step-content>
  </clr-stepper-panel>

  <clr-stepper-panel formGroupName="password">
    <clr-step-title>Password</clr-step-title>
    <clr-step-description>...</clr-step-description>
    <clr-step-content *clrIfExpanded>
      ...
      <button clrStepButton="submit">submit</button>
    </clr-step-content>
  </clr-stepper-panel>
</form>
`;

const componentExample = `
import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'clr-angular-stepper-reactive-demo',
  templateUrl: './angular-stepper-reactive.demo.html',
})
export class AngularStepperReactiveDemo {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: this.formBuilder.group({
        first: ['Luke', Validators.required],
        last: ['Skywalker', Validators.required],
      }),
      contact: this.formBuilder.group({
        email: [],
        phone: [],
      }),
      password: this.formBuilder.group({
        password: [],
        confirm: [],
      }),
    });
  }

  submit() {
    console.log('reactive form submit', this.form.value);
  }
}`;

@Component({
  selector: 'clr-angular-stepper-reactive-demo',
  templateUrl: './angular-stepper-reactive.demo.html',
})
export class AngularStepperReactiveDemo {
  templateExample = templateExample;
  componentExample = componentExample;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: this.formBuilder.group({
        first: ['', Validators.required],
        last: ['', Validators.required],
      }),
      contact: this.formBuilder.group({
        email: [],
        phone: [],
      }),
      password: this.formBuilder.group({
        password: [],
        confirm: [],
      }),
    });
  }

  submit() {
    console.log('reactive form submit', this.form.value);
  }
}
