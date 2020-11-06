/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test/utils';
import { CdsTime } from '@cds/core/time';
import '@cds/core/time/register.js';

describe('cds-time', () => {
  let component: CdsTime;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-time>
        <label>time</label>
        <input type="time" />
        <cds-control-message>message text</cds-control-message>
      </cds-time>
    `);
    component = element.querySelector<CdsTime>('cds-time');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });
});
