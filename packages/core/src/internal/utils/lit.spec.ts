/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement } from '@cds/core/test';
import { renderAfter, renderBefore } from './lit.js';

describe('render utils', () => {
  let element: HTMLElement;
  let component: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`<div>component</div>`);
    component = element.querySelector('div');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should renderBefore a given element', () => {
    renderBefore(html`<p>before</p>`, component);
    expect(element.textContent).toBe('beforecomponent');
  });

  it('should renderAfter a given element', () => {
    renderAfter(html`<p>after</p>`, component);
    expect(element.textContent).toBe('componentafter');
  });
});
