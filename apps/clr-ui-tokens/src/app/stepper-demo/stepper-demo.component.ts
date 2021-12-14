import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-demo',
  templateUrl: './stepper-demo.component.html',
  styleUrls: ['./stepper-demo.component.scss'],
})
export class StepperDemoComponent {
  stepOpen = true;
  showSecondStep = true;
  initialStep = 'contact';
  form: FormGroup = this.getReactiveForm();
  partiallyCompletedForm: FormGroup = this.getReactiveForm();

  submit() {
    console.log('reactive form submit', this.form.value);
  }

  private getReactiveForm() {
    return new FormGroup({
      name: new FormGroup({
        first: new FormControl('Luke', Validators.required),
        last: new FormControl('Skywalker', Validators.required),
      }),
      contact: new FormGroup({
        email: new FormControl(),
        phone: new FormControl(),
      }),
      password: new FormGroup({
        password: new FormControl(),
        confirm: new FormControl(),
      }),
    });
  }
}
