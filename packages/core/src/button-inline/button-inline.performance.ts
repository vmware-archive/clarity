/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { testBundleSize, testRenderTime } from 'web-test-runner-performance/browser.js';
import '@cds/core/button-inline/register.js';

describe('cds-button-inline bundle performance', () => {
  it(`should bundle and treeshake component in under 18.5kb`, async () => {
    const result = await testBundleSize(`import '@cds/core/button-inline/register.js'`);
    expect(result.kb).toBeLessThan(18.5);
  });
});

describe('cds-button-inline render performance', () => {
  const button = html`<cds-button-inline>content</cds-button-inline>`;

  it(`should render 1 cds-button-inline elements under 20ms`, async () => {
    const result = await testRenderTime(button);
    expect(result.duration).toBeLessThan(20);
  });

  it(`should render 100 cds-button-inline elements under 100ms`, async () => {
    const result = await testRenderTime(button, { iterations: 100 });
    expect(result.duration).toBeLessThan(100);
  });
});
