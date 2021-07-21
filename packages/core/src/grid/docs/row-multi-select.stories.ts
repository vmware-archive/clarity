import { html, LitElement } from 'lit';
import { customElement, state } from '@cds/core/internal';
import { DemoGridRow, DemoService } from '@cds/core/demo';

export default {
  title: 'Stories/Grid',
  component: 'cds-grid',
};

export function rowMultiSelect() {
  @customElement('demo-grid-row-multi-select')
  class DemoRowMultiSelect extends LitElement {
    @state() private grid = DemoService.data.grid;

    get selected() {
      return this.grid.rows.filter(i => i.selected).length;
    }

    render() {
      return html`
        <cds-grid aria-label="row multi select datagrid demo" selectable="multi" height="360">
          <cds-grid-column type="action">
            <cds-checkbox>
              <input type="checkbox" .checked=${this.selected === this.grid.rows.length} .indeterminate=${(this.selected > 0) && (this.selected < this.grid.rows.length)} @change=${(e: any) => this.selectAll(e.target.checked)} aria-label="select all hosts" />
            </cds-checkbox>
          </cds-grid-column>
          ${this.grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
          ${this.grid.rows.map(row => html`
          <cds-grid-row .selected=${row.selected}>
            <cds-grid-cell>
              <cds-checkbox>
                <input type="checkbox" .checked=${row.selected} value=${row.id} @change=${(e: any) => this.select(row, e.target.checked)} aria-label="select ${row.id}" />
              </cds-checkbox>
            </cds-grid-cell>
            ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
          </cds-grid-row>`)}
          <cds-grid-footer>${this.selected} selected</cds-grid-footer>
        </cds-grid>`;
    }

    private select(entry: DemoGridRow, selected: boolean) {
      this.grid.rows.find(i => i.id === entry.id).selected = selected;
      this.grid = { ...this.grid };
    }

    private selectAll(selected: boolean) {
      this.grid.rows.forEach(i => (i.selected = selected));
      this.grid = { ...this.grid };
    }
  }
  return html`<demo-grid-row-multi-select></demo-grid-row-multi-select>`;
}
