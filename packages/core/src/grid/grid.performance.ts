/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { testBundleSize, testRenderTime } from 'web-test-runner-performance/browser.js';
import '@cds/core/grid/register.js';

describe('cds-grid bundle performance', () => {
  it(`should bundle and treeshake component in under 29kb`, async () => {
    const result = await testBundleSize(`import '@cds/core/grid/register.js'`);
    expect(result.kb).toBeLessThan(36.5);
  });
});

describe('cds-grid render performance', () => {
  it('should render 100 rows under 150ms', async () => {
    const result = await testRenderTime(html` <cds-grid height="360">
      <cds-grid-column>Column 1</cds-grid-column>
      <cds-grid-column>Column 2</cds-grid-column>
      <cds-grid-column>Column 3</cds-grid-column>
      <cds-grid-column>Column 4</cds-grid-column>
      ${Array.from(Array(100).keys()).map(
        i => html`<cds-grid-row>
          <cds-grid-cell>${i}-1</cds-grid-cell>
          <cds-grid-cell>${i}-2</cds-grid-cell>
          <cds-grid-cell>${i}-3</cds-grid-cell>
          <cds-grid-cell>${i}-4</cds-grid-cell>
        </cds-grid-row>`
      )}
      <cds-grid-footer></cds-grid-footer>
    </cds-grid>`);

    expect(result.duration).toBeLessThan(150);
  });

  it('should render 1000 rows under 1000ms', async () => {
    const result = await testRenderTime(html` <cds-grid height="360">
      <cds-grid-column>Column 1</cds-grid-column>
      <cds-grid-column>Column 2</cds-grid-column>
      <cds-grid-column>Column 3</cds-grid-column>
      <cds-grid-column>Column 4</cds-grid-column>
      ${Array.from(Array(1000).keys()).map(
        i => html`<cds-grid-row>
          <cds-grid-cell>${i}-1</cds-grid-cell>
          <cds-grid-cell>${i}-2</cds-grid-cell>
          <cds-grid-cell>${i}-3</cds-grid-cell>
          <cds-grid-cell>${i}-4</cds-grid-cell>
        </cds-grid-row>`
      )}
      <cds-grid-footer></cds-grid-footer>
    </cds-grid>`);

    expect(result.duration).toBeLessThan(1000);
  });
});
