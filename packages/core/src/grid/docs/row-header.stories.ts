import { html } from 'lit';
import { DemoService } from '@cds/core/demo';

export default {
  title: 'Stories/Grid',
  component: 'cds-grid',
};


export function rowHeader() {
  const grid = DemoService.data.grid;
  return html`
  <cds-grid  aria-label="row header datagrid demo" height="360">
    ${grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
    ${grid.rows.map(row => html`
    <cds-grid-row>
      ${row.cells.map((cell, i) => html`<cds-grid-cell role=${i === 0 ? 'rowheader' : 'gridcell'}>${cell.label}</cds-grid-cell>`)}
    </cds-grid-row>`)}
    <cds-grid-footer></cds-grid-footer>
  </cds-grid>`;
}