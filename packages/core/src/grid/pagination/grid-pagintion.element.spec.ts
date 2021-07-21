/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable, onceEvent } from '@cds/core/test';
import { CdsGridPagination } from './grid-pagination.element.js';
import { CdsPaginationButton } from '@cds/core/pagination';
import '@cds/core/grid/register.js';

describe('cds-grid-pagination', () => {
  let component: CdsGridPagination;
  let element: HTMLElement;
  let pageInput: HTMLInputElement;
  let pageSizeInput: HTMLSelectElement;

  beforeEach(async () => {
    element = await createTestElement(html`<cds-grid-pagination></cds-grid-pagination>`);
    component = element.querySelector<CdsGridPagination>('cds-grid-pagination');
    pageInput = component.shadowRoot.querySelector('input[type="number"]');
    pageSizeInput = component.shadowRoot.querySelector('select');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should set current page input', async () => {
    await componentIsStable(component);
    expect(pageInput.valueAsNumber).toBe(1);

    component.page = 2;
    await componentIsStable(component);
    expect(pageInput.valueAsNumber).toBe(2);
  });

  it('should set current page size', async () => {
    await componentIsStable(component);
    expect(pageSizeInput.value).toBe('10');

    component.pageSize = 50;
    await componentIsStable(component);
    expect(pageSizeInput.value).toBe('50');
  });

  it('should set page count', async () => {
    await componentIsStable(component);
    expect(pageInput.max).toBe('1');

    component.pageCount = 50;
    await componentIsStable(component);
    expect(pageInput.max).toBe('50');
  });

  it('should set page size options', async () => {
    await componentIsStable(component);
    expect(component.pageSizeOptions).toEqual([10, 20, 50, 100]);

    component.pageSizeOptions = [10, 20, 30];
    await componentIsStable(component);
    expect(Array.from(pageSizeInput.options).map(o => parseInt(o.value))).toEqual([10, 20, 30]);
  });

  it('should emit when page changes by user', async () => {
    await componentIsStable(component);
    const event = onceEvent(component, 'pageChange');
    pageInput.valueAsNumber = 3;
    pageInput.dispatchEvent(new Event('input'));
    expect((await event).detail).toBe(3);
  });

  it('should emit when page size changes by user', async () => {
    await componentIsStable(component);
    const event = onceEvent(component, 'pageSizeChange');
    pageSizeInput.value = '50';
    pageSizeInput.dispatchEvent(new Event('input'));
    expect((await event).detail).toBe(50);
  });

  it('should disable previous and first buttons if on first page', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector<CdsPaginationButton>('[action="first"]').disabled).toBe(true);
    expect(component.shadowRoot.querySelector<CdsPaginationButton>('[action="prev"]').disabled).toBe(true);
    expect(component.shadowRoot.querySelector<CdsPaginationButton>('[action="next"]').disabled).toBe(undefined);
    expect(component.shadowRoot.querySelector<CdsPaginationButton>('[action="last"]').disabled).toBe(undefined);
  });

  it('should disable last and next buttons if on last page', async () => {
    component.pageCount = 5;
    component.page = 5;
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector<CdsPaginationButton>('[action="first"]').disabled).toBe(false);
    expect(component.shadowRoot.querySelector<CdsPaginationButton>('[action="prev"]').disabled).toBe(false);
    expect(component.shadowRoot.querySelector<CdsPaginationButton>('[action="next"]').disabled).toBe(undefined);
    expect(component.shadowRoot.querySelector<CdsPaginationButton>('[action="last"]').disabled).toBe(undefined);
  });

  it('should emit when pageChange when nextPage button is clicked', async () => {
    await componentIsStable(component);
    expect(component.page).toBe(1);
    const event = onceEvent(component, 'pageChange');

    component.shadowRoot.querySelectorAll('cds-pagination-button')[2].click();
    expect((await event).detail).toBe(2);
  });

  it('should emit when pageChange when prevPage button is clicked', async () => {
    component.page = 2;
    await componentIsStable(component);
    expect(component.page).toBe(2);
    const event = onceEvent(component, 'pageChange');

    component.shadowRoot.querySelectorAll('cds-pagination-button')[1].click();
    expect((await event).detail).toBe(1);
  });

  it('should emit when pageChange when firstPage button is clicked', async () => {
    component.page = 3;
    await componentIsStable(component);
    expect(component.page).toBe(3);
    const event = onceEvent(component, 'pageChange');

    component.shadowRoot.querySelectorAll('cds-pagination-button')[0].click();
    expect((await event).detail).toBe(1);
  });

  it('should emit when pageChange when lastPage button is clicked', async () => {
    component.page = 1;
    component.pageCount = 5;
    await componentIsStable(component);
    expect(component.page).toBe(1);
    const event = onceEvent(component, 'pageChange');

    component.shadowRoot.querySelectorAll('cds-pagination-button')[3].click();
    expect((await event).detail).toBe(5);
  });
});
