/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { render, html } from 'lit-html';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable } from '@clr/core/test/utils';
import { CdsCheckboxGroup } from '@clr/core/checkbox';
import '@clr/core/checkbox/register.js';

describe('cds-checkbox-group', () => {
  let component: CdsCheckboxGroup;
  let element: HTMLElement;

  beforeEach(async () => {
    element = createTestElement();
    render(
      html` <cds-checkbox-group>
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
      </cds-checkbox-group>`,
      element
    );

    await waitForComponent('cds-checkbox-group');

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
