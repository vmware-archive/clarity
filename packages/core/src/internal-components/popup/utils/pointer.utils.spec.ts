/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement } from '@cds/core/test';
import { getPointer } from './pointer.utils.js';

describe('Pointer helper functions: getPointer() - ', () => {
  let defaultPointerWrapper: HTMLElement;
  let defaultPointer: SVGElement;
  let anglePointerWrapper: HTMLElement;
  let anglePointer: SVGElement;

  beforeEach(async () => {
    defaultPointerWrapper = await createTestElement(html`${getPointer('whatever')}`);
    anglePointerWrapper = await createTestElement(html`${getPointer('angle')}`);
    defaultPointer = defaultPointerWrapper.querySelector('svg');
    anglePointer = anglePointerWrapper.querySelector('svg');
  });

  afterEach(() => {
    removeTestElement(defaultPointerWrapper);
    removeTestElement(anglePointerWrapper);
  });

  it('returns angle as expected', async () => {
    expect(anglePointer.getAttribute('class')?.indexOf('angle-pointer') > -1).toBe(true, 'angle pointer ok');
  });

  it('returns non-angle/default as expected', async () => {
    expect(defaultPointer.getAttribute('class')?.indexOf('default-pointer') > -1).toBe(true, 'default pointer ok');
  });
});
