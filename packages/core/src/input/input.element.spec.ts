/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { CdsInput } from '@cds/core/input';
import '@cds/core/input/register.js';
import '@cds/core/icon/register.js';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';

describe('cds-input', () => {
  let component: CdsInput;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-input>
        <label>input</label>
        <input type="text" />
      </cds-input>
    `);

    component = element.querySelector<CdsInput>('cds-input');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });
});

describe('cds-input with label control action', () => {
  let component: CdsInput;
  let element: HTMLElement;
  let input: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-input>
        <label>with label control action</label>
        <cds-control-action action="label" aria-label="get more details">
          <cds-icon shape="unknown"></cds-icon>
        </cds-control-action>
        <input placeholder="example" />
      </cds-input>
    `);

    component = element.querySelector<CdsInput>('cds-input');
    input = component.querySelector<HTMLElement>('input');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should have inline padding styles when a cds-* form control and a control action is used with the label', async () => {
    await componentIsStable(component);
    const styleAttr = input.getAttribute('style');
    expect(styleAttr).not.toBeNull();
    expect(styleAttr.includes('padding-left')).toBe(true);
    expect(styleAttr.includes('padding-right')).toBe(true);
  });
});
