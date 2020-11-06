/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test/utils';
import { CdsToggleGroup } from '@cds/core/toggle';
import '@cds/core/toggle/register.js';

describe('cds-toggle-group', () => {
  let component: CdsToggleGroup;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-toggle-group>
        <label>toggle group</label>
        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" />
        </cds-toggle>
        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>
        <cds-control-message>message text</cds-control-message>
      </cds-toggle-group>
    `);

    component = element.querySelector<CdsToggleGroup>('cds-toggle-group');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });
});
