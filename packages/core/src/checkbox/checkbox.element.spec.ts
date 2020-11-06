/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test/utils';
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
    expect(component.hasAttribute('indeterminate')).toBe(false);

    component.inputControl.setAttribute('indeterminate', '');
    await componentIsStable(component);
    expect(component.hasAttribute('indeterminate')).toBe(true);
  });

  it('should remove indeterminate state when checked', async () => {
    component.inputControl.setAttribute('indeterminate', '');
    await componentIsStable(component);
    expect(component.hasAttribute('checked')).toBe(false);
    expect(component.hasAttribute('indeterminate')).toBe(true);

    component.inputControl.click();
    await componentIsStable(component);
    expect(component.hasAttribute('checked')).toBe(true);
    expect(component.hasAttribute('indeterminate')).toBe(false);
  });
});
