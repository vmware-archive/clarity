/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { render, html } from 'lit-html';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable } from '@clr/core/test/utils';
import { CdsToggleGroup } from '@clr/core/toggle';
import '@clr/core/toggle/register.js';

describe('cds-toggle-group', () => {
  let component: CdsToggleGroup;
  let element: HTMLElement;

  beforeEach(async () => {
    element = createTestElement();
    render(
      html` <cds-toggle-group>
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
      </cds-toggle-group>`,
      element
    );

    await waitForComponent('cds-toggle-group');

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
