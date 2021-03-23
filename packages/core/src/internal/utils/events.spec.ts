/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { removeTestElement, createTestElement } from '@cds/core/test';
import { getElementUpdates } from './events.js';

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

  it('get notified of initial attr value', async done => {
    input.setAttribute('indeterminate', '');

    getElementUpdates(input, 'indeterminate', value => {
      expect(value).toEqual('');
      done();
    });
  });

  it('get notified of attr changes', async done => {
    const values: any = [];
    getElementUpdates(input, 'checked', value => {
      values.push(value === '');

      if (values.length === 2) {
        // initial property value set
        expect(values[0]).toEqual(false);

        // attribute update set
        expect(values[1]).toEqual(true);
        done();
      }
    });

    input.setAttribute('checked', '');
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
    input.checked = true;

    expect(checked).toEqual(true);
    expect((input as any)._valueTracker).toEqual(null);
  });
});
