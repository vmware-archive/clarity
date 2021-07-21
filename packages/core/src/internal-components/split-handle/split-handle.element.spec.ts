/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { html } from 'lit';
import '@cds/core/internal-components/split-handle/register.js';
import { CdsInternalSplitHandle } from '@cds/core/internal-components/split-handle';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

describe('cds-internal-split-handle', () => {
  let testElement: HTMLElement;
  let component: CdsInternalSplitHandle;
  // let range: HTMLInputElement;

  beforeEach(async () => {
    testElement = await createTestElement(html` <cds-internal-split-handle>
      <input type="range" min="0" max="100" value="50" aria-label="resize" />
    </cds-internal-split-handle>`);
    component = testElement.querySelector<CdsInternalSplitHandle>('cds-internal-split-handle');
    // range = testElement.querySelector('input');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  // it('should trigger a resize event', async () => {
  //   const eventPromise = onceEvent(range, 'input');
  //   await componentIsStable(component);

  //   component.dispatchEvent(new MouseEvent('touchstart', { bubbles: true }));
  //   component.dispatchEvent(new MouseEvent('touchmove', { bubbles: true, clientX: 100 }));
  //   component.dispatchEvent(new MouseEvent('touchend', { bubbles: true }));

  //   await eventPromise;
  //   expect(range.valueAsNumber).toBe(100);
  // });
});
