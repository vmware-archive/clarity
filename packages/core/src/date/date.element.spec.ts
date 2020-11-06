/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test/utils';
import { CdsDate } from '@cds/core/date';
import '@cds/core/date/register.js';

describe('cds-date', () => {
  let component: CdsDate;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-date>
        <label>date</label>
        <input type="date" />
        <cds-control-message>message text</cds-control-message>
      </cds-date>
    `);

    component = element.querySelector<CdsDate>('cds-date');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });
});
