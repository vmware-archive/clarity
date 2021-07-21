/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { testBundleSize, testRenderTime } from 'web-test-runner-performance/browser.js';
import '@cds/core/button-sort/register.js';

describe('cds-button-sort bundle performance', () => {
  it(`should bundle and treeshake component in under 23kb`, async () => {
    const result = await testBundleSize(`import '@cds/core/button-sort/register.js'`);
    expect(result.kb).toBeLessThan(23);
  });
});

describe('cds-button-sort render performance', () => {
  const button = html`<cds-button-sort></cds-button-sort>`;

  it(`should render 1 cds-button-sort elements under 20ms`, async () => {
    const result = await testRenderTime(button);
    expect(result.duration).toBeLessThan(20);
  });

  it(`should render 100 cds-button-sort elements under 200ms`, async () => {
    const result = await testRenderTime(button, { iterations: 100 });
    expect(result.duration).toBeLessThan(200);
  });
});
