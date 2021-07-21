import { html, LitElement } from 'lit';
import { customElement, state, baseStyles } from '@cds/core/internal';
import { DemoService, insertBefore } from '@cds/core/demo';
import '@cds/core/grid/register.js';

export function columnDraggable() {
  @customElement('demo-grid-column-draggable')
  class DemoColumnDraggable extends LitElement {
    @state() private grid = DemoService.data.grid;
    @state() private ariaLiveMessage = '';

    static styles = [baseStyles];

    render() {
      return html` <cds-grid
          aria-label="column draggable datagrid demo"
          @cdsDraggableChange=${this.sortColumns}
          height="360"
        >
          ${this.grid.columns.map(
            column => html` <cds-grid-column draggable="true" id=${column.id}>
              ${column.label}
              <cds-button-handle aria-label="sort ${column.label} column"></cds-button-handle>
            </cds-grid-column>`
          )}
          ${this.grid.rows.map(
            row => html` <cds-grid-row>
              ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
            </cds-grid-row>`
          )}
          <cds-grid-footer></cds-grid-footer>
        </cds-grid>

        <p cds-text="body" cds-layout="p-y:sm">
          aria-live: <span aria-live="assertive" role="log" aria-atomic="true">${this.ariaLiveMessage}</span>
        </p>`;
    }

    private sortColumns(e: any) {
      if (e.detail.type === 'reordered') {
        const fromIndex = this.grid.columns.findIndex(i => `${i.id}` === e.detail.from.id);
        const targetIndex = this.grid.columns.findIndex(i => `${i.id}` === e.detail.target.id);
        this.grid.columns = insertBefore(fromIndex, targetIndex, this.grid.columns);
        this.grid.rows.forEach(row => (row.cells = insertBefore(fromIndex, targetIndex, row.cells)));
        this.ariaLiveMessage = `${e.detail.from.textContent} moved to column ${e.detail.target.ariaColIndex}`;
      } else {
        this.ariaLiveMessage = `${e.detail.from.textContent} column ${e.detail.type}`;
      }
    }
  }
  return html`<demo-grid-column-draggable></demo-grid-column-draggable>`;
}
