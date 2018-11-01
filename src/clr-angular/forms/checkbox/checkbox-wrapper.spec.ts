/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { WrapperFullSpec, WrapperNoLabelSpec, WrapperContainerSpec } from '../tests/wrapper.spec';
import { ClrCheckbox } from './checkbox';
import { ClrCheckboxWrapper } from './checkbox-wrapper';
import { ClrCheckboxContainer } from './checkbox-container';

@Component({
  template: `
    <clr-checkbox-wrapper>
      <label>Hello World</label>
      <input type="checkbox" clrCheckbox name="model" [(ngModel)]="model" />
    </clr-checkbox-wrapper>
    `,
})
class FullTest {
  model = '';
}

@Component({
  template: `
    <clr-checkbox-wrapper>
      <input type="checkbox" clrCheckbox name="model" [(ngModel)]="model" />
    </clr-checkbox-wrapper>`,
})
class NoLabelTest {
  model = '';
}

@Component({
  template: `<clr-checkbox-container>
    <clr-checkbox-wrapper>
      <input type="checkbox" clrCheckbox name="model" [(ngModel)]="model" />
    </clr-checkbox-wrapper>
  </clr-checkbox-container>`,
})
class ContainerTest {
  model = '';
}

export default function(): void {
  describe('ClrCheckboxWrapper', () => {
    WrapperNoLabelSpec(ClrCheckboxWrapper, ClrCheckbox, NoLabelTest);
    WrapperFullSpec(ClrCheckboxWrapper, ClrCheckbox, FullTest, 'clr-checkbox-wrapper');
    WrapperContainerSpec(ClrCheckboxContainer, ClrCheckboxWrapper, ClrCheckbox, ContainerTest, 'clr-checkbox-wrapper');
  });
}
