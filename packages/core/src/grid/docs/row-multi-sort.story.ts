import { html, LitElement } from 'lit';
import { customElement, state } from '@cds/core/internal';
import { DemoService, DemoGridColumn } from '@cds/core/demo';
import { ButtonSort } from '@cds/core/button-sort';
import '@cds/core/button-sort/register.js';
import '@cds/core/grid/register.js';

export function rowMultiSort() {
  @customElement('demo-grid-row-multi-sort')
  class DemoRowMultiSort extends LitElement {
    @state() private grid = DemoService.data.grid;
    @state() private sortedRows = this.grid.rows;

    render() {
      return html`
        <p aria-live="assertive" role="log" cds-text="body">
          Sort by
          ${this.grid.columns
            .filter(c => c.sort !== 'none')
            .map(c => `${c.label} ${c.sort}`)
            .join(' then by ')}
        </p>
        <cds-grid aria-label="row multi sort datagrid demo" height="360">
          ${this.grid.columns.map(
            column => html`<cds-grid-column>
              ${column.label}
              <cds-button-sort
                aria-label="sort"
                .sort=${column.sort}
                @sortChange=${(e: any) => this.sort(column, e.detail)}
              ></cds-button-sort>
            </cds-grid-column>`
          )}
          ${this.sortedRows.map(
            row => html` <cds-grid-row>
              ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
            </cds-grid-row>`
          )}
          <cds-grid-footer></cds-grid-footer>
        </cds-grid>
      `;
    }

    private sort(column: DemoGridColumn, sort: ButtonSort) {
      column.sort = sort;
      this.sortedRows = this.grid.columns.reduce((rows, column, index) => {
        if (column.sort !== 'none') {
          rows = rows.sort((a: any, b: any) => `${a.cells[index].value}`.localeCompare(`${b.cells[index].value}`));
          rows = column.sort === 'descending' ? rows.reverse() : rows;
        }
        return rows;
      }, DemoService.data.grid.rows);
    }
  }
  return html`<demo-grid-row-multi-sort></demo-grid-row-multi-sort>`;
}
