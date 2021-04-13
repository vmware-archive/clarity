/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TemplateDrivenSpec, ControlStandaloneSpec, ReactiveSpec } from '../tests/control.spec';
import { ClrControlContainer } from './control-container';
import { ClrControl } from './control';

@Component({
  template: ` <input type="text" clrControl /> `,
})
class StandaloneUseTest {}

@Component({
  template: ` <input clrControl name="model" class="test-class" [(ngModel)]="model" /> `,
})
class TemplateDrivenTest {
  model;
}

@Component({
  template: `
    <div [formGroup]="example">
      <input clrControl name="model" class="test-class" formControlName="model" />
    </div>
  `,
})
class ReactiveTest {
  example = new FormGroup({
    model: new FormControl('', Validators.required),
  });
}

export default function (): void {
  describe('Input directive', () => {
    ControlStandaloneSpec(StandaloneUseTest);
    TemplateDrivenSpec(ClrControlContainer, ClrControl, TemplateDrivenTest, 'clr-input');
    ReactiveSpec(ClrControlContainer, ClrControl, ReactiveTest, 'clr-input');
  });
}
