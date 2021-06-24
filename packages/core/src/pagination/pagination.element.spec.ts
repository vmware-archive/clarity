/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/icon/register.js';
import { LogService } from '@cds/core/internal';
import { CdsPagination } from '@cds/core/pagination';
import '@cds/core/pagination/register.js';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement } from '@cds/core/test';
import { html } from 'lit';
import { CdsInput } from '@cds/core/input';

describe('Pagination Element', () => {
  let defaultLayoutElement: HTMLElement;
  let defaultLayoutComponent: CdsPagination;

  const placeholderText = 'I am a pagination content.';

  beforeEach(async () => {
    defaultLayoutElement = await createTestElement(html`<cds-pagination>${placeholderText}</cds-pagination>`);
    defaultLayoutComponent = defaultLayoutElement.querySelector<CdsPagination>('cds-pagination');
  });

  afterEach(() => {
    removeTestElement(defaultLayoutElement);
  });

  it('should slot the component', async () => {
    await componentIsStable(defaultLayoutComponent);
    const slots = getComponentSlotContent(defaultLayoutComponent);
    expect(slots.default.includes(placeholderText)).toBe(true);
  });

  it('should have default layout wrapper for content', async () => {
    await componentIsStable(defaultLayoutComponent);
    const wrapper = defaultLayoutComponent.shadowRoot.querySelector('div');
    expect(wrapper.getAttribute('cds-layout')).toBe('horizontal gap:md align:center');
  });

  it('should allow custom layout for content', async () => {
    const customLayoutElement = await createTestElement(
      html`<cds-pagination cds-layout="test">${placeholderText}</cds-pagination>`
    );
    const customLayoutComponent = customLayoutElement.querySelector<CdsPagination>('cds-pagination');
    await componentIsStable(customLayoutComponent);

    expect(customLayoutElement.shadowRoot).toBeNull(`No wrappers for custom layouts.`);
    const slots = getComponentSlotContent(customLayoutComponent);
    expect(slots.default.includes(placeholderText)).toBe(true);
  });

  it('should setup cds-input with proper attributes', async () => {
    const paginationWithInput = await createTestElement(
      html`<cds-pagination
        ><cds-input cds-pagination-number><input type="text" aria-label="current" /></cds-input
      ></cds-pagination>`
    );
    const paginationWithInputComponent = paginationWithInput.querySelector<CdsPagination>('cds-pagination');
    const paginationInputComponent = paginationWithInput.querySelector<CdsInput>('cds-input');
    await componentIsStable(paginationWithInputComponent);

    expect(paginationInputComponent.getAttribute('control-width')).toBe('shrink');
    expect(paginationInputComponent.getAttribute('layout')).toBe('compact');
  });

  it('should warn when a aria-label is missing and interactive', async () => {
    spyOn(LogService, 'warn');
    await createTestElement(html`<cds-pagination>${placeholderText}</cds-pagination>`);
    expect(LogService.warn).toHaveBeenCalled();
  });

  it('should not warn when a aria-label is provided', async () => {
    spyOn(LogService, 'warn');
    await createTestElement(html`<cds-pagination aria-label="test">${placeholderText}</cds-pagination>`);
    expect(LogService.warn).not.toHaveBeenCalled();
  });
});
