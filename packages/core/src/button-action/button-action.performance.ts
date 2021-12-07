/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { testBundleSize, testRenderTime } from 'web-test-runner-performance/browser.js';
import '@cds/core/button-action/register.js';

describe('cds-button-action bundle performance', () => {
  it(`should bundle and treeshake component in under 24kb`, async () => {
    const result = await testBundleSize(`import '@cds/core/button-action/register.js'`);
    expect(result.kb).toBeLessThan(24);
  });
});

describe('cds-button-action render performance', () => {
  const action = html`<cds-button-action></cds-button-action>`;

  it(`should render 1 cds-button-action element under 20ms`, async () => {
    const result = await testRenderTime(action);
    expect(result.duration).toBeLessThan(20);
  });

  it(`should render 100 cds-button-action elements under 200ms`, async () => {
    const result = await testRenderTime(action, { iterations: 100 });
    expect(result.duration).toBeLessThan(200);
  });
});
