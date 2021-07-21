/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsGridPlaceholder } from './grid-placeholder.element.js';
import '@cds/core/grid/register.js';

describe('cds-grid-placeholder', () => {
  let component: CdsGridPlaceholder;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`<cds-grid-placeholder></cds-grid-placeholder>`);
    component = element.querySelector<CdsGridPlaceholder>('cds-grid-placeholder');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should enable style access via css part "placeholder"', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('.private-host')).toBeTruthy();
  });

  it('should show default message', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('.private-host').textContent.trim()).toBe('No Results Found');
  });

  it('should show drop target message when draggable', async () => {
    component.setAttribute('draggable', 'false'); // false is a html5 draggable target
    component.requestUpdate();
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('.private-host').textContent.trim()).toBe('Drop Item');
  });
});
