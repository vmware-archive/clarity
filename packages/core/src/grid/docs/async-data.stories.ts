import { html, LitElement, PropertyValues } from 'lit';
import { state, customElement } from '@cds/core/internal';
import { DemoGrid, DemoService } from '@cds/core/demo';

export default {
  title: 'Stories/Grid',
  component: 'cds-grid',
};

export function asyncData() {
  @customElement('demo-grid-async-data')
  class DemoGridAsyncData extends LitElement {
    @state() private grid: DemoGrid = { label: '', rowActions: [], columns: [], rows: [] } as unknown as DemoGrid;

    render() {
      return html`
        <cds-grid aria-label="async loading datagrid demo" height="360">
          ${this.grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
          ${this.grid.rows.map(row => html`
          <cds-grid-row>
            ${row.cells.map((cell: any) => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
          </cds-grid-row>`)}
          ${this.grid.rows.length === 0 ? html`
          <cds-grid-placeholder>
            <cds-progress-circle size="xl" status="info"></cds-progress-circle>
            <p cds-text="subsection">Loading Data</p>
          </cds-grid-placeholder>` : ''}
          <cds-grid-footer>
            <cds-inline-button @click=${() => this.load()}>Reload Data</cds-inline-button>
          </cds-grid-footer>
        </cds-grid>`;
    }

    firstUpdated(props: PropertyValues) {
      super.firstUpdated(props);
      this.load();
    }

    private async load() {
      this.grid = { label: '', rowActions: [], columns: [], rows: [] } as unknown as DemoGrid;
      this.grid = (await DemoService.asyncData).grid;
    }
  }

  return html`<demo-grid-async-data></demo-grid-async-data>`;
}