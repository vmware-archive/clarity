/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit';
import { customElement, property, state } from '@cds/core/internal';
import { DemoGrid, DemoService } from '@cds/core/demo';
import '@cds/core/dropdown/register.js';
import '@cds/core/pagination/register.js';
import '@cds/core/datalist/register.js';
import '@cds/core/checkbox/register.js';
import '@cds/core/search/register.js';
import '@cds/core/select/register.js';
import '@cds/core/radio/register.js';
import '@cds/core/grid/register.js';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { checkCircleIcon } from '@cds/core/icon/shapes/check-circle.js';
import { filterIcon } from '@cds/core/icon/shapes/filter.js';
import { exclamationTriangleIcon } from '@cds/core/icon/shapes/exclamation-triangle.js';
import { exclamationCircleIcon } from '@cds/core/icon/shapes/exclamation-circle.js';
import { disconnectIcon } from '@cds/core/icon/shapes/disconnect.js';
import { viewColumnsIcon } from '@cds/core/icon/shapes/view-columns.js';

import { asyncData } from './async-data.stories.js';
import { borderCell, borderColumn, borderStripe, borderNone } from './border.stories.js';
import { cellEditable } from './cell-editable.stories.js';
import { columnAlignRight, columnAlignCenter } from './column-align.stories.js';
import { columnDraggable } from './column-draggable.stories.js';
import { columnFilter } from './column-filter.stories.js';
import { columnFixed, columnFixedDynamic, columnMultiFixed } from './column-fixed.stories.js';
import { columnResize, columnFlexWidth } from './column-resize.stories.js';
import { columnMultiFilter } from './column-multi-filter.stories.js';
import { columnOverflow, columnFixedWidth } from './column-width.stories.js';
import { columnSticky } from './column-sticky.stories.js';
import { columnVisibility } from './column-visibility.stories.js';
import { compact } from './compact.stories.js';
import { darkTheme } from './dark-theme.stories.js';
import { footer, footerOptional } from './footer.stories.js';
import { kitchenSink } from './kitchen-sink.stories.js';
import { rangeSelect, rangeSelectContextMenu } from './range-select.stories.js';
import { responsive } from './responsive.stories.js';
import { rowAction } from './row-action.stories.js';
import { rowBatchAction } from './row-batch-action.stories.js';
import { rowDetail } from './row-detail.stories.js';
import { rowDraggable } from './row-draggable.stories.js';
import { rowFixed } from './row-fixed.stories.js';
import { rowHeader } from './row-header.stories.js';
import { rowHeight } from './row-height.stories.js';
import { rowMultiSelect } from './row-multi-select.stories.js';
import { rowMultiSort } from './row-multi-sort.stories.js';
import { rowSingleSelect } from './row-single-select.stories.js';
import { rowSort } from './row-sort.stories.js';
import { rowSticky } from './row-sticky.stories.js';
import { rowSwappable } from './row-swappable.stories.js';
import { rtl } from './rtl.stories.js';
import { pagination } from './pagination.stories.js';
import { performance } from './performance.stories.js';
import { placeholder } from './placeholder.stories.js';
import { noScroll } from './scroll-height.stories.js';

ClarityIcons.addIcons(checkCircleIcon, exclamationTriangleIcon, exclamationCircleIcon, disconnectIcon, filterIcon, viewColumnsIcon);

export default {
  title: 'Stories/Grid',
  component: 'cds-grid',
};

export function all() {
  return html`
    <style>
      .grid-all-demo > div > *:nth-child(2) {
        width: 100%;
      }
    </style>
    <section class="grid-all-demo" cds-layout="grid cols@lg:6 cols@xl:4 gap:lg">
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Basic</h2>
        ${basic()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Keyboard</h2>
        ${keyboard()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Resize</h2>
        ${columnResize()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Flex Width</h2>
        ${columnFlexWidth()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Overflow</h2>
        ${columnOverflow()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Fixed Width</h2>
        ${columnFixedWidth()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Placeholder</h2>
        ${placeholder()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Pagination</h2>
        ${pagination()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Visibility</h2>
        ${columnVisibility()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Detail</h2>
        ${rowDetail()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Single Select</h2>
        ${rowSingleSelect()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Multi Select</h2>
        ${rowMultiSelect()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Range Select</h2>
        ${rangeSelect()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Range Select Context Menu</h2>
        ${rangeSelectContextMenu()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Action</h2>
        ${rowAction()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Batch Action</h2>
        ${rowBatchAction()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Sort</h2>
        ${rowSort()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Multi Sort</h2>
        ${rowMultiSort()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Filter</h2>
        ${columnFilter()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Multi Filter</h2>
        ${columnMultiFilter()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Async Data</h2>
        ${asyncData()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Fixed</h2>
        ${columnFixed()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Fixed Dynamic</h2>
        ${columnFixedDynamic()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Multi Fixed</h2>
        ${columnMultiFixed()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Sticky</h2>
        ${columnSticky()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Align Center</h2>
        ${columnAlignCenter()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Align Right</h2>
        ${columnAlignRight()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Cell Editable</h2>
        ${cellEditable()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">RTL Support</h2>
        ${rtl()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Footer</h2>
        ${footer()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Footer Optional</h2>
        ${footerOptional()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Height</h2>
        ${rowHeight()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Compact</h2>
        ${compact()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Draggable</h2>
        ${rowDraggable()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Swappable</h2>
        ${rowSwappable()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Column Draggable</h2>
        ${columnDraggable()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Fixed</h2>
        ${rowFixed()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Sticky</h2>
        ${rowSticky()}
      </div>
      <div cds-layout="vertical gap:lg" style="min-height: 650px">
        <h2 cds-text="section">Performance</h2>
        ${performance()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Kitchen Sink</h2>
        ${kitchenSink()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Responsive</h2>
        ${responsive()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Dark Theme</h2>
        ${darkTheme()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Border Cell</h2>
        ${borderCell()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Border Column</h2>
        ${borderColumn()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Border Stripe</h2>
        ${borderStripe()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Border None</h2>
        ${borderNone()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Row Header</h2>
        ${rowHeader()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">No Scroll</h2>
        ${noScroll()}
      </div>
    </section>
  `;
}

