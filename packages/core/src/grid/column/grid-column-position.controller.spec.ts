/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import '@cds/core/grid/register.js';
import { CdsGridColumn } from './grid-column.element.js';
import { CdsGridCell } from '../cell/grid-cell.element.js';
import { CdsGrid } from '../grid/grid.element.js';

describe('grid-column-position.controller', () => {
  let grid: CdsGrid;
  let firstColumn: CdsGridColumn;
  let lastColumn: CdsGridColumn;
  let firstCell: CdsGridCell;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-grid height="300" style="width: 300px">
        <cds-grid-column id="first-grid-column" width="150" position="fixed">Host</cds-grid-column>
        <cds-grid-column id="second-grid-column" width="350">Status</cds-grid-column>
        <cds-grid-column width="500">CPU</cds-grid-column>
        <cds-grid-column id="last-grid-column" width="150" position="fixed">Memory</cds-grid-column>
        <cds-grid-row>
          <cds-grid-cell id="first-grid-cell">APPL</cds-grid-cell>
          <cds-grid-cell>$1000</cds-grid-cell>
          <cds-grid-cell>$0</cds-grid-cell>
          <cds-grid-cell id="last-grid-cell">...</cds-grid-cell>
        </cds-grid-row>
      </cds-grid>
    `);

    grid = element.querySelector<CdsGrid>('cds-grid');
    firstColumn = element.querySelector<CdsGridColumn>('#first-grid-column');
    lastColumn = element.querySelector<CdsGridColumn>('#last-grid-column');
    firstCell = element.querySelector<CdsGridCell>('#first-grid-cell');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should write style to host grid tag', async () => {
    await componentIsStable(lastColumn);
    const styles = Array.from(grid.querySelectorAll('style'))
      .map(s => s.innerHTML)
      .join('\n');
    expect(styles.includes('cds-grid-cell[aria-colindex="1"]'));
    expect(styles.includes('cds-grid-cell[aria-colindex="4"]'));
    expect(styles.includes('left: 0;'));
    expect(styles.includes('right: 0;'));
    expect(styles.includes('--border-left'));
    expect(styles.includes('--border-right'));
  });

  it('should support fixed position', async () => {
    await componentIsStable(grid);
    const firstColStyle = getComputedStyle(firstColumn);
    const lastColStyle = getComputedStyle(lastColumn);
    const firstCellStyle = getComputedStyle(firstCell);

    expect(firstColStyle.position).toBe('sticky');
    expect(firstColStyle.left).toBe('0px');

    expect(lastColumn.position).toBe('fixed');
    expect(lastColStyle.position).toBe('sticky');

    expect(firstColStyle.right).toBe('auto');
    expect(firstCellStyle.position).toBe('sticky');
    expect(firstCellStyle.getPropertyValue('--border-left').trim()).toBe('0');
    expect(firstCellStyle.getPropertyValue('--border-right').trim()).toBe(
      'calc((1 / 20) * 1rem) solid hsl(198, 14%, 82%)'
    );
  });

  it('should support sticky position', async () => {
    firstColumn.position = 'sticky';
    await componentIsStable(grid);
    const firstColStyle = getComputedStyle(firstColumn);
    const firstCellStyle = getComputedStyle(firstCell);

    expect(firstColStyle.position).toBe('sticky');
    expect(firstColStyle.left).toBe('0px');
    expect(firstColStyle.right).toBe('auto');

    expect(firstCellStyle.position).toBe('sticky');
    expect(firstCellStyle.getPropertyValue('--border-left').trim()).toBe('0');
    expect(firstCellStyle.getPropertyValue('--border-right').trim()).toBe(
      'calc((1 / 20) * 1rem) solid hsl(198, 14%, 82%)'
    );
  });
});
