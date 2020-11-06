/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { removeTestElement, createTestElement, componentIsStable } from '@cds/core/test/utils';
import { CdsInternalControlInline } from '@cds/core/forms';
import '@cds/core/forms/register.js';

let element: HTMLElement;
let control: CdsInternalControlInline;
let input: HTMLInputElement;

describe('cds-internal-control-inline', () => {
  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-internal-control-inline>
        <label>control</label>
        <input type="checkbox" />
      </cds-internal-control-inline>
    `);

    control = element.querySelector<CdsInternalControlInline>('cds-internal-control-inline');
    input = element.querySelector<HTMLInputElement>('input');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should set identifier attribute', () => {
    expect(control.getAttribute('cds-control-inline')).toBe('');
  });

  it('should allow inline label to be place left or right of the control', async () => {
    await componentIsStable(control);
    expect(control.shadowRoot.innerHTML).not.toContain('order:reverse');

    control.controlAlign = 'right';
    await componentIsStable(control);
    expect(control.shadowRoot.innerHTML).toContain('order:reverse');
  });

  it('should allow style input to trigger click of native input', done => {
    let clicked = false;
    input.addEventListener('click', () => {
      clicked = true;
      done();
    });
    control.shadowRoot.querySelector<HTMLElement>('.input').click();
    expect(clicked).toBe(true);
  });
});
