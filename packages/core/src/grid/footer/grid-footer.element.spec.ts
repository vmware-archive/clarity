/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsGridFooter } from './grid-footer.element.js';
import '@cds/core/grid/register.js';

describe('cds-grid-footer', () => {
  let component: CdsGridFooter;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`<cds-grid-footer></cds-grid-footer>`);
    component = element.querySelector<CdsGridFooter>('cds-grid-footer');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should assign to the footer slot', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('slot')).toBe('footer');
  });
});
