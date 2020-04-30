/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ClrDatalistInput } from './datalist-input';
import { ClrDatalistContainer } from './datalist-container';

import { TemplateDrivenSpec, ReactiveSpec, ContainerNoLabelSpec } from '../tests/container.spec';

@Component({
  template: `
    <clr-datalist-container>
      <input clrDatalistInput list="clr-datalist-1" required name="Option" [(ngModel)]="model" [disabled]="disabled" />
      <datalist id="clr-datalist-1">
        <option [value]="'item1'"></option>
        <option [value]="'item2'"></option>
        <option [value]="'item3'"></option>
      </datalist>
      <label>Hello World</label>
      <clr-control-helper>Helper text</clr-control-helper>
      <clr-control-error>Must be at least 5 characters</clr-control-error>
    </clr-datalist-container>
  `,
})
class TemplateDrivenTest {
  disabled = false;
  model = '';
}

@Component({
  template: ` <clr-datalist-container>
    <input clrDatalistInput list="clr-datalist-1" name="Option" />
    <datalist id="clr-datalist-1">
      <option [value]="'item1'"></option>
      <option [value]="'item2'"></option>
      <option [value]="'item3'"></option>
    </datalist>
  </clr-datalist-container>`,
})
class NoLabelTest {}

@Component({
  template: `
    <form [formGroup]="form">
      <clr-datalist-container>
        <input clrDatalistInput list="clr-datalist-1" formControlName="model" />
        <datalist id="clr-datalist-1">
          <option [value]="'item1'"></option>
          <option [value]="'item2'"></option>
          <option [value]="'item3'"></option>
        </datalist>
        <label>Hello World</label>
        <clr-control-helper>Helper text</clr-control-helper>
        <clr-control-error>Must be at least 5 characters</clr-control-error>
      </clr-datalist-container>
    </form>
  `,
})
class ReactiveTest {
  disabled = false;
  form = new FormGroup({
    model: new FormControl({ value: '', disabled: this.disabled }, Validators.required),
  });
}

export default function (): void {
  describe('ClrDatalistContainer', () => {
    ContainerNoLabelSpec(ClrDatalistContainer, ClrDatalistInput, NoLabelTest);
    TemplateDrivenSpec(
      ClrDatalistContainer,
      ClrDatalistInput,
      TemplateDrivenTest,
      '.clr-input-wrapper [clrDatalistInput]'
    );
    ReactiveSpec(ClrDatalistContainer, ClrDatalistInput, ReactiveTest, '.clr-input-wrapper [clrDatalistInput]');
  });
}
