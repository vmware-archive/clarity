/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test/utils';
import { CdsRadio } from '@cds/core/radio';
import '@cds/core/radio/register.js';

describe('cds-radio', () => {
  let component: CdsRadio;
  let componentTwo: CdsRadio;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-radio-group>
        <label>radio group</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" />
        </cds-radio>
        <cds-radio>
          <label>radio 2</label>
          <input type="radio" checked />
        </cds-radio>
      </cds-radio-group>
    `);

    component = element.querySelector<CdsRadio>('cds-radio');
    componentTwo = element.querySelectorAll<CdsRadio>('cds-radio')[1];
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

  it('should mark checked radio with a checked attribute based on input checked state', async () => {
    await componentIsStable(component);

    expect(component.hasAttribute('checked')).toBe(false);
    expect(componentTwo.hasAttribute('checked')).toBe(true);
    await componentIsStable(component);
    component.inputControl.click();
    await componentIsStable(component);

    expect(component.hasAttribute('checked')).toBe(true);
    expect(componentTwo.hasAttribute('checked')).toBe(false);
  });
});
