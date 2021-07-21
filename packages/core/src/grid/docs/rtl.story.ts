import { html, LitElement } from 'lit';
import { customElement, state } from '@cds/core/internal';
import { DemoGridRow, DemoService } from '@cds/core/demo';
import '@cds/core/button-action/register.js';
import '@cds/core/grid/register.js';

export function rtl() {
  @customElement('demo-grid-rtl')
  class DemoRowDetail extends LitElement {
    @state() private grid = DemoService.data.grid;
    @state() private selectedRow: DemoGridRow;
    @state() private anchor: HTMLElement;

    render() {
      return html` <cds-grid dir="rtl" aria-label="rtl datagrid demo" height="360">
        <cds-grid-column type="action"></cds-grid-column>
        ${this.grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
        ${this.grid.rows.map(
          row => html` <cds-grid-row>
            <cds-grid-cell>
              <cds-button-expand
                popup="row-detail"
                action="detail"
                aria-label="${row.id} details"
                .expanded=${this.selectedRow?.id === row.id}
                @click=${(e: any) => this.showDetail(e.target, row)}
              ></cds-button-expand>
            </cds-grid-cell>
            ${row.cells.map(
              (cell, i) => html`<cds-grid-cell .role=${i === 0 ? 'rowheader' : null}>${cell.label}</cds-grid-cell>`
            )}
          </cds-grid-row>`
        )}
        <cds-grid-footer></cds-grid-footer>
        <cds-grid-detail
          id="row-detail"
          aria-label="row details"
          ?hidden=${!this.selectedRow}
          .anchor=${this.anchor}
          @closeChange=${() => (this.selectedRow = null) as any}
        >
          <div cds-layout="vertical gap:lg">
            <h2 cds-text="section">${this.selectedRow?.id}</h2>
            <dl cds-list cds-layout="vertical gap:xs">
              ${this.selectedRow?.cells?.map(
                (cell, i) =>
                  html`<dt>${this.grid.columns[i].label}</dt>
                    <dd cds-layout="m-b:xs">${cell.label}</dd>`
              )}
            </dl>
          </div>
        </cds-grid-detail>
      </cds-grid>`;
    }

    private showDetail(anchor: HTMLElement, row: DemoGridRow) {
      if (this.selectedRow?.id !== row.id) {
        this.selectedRow = row;
        this.anchor = anchor;
      } else {
        this.selectedRow = null;
      }
    }

    createRenderRoot() {
      return this;
    }
  }
  return html`<demo-grid-rtl></demo-grid-rtl>`;
}
