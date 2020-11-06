/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { removeTestElement, createTestElement, componentIsStable } from '@cds/core/test/utils';
import { CdsControl, CdsInternalControlGroup } from '@cds/core/forms';
import '@cds/core/forms/register.js';
import { CdsControlMessage } from '../control-message/control-message.element';

let element: HTMLElement;
let label: HTMLLabelElement;
let controlGroup: CdsInternalControlGroup;
let controls: CdsControl[];
let message: CdsControlMessage;

describe('cds-internal-control-group', () => {
  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-internal-control-group>
        <label>control group</label>
        <cds-control>
          <label>control</label>
          <input type="text" />
        </cds-control>

        <cds-control>
          <label>control</label>
          <input type="text" />
        </cds-control>
        <cds-control-message>message text</cds-control-message>
      </cds-internal-control-group>
    `);

    controlGroup = element.querySelector<CdsInternalControlGroup>('cds-internal-control-group');
    controls = Array.from(element.querySelectorAll<CdsControl>('cds-control'));
    message = element.querySelector<CdsControlMessage>('cds-control-message');
    label = element.querySelector<HTMLLabelElement>('label');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should have role group', async () => {
    // using <legend> was not an option as it does not work for a11y across shadow dom boundary.
    await componentIsStable(controlGroup);
    expect(controlGroup.getAttribute('role')).toBe('group');
  });

  it('should have identifier attribute', async () => {
    await componentIsStable(controlGroup);
    expect(controlGroup.hasAttribute('cds-control-group')).toBe(true);
  });

  it('should associate label to the group', async () => {
    await componentIsStable(controlGroup);
    expect(controlGroup.getAttribute('aria-labelledby')).toBe(label.id);
  });

  it('should set the slot for each projected item', async () => {
    await componentIsStable(controlGroup);
    await componentIsStable(controls[0]);
    expect(label.getAttribute('slot')).toBe('label');
    expect(controls[0].getAttribute('slot')).toBe('controls');
  });

  it('should be described by control messages', async () => {
    await componentIsStable(controlGroup);
    expect(controlGroup.getAttribute('aria-describedby').trim()).toBe(message.id);
  });

  it('should only create a message slot if control messages are present', async () => {
    // this is due to layouts, we do not want white spacing on a slot if there is no content
    await componentIsStable(controlGroup);
    expect(controlGroup.shadowRoot.querySelector('slot[name=message]')).toBeTruthy();
  });

  it('should apply status to all child controls', async () => {
    await componentIsStable(controlGroup);
    expect(controlGroup.status).toBe('neutral');
    expect(controls[0].status).toBe('neutral');
    expect(controls[1].status).toBe('neutral');

    controlGroup.status = 'error';
    await componentIsStable(controlGroup);
    await componentIsStable(controls[0]);
    expect(controls[0].status).toBe('error');
    expect(controls[1].status).toBe('error');
  });

  it('should adjust for compact layouts and messages', async () => {
    controlGroup.layout = 'compact';
    await componentIsStable(controlGroup);

    const messages = controlGroup.shadowRoot.querySelector('.messages');
    expect(messages).toBeTruthy();

    const message = controlGroup.querySelector('cds-control-message');
    message.parentNode.removeChild(message);
    controlGroup.requestUpdate();
    await componentIsStable(controlGroup);
    expect(controlGroup.querySelector('.messages')).toBe(null);
  });

  it('should set the disabled style on all messages if group is disabled', async () => {
    controlGroup.disabled = true;
    await componentIsStable(controlGroup);
    expect(message.getAttribute('disabled')).toBe('');
  });

  it('should determine if layout is stable', async () => {
    await componentIsStable(controlGroup);
    expect(controlGroup.layoutStable).toBe(true);
  });
});
