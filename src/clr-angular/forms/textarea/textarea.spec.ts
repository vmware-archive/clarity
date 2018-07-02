/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { ClrTextarea } from './textarea';
import { ClrTextareaContainer } from './textarea-container';

import { ControlBasicTest, ControlInvalidTest } from '../tests/control.spec';

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
class SimpleTest {}

export default function(): void {
  describe('Textarea directive', () => {
    ControlInvalidTest(ClrTextarea, InvalidUseTest);
    ControlBasicTest(ClrTextareaContainer, ClrTextarea, SimpleTest, 'clr-textarea');
  });
}
