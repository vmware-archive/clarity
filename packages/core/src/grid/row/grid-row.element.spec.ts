/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsGridRow } from './grid-row.element.js';
import '@cds/core/grid/register.js';

describe('cds-grid-row', () => {
  let component: CdsGridRow;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-grid-row>
        <cds-grid-cell id="cell-1">1</cds-grid-cell>
        <cds-grid-cell id="cell-2">2</cds-grid-cell>
      </cds-grid-row>
    `);
    component = element.querySelector<CdsGridRow>('cds-grid-row');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should provide a selected state', async () => {
    component.selected = true;
    await componentIsStable(component);
    expect(component.hasAttribute('selected')).toBe(true);

    component.selected = false;
    await componentIsStable(component);
    expect(component.hasAttribute('selected')).toBe(false);
  });

  it('should provide a position state', async () => {
    await componentIsStable(component);
    expect(component.hasAttribute('position')).toBe(false);

    component.position = 'fixed';
    await componentIsStable(component);
    expect(component.getAttribute('position')).toBe('fixed');
  });

  // it('should update colIndex of all child rows when updated', async () => {
  //   await componentIsStable(component);
  //   // aria-colindex starts at 1 not 0
  //   expect(component.querySelector<CdsGridCell>('#cell-1').colIndex).toBe(1);
  //   expect(component.querySelector<CdsGridCell>('#cell-2').colIndex).toBe(2);

  //   component.removeChild(component.querySelector<CdsGridCell>('#cell-1'));
  //   await componentIsStable(component);
  //   expect(component.querySelector<CdsGridCell>('#cell-1')).toBe(null);
  //   expect(component.querySelector<CdsGridCell>('#cell-2').colIndex).toBe(1);
  // });
});
