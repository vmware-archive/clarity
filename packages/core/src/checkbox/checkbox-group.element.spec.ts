/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test/utils';
import { CdsCheckboxGroup } from '@cds/core/checkbox';
import '@cds/core/checkbox/register.js';

describe('cds-checkbox-group', () => {
  let component: CdsCheckboxGroup;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-checkbox-group>
        <label>checkbox group</label>
        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" />
        </cds-checkbox>
        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>
        <cds-control-message>message text</cds-control-message>
      </cds-checkbox-group>
    `);

    component = element.querySelector<CdsCheckboxGroup>('cds-checkbox-group');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });
});
