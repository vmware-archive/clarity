/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const reactiveHTML = `
<form clrForm [formGroup]="model">
    <clr-datalist-container>
        <label>Reactive Datalist</label>
        <input clrDatalistInput placeholder="Option" name="Option" formControlName="item" />
        <datalist id="clr-custom-datalistid-1">
            <option *ngFor="let item of items" [value]="item + ' dl 1'"></option>
        </datalist>
    </clr-datalist-container>
    <button class="btn btn-primary" type="submit" [disabled]="model.invalid" (click)="submit()">
        Submit
    </button>
</form>
`;

const reactiveTS = `
@Component({
  selector: 'reactive-form',
  templateUrl: './reactive.html',
})
export class ReactiveForm {
  items: string[] = ['Item1', 'Item2', 'Item3'];
  model = new FormGroup({
    item: new FormControl('', [ Validators.required, Validators.minLength(4)]),
  });
  submit() {
    console.log('Form submit', this.model);
  }
}
`;

@Component({
  selector: 'clr-datalist-reactive-validation-demo',
  templateUrl: './datalist-reactive-validation.demo.html',
})
export class DatalistReactiveValidationDemo {
  reactiveHTML = reactiveHTML;
  reactiveTS = reactiveTS;

  items: string[] = ['Item1', 'Item2', 'Item3'];
  model = new FormGroup({
    item: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  submit() {
    console.log('Form submit', this.model);
  }
}
