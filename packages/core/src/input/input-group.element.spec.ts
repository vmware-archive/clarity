/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { CdsInputGroup, CdsInput } from '@cds/core/input';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test/utils';

describe('cds-input-group', () => {
  let component: CdsInputGroup;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-input-group>
        <label>input group</label>
        <cds-input>
          <label>input 1</label>
          <input type="text" />
        </cds-input>
        <cds-input>
          <label>input 2</label>
          <input type="text" />
        </cds-input>
        <cds-control-message>message text</cds-control-message>
      </cds-input-group>
    `);

    component = element.querySelector<CdsInputGroup>('cds-input-group');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should setup child controls to align within group', async () => {
    const inputControl = component.querySelector<CdsInput>('cds-input');
    await componentIsStable(component);
    expect(inputControl.hiddenLabel).toBe(true);
    expect(inputControl.controlWidth).toBe(component.controlWidth);
  });
});
