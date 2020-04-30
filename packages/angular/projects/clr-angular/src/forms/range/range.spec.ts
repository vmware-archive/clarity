/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TemplateDrivenSpec, ControlStandaloneSpec, ReactiveSpec } from '../tests/control.spec';
import { ClrRangeContainer } from './range-container';
import { ClrRange } from './range';

@Component({
  template: ` <input type="text" clrRange /> `,
})
class StandaloneUseTest {}

@Component({
  template: ` <input clrRange name="model" class="test-class" [(ngModel)]="model" /> `,
})
class TemplateDrivenTest {}

@Component({
  template: `
    <div [formGroup]="example">
      <input clrRange name="model" class="test-class" formControlName="model" />
    </div>
  `,
})
class ReactiveTest {
  example = new FormGroup({
    model: new FormControl('', Validators.required),
  });
}

export default function (): void {
  describe('Range directive', () => {
    ControlStandaloneSpec(StandaloneUseTest);
    TemplateDrivenSpec(ClrRangeContainer, ClrRange, TemplateDrivenTest, 'clr-range');
    ReactiveSpec(ClrRangeContainer, ClrRange, ReactiveTest, 'clr-range');
  });
}
