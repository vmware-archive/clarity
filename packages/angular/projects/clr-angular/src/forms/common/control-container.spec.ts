/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ClrControlContainer } from './control-container';
import { ClrControl } from './control';

import { ContainerNoLabelSpec, ReactiveSpec, TemplateDrivenSpec } from '../tests/container.spec';

@Component({
  template: `
    <clr-control-container>
      <input name="model" clrControl required [(ngModel)]="model" [disabled]="disabled" />
      <label>Hello World</label>
      <clr-control-helper>Helper text</clr-control-helper>
      <clr-control-error>Must be at least 5 characters</clr-control-error>
    </clr-control-container>
  `,
})
class SimpleTest {
  disabled = false;
  model = '';
}

@Component({
  template: ` <clr-control-container>
    <input clrControl name="model" [(ngModel)]="model" />
  </clr-control-container>`,
})
class NoLabelTest {
  model;
}

@Component({
  template: ` <form [formGroup]="form">
    <clr-control-container>
      <input clrControl formControlName="model" />
      <label>Hello World</label>
      <clr-control-helper>Helper text</clr-control-helper>
      <clr-control-error>Must be at least 5 characters</clr-control-error>
    </clr-control-container>
  </form>`,
})
class ReactiveTest {
  disabled = false;
  form = new FormGroup({
    model: new FormControl({ value: '', disabled: this.disabled }, Validators.required),
  });
}

export default function (): void {
  describe('ClrControlContainer', () => {
    ContainerNoLabelSpec(ClrControlContainer, ClrControl, NoLabelTest);
    TemplateDrivenSpec(ClrControlContainer, ClrControl, SimpleTest, '.clr-input-wrapper [clrControl]');
    ReactiveSpec(ClrControlContainer, ClrControl, ReactiveTest, '.clr-input-wrapper [clrControl]');
  });
}
