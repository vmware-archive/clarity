/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { testBundleSize, testRenderTime, html } from 'web-test-runner-performance/browser.js';
import '@cds/core/alert/register.js';

describe('cds-badge performance', () => {
  const alert = html`<cds-alert>Alert</cds-alert>`;
  const alertGroup = (count: number) => html`
    <cds-alert-group>
      ${Array.from(Array(count).keys()).map(() => html`<cds-alert>Alert</cds-alert>`)}
    </cds-alert-group>
  `;

  it(`should bundle and treeshake alert`, async () => {
    expect((await testBundleSize('@cds/core/alert/register.js')).kb).toBeLessThan(29.7);
  });

  it(`should render 1 alert under 20ms`, async () => {
    expect((await testRenderTime(alert)).duration).toBeLessThan(20);
  });

  it(`should render 10 alert under 45ms`, async () => {
    expect((await testRenderTime(alert, { iterations: 10 })).duration).toBeLessThan(45);
  });

  it(`should render 1 alert group with 1 alerts under 20ms`, async () => {
    expect((await testRenderTime(alertGroup(1))).duration).toBeLessThan(28);
  });

  it(`should render 1 alert group with 10 alerts under 50ms`, async () => {
    expect((await testRenderTime(alertGroup(10))).duration).toBeLessThan(50);
  });
});
