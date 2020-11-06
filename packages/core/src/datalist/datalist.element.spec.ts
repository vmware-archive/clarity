/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test/utils';
import { CdsDatalist } from '@cds/core/datalist';
import '@cds/core/datalist/register.js';

describe('cds-datalist', () => {
  let component: CdsDatalist;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-datalist>
        <cds-datalist>
          <label>datalist</label>
          <input type="text" />
          <datalist>
            <option value="item 1"></option>
            <option value="item 2"></option>
            <option value="item 3"></option>
          </datalist>
          <cds-control-message>message text</cds-control-message>
        </cds-datalist>
      </cds-datalist>
    `);

    component = element.querySelector<CdsDatalist>('cds-datalist');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });
});
