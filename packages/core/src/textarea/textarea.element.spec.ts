/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test/utils';
import { CdsTextarea } from '@cds/core/textarea';
import '@cds/core/textarea/register.js';

describe('cds-textarea', () => {
  let component: CdsTextarea;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-textarea>
        <label>textarea</label>
        <textarea></textarea>
        <cds-control-message>message text</cds-control-message>
      </cds-textarea>
    `);

    component = element.querySelector<CdsTextarea>('cds-textarea');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });
});
