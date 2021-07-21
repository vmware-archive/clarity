import { html, LitElement } from 'lit';
import { customElement, state } from '@cds/core/internal';
import { DemoService, sortStrings } from '@cds/core/demo';
import { ButtonSort } from '@cds/core/button-sort';
import '@cds/core/button-sort/register.js';
import '@cds/core/grid/register.js';

export function rowSort() {
  @customElement('demo-grid-row-sort')
  class DemoRowSort extends LitElement {
    @state() private grid = DemoService.data.grid;
    @state() private sortType: ButtonSort = 'none';

    render() {
      return html` <cds-grid aria-label="row sort datagrid demo" height="360">
        ${this.grid.columns.map(
          (column, i) => html`<cds-grid-column>
            ${column.label}
            ${i === 0
              ? html`<cds-button-sort
                  aria-label="sort"
                  .sort=${this.sortType}
                  @sortChange=${(e: any) => (this.sortType = e.detail)}
                ></cds-button-sort>`
              : ''}
          </cds-grid-column>`
        )}
        ${sortStrings(DemoService.data.grid.rows, 'id', this.sortType).map(
          row => html` <cds-grid-row>
            ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
          </cds-grid-row>`
        )}
        <cds-grid-footer></cds-grid-footer>
      </cds-grid>`;
    }
  }
  return html`<demo-grid-row-sort></demo-grid-row-sort>`;
}
