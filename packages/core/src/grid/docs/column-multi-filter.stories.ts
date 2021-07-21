import { css, html, LitElement } from 'lit';
import { baseStyles, customElement, state } from '@cds/core/internal';
import { DemoService } from '@cds/core/demo';

export default {
  title: 'Stories/Grid',
  component: 'cds-grid',
};

export function columnMultiFilter() {
  @customElement('demo-grid-column-multi-filter')
  class DemoColumnMultiFilter extends LitElement {
    @state() private grid = DemoService.data.grid;
    @state() private search = '';

    static styles = [baseStyles, css`:host { contain: none }`];

    private get filteredRows() {
      return [...this.grid.rows].filter(row => row.cells
        .reduce((p, n) => `${p} ${n.value}`, '')
        .toLocaleLowerCase()
        .includes(this.search.trim().toLocaleLowerCase()));
    }

    render() {
      return html`
        <section cds-layout="vertical gap:md">
          <cds-search control-width="shrink">
            <label>Search</label>
            <input type="search" placeholder="search" @input=${(e: any) => (this.search = e.target.value)} />
          </cds-search>
          <cds-grid aria-label="column multi filter datagrid demo" height="360">
            ${this.grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
            ${this.filteredRows.map(row => html`
            <cds-grid-row>
              ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
            </cds-grid-row>`)}
            <cds-grid-footer></cds-grid-footer>
          </cds-grid>
        </section>`;
    }
  }
  return html`<demo-grid-column-multi-filter></demo-grid-column-multi-filter>`;
}