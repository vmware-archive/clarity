/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test/utils';
import { CdsSearch } from '@cds/core/search';
import '@cds/core/search/register.js';

describe('cds-search', () => {
  let component: CdsSearch;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-search>
        <label>search</label>
        <input type="search" />
        <cds-control-message>message test</cds-control-message>
      </cds-search>
    `);

    component = element.querySelector<CdsSearch>('cds-search');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });
});
