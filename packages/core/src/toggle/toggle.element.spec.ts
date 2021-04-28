/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsToggle } from '@cds/core/toggle';
import '@cds/core/toggle/register.js';
import { sleep } from '@cds/core/internal';

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
    expect(component.hasAttribute('_checked')).toBe(false);

    component.inputControl.click();
    await componentIsStable(component);
    expect(component.hasAttribute('_checked')).toBe(true);
  });

  it('should default to cds-motion "on" and resolve to "ready"', async () => {
    await componentIsStable(component);
    await sleep(25);
    expect(component.cdsMotion).toBe('ready');
  });

  it('should not resolve to "ready" if cds-motion initialized to "off"', async () => {
    const nomotion = await createTestElement(html`
      <cds-toggle cds-motion="off">
        <label>toggle</label>
        <input type="checkbox" />
        <cds-control-message>message text</cds-control-message>
      </cds-toggle>
    `);
    const noMotionCmp = nomotion.querySelector<CdsToggle>('cds-toggle');
    await componentIsStable(noMotionCmp);
    await sleep(25);
    expect(noMotionCmp.cdsMotion).toBe('off');
    removeTestElement(nomotion);
  });

  it('should handle changing value of cds-motion', async () => {
    await componentIsStable(component);
    await sleep(12);
    expect(component.cdsMotion).toBe('ready', 'defaults to on and resolves to ready');

    component.setAttribute('cds-motion', 'off');
    await componentIsStable(component);
    await sleep(12);
    expect(component.cdsMotion).toBe('off', 'if set to off, does not resolve to ready');

    component.setAttribute('cds-motion', 'on');
    await componentIsStable(component);
    await sleep(12);
    expect(component.cdsMotion).toBe('ready', 'if set back to on, resolves to ready');
  });
});
