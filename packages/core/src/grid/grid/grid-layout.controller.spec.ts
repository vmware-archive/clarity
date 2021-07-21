/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit';
import { customElement, property } from '@cds/core/internal';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsGrid } from '@cds/core/grid';
import '@cds/core/grid/register.js';

@customElement('grid-layout-test-element')
class GridLayoutTestElement extends LitElement {
  @property({ type: String }) columnLayout: 'fixed' | 'flex' = 'fixed';
  @property({ type: Boolean }) showAll = true;

  render() {
    return html` <cds-grid
      aria-label="layout datagrid"
      height="360"
      .columnLayout=${this.columnLayout}
      style="width: 700px"
    >
      <cds-grid-column width="100" resizable>Host</cds-grid-column>
      ${this.showAll
        ? html`
            <cds-grid-column width="200" resizable>Status</cds-grid-column>
            <cds-grid-column resizable>CPU</cds-grid-column>
            <cds-grid-column resizable width="300">Memory</cds-grid-column>
          `
        : ''}
      <cds-grid-row>
        <cds-grid-cell>vm-host-001</cds-grid-cell>
        <cds-grid-cell>online</cds-grid-cell>
        <cds-grid-cell>5%</cds-grid-cell>
        <cds-grid-cell>10%</cds-grid-cell>
      </cds-grid-row>
    </cds-grid>`;
  }
}

describe('grid-column-size.controller', () => {
  let component: GridLayoutTestElement;
  let element: HTMLElement;
  let grid: CdsGrid;

  beforeEach(async () => {
    element = await createTestElement(html`<grid-layout-test-element></grid-layout-test-element>`);
    component = element.querySelector<GridLayoutTestElement>('grid-layout-test-element');
    grid = component.shadowRoot.querySelector('cds-grid');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  function intializeController() {
    grid.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
  }

  it('should create the grid layout for column headers', async () => {
    await componentIsStable(component);
    intializeController();
    await componentIsStable(grid);
    expect(grid.style.getPropertyValue('--ch-grid').trim()).toBe(
      'var(--ch1, 100px) var(--ch2, 200px) var(--ch3, 1fr) var(--ch4, 300px)'
    );
  });

  it('should initialize the grid column width sizes if a fixed layout', async () => {
    component.columnLayout = 'flex';
    await componentIsStable(component);
    expect(component.style.getPropertyValue('--ch1').trim()).toBe('');

    component.columnLayout = 'fixed';
    await componentIsStable(component);
    const columns = grid.querySelectorAll('cds-grid-column');
    columns[0].dispatchEvent(new CustomEvent('resizeChange', { bubbles: true }));
    await componentIsStable(component);
    expect(grid.style.getPropertyValue('--ch1').trim()).toBe('100px');
    expect(grid.style.getPropertyValue('--ch2').trim()).toBe('200px');
    expect(grid.style.getPropertyValue('--ch3').trim()).toBe('98px');
    expect(grid.style.getPropertyValue('--ch4').trim()).toBe('minmax(300px, 100%)');
  });

  it('should allow async rendering of columns', async () => {
    component.showAll = false;
    await componentIsStable(component);
    expect(grid.style.getPropertyValue('--ch-grid').trim()).toBe('var(--ch1, 100px)');
    expect(grid.style.getPropertyValue('--ch1').trim()).toBe('100px');

    component.showAll = true;
    await componentIsStable(component);

    expect(grid.style.getPropertyValue('--ch-grid').trim()).toBe(
      'var(--ch1, 100px) var(--ch2, 200px) var(--ch3, 1fr) var(--ch4, 300px)'
    );
    expect(grid.style.getPropertyValue('--ch1').trim()).toBe('100px');
    expect(grid.style.getPropertyValue('--ch2').trim()).toBe('200px');
    expect(grid.style.getPropertyValue('--ch3').trim()).toBe('');
    expect(grid.style.getPropertyValue('--ch4').trim()).toBe('300px');
  });
});
