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
}
