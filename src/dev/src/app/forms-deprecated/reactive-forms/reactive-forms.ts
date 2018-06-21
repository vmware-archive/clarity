/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'clr-reactive-forms-demo',
  templateUrl: './reactive-forms.html',
})
export class ReactiveFormsDemo {
  employeeAddressForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    address: new FormGroup({
      postalCode: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
    }),
  });

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.employeeAddressForm.value);
  }

  addNewEmployeeAddress() {
    this.employeeAddressForm.reset();
    this.submitted = false;
  }
}
