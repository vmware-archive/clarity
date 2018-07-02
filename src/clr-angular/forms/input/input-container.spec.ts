/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { ClrInput } from './input';
import { ClrInputContainer } from './input-container';

import { ContainerFullSpec, ContainerNoLabelSpec } from '../tests/container.spec';

@Component({
  template: `
    <clr-input-container>
        <input type="text" name="test" clrInput required [(ngModel)]="model" />
        <label>Hello World</label>
        <clr-control-helper>Helper text</clr-control-helper>
        <clr-control-error>Must be at least 5 characters</clr-control-error>
    </clr-input-container>
    `,
})
class SimpleTest {
  model = '';
}

@Component({
  template: `
  <clr-input-container>
    <input clrInput [(ngModel)]="model" />
  </clr-input-container>`,
})
class NoLabelTest {}

export default function(): void {
  describe('ClrInputContainer', () => {
    ContainerNoLabelSpec(ClrInputContainer, ClrInput, NoLabelTest);
    ContainerFullSpec(ClrInputContainer, ClrInput, SimpleTest, '.clr-input-wrapper [clrInput]');
  });
}
