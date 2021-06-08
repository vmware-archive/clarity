/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsCheckbox } from '@cds/core/checkbox';
import '@cds/core/checkbox/register.js';

describe('cds-checkbox', () => {
  let component: CdsCheckbox;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-checkbox>
        <label>checkbox</label>
        <input type="checkbox" />
        <cds-control-message>message text</cds-control-message>
      </cds-checkbox>
    `);

    component = element.querySelector<CdsCheckbox>('cds-checkbox');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should update the indeterminate attr for host', async () => {
    await componentIsStable(component);
    expect(component.hasAttribute('_indeterminate')).toBe(false);

    component.inputControl.setAttribute('indeterminate', '');
    await componentIsStable(component);
    expect(component.hasAttribute('_indeterminate')).toBe(true);
  });

  it('should remove indeterminate state when checked', async () => {
    component.inputControl.indeterminate = true;
    await componentIsStable(component);
    expect(component.hasAttribute('_checked')).toBe(false);
    expect(component.hasAttribute('_indeterminate')).toBe(true);

    component.inputControl.checked = true;
    await componentIsStable(component);
    expect(component.hasAttribute('_checked')).toBe(true);
    expect(component.hasAttribute('_indeterminate')).toBe(false);
  });
});
