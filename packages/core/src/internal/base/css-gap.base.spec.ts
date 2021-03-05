/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement, html } from 'lit-element';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { applyCSSGapShim } from './css-gap.base.js';
import { browserFeatures } from '../utils/supports.js';

class GapShim extends LitElement {}
class GapShimSupports extends LitElement {}

const shimSupportsClass = applyCSSGapShim(GapShimSupports);
window.customElements.define('gap-shim-support', shimSupportsClass);

(browserFeatures as any).supports.flexGap = false; // force false flex gap support
const shimClass = applyCSSGapShim(GapShim);
(browserFeatures as any).supports.flexGap = true;
window.customElements.define('gap-shim', shimClass);

describe('CSS Flex Gap Shim', () => {
  let testElement: HTMLElement;
  let component: GapShim;
  let componentSupports: GapShimSupports;

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <gap-shim></gap-shim>
      <gap-shim-support></gap-shim-support>
    `);
    component = testElement.querySelector<GapShim>('gap-shim');
    componentSupports = testElement.querySelector<GapShimSupports>('gap-shim-support');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should not apply css gap shim attr if not supported', async () => {
    await componentIsStable(componentSupports);
    expect(componentSupports.getAttribute('_nfg')).toBe(null);
  });

  it('should apply css gap shim attr if not supported', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('_nfg')).toBe('');
    (browserFeatures as any).supports.flexGap = true;
  });
});
