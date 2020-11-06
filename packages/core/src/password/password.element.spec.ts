/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test/utils';
import { CdsPassword } from '@cds/core/password';
import '@cds/core/password/register.js';

describe('cds-password', () => {
  let component: CdsPassword;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-password>
        <label>password</label>
        <input type="password" />
        <cds-control-message>message text</cds-control-message>
      </cds-password>
    `);

    component = element.querySelector<CdsPassword>('cds-password');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should show/hide the password and icon', async () => {
    await componentIsStable(component);
    expect(component.inputControl.type).toBe('password');
    expect(component.shadowRoot.querySelector('cds-icon').shape).toBe('eye');

    component.shadowRoot.querySelector('cds-control-action').click();
    await componentIsStable(component);
    expect(component.inputControl.type).toBe('text');
    expect(component.shadowRoot.querySelector('cds-icon').shape).toBe('eye-hide');

    component.shadowRoot.querySelector('cds-control-action').click();
    await componentIsStable(component);
    expect(component.inputControl.type).toBe('password');
    expect(component.shadowRoot.querySelector('cds-icon').shape).toBe('eye');
  });
});
