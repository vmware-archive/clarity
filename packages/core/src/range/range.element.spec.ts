/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { render, html } from 'lit-html';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable } from '@clr/core/test/utils';
import { CdsRange } from '@clr/core/range';
import '@clr/core/range/register.js';

describe('cds-range', () => {
  let component: CdsRange;
  let element: HTMLElement;

  beforeEach(async () => {
    element = createTestElement();
    render(
      html` <cds-range>
        <label>range</label>
        <input type="range" />
        <cds-control-message>message test</cds-control-message>
      </cds-range>`,
      element
    );

    await waitForComponent('cds-range');

    component = element.querySelector<CdsRange>('cds-range');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should set the track width style', async () => {
    await componentIsStable(component);
    expect(getComputedStyle(component).getPropertyValue('--track-width')).toBe('50%');

    component.inputControl.min = '1';
    component.inputControl.max = '10';
    component.inputControl.value = '7.5';
    component.inputControl.dispatchEvent(new Event('input'));

    await componentIsStable(component);
    expect(getComputedStyle(component).getPropertyValue('--track-width')).toBe('77%');
  });
});
