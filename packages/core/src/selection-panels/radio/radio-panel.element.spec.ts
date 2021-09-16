/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import { CdsRadioPanel } from '@cds/core/selection-panels/radio';
import '@cds/core/selection-panels/radio/register.js';

describe('cds-radio-panel', () => {
  let component: CdsRadioPanel;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-radio-panel>
        <label>
          <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM One</span>
            <p cds-text="subsection center">Orchestrate & Automate</p>
          </div>
        </label>
        <input type="radio" value="1" name="radio-group" />
      </cds-radio-panel>
    `);

    component = element.querySelector<CdsRadioPanel>('cds-radio-panel');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });
});
