/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { WrapperFullSpec, WrapperNoLabelSpec, WrapperContainerSpec } from '../tests/wrapper.spec';
import { ClrRadio } from './radio';
import { ClrRadioWrapper } from './radio-wrapper';
import { ClrRadioContainer } from './radio-container';

@Component({
  template: `
    <clr-radio-wrapper>
      <label>Hello World</label>
      <input type="radio" clrRadio name="model" [(ngModel)]="model" />
    </clr-radio-wrapper>
    `,
})
class FullTest {
  model = '';
}

@Component({
  template: `
    <clr-radio-wrapper>
      <input type="radio" clrRadio name="model" [(ngModel)]="model" />
    </clr-radio-wrapper>`,
})
class NoLabelTest {
  model = '';
}

@Component({
  template: `<clr-radio-container>
    <clr-radio-wrapper>
      <input type="radio" clrRadio name="model" [(ngModel)]="model" />
    </clr-radio-wrapper>
  </clr-radio-container>`,
})
class ContainerTest {
  model = '';
}

export default function(): void {
  describe('ClrRadioWrapper', () => {
    WrapperNoLabelSpec(ClrRadioWrapper, ClrRadio, NoLabelTest);
    WrapperFullSpec(ClrRadioWrapper, ClrRadio, FullTest, 'clr-radio-wrapper');
    WrapperContainerSpec(ClrRadioContainer, ClrRadioWrapper, ClrRadio, ContainerTest, 'clr-radio-wrapper');
  });
}
