/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { removeTestElement, createTestElement, componentIsStable } from '@cds/core/test';
import { getCssPropertyValue } from '@cds/core/internal';
import { CdsControl } from '@cds/core/forms';
import '@cds/core/forms/register.js';
import { CdsFormGroup } from './form-group.element.js';

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
    expect(formGroup.controlWidth).toBe(undefined);
    expect(controls[0].controlWidth).toBe('stretch');
    expect(controls[1].controlWidth).toBe('stretch');

    formGroup.controlWidth = 'shrink';
    await componentIsStable(formGroup);

    expect(formGroup.controlWidth).toBe('shrink');
    expect(controls[0].controlWidth).toBe('shrink');
    expect(controls[1].controlWidth).toBe('shrink');
  });

  it('should not override initial control width if set by child control and no parent width defined', async () => {
    controls[1].setAttribute('control-width', 'shrink');

    await componentIsStable(formGroup);
    await componentIsStable(controls[0]);
    await componentIsStable(controls[1]);

    expect(controls[0].controlWidth).toBe('stretch');
    expect(controls[1].getAttribute('control-width')).toBe('shrink');
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
    // relies on base20 font
    formGroup.layout = 'horizontal';
    await componentIsStable(formGroup); // connectedCallback
    await componentIsStable(formGroup); // firstUpdated

    expect(controls[0].querySelector('label').getBoundingClientRect().width).toBe(192);
    expect(getCssPropertyValue('--internal-label-min-width', formGroup)).toBe('calc((192 / 20) * 1rem)'); // --cds-global-base is used in place of "20" but computed properties return the result of css custom properties
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

  it('should determine label width when visible', async () => {
    formGroup.setAttribute('hidden', '');
    await componentIsStable(formGroup);
    expect(getCssPropertyValue('--internal-label-min-width', formGroup)).toBe('');

    formGroup.removeAttribute('hidden');
    await componentIsStable(formGroup);
    expect(getCssPropertyValue('--internal-label-min-width', formGroup)).toBe('calc((0 / 20) * 1rem)');
  });
});

describe('cds-form-group label alignment', () => {
  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-form-group layout="vertical">
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

  it('should not set label width for vertical layouts', async () => {
    await componentIsStable(formGroup);
    expect(getCssPropertyValue('--internal-label-min-width', formGroup)).toBe('');

    formGroup.layout = 'vertical-inline';
    await componentIsStable(formGroup);
    expect(getCssPropertyValue('--internal-label-min-width', formGroup)).toBe('');
  });
});
