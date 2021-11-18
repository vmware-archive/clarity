/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { render, html } from 'lit';
import { createTestElement, removeTestElement } from '@cds/core/test';
import {
  associateInputAndLabel,
  associateInputToDatalist,
  getCurrentMessageStatus,
  getStatusIcon,
  isVerticalLayout,
} from './utils.js';
import '@cds/core/forms/register.js';

describe('form internal utilities', () => {
  it('associateInputAndLabel', async () => {
    const input = (await createTestElement()) as HTMLInputElement;
    const label = (await createTestElement()) as HTMLLabelElement;
    input.id = 'test-id';
    associateInputAndLabel(input, label);

    expect(input.id).toBe('test-id');
    expect(label.getAttribute('for')).toBe('test-id');

    input.id = '';
    associateInputAndLabel(input, label);
    expect(input.id.includes('_')).toBe(true);
    expect(label.getAttribute('for')).toBe(input.id);
    removeTestElement(input);
    removeTestElement(label);
  });

  it('associateInputToDatalist', async () => {
    const input = (await createTestElement()) as HTMLInputElement;
    const datalist = (await createTestElement()) as HTMLDataListElement;
    input.id = 'test-id';

    associateInputToDatalist(input, datalist);

    expect(datalist.id).toBe('test-id-datalist');
    expect(input.getAttribute('list')).toBe('test-id-datalist');

    input.id = '';
    associateInputToDatalist(input, datalist);
    expect(input.id.includes('_')).toBe(true);
    expect(datalist.id).toBe(`${input.id}-datalist`);
    removeTestElement(input);
    removeTestElement(datalist);
  });

  it('getStatusIcon', async () => {
    const element = (await createTestElement(html`${getStatusIcon('neutral')}`)) as HTMLInputElement;
    expect(element.querySelector('cds-control-action')).toBe(null);

    render(html`${getStatusIcon('error')}`, element);
    expect(element.querySelector('cds-control-action')).toBeTruthy();
    expect(element.querySelector('cds-icon').getAttribute('status')).toBe('danger');
    expect(element.querySelector('cds-icon').getAttribute('shape')).toBe('exclamation-circle');

    render(html`${getStatusIcon('success')}`, element);
    expect(element.querySelector('cds-control-action')).toBeTruthy();
    expect(element.querySelector('cds-icon').getAttribute('status')).toBe('success');
    expect(element.querySelector('cds-icon').getAttribute('shape')).toBe('check-circle');
  });

  it('isVerticalLayout', () => {
    expect(isVerticalLayout('vertical')).toBe(true);
    expect(isVerticalLayout('vertical-inline')).toBe(true);
    expect(isVerticalLayout('horizontal')).toBe(false);
    expect(isVerticalLayout('horizontal-inline')).toBe(false);
    expect(isVerticalLayout('compact')).toBe(false);
  });

  it('getCurrentMessageStatus', async () => {
    const testElement = await createTestElement(html` <cds-control-message status="success"></cds-control-message>
      <cds-control-message hidden status="success"></cds-control-message>`);
    const [message, hiddenMessage] = Array.from(testElement.querySelectorAll('cds-control-message'));

    const messageStatus = await getCurrentMessageStatus([message]);
    const hiddenMessageStatus = await getCurrentMessageStatus([hiddenMessage]);

    expect(messageStatus).toBe('success');
    expect(hiddenMessageStatus).toBe('neutral');
    removeTestElement(testElement);
  });
});
