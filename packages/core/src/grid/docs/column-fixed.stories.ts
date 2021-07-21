import { html, LitElement } from 'lit';
import { customElement, state } from '@cds/core/internal';
import { DemoService } from '@cds/core/demo';

export default {
  title: 'Stories/Grid',
  component: 'cds-grid',
};

export function columnFixed() {
  const grid = DemoService.data.grid;
  const columnWidths = {
    0: '150',
    1: '350',
    2: '500',
    3: '500',
    4: '150'
  }

  return html`
  <cds-grid aria-label="column fixed datagrid demo" height="360">
    ${grid.columns.map((column, i) => html`
    <cds-grid-column resizable .position=${i === 0 || i === 4 ? 'fixed' : ''} .width=${(columnWidths as any)[i]}>
      ${column.label}
    </cds-grid-column>`)}
    ${grid.rows.map(row => html`
    <cds-grid-row>
      ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
    </cds-grid-row>`)}
    <cds-grid-footer></cds-grid-footer>
  </cds-grid>`;
}

export function columnFixedDynamic() {
  @customElement('demo-column-fixed-dynamic')
  class DemoColumnFixedDyanmic extends LitElement {
    @state() private pinFirst = true;
    @state() private pinLast = true;
    @state() private grid = DemoService.data.grid;
    @state() private columns = this.grid.columns.slice(1, this.grid.columns.length - 1);
    @state() private lastColumn = this.grid.columns[this.grid.columns.length - 1];
    @state() private firstColumn = this.grid.columns[0];

    render() {
      return html`
        <cds-grid aria-label="columns fixed dynamic datagrid demo" height="360">
          <cds-grid-column resizable .position=${this.pinFirst ? 'fixed' : ''} width="150">
            ${this.firstColumn.label} <cds-action @click=${() => (this.pinFirst = !this.pinFirst)} .pressed=${this.pinFirst} shape=${this.pinFirst ? 'pin' : 'unpin'} aria-label="pin ${this.firstColumn.label} column"></cds-action>
          </cds-grid-column>
          ${this.columns.map(column => html`<cds-grid-column resizable width="300">${column.label}</cds-grid-column>`)}
          <cds-grid-column width="150" resizable .position=${this.pinLast ? 'fixed' : ''}>
            ${this.lastColumn.label} <cds-action @click=${() => (this.pinLast = !this.pinLast)} .pressed=${this.pinLast} shape=${this.pinLast ? 'pin' : 'unpin'} aria-label="pin ${this.lastColumn.label} column"></cds-action>
          </cds-grid-column>
          ${this.grid.rows.map(row => html`
          <cds-grid-row>
            ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
          </cds-grid-row>`)}
          <cds-grid-footer></cds-grid-footer>
        </cds-grid>`;
    }
  }
  return html`<demo-column-fixed-dynamic></demo-column-fixed-dynamic>`;
}

export function columnMultiFixed() {
  const grid = DemoService.data.grid;
  return html`
  <cds-grid aria-label="column multi fixed datagrid demo" height="360">
    ${grid.columns.map((column, i) => html`
    <cds-grid-column resizable .position=${i < 2 ? 'fixed' : ''} .width=${i < 2 ? '150' : '300'}>${column.label}</cds-grid-column>`)}
    ${grid.rows.map(row => html`
    <cds-grid-row>
      ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
    </cds-grid-row>`)}
    <cds-grid-footer></cds-grid-footer>
  </cds-grid>`;
}
