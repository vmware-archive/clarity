/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { removeTestElement, createTestElement, componentIsStable } from '@cds/core/test/utils';
import { CdsControl } from '@cds/core/forms';
import '@cds/core/forms/register.js';
import { CdsFormGroup } from './form-group.element';

let element: HTMLElement;
let formGroup: CdsFormGroup;
let controls: CdsControl[];

describe('cds-form-group', () => {
  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-form-group layout="horizontal">
        <cds-control>
          <label style="width: 200px">control</label>
          <input type="text" />
        </cds-control>

        <cds-control>
          <label>control</label>
          <input type="text" />
        </cds-control>
      </cds-form-group>
    `);

    formGroup = element.querySelector<CdsFormGroup>('cds-form-group');
    controls = Array.from(element.querySelectorAll<CdsControl>('cds-control'));
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should sync layouts for all child controls', async () => {
    await componentIsStable(formGroup);
    expect(formGroup.layout).toBe('horizontal');
    expect(controls[0].layout).toBe('horizontal');
    expect(controls[1].layout).toBe('horizontal');

    formGroup.layout = 'vertical';
    await componentIsStable(formGroup);
    expect(formGroup.layout).toBe('vertical');
    expect(controls[0].layout).toBe('vertical');
    expect(controls[1].layout).toBe('vertical');
  });

  it('should sync responsive prop', async () => {
    await componentIsStable(formGroup);
    expect(formGroup.responsive).toBe(true);
    expect(controls[0].responsive).toBe(true);
    expect(controls[1].responsive).toBe(true);

    formGroup.responsive = false;
    await componentIsStable(formGroup);
    expect(formGroup.responsive).toBe(false);
    expect(controls[0].responsive).toBe(false);
    expect(controls[1].responsive).toBe(false);
  });

  it('should sync controlWidth prop', async () => {
    await componentIsStable(formGroup);
    expect(formGroup.controlWidth).toBe('stretch');
    expect(controls[0].controlWidth).toBe('stretch');
    expect(controls[1].controlWidth).toBe('stretch');

    formGroup.controlWidth = 'shrink';
    await componentIsStable(formGroup);
    expect(formGroup.controlWidth).toBe('shrink');
    expect(controls[0].controlWidth).toBe('shrink');
    expect(controls[1].controlWidth).toBe('shrink');
  });

  it('should sync validate prop', async () => {
    await componentIsStable(formGroup);
    expect(formGroup.validate).toBe(false);
    expect(controls[0].validate).toBe(false);
    expect(controls[1].validate).toBe(false);

    formGroup.validate = true;
    await componentIsStable(formGroup);
    expect(formGroup.validate).toBe(true);
    expect(controls[0].validate).toBe(true);
    expect(controls[1].validate).toBe(true);
  });

  it('should sync label widths', async () => {
    formGroup.layout = 'horizontal';
    await componentIsStable(formGroup); // connectedCallback
    await componentIsStable(formGroup); // firstUpdated

    expect(controls[0].querySelector('label').getBoundingClientRect().width).toBe(200);
    expect(getComputedStyle(formGroup).getPropertyValue('--internal-label-min-width')).toBe('200px');
  });

  it('should sync layouts when a control overflows', async () => {
    await componentIsStable(formGroup);
    expect(formGroup.layout).toBe('horizontal');

    controls[0].dispatchEvent(new CustomEvent('layoutChange', { detail: 'vertical', bubbles: true }));
    await componentIsStable(controls[1]);
    expect(controls[0].layout).toBe('vertical');

    controls[0].dispatchEvent(new CustomEvent('layoutChange', { detail: 'horizontal', bubbles: true }));
    await componentIsStable(controls[1]);
    expect(controls[0].layout).toBe('horizontal');
  });

  it('should decrease white space when using compact layout', async () => {
    await componentIsStable(formGroup);
    expect(formGroup.shadowRoot.innerHTML).toContain('vertical gap:lg');

    formGroup.layout = 'compact';
    await componentIsStable(formGroup);
    expect(formGroup.shadowRoot.innerHTML).toContain('vertical gap:md');
  });
});
