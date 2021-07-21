/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { html } from 'lit';
import '@cds/core/actions/register.js';
import { CdsActionHandle } from '@cds/core/actions';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

describe('cds-action-handle', () => {
  let testElement: HTMLElement;
  let component: CdsActionHandle;

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-action-handle></cds-action-handle>`);
    component = testElement.querySelector<CdsActionHandle>('cds-action-handle');
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
