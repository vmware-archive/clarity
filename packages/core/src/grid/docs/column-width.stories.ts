import { html } from 'lit';
import { DemoService } from '@cds/core/demo';

export default {
  title: 'Stories/Grid',
  component: 'cds-grid',
};

export function columnFixedWidth() {
  const grid = DemoService.data.grid;
  return html`
  <cds-grid aria-label="column fixed width datagrid demo" height="360">
    ${grid.columns.map((column, i) => html`<cds-grid-column .width=${i < 2 ? '150' : null}>${column.label}</cds-grid-column>`)}
    ${grid.rows.map(row => html`
    <cds-grid-row>
      ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
    </cds-grid-row>`)}
    <cds-grid-footer></cds-grid-footer>
  </cds-grid>`;
}

export function columnPercentageWidth() {
  const grid = DemoService.data.grid;
  return html`
  <cds-grid aria-label="column fixed width percentage datagrid demo" height="360">
    ${grid.columns.map((column, i) => html`<cds-grid-column .width=${i < 2 ? '15%' : null}>${column.label}</cds-grid-column>`)}
    ${grid.rows.map(row => html`
    <cds-grid-row>
      ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
    </cds-grid-row>`)}
    <cds-grid-footer></cds-grid-footer>
  </cds-grid>`;
}

export function columnOverflow() {
  const grid = DemoService.data.grid;
  return html`
  <cds-grid aria-label="column overflow datagrid demo" height="360">
    ${grid.columns.map((column, i) => html`<cds-grid-column .width=${i > 2 ? '100' : null}>${column.label}</cds-grid-column>`)}
    ${grid.rows.map(row => html`
    <cds-grid-row>
      ${row.cells.map((cell, i) => html`
        <cds-grid-cell>
        ${i > 2 ? html`<p cds-text="truncate">${cell.value}.000000%</p>` : cell.value}
      </cds-grid-cell>`)}
    </cds-grid-row>`)}
    <cds-grid-footer></cds-grid-footer>
  </cds-grid>`;
}
