/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { render, html } from 'lit-html';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable } from '@clr/core/test/utils';
import { CdsSelect } from '@clr/core/select';
import '@clr/core/select/register.js';

describe('cds-select', () => {
  let component: CdsSelect;
  let element: HTMLElement;

  beforeEach(async () => {
    element = createTestElement();
    render(
      html` <cds-select>
        <label>select</label>
        <select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message>message text</cds-control-message>
      </cds-select>`,
      element
    );

    await waitForComponent('cds-select');

    component = element.querySelector<CdsSelect>('cds-select');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should sync host multiple attr', async () => {
    await componentIsStable(component);
    expect(component.hasAttribute('multiple')).toBe(false);

    component.inputControl.setAttribute('multiple', '');
    await componentIsStable(component);
    expect(component.hasAttribute('multiple')).toBe(true);
  });
});
