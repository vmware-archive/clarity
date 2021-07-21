import { html, LitElement } from 'lit';
import { customElement, state } from '@cds/core/internal';
import { DemoService, insertBefore } from '@cds/core/demo';
import '@cds/core/grid/register.js';

export function rowDraggable() {
  @customElement('demo-grid-row-draggable')
  class DemoRowDraggable extends LitElement {
    @state() private grid = { ...DemoService.data.grid };
    @state() private ariaLiveMessage = '';

    render() {
      return html` <cds-grid aria-label="row draggable datagrid demo" @cdsDraggableChange=${this.sortList} height="360">
          <cds-grid-column type="action"></cds-grid-column>
          ${this.grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
          ${this.grid.rows.map(
            row => html` <cds-grid-row draggable="true" id=${row.id}>
              <cds-grid-cell>
                <cds-button-handle aria-label="sort ${row.id}"></cds-button-handle>
              </cds-grid-cell>
              ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
            </cds-grid-row>`
          )}
          <cds-grid-placeholder draggable="false"></cds-grid-placeholder>
          <cds-grid-footer></cds-grid-footer>
        </cds-grid>
        <p>aria-live:</p>
        <div aria-live="assertive" role="log" aria-atomic="true">${this.ariaLiveMessage}</div>`;
    }

    private sortList(e: any) {
      if (e.detail.type === 'reordered') {
        const fromIndex = this.grid.rows.findIndex(i => `${i.id}` === e.detail.from.id);
        const targetIndex = this.grid.rows.findIndex(i => `${i.id}` === e.detail.target.id);
        this.grid.rows = insertBefore(fromIndex, targetIndex, this.grid.rows);

        this.ariaLiveMessage = `host ${e.detail.from.id} moved to row ${
          this.grid.rows.findIndex(i => i.id === e.detail.from.id) + 1
        }`;
      } else {
        this.ariaLiveMessage = `host ${e.detail.from.id} ${e.detail.type}`;
      }
    }
  }
  return html`<demo-grid-row-draggable></demo-grid-row-draggable>`;
}
