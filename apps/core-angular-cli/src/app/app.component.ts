import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  show = false;
  panel1Expanded = true;

  modalHidden = true;

  form: FormGroup;
  formValue: Observable<{}>;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      select: ['Option One'],
      datalist: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      search: ['', Validators.minLength(5)],
      time: [''],
      inputGroupProtocol: ['http://'],
      inputGroupPort: [''],
      range: [75],
      checkboxGroup1: [true],
      checkboxGroup2: [''],
      checkboxGroup3: [''],
      radioGroup: ['south-america'],
      toggle1: [true],
      toggle2: [''],
      file: [''],
      selectMultiple: [''],
      textarea: ['hello world'],
    });

    this.formValue = this.form.valueChanges.pipe(startWith(this.form.value));
  }

  get nameInvalid() {
    return this.form.controls.name.touched && this.form.controls.name.hasError('required');
  }

  get passwordRequired() {
    return this.form.controls.password.touched && this.form.controls.password.hasError('required');
  }

  get passwordMinLength() {
    return this.form.controls.password.touched && this.form.controls.password.hasError('minlength');
  }

  expandedChange(event: Event): void {
    this.panel1Expanded = (event as CustomEvent).detail;
  }

  submit() {
    console.log(this.form.value);
  }
}
