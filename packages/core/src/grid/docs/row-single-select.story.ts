import { html, LitElement } from 'lit';
import { customElement, state } from '@cds/core/internal';
import { DemoGridRow, DemoService } from '@cds/core/demo';
import '@cds/core/radio/register.js';
import '@cds/core/grid/register.js';

export function rowSingleSelect() {
  @customElement('demo-grid-row-single-select')
  class DemoRowSingleSelect extends LitElement {
    @state() private grid = DemoService.data.grid;

    render() {
      return html`
        <cds-grid aria-label="row single select datagrid demo" selectable="single" height="360">
          <cds-grid-column type="action"></cds-grid-column>
          ${this.grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
          ${this.grid.rows.map(
            row => html` <cds-grid-row .selected=${row.selected}>
              <cds-grid-cell>
                <cds-radio>
                  <input
                    type="radio"
                    name="row"
                    .checked=${row.selected}
                    value=${row.id}
                    aria-label="select ${row.id}"
                    @click=${(e: any) => this.select(row, e.target.checked)}
                  />
                </cds-radio>
              </cds-grid-cell>
              ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
            </cds-grid-row>`
          )}
          <cds-grid-footer>
            Selected: ${this.grid.rows.find(i => i.selected)?.id}
          </cds-grid-footer>
        </cds-grid>
      `;
    }

    constructor() {
      super();
      this.grid.rows[0].selected = true;
    }

    private select(row: DemoGridRow, checked: boolean) {
      this.grid.rows.forEach(i => (i.selected = false));
      this.grid.rows.find(i => i.id === row.id).selected = checked;
      this.grid = { ...this.grid };
    }
  }
  return html`<demo-grid-row-single-select></demo-grid-row-single-select>`;
}
