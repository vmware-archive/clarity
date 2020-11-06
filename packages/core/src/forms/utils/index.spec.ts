/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { render, html } from 'lit-html';
import { createTestElement, removeTestElement } from '@cds/core/test/utils';
import { associateInputAndLabel, associateInputToDatalist, getStatusIcon, isVerticalLayout } from './index.js';

describe('form internal utilities', () => {
  it('associateInputAndLabel', async () => {
    const input = (await createTestElement()) as HTMLInputElement;
    const label = (await createTestElement()) as HTMLLabelElement;
    associateInputAndLabel(input, label, 'test-id');

    expect(input.id).toBe('test-id');
    expect(label.getAttribute('for')).toBe('test-id');
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
});
