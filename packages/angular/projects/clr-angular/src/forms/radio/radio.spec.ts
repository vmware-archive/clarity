/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ControlStandaloneSpec, ReactiveSpec, TemplateDrivenSpec } from '../tests/control.spec';
import { ClrRadio } from './radio';
import { ClrRadioWrapper } from './radio-wrapper';

@Component({
  template: `
    <input type="radio" clrRadio />
    `,
})
class StandaloneUseTest {}

@Component({
  template: `
    <input type="radio" clrRadio name="model" class="test-class" [(ngModel)]="model" />
  `,
})
class TemplateDrivenTest {}

@Component({
  template: `
    <form [formGroup]="example">
      <input type="radio" clrRadio name="model" class="test-class" formControlName="model" />
    </form>
  `,
})
class ReactiveTest {
  example = new FormGroup({
    model: new FormControl('', Validators.required),
  });
}

export default function(): void {
  describe('ClrRadio directive', () => {
    ControlStandaloneSpec(StandaloneUseTest);
    TemplateDrivenSpec(ClrRadioWrapper, ClrRadio, TemplateDrivenTest, 'clr-radio');
    ReactiveSpec(ClrRadioWrapper, ClrRadio, ReactiveTest, 'clr-radio');
  });
}
