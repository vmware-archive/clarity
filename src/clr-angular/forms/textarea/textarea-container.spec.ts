/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ClrTextarea } from './textarea';
import { ClrTextareaContainer } from './textarea-container';

import { ContainerNoLabelSpec, TemplateDrivenSpec, ReactiveSpec } from '../tests/container.spec';

@Component({
  template: `
  <clr-textarea-container>
    <textarea name="test" clrTextarea required [(ngModel)]="model" [disabled]="disabled"></textarea>
    <label>Hello World</label>
    <clr-control-helper>Helper text</clr-control-helper>
    <clr-control-error>Must be at least 5 characters</clr-control-error>
  </clr-textarea-container>
    `,
})
class SimpleTest {
  disabled = false;
  model = '';
}

@Component({
  template: `
  <clr-textarea-container>
    <textarea clrTextarea [(ngModel)]="model"></textarea>
  </clr-textarea-container>`,
})
class NoLabelTest {}

@Component({
  template: `
  <form [formGroup]="form">
    <clr-textarea-container>
      <textarea name="test" clrTextarea formControlName="model"></textarea>
      <label>Hello World</label>
      <clr-control-helper>Helper text</clr-control-helper>
      <clr-control-error>Must be at least 5 characters</clr-control-error>
    </clr-textarea-container>
  </form>`,
})
class ReactiveTest {
  disabled = false;
  form = new FormGroup({
    model: new FormControl({ value: '', disabled: this.disabled }, Validators.required),
  });
}

export default function(): void {
  describe('ClrTextareaContainer', () => {
    ContainerNoLabelSpec(ClrTextareaContainer, ClrTextarea, NoLabelTest);
    TemplateDrivenSpec(ClrTextareaContainer, ClrTextarea, SimpleTest, '.clr-textarea-wrapper [clrTextarea]');
    ReactiveSpec(ClrTextareaContainer, ClrTextarea, ReactiveTest, '.clr-textarea-wrapper [clrTextarea]');
  });
}
