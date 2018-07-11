/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ClrTextarea } from './textarea';
import { ClrTextareaContainer } from './textarea-container';

import { TemplateDrivenSpec, ControlInvalidSpec, ReactiveSpec } from '../tests/control.spec';

@Component({
  template: `
    <textarea clrTextarea></textarea>
    `,
})
class InvalidUseTest {}

@Component({
  template: `
    <textarea clrTextarea name="model" class="test-class" [(ngModel)]="model"></textarea>
    `,
})
class TemplateDrivenTest {}

@Component({
  template: `
  <div [formGroup]="example">
    <textarea clrTextarea name="model" class="test-class" formControlName="model"></textarea>
  </div>`,
})
class ReactiveTest {
  example = new FormGroup({
    model: new FormControl('', Validators.required),
  });
}

export default function(): void {
  describe('Textarea directive', () => {
    ControlInvalidSpec(ClrTextarea, InvalidUseTest);
    TemplateDrivenSpec(ClrTextareaContainer, ClrTextarea, TemplateDrivenTest, 'clr-textarea');
    ReactiveSpec(ClrTextareaContainer, ClrTextarea, ReactiveTest, 'clr-textarea');
  });
}
