/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test/utils';
import { CdsToggle } from '@cds/core/toggle';
import '@cds/core/toggle/register.js';

describe('cds-toggle', () => {
  let component: CdsToggle;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-toggle>
        <label>toggle</label>
        <input type="checkbox" />
        <cds-control-message>message text</cds-control-message>
      </cds-toggle>
    `);
    component = element.querySelector<CdsToggle>('cds-toggle');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should sync host checked attr', async () => {
    await componentIsStable(component);
    expect(component.hasAttribute('checked')).toBe(false);

    component.inputControl.click();
    await componentIsStable(component);
    expect(component.hasAttribute('checked')).toBe(true);
  });
});
