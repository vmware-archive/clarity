/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ClrSelect } from './select';
import { ClrSelectContainer } from './select-container';

import { ContainerNoLabelSpec, TemplateDrivenSpec, ReactiveSpec } from '../tests/container.spec';

@Component({
  template: `
  <clr-select-container>
    <select clrSelect [(ngModel)]="model">
      <option value="1">one</option>
      <option value="2">two</option>
    </select>
  </clr-select-container>`,
})
class NoLabelTest {}

@Component({
  template: `
  <clr-select-container>
    <select name="test" clrSelect required [(ngModel)]="model" [disabled]="disabled">
      <option value="1">one</option>
      <option value="2">two</option>
    </select>
    <label>Hello World</label>
    <clr-control-helper>Helper text</clr-control-helper>
    <clr-control-error>Must be at least 5 characters</clr-control-error>
  </clr-select-container>
    `,
})
class TemplateDrivenTest {
  disabled = false;
  model = '';
}

@Component({
  template: `
  <clr-select-container>
    <select multiple name="test" clrSelect required [(ngModel)]="model" [disabled]="disabled">
      <option value="1">one</option>
      <option value="2">two</option>
    </select>
    <label>Hello World</label>
    <clr-control-helper>Helper text</clr-control-helper>
    <clr-control-error>Must be at least 5 characters</clr-control-error>
  </clr-select-container>
    `,
})
class TemplateDrivenMultipleTest {
  disabled = false;
  model = '';
}

@Component({
  template: `
  <form [formGroup]="form">
    <clr-select-container>
      <select name="test" clrSelect formControlName="model">
        <option value="1">one</option>
        <option value="2">two</option>
      </select>
      <label>Hello World</label>
      <clr-control-helper>Helper text</clr-control-helper>
      <clr-control-error>Must be at least 5 characters</clr-control-error>
    </clr-select-container>
  </form>`,
})
class ReactiveTest {
  disabled = false;
  form = new FormGroup({
    model: new FormControl({ value: '', disabled: this.disabled }, Validators.required),
  });
}

@Component({
  template: `
  <form [formGroup]="form">
    <clr-select-container>
      <select multiple name="test" clrSelect formControlName="model">
        <option value="1">one</option>
        <option value="2">two</option>
      </select>
      <label>Hello World</label>
      <clr-control-helper>Helper text</clr-control-helper>
      <clr-control-error>Must be at least 5 characters</clr-control-error>
    </clr-select-container>
  </form>`,
})
class ReactiveMultipleTest {
  disabled = false;
  form = new FormGroup({
    model: new FormControl({ value: '', disabled: this.disabled }, Validators.required),
  });
}

export default function(): void {
  describe('ClrSelectContainer', () => {
    ContainerNoLabelSpec(ClrSelectContainer, ClrSelect, NoLabelTest);

    describe('Single select', () => {
      TemplateDrivenSpec(ClrSelectContainer, ClrSelect, TemplateDrivenTest, '.clr-select-wrapper [clrSelect]');
      ReactiveSpec(ClrSelectContainer, ClrSelect, ReactiveTest, '.clr-select-wrapper [clrSelect]');
    });

    describe('Multi-select', () => {
      TemplateDrivenSpec(
        ClrSelectContainer,
        ClrSelect,
        TemplateDrivenMultipleTest,
        '.clr-multiselect-wrapper [clrSelect]'
      );
      ReactiveSpec(ClrSelectContainer, ClrSelect, ReactiveMultipleTest, '.clr-multiselect-wrapper [clrSelect]');
    });
  });
}
