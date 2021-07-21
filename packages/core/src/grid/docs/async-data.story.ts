import { html, LitElement, PropertyValues } from 'lit';
import { query } from 'lit/decorators/query.js';
import { state, customElement } from '@cds/core/internal';
import { DemoGrid, DemoService } from '@cds/core/demo';
import { CdsGrid } from '@cds/core/grid';
import '@cds/core/grid/register.js';

export function asyncData() {
  @customElement('demo-grid-async-data')
  class DemoGridAsyncData extends LitElement {
    @state() private grid: DemoGrid = ({ label: '', rowActions: [], columns: [], rows: [] } as unknown) as DemoGrid;

    @query('cds-grid') private gridElement: CdsGrid;

    render() {
      return html` <cds-grid aria-label="async loading datagrid demo" height="360">
        ${this.grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
        ${this.grid.rows.map(
          row => html` <cds-grid-row>
            ${row.cells.map((cell: any) => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
          </cds-grid-row>`
        )}
        ${this.grid.rows.length === 0
          ? html` <cds-grid-placeholder>
              <cds-progress-circle size="xl" status="info"></cds-progress-circle>
              <p cds-text="subsection">Loading Data</p>
            </cds-grid-placeholder>`
          : ''}
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
      this.grid = ({ label: '', rowActions: [], columns: [], rows: [] } as unknown) as DemoGrid;
      this.grid = (await DemoService.asyncData).grid;
      this.gridElement.requestUpdate(); // <- we need this so the i18n hydrates itself after load
    }
  }

  return html`<demo-grid-async-data></demo-grid-async-data>`;
}
