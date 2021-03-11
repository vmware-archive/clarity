/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { removeTestElement, createTestElement } from '@cds/core/test';
import { getElementUpdates } from './events';

describe('getElementUpdates', () => {
  let element: HTMLElement;
  let input: HTMLInputElement;

  beforeEach(async () => {
    element = await createTestElement(html`<input type="checkbox" />`);
    input = element.querySelector<HTMLInputElement>('input');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('get notified of property change', () => {
    let checked = false;
    getElementUpdates(input, 'checked', value => (checked = value));
    input.checked = true;

    expect(checked).toEqual(true);
  });

  it('get notified of attr change', () => {
    let checked = false;
    getElementUpdates(input, 'checked', value => (checked = value));
    input.setAttribute('checked', '');

    expect(checked).toEqual(true);
  });

  it('should reset any React value trackers if input', () => {
    (input as any)._valueTracker = {};

    let value = '';
    getElementUpdates(input, 'value', v => (value = v));
    input.value = 'test';

    expect(value).toEqual('test');
    expect((input as any)._valueTracker).toEqual(null);
  });

  it('should reset any React value trackers if checkable input', () => {
    (input as any)._valueTracker = {};

    let checked = false;
    getElementUpdates(input, 'checked', value => (checked = value));
    input.setAttribute('checked', '');

    expect(checked).toEqual(true);
    expect((input as any)._valueTracker).toEqual(null);
  });
});
