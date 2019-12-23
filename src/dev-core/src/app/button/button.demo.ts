/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClrLoadingState } from '@clr/core/button';
import '@clr/core/button';

@Component({
  selector: 'app-button-demo',
  templateUrl: './button.demo.html',
  styleUrls: ['./button.demo.scss'],
})
export class ButtonDemoComponent {
  form: FormGroup;
  disabled = true;
  myValidateBtnState = ClrLoadingState.DEFAULT;
  mySubmitBtnState = ClrLoadingState.DEFAULT;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['hello world'],
    });
  }

  submit() {
    alert(`Form Submit: ${this.form.value.name}`);
  }

  validateValidateBtn() {
    this.myValidateBtnState = ClrLoadingState.LOADING;

    setTimeout(() => {
      this.myValidateBtnState = ClrLoadingState.SUCCESS;
    }, 1500);
  }

  validateSubmitBtn() {
    this.mySubmitBtnState = ClrLoadingState.LOADING;

    setTimeout(() => {
      this.mySubmitBtnState = ClrLoadingState.ERROR;
    }, 1500);
  }
}
