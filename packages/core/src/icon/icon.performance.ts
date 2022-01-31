/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { testBundleSize, testRenderTime, html } from 'web-test-runner-performance/browser.js';
import { ellipsisVerticalIcon } from '@cds/core/icon/shapes/ellipsis-vertical.js';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import '@cds/core/icon/register.js';

ClarityIcons.addIcons(ellipsisVerticalIcon);

describe('cds-icon performance', () => {
  it(`should bundle and treeshake individual icons`, async () => {
    const bundle = `
      import { ClarityIcons, userIcon } from '@cds/core/icon';
      import '@cds/core/icon/register.js';
      ClarityIcons.addIcons(userIcon);
    `;
    expect((await testBundleSize(bundle)).kb).toBeLessThan(19.5);
  });

  it(`should bundle all icons`, async () => {
    const bundle = `
    import { loadChartIconSet, loadCommerceIconSet, loadCoreIconSet, loadEssentialIconSet, loadMediaIconSet, loadMiniIconSet, loadSocialIconSet, loadTechnologyIconSet, loadTextEditIconSet, loadTravelIconSet } from '@cds/core/icon';
    import '@cds/core/icon/register.js';
      loadChartIconSet();
      loadCommerceIconSet();
      loadCoreIconSet();
      loadEssentialIconSet();
      loadMediaIconSet();
      loadMiniIconSet();
      loadSocialIconSet();
      loadTechnologyIconSet();
      loadTextEditIconSet();
      loadTravelIconSet();
    `;
    expect((await testBundleSize(bundle)).kb).toBeLessThan(112.5);
  });

  const icon = html`<cds-icon shape="ellipsis-vertical"></cds-icon>`;

  it(`should render 1 icon under 20ms`, async () => {
    expect((await testRenderTime(icon)).duration).toBeLessThan(20);
  });

  it(`should render 100 icons under 50ms`, async () => {
    expect((await testRenderTime(icon, { iterations: 100, average: 5 })).duration).toBeLessThan(50);
  });
});
