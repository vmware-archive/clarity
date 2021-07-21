import { html, LitElement } from 'lit';
import { customElement, state } from '@cds/core/internal';
import { DemoGridRow, DemoService, swapItems } from '@cds/core/demo';

export default {
  title: 'Stories/Grid',
  component: 'cds-grid',
};

export function rowDraggable() {
  @customElement('demo-grid-row-draggable')
  class DemoRowDraggable extends LitElement {
    @state() private grid = DemoService.data.grid;
    @state() private ariaLiveMessage = '';

    render() {
      return html`
        <cds-grid aria-label="row draggable datagrid demo" @cdsDraggableChange=${this.sortList} height="360">
          <cds-grid-column type="action"></cds-grid-column>
          ${this.grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
          ${this.grid.rows.map(row => html`
          <cds-grid-row draggable="true" id=${row.id}>
            <cds-grid-cell>
              <cds-action-handle aria-label="sort ${row.id}"></cds-action-handle>
            </cds-grid-cell>
            ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
          </cds-grid-row>`)}
          <cds-grid-placeholder draggable="false"></cds-grid-placeholder>
          <cds-grid-footer></cds-grid-footer>
        </cds-grid>
        <p>aria-live:</p>
        <div aria-live="assertive" role="log" aria-atomic="true">${this.ariaLiveMessage}</div>`;
    }

    private sortList(e: any) {
      if (e.detail.type === 'reordered') {
        this.grid.rows = [...swapItems<DemoGridRow>(e.detail.target, e.detail.from, this.grid.rows)];
        this.ariaLiveMessage = `host ${e.detail.from.id} moved to row ${this.grid.rows.findIndex(i => i.id === e.detail.target.id)}`;
      } else {
        this.ariaLiveMessage = `host ${e.detail.from.id} ${e.detail.type}`;
      }
    }
  }
  return html`<demo-grid-row-draggable></demo-grid-row-draggable>`;
}