/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsGridColumn } from './grid-column.element.js';
import '@cds/core/grid/register.js';

describe('cds-grid-column', () => {
  let component: CdsGridColumn;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`<cds-grid-column></cds-grid-column>`);
    component = element.querySelector<CdsGridColumn>('cds-grid-column');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should provide the i18n API', async () => {
    await componentIsStable(component);
    expect(component.i18n.resizeColumn).toBe('Resize Column');
  });

  it('should assign to the column slot', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('slot')).toBe('columns');
  });

  it('should enable the resize action handle if resizable', async () => {
    await componentIsStable(component);
    expect(component.resizable).toBe(false);
    expect(component.shadowRoot.querySelector('cds-internal-split-handle').hasAttribute('_readonly')).toBe(true);
    expect(component.shadowRoot.querySelector('input')).toBeFalsy();

    component.resizable = true;
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('cds-internal-split-handle').hasAttribute('_readonly')).toBe(false);
    expect(component.shadowRoot.querySelector('input')).toBeTruthy();
  });
});
