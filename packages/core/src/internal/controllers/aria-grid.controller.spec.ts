/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit';
import { queryAll, query } from 'lit/decorators.js';
import { customElement, AriaGridController, ariaGrid } from '@cds/core/internal';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';

@ariaGrid({ update: 'mutation' })
@customElement('grid-a11y-test-element')
class GridA11yTestElement extends LitElement {
  @queryAll('.column') columns: NodeListOf<HTMLElement>;
  @queryAll('.row') rows: NodeListOf<HTMLElement & { cells: NodeListOf<HTMLElement> }>;
  @queryAll('.cell') cells: NodeListOf<HTMLElement>;
  @query('.row-group', true) rowGroup: HTMLElement;
  @query('.column-row', true) columnRow: HTMLElement;
  @query('.column-group', true) columnRowGroup: HTMLElement;

  protected ariaGridController: AriaGridController<this>;

  render() {
    return html`
      <div class="column-group">
        <div class="column-row">
          <div class="column">
            1
            <div class="sort-btn">sort</div>
          </div>
          <div class="column">2</div>
          <div class="column">3</div>
        </div>
      </div>
      <div class="row-group">
        <div class="row">
          <div class="cell">1</div>
          <div class="cell">2</div>
          <div class="cell">3</div>
        </div>
        <div class="row">
          <div class="cell">4</div>
          <div class="cell">5</div>
          <div class="cell">6</div>
        </div>
      </div>
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.updateComplete;
    this.ariaGridController.update();
  }

  protected createRenderRoot() {
    return this;
  }
}

describe('grid-a11y.controller', () => {
  let component: GridA11yTestElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`<grid-a11y-test-element></grid-a11y-test-element>`);
    component = element.querySelector<GridA11yTestElement>('grid-a11y-test-element');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  // grid
  it('should set proper aria role attribute for the host grid', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
    expect(component.role).toBe('grid');
  });

  it('should set the proper aria-rowcount', async () => {
    await componentIsStable(component);
    expect(component.ariaRowCount).toBe('3');
  });

  it('should set the proper aria-colcount', async () => {
    await componentIsStable(component);
    expect(component.ariaColCount).toBe('3');
  });

  // columns
  it('should set proper aria role attribute for columns', async () => {
    await componentIsStable(component);
    expect(Array.from(component.columns).map(r => r.role)).toEqual(['columnheader', 'columnheader', 'columnheader']);
  });

  it('should set the proper aria-colindex for each column', async () => {
    await componentIsStable(component);
    expect(Array.from(component.columns).map(r => r.ariaColIndex)).toEqual(['1', '2', '3']);
  });

  it('should update the aria-sort when receiving a sortChange event', async () => {
    await componentIsStable(component);
    component.columns[0]
      .querySelector('.sort-btn')
      .dispatchEvent(new CustomEvent('sortChange', { detail: 'accending', bubbles: true }));
    await componentIsStable(component);

    expect(component.columns[0].ariaSort).toBe('accending');
  });

  // rows
  it('should set the proper role for each row', async () => {
    await componentIsStable(component);
    expect(Array.from(component.rows).map(r => r.role)).toEqual(['row', 'row']);
  });

  it('should set the proper aria-rowindex for each row', async () => {
    await componentIsStable(component);
    expect(Array.from(component.rows).map(r => r.ariaRowIndex)).toEqual(['2', '3']);
  });

  // cell
  it('should set proper aria role attribute for cells', async () => {
    await componentIsStable(component);
    expect(Array.from(component.cells).map(r => r.role)).toEqual([
      'gridcell',
      'gridcell',
      'gridcell',
      'gridcell',
      'gridcell',
      'gridcell',
    ]);
  });

  it('should set the proper aria-colindex for each cell', async () => {
    await componentIsStable(component);
    expect(Array.from(component.cells).map(r => r.ariaColIndex)).toEqual(['1', '2', '3', '1', '2', '3']);
  });

  it('should allow alternate role types such as rowheader on cells', async () => {
    component.cells[0].role = 'rowheader';
    component.cells[3].role = 'rowheader';
    await componentIsStable(component);
    expect(Array.from(component.cells).map(r => r.role)).toEqual([
      'rowheader',
      'gridcell',
      'gridcell',
      'rowheader',
      'gridcell',
      'gridcell',
    ]);
  });
});
