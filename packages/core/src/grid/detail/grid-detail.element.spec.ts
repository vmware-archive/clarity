/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsGridDetail, CdsGrid, CdsGridRow } from '@cds/core/grid';
import '@cds/core/grid/register.js';

describe('cds-grid-detail', () => {
  let component: CdsGridDetail;
  let element: HTMLElement;
  let grid: HTMLElement;
  let anchor: HTMLElement;
  let rows: NodeListOf<HTMLElement>;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-grid style="width: 202px">
        <cds-grid-column aria-label="actions"></cds-grid-column>
        <cds-grid-column>Column 1</cds-grid-column>
        <cds-grid-column>Column 2</cds-grid-column>
        <cds-grid-column>Column 3</cds-grid-column>
        <cds-grid-row>
          <cds-grid-cell>
            <cds-action popup="detail" id="cell-1-action"></cds-action>
          </cds-grid-cell>
          <cds-grid-cell role="rowheader">Cell 1</cds-grid-cell>
          <cds-grid-cell>Cell 2</cds-grid-cell>
          <cds-grid-cell>Cell 3</cds-grid-cell>
        </cds-grid-row>
        <cds-grid-row>
          <cds-grid-cell>
            <cds-action popup="detail" id="cell-2-action"></cds-action>
          </cds-grid-cell>
          <cds-grid-cell role="rowheader">Cell 1</cds-grid-cell>
          <cds-grid-cell>Cell 2</cds-grid-cell>
          <cds-grid-cell>Cell 3</cds-grid-cell>
        </cds-grid-row>
        <cds-grid-detail id="detail" anchor="cell-1-action"></cds-grid-detail>
      </cds-grid>
    `);
    component = element.querySelector<CdsGridDetail>('cds-grid-detail');
    grid = element.querySelector<CdsGrid>('cds-grid');
    rows = element.querySelectorAll<CdsGridRow>('cds-grid-row');
    anchor = element.querySelector('#cell-1-action');
    component.anchor = anchor;
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should assign to the detail slot', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('slot')).toBe('detail');
  });

  it('should align to the rowheader', async () => {
    await componentIsStable(component);
    const detailStyles = getComputedStyle(component);
    expect(detailStyles.right).toBe('0px');
    expect(detailStyles.left).toBe('50px');
  });

  it('should align to the rowheader in RTL layouts', async () => {
    grid.dir = 'rtl';
    await componentIsStable(grid);
    const detailStyles = getComputedStyle(component);
    expect(detailStyles.right).toBe('50px');
    expect(detailStyles.left).toBe('0px');
  });

  it('should align caret to active row', async () => {
    await componentIsStable(component);
    expect(component.style.getPropertyValue('--caret-top')).toBe('40px');
  });

  it('should disable grid scroll when open', async () => {
    component.hidden = true;
    await componentIsStable(component);
    expect(grid.hasAttribute('[scroll-lock]')).toBe(false);
  });

  it('should remove previous active row marker for row styles', async () => {
    await componentIsStable(component);
    expect(rows[0].hasAttribute('_detail-row')).toBe(true);
    expect(rows[1].hasAttribute('_detail-row')).toBe(false);

    component.anchor = 'cell-2-action';
    await componentIsStable(component);
    expect(rows[0].hasAttribute('_detail-row')).toBe(false);
    expect(rows[1].hasAttribute('_detail-row')).toBe(true);
  });

  it('should render SR bumper text', async () => {
    await componentIsStable(component);
    const [start, end] = Array.from(component.shadowRoot.querySelectorAll('[cds-layout="display:screen-reader-only"]'));
    expect(start.textContent).toBe('Start of row details');
    expect(end.textContent).toBe('End of row details');
  });
});
