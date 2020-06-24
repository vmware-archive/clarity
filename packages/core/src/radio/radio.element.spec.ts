/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { render, html } from 'lit-html';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable } from '@clr/core/test/utils';
import { CdsRadio } from '@clr/core/radio';
import '@clr/core/radio/register.js';

describe('cds-radio', () => {
  let component: CdsRadio;
  let element: HTMLElement;

  beforeEach(async () => {
    element = createTestElement();
    render(
      html`
        <cds-radio-group>
          <label>radio group</label>
          <cds-radio>
            <label>radio 1</label>
            <input type="radio" />
          </cds-radio>
          <cds-radio>
            <label>radio 2</label>
            <input type="radio" />
          </cds-radio>
        </cds-radio-group>
      `,
      element
    );

    await waitForComponent('cds-radio');

    component = element.querySelector<CdsRadio>('cds-radio');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should mark radio as checked', async () => {
    await componentIsStable(component);
    expect(component.inputControl.checked).toBe(false);

    component.inputControl.click();
    expect(component.inputControl.checked).toBe(true);
  });
});