export function basic() {
  const grid = DemoService.data.grid;
  return html`
  <cds-grid aria-label="basic datagrid demo" height="360">
    ${grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
    ${grid.rows.map(row => html`
    <cds-grid-row>
      ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
    </cds-grid-row>`)}
    <cds-grid-footer></cds-grid-footer>
  </cds-grid>`;
}

export function keyboard() {
  return html`
    <cds-grid aria-label="keyboard navigation datagrid demo" height="360">
      <cds-grid-column width="200">Key</cds-grid-column>
      <cds-grid-column>Function</cds-grid-column>
      <cds-grid-row>
        <cds-grid-cell>Right Arrow</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>Moves focus one cell to the right.</li>
            <li>If focus is on the right-most cell in the row, focus does not move.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>Left Arrow</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>Moves focus one cell to the left.</li>
            <li>If focus is on the left-most cell in the row, focus does not move.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>Down Arrow</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>Moves focus one cell down.</li>
            <li>If focus is on the bottom cell in the column, focus does not move.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>Up Arrow</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>Moves focus one cell Up.</li>
            <li>If focus is on the top cell in the column, focus does not move.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>Page Down</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>
              Moves focus down five rows, scrolling so the bottom row in the currently visible set of rows becomes the
              first visible row.
            </li>
            <li>If focus is in the last row, focus does not move.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>Page Up</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>
              Moves focus up 5 rows, scrolling so the top row in the currently visible set of rows becomes the last
              visible row.
            </li>
            <li>If focus is in the first row of the grid, focus does not move.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>Home</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>Moves focus to the first cell in the row that contains focus.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>End</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>Moves focus to the last cell in the row that contains focus.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>Control + Home</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>Moves focus to the first cell in the first row.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>Control + End</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>Moves focus to the last cell in the last row.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-footer>
        <a
          cds-text="subsection link"
          href="https://www.w3.org/TR/wai-aria-practices/examples/grid/dataGrids.html#kbd_label"
          >spec</a
        >
      </cds-grid-footer>
    </cds-grid>
  `;
}

export function dynamicGrid() {
  interface DynamicGrid extends DemoGrid {
    select: 'single' | 'multi' | 'none',
    columns: {
      id: number;
      label: string;
      suffix?: string;
      resizable: boolean;
    }[]
  }

  /**
   * Demo of a grid that can dynamically be created via a configuration object rather than declarative template
   */
  @customElement('grid-dynamic')
  class GridDynamicDemo extends LitElement {
    private _model: DynamicGrid;

    @property({ type: Object, reflect: false })
    get model() {
      return this._model;
    };

    set model(value) {
      this._model = { ...value };
      this.requestUpdate('model');
    }

    private get selected() {
      return this._model.rows.filter(r => r.selected).length;
    }

    render() {
      return html`
        ${this._model ? html`
        <cds-grid aria-label=${this._model.label} height="360">
          ${this._model.select === 'single' ? html`
          <cds-grid-column type="action">
            <cds-checkbox>
              <input type="checkbox" aria-label="select all rows" .indeterminate=${(this.selected > 0) && (this.selected < this._model.rows.length)} @change=${(e: any) => this.selectAllRows(e.target.checked)} />
            </cds-checkbox>
          </cds-grid-column>` : ''}
          ${this._model.columns.map(c => html`
          <cds-grid-column .resizable=${c.resizable}>${c.label}</cds-grid-column>`)}
          ${this._model.rows.map(r => html`
          <cds-grid-row>
          ${this._model.select === 'single' ? html`
          <cds-grid-cell>
            <cds-checkbox>
              <input type="checkbox" aria-label="select row" .checked=${r.selected} @change=${(e: any) => this.selectRow(r, e.target.checked)} />
            </cds-checkbox>
          </cds-grid-cell>` : ''}
          ${r.cells.map(c => html`
            <cds-grid-cell>
              ${c.label}
            </cds-grid-cell>`)}
          </cds-grid-row>`)}
          <cds-grid-footer>
            ${this._model.select ? html`Selected: ${this.selected}` : ''}
          </cds-grid-footer>
        </cds-grid>` : ''}`;
    }

    private selectRow(row: any, checked: boolean) {
      row.selected = checked;
      this.modelChange();
    }

    private selectAllRows(checked: boolean) {
      this._model.rows.forEach(r => r.selected = checked);
      this.modelChange();
    }

    private modelChange() {
      this.dispatchEvent(new CustomEvent('modelChange', { detail: this._model }));
    }
  }

  const grid = { ...DemoService.data.grid, select: 'single' } as unknown as DynamicGrid;
  grid.select = 'single';
  grid.columns.forEach(c => c.resizable = true);

  @customElement('demo-grid-dynamic')
  class DemoGridDynamic extends LitElement {
    @state() private grid = grid;

    render() {
      return html`
        <grid-dynamic .model=${this.grid} @modelChange=${(e: any) => this.updateModel(e.detail)}></grid-dynamic>
      `;
    }

    updateModel(model: DynamicGrid) {
      this.grid = model;
      console.log(this.grid);
    }
  }
  return html`<demo-grid-dynamic></demo-grid-dynamic>`;
}