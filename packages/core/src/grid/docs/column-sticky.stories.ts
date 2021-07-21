import { html } from 'lit';
import { DemoService } from '@cds/core/demo';

export default {
  title: 'Stories/Grid',
  component: 'cds-grid',
};

const columnWidths = {
  0: '200',
  1: '200',
  2: '500',
  3: '500',
  4: '500'
}

export function columnSticky() {
  const grid = DemoService.data.grid;
  return html`
  <cds-grid aria-label="column sticky datagrid demo" height="360">
    ${grid.columns.map((column, i) => html`
    <cds-grid-column resizable .position=${i === 1 ? 'sticky' : ''} .width=${(columnWidths as any)[i]}>${column.label}</cds-grid-column>`)}
    ${grid.rows.map(row => html`
    <cds-grid-row>
      ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
    </cds-grid-row>`)}
    <cds-grid-footer></cds-grid-footer>
  </cds-grid>`;
}