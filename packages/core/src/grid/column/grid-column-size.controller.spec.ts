/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsGrid, CdsGridColumn, CdsGridCell } from '@cds/core/grid';
import '@cds/core/grid/register.js';

describe('grid-column-size.controller', () => {
  let element: HTMLElement;
  let grid: CdsGrid;
  let columns: NodeListOf<CdsGridColumn>;
  let cells: NodeListOf<CdsGridCell>;
  let range: HTMLInputElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<cds-grid style="width: 1000px">
        <cds-grid-column type="action">.</cds-grid-column>
        <cds-grid-column resizable>Column 1</cds-grid-column>
        <cds-grid-column resizable>Column 2</cds-grid-column>
        <cds-grid-column resizable>Column 3</cds-grid-column>
        <cds-grid-row>
          <cds-grid-cell>Cell 1</cds-grid-cell>
          <cds-grid-cell>Cell 2</cds-grid-cell>
          <cds-grid-cell>Cell 3</cds-grid-cell>
          <cds-grid-cell>Cell 4</cds-grid-cell>
        </cds-grid-row>
        <cds-grid-row>
          <cds-grid-cell>Cell 2-1</cds-grid-cell>
          <cds-grid-cell>Cell 2-2</cds-grid-cell>
          <cds-grid-cell>Cell 2-3</cds-grid-cell>
          <cds-grid-cell>Cell 2-4</cds-grid-cell>
        </cds-grid-row>
      </cds-grid>`
    );
    grid = element.querySelector<CdsGrid>('cds-grid');
    columns = element.querySelectorAll<CdsGridColumn>('cds-grid-column');
    cells = element.querySelectorAll<CdsGridCell>('cds-grid-cell');
    range = columns[1].shadowRoot.querySelector<HTMLInputElement>('cds-internal-split-handle input');
    grid.dispatchEvent(new MouseEvent('mouseover', { bubbles: true })); // trigger initialization
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should lock width to 36px and 0 padding when column is of type action', async () => {
    await componentIsStable(columns[0]);
    expect(columns[0].getBoundingClientRect().width).toBe(36);
    expect(grid.style.getPropertyValue('--ch1')).toBe('36px');
    expect(getComputedStyle(columns[0]).getPropertyValue('--padding-block').trim()).toBe('0');

    await componentIsStable(cells[0]);
    expect(getComputedStyle(cells[0]).getPropertyValue('--padding-block').trim()).toBe('0');
  });

  it('should set CSS Custom Property for column custom width values', async () => {
    columns[1].width = '200px';
    await componentIsStable(columns[1]);
    expect(grid.style.getPropertyValue('--ch2')).toBe('200px');
    expect(columns[1].getBoundingClientRect().width).toBe(200);
  });

  it('should allow numeric width', async () => {
    columns[2].width = '200';
    await componentIsStable(columns[2]);
    expect(grid.style.getPropertyValue('--ch3')).toBe('200px');
    expect(columns[2].getBoundingClientRect().width).toBe(200);
  });

  it('should allow percentage widths', async () => {
    columns[1].width = '20%';
    await componentIsStable(columns[2]);
    expect(grid.style.getPropertyValue('--ch1')).toBe('36px');
    expect(grid.style.getPropertyValue('--ch2')).toBe('20%');
    expect(grid.style.getPropertyValue('--ch3')).toBe('');
    expect(columns[0].getBoundingClientRect().width).toBe(36);
    expect(Math.floor(columns[1].getBoundingClientRect().width)).toBe(199);
    expect(Math.floor(columns[2].getBoundingClientRect().width)).toBe(381);
    expect(Math.floor(columns[3].getBoundingClientRect().width)).toBe(381);
  });

  it('should resize a column when resizeChange occurs', async () => {
    await componentIsStable(grid);
    await componentIsStable(columns[1]);
    expect(columns[0].getBoundingClientRect().width).toBe(36);
    expect(Math.floor(columns[1].getBoundingClientRect().width)).toBe(320);
    expect(Math.floor(columns[2].getBoundingClientRect().width)).toBe(320);
    expect(Math.floor(columns[3].getBoundingClientRect().width)).toBe(320);

    range.valueAsNumber = 340;
    range.dispatchEvent(new KeyboardEvent('change'));
    await componentIsStable(columns[1]);

    expect(columns[0].getBoundingClientRect().width).toBe(36);
    expect(Math.floor(columns[1].getBoundingClientRect().width)).toBe(340);
    expect(Math.floor(columns[2].getBoundingClientRect().width)).toBe(321);
    expect(Math.floor(columns[3].getBoundingClientRect().width)).toBe(321);

    range.valueAsNumber = 320;
    range.dispatchEvent(new KeyboardEvent('change'));
    await componentIsStable(columns[1]);

    expect(columns[0].getBoundingClientRect().width).toBe(36);
    expect(Math.floor(columns[1].getBoundingClientRect().width)).toBe(320);
    expect(Math.floor(columns[2].getBoundingClientRect().width)).toBe(321);
    expect(Math.floor(columns[3].getBoundingClientRect().width)).toBe(321);
  });

  it('should resize fixed width columns', async () => {
    columns[1].width = '200';
    await componentIsStable(grid);
    await componentIsStable(columns[1]);
    expect(columns[0].getBoundingClientRect().width).toBe(36);
    expect(columns[1].getBoundingClientRect().width).toBe(200);
    expect(columns[2].getBoundingClientRect().width).toBe(381);
    expect(columns[3].getBoundingClientRect().width).toBe(381);

    range.valueAsNumber = 210;
    range.dispatchEvent(new KeyboardEvent('change'));
    await componentIsStable(columns[1]);

    expect(grid.style.getPropertyValue('--ch1')).toBe('36px');
    expect(grid.style.getPropertyValue('--ch2')).toBe('210px');
    expect(columns[0].getBoundingClientRect().width).toBe(36);
    expect(columns[1].getBoundingClientRect().width).toBe(210);
    expect(columns[2].getBoundingClientRect().width).toBe(381);
    expect(columns[3].getBoundingClientRect().width).toBe(381);
  });

  it('should use provided minimum width to limit resize', async () => {
    columns[1].width = '200';
    await componentIsStable(columns[1]);

    range.dispatchEvent(new KeyboardEvent('keydown', { key: 'LeftArrow' }));
    await componentIsStable(columns[1]);

    expect(grid.style.getPropertyValue('--ch1')).toBe('36px');
    expect(grid.style.getPropertyValue('--ch2')).toBe('200px');
    expect(columns[0].getBoundingClientRect().width).toBe(36);
    expect(columns[1].getBoundingClientRect().width).toBe(200);
    expect(columns[2].getBoundingClientRect().width).toBe(381);
    expect(columns[3].getBoundingClientRect().width).toBe(381);
  });
});
