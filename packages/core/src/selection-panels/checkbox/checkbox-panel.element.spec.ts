/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import { CdsCheckboxPanel } from '@cds/core/selection-panels/checkbox';
import '@cds/core/selection-panels/checkbox/register.js';

describe('cds-checkbox-panel', () => {
  let component: CdsCheckboxPanel;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-checkbox-panel>
        <label>
          <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM One</span>
            <span cds-text="subsection center">Orchestrate & Automate</span>
          </div>
        </label>
        <input type="checkbox" value="1" name="radio-group" />
      </cds-checkbox-panel>
    `);

    component = element.querySelector<CdsCheckboxPanel>('cds-checkbox-panel');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });
});
