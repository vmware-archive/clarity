/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { testBundleSize, testRenderTime } from 'web-test-runner-performance/browser.js';
import '@cds/core/actions/register.js';

describe('cds-action bundle performance', () => {
  it(`should bundle and treeshake component in under 19kb`, async () => {
    const result = await testBundleSize(`import '@cds/core/actions/register.js'`);
    expect(result.kb).toBeLessThan(24);
  });
});

describe('cds-action render performance', () => {
  const action = html`<cds-action></cds-action>`;

  it(`should render 1 cds-action elements under 15ms`, async () => {
    const result = await testRenderTime(action);
    expect(result.duration).toBeLessThan(20);
  });

  it(`should render 100 cds-action elements under 100ms`, async () => {
    const result = await testRenderTime(action, { iterations: 100 });
    expect(result.duration).toBeLessThan(100);
  });

  it(`should render 1000 cds-action elements under 750ms`, async () => {
    const result = await testRenderTime(action, { iterations: 1000 });
    expect(result.duration).toBeLessThan(750);
  });
});
