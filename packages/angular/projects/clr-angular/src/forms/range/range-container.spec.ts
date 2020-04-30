/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ClrRange } from './range';
import { ClrRangeContainer } from './range-container';

import { TemplateDrivenSpec, ReactiveSpec, ContainerNoLabelSpec } from '../tests/container.spec';

@Component({
  template: `
    <clr-range-container>
      <input name="model" clrRange required [(ngModel)]="model" [disabled]="disabled" />
      <label>Hello World</label>
      <clr-control-helper>Helper text</clr-control-helper>
      <clr-control-error>Must be at least 5 characters</clr-control-error>
    </clr-range-container>
  `,
})
class SimpleTest {
  disabled = false;
  model = '';
}

@Component({
  template: ` <clr-range-container>
    <input clrRange name="model" [(ngModel)]="model" />
  </clr-range-container>`,
})
class NoLabelTest {}

@Component({
  template: ` <form [formGroup]="form">
    <clr-range-container>
      <input clrRange formControlName="model" />
      <label>Hello World</label>
      <clr-control-helper>Helper text</clr-control-helper>
      <clr-control-error>Must be at least 5 characters</clr-control-error>
    </clr-range-container>
  </form>`,
})
class ReactiveTest {
  disabled = false;
  form = new FormGroup({
    model: new FormControl({ value: '', disabled: this.disabled }, Validators.required),
  });
}

export default function (): void {
  describe('ClrRangeContainer', () => {
    ContainerNoLabelSpec(ClrRangeContainer, ClrRange, NoLabelTest);
    TemplateDrivenSpec(ClrRangeContainer, ClrRange, SimpleTest, '.clr-range-wrapper [clrRange]');
    ReactiveSpec(ClrRangeContainer, ClrRange, ReactiveTest, '.clr-range-wrapper [clrRange]');
  });
}
