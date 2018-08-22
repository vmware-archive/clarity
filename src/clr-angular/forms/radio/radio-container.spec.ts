/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClrRadio } from './radio';
import { ClrRadioContainer } from '../radio/radio-container';
import { ClrRadioWrapper } from '../radio/radio-wrapper';

import { ContainerNoLabelSpec, TemplateDrivenSpec, ReactiveSpec } from '../tests/container.spec';

@Component({
  template: `
    <clr-radio-container></clr-radio-container>
  `,
})
class NoLabelTest {}

@Component({
  template: `
    <clr-radio-container>
      <label>Hello World</label>
      <clr-radio-wrapper>
        <label>One</label>
        <input type="radio" clrRadio name="model" required [(ngModel)]="model" value="one" />
      </clr-radio-wrapper>
      <clr-radio-wrapper>
        <label>Two</label>
        <input type="radio" clrRadio name="model" required [(ngModel)]="model" value="two" />
      </clr-radio-wrapper>
      <clr-control-error>There was an error</clr-control-error>
      <clr-control-helper>Helper text</clr-control-helper>
    </clr-radio-container>
    `,
})
class TemplateDrivenTest {
  model = '';
}

@Component({
  template: `
  <form [formGroup]="example">
    <clr-radio-container>
      <label>Hello World</label>
      <clr-radio-wrapper>
        <label>One</label>
        <input clrRadio type="radio" formControlName="model" value="one" />
      </clr-radio-wrapper>
      <clr-radio-wrapper>
        <label>Two</label>
        <input clrRadio type="radio" formControlName="model" value="two" />
      </clr-radio-wrapper>
      <clr-control-error>There was an error</clr-control-error>
      <clr-control-helper>Helper text</clr-control-helper>
    </clr-radio-container>
  </form>`,
})
class ReactiveTest {
  example = new FormGroup({
    model: new FormControl('', Validators.required),
  });
}

export default function(): void {
  describe('ClrRadioContainer', () => {
    ContainerNoLabelSpec(ClrRadioContainer, [ClrRadioWrapper, ClrRadio], NoLabelTest);
    TemplateDrivenSpec(
      ClrRadioContainer,
      [ClrRadioWrapper, ClrRadio],
      TemplateDrivenTest,
      '.clr-radio-wrapper [clrRadio]'
    );
    ReactiveSpec(ClrRadioContainer, [ClrRadioWrapper, ClrRadio], ReactiveTest, '.clr-radio-wrapper [clrRadio]');
  });
}
