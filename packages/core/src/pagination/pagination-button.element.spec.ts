/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/icon/register.js';
import { LogService } from '@cds/core/internal';
import { CdsPaginationButton, CdsPaginationButtonAction } from '@cds/core/pagination';
import '@cds/core/pagination/register.js';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement } from '@cds/core/test';
import { html } from 'lit-html';

describe('Pagination Buttons', () => {
  let paginationButtonElement: HTMLElement;
  let paginationButtonComponent: CdsPaginationButton;

  const createDefaultPaginationButton = async (action: CdsPaginationButtonAction) => {
    paginationButtonElement = await createTestElement(
      html`<cds-pagination-button action="${action}"></cds-pagination-button>`
    );
    paginationButtonComponent = paginationButtonElement.querySelector<CdsPaginationButton>('cds-pagination-button');
  };

  afterEach(() => {
    removeTestElement(paginationButtonElement);
  });

  it('should use proper icon for when action attribute is first', async () => {
    await createDefaultPaginationButton(CdsPaginationButtonAction.First);
    await componentIsStable(paginationButtonComponent);
    const defaultIcon = paginationButtonComponent.shadowRoot.querySelector('cds-icon');
    expect(defaultIcon.getAttribute('shape')).toBe('step-forward-2');
    expect(defaultIcon.getAttribute('direction')).toBe('down');
  });

  it('should use proper icon for when action attribute is last', async () => {
    await createDefaultPaginationButton(CdsPaginationButtonAction.Last);
    await componentIsStable(paginationButtonComponent);
    const defaultIcon = paginationButtonComponent.shadowRoot.querySelector('cds-icon');
    expect(defaultIcon.getAttribute('shape')).toBe('step-forward-2');
    expect(defaultIcon.getAttribute('direction')).toBe('up');
  });

  it('should use proper icon for when action attribute is prev', async () => {
    await createDefaultPaginationButton(CdsPaginationButtonAction.Previous);
    await componentIsStable(paginationButtonComponent);
    const defaultIcon = paginationButtonComponent.shadowRoot.querySelector('cds-icon');
    expect(defaultIcon.getAttribute('shape')).toBe('angle');
    expect(defaultIcon.getAttribute('direction')).toBe('left');
  });

  it('should use proper icon for when action attribute is next', async () => {
    await createDefaultPaginationButton(CdsPaginationButtonAction.Next);
    await componentIsStable(paginationButtonComponent);
    const defaultIcon = paginationButtonComponent.shadowRoot.querySelector('cds-icon');
    expect(defaultIcon.getAttribute('shape')).toBe('angle');
    expect(defaultIcon.getAttribute('direction')).toBe('right');
  });

  it('should render custom icon in icon slot', async () => {
    paginationButtonElement = await createTestElement(
      html`<cds-pagination-button><cds-icon shape="house"></cds-icon></cds-pagination-button>`
    );
    paginationButtonComponent = paginationButtonElement.querySelector<CdsPaginationButton>('cds-pagination-button');
    await componentIsStable(paginationButtonComponent);
    const slots = getComponentSlotContent(paginationButtonComponent);
    expect(slots['cds-icon-slot'].includes('cds-icon')).toBeTruthy();
  });

  it('should render custom text in default slot', async () => {
    const placeholderText = 'test';
    paginationButtonElement = await createTestElement(
      html`<cds-pagination-button>${placeholderText}</cds-pagination-button>`
    );
    paginationButtonComponent = paginationButtonElement.querySelector<CdsPaginationButton>('cds-pagination-button');
    await componentIsStable(paginationButtonComponent);
    const slots = getComponentSlotContent(paginationButtonComponent);
    expect(slots.default).toBe(placeholderText);
  });

  it('should warn when a aria-label is missing and interactive', async () => {
    spyOn(LogService, 'warn');
    paginationButtonElement = await createTestElement(
      html`<cds-pagination-button><cds-icon shape="house"></cds-icon></cds-pagination-button>`
    );
    expect(LogService.warn).toHaveBeenCalled();
  });

  it('should not warn when a aria-label is provided', async () => {
    spyOn(LogService, 'warn');
    paginationButtonElement = await createTestElement(
      html`<cds-pagination-button aria-label="test"><cds-icon shape="house"></cds-icon></cds-pagination-button>`
    );
    expect(LogService.warn).not.toHaveBeenCalled();
  });
});
