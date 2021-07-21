import { html, LitElement } from 'lit';
import { customElement, state } from '@cds/core/internal';
import { DemoService, sortStrings } from '@cds/core/demo';
import { ActionSort } from '@cds/core/actions';

export default {
  title: 'Stories/Grid',
  component: 'cds-grid',
};

export function rowSort() {
  @customElement('demo-grid-row-sort')
  class DemoRowSort extends LitElement {
    @state() private grid = DemoService.data.grid;
    @state() private sortType: ActionSort = 'none';

    render() {
      return html`
        <cds-grid aria-label="row sort datagrid demo" height="360">
          ${this.grid.columns.map((column, i) => html`<cds-grid-column>
            ${column.label}
            ${i === 0 ? html`<cds-action-sort aria-label="sort" .sort=${this.sortType} @sortChange=${(e: any) => this.sortType = e.detail}></cds-action-sort>` : ''}
          </cds-grid-column>`)}
          ${sortStrings(DemoService.data.grid.rows, 'id', this.sortType).map(row => html`
          <cds-grid-row>
            ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
          </cds-grid-row>`)}
          <cds-grid-footer></cds-grid-footer>
        </cds-grid>`;
    }
  }
  return html`<demo-grid-row-sort></demo-grid-row-sort>`;
}