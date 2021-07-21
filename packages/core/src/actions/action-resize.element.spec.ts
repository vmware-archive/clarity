/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { html } from 'lit';
import '@cds/core/actions/register.js';
import { CdsActionResize } from '@cds/core/actions';
import { componentIsStable, createTestElement, onceEvent, removeTestElement } from '@cds/core/test';

describe('cds-action-resize', () => {
  let testElement: HTMLElement;
  let component: CdsActionResize;
  let range: HTMLInputElement;

  beforeEach(async () => {
    testElement = await createTestElement(html` <cds-action-resize>
      <input type="range" min="0" max="100" value="50" aria-label="resize" />
    </cds-action-resize>`);
    component = testElement.querySelector<CdsActionResize>('cds-action-resize');
    range = testElement.querySelector('input');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should trigger a resize event on mouse up', async () => {
    const eventPromise = onceEvent(range, 'input');
    await componentIsStable(component);

    component.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    component.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: 100 }));
    component.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));

    await eventPromise;
    expect(range.valueAsNumber).toBe(100);
  });
});
