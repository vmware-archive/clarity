/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test/utils';
import { CdsControlMessage } from '@cds/core/forms';
import { CdsInput } from '@cds/core/input';
import '@cds/core/input/register.js';
import '@cds/core/forms/register.js';

let element: HTMLElement;
let control: CdsInput;
let controlMessage: CdsControlMessage;

describe('syncHTML5Validation', () => {
  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-input validate>
        <label>input</label>
        <input type="text" required />
        <cds-control-message error="valueMissing">required</cds-control-message>
      </cds-input>
    `);

    control = element.querySelector<CdsInput>('cds-input');
    controlMessage = element.querySelector<CdsControlMessage>('cds-control-message');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should retain validate attribute', async () => {
    await componentIsStable(control);
    expect(control.hasAttribute('validate')).toBe(true);
  });

  it('show or hide validation message on blur', async () => {
    await componentIsStable(control);
    expect(controlMessage.hasAttribute('hidden')).toBe(true);

    control.inputControl.dispatchEvent(new Event('blur'));
    expect(controlMessage.hasAttribute('hidden')).toBe(false);

    control.inputControl.dispatchEvent(new Event('input'));
    expect(controlMessage.hasAttribute('hidden')).toBe(false);

    control.inputControl.value = 'test';
    control.inputControl.dispatchEvent(new Event('input'));
    expect(controlMessage.hasAttribute('hidden')).toBe(true);
  });
});
