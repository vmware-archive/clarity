/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { html } from 'lit';
import { CdsButtonHandle } from '@cds/core/button-handle';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import '@cds/core/button-handle/register.js';

describe('cds-button-handle', () => {
  let testElement: HTMLElement;
  let component: CdsButtonHandle;

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-button-handle></cds-button-handle>`);
    component = testElement.querySelector<CdsButtonHandle>('cds-button-handle');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should set default handle icon', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('cds-icon').shape).toBe('drag-handle');
  });

  it('should set cds-draggable for the draggable controller API', async () => {
    await componentIsStable(component);
    expect(component.hasAttribute('cds-draggable')).toBe(true);
  });

  it('should set the proper move cursor', async () => {
    await componentIsStable(component);
    expect(getComputedStyle(component).getPropertyValue('--cursor').trim()).toBe('move');
  });
});
