import { html } from 'lit';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import { CdsGrid } from '@cds/core/grid';
import '@cds/core/grid/register.js';

describe('grid-range-select.controller', () => {
  let element: HTMLElement;
  let grid: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-grid>
        <cds-grid-column>Column 1</cds-grid-column>
        <cds-grid-column>Column 2</cds-grid-column>
        <cds-grid-column>Column 3</cds-grid-column>
        <cds-grid-row>
          <cds-grid-cell>Cell 1</cds-grid-cell>
          <cds-grid-cell>Cell 2</cds-grid-cell>
          <cds-grid-cell>Cell 3</cds-grid-cell>
        </cds-grid-row>
        <cds-grid-row>
          <cds-grid-cell>Cell 1</cds-grid-cell>
          <cds-grid-cell>Cell 2</cds-grid-cell>
          <cds-grid-cell>Cell 3</cds-grid-cell>
        </cds-grid-row>
      </cds-grid>
    `);
    grid = element.querySelector<CdsGrid>('cds-grid');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should', async () => {
    await componentIsStable(grid);
    expect(grid).toBeTruthy();
  });
});
