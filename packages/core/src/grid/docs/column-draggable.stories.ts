import { html, LitElement } from 'lit';
import { customElement, state } from '@cds/core/internal';
import { DemoService, swapItems } from '@cds/core/demo';

export default {
  title: 'Stories/Grid',
  component: 'cds-grid',
};

export function columnDraggable() {
  @customElement('demo-grid-column-draggable')
  class DemoColumnDraggable extends LitElement {
    @state() private grid = DemoService.data.grid;
    @state() private columns = DemoService.data.grid.columns;
    @state() private ariaLiveMessage = '';

    render() {
      return html`
        <cds-grid aria-label="column draggable datagrid demo" @cdsDraggableChange=${this.sortColumns} height="360">
          ${this.columns.map(column => html`
          <cds-grid-column draggable="true" id=${column.id}>
            ${column.label}
            <cds-action-handle aria-label="sort ${column.label} column"></cds-action-handle>
          </cds-grid-column>`)}
          ${this.grid.rows.map(row => html`
          <cds-grid-row>
            ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
          </cds-grid-row>`)}
          <cds-grid-footer></cds-grid-footer>
        </cds-grid>

        <p cds-text="body">
          aria-live: <span aria-live="assertive" role="log" aria-atomic="true">${this.ariaLiveMessage}</span>
        </p>`;
    }

    private sortColumns(e: any) {
      if (e.detail.type === 'reordered') {
        this.columns = [...swapItems(e.detail.target, e.detail.from, this.columns)];
        this.ariaLiveMessage = `${e.detail.from.textContent} moved to column ${e.detail.target.ariaColIndex}`;
      } else {
        this.ariaLiveMessage = `${e.detail.from.textContent} column ${e.detail.type}`;
      }
    }
  }
  return html`<demo-grid-column-draggable></demo-grid-column-draggable>`;
}