import { html, LitElement } from 'lit';
import { customElement, state } from '@cds/core/internal';
import { DemoGridRow, DemoService } from '@cds/core/demo';
import '@cds/core/grid/register.js';

function createRegionData() {
  const regions: { [key: string]: { id: string; expand: boolean; rows: DemoGridRow[] } } = {};

  const grid = DemoService.data.grid;
  const temp = grid.columns[0];
  grid.columns[0] = grid.columns[2];
  grid.columns[2] = temp;

  grid.rows.map(row => {
    const tempCell = row.cells[0];
    row.cells[0] = row.cells[2];
    row.cells[2] = tempCell;

    if (regions[row.cells[0].label]) {
      regions[row.cells[0].label].rows.push(row);
      regions[row.cells[0].label].id = row.cells[0].label;
    } else {
      regions[row.cells[0].label] = { expand: false, rows: [], id: '' };
    }
  });

  return { grid, regions };
}

export function rowGroups() {
  const { grid, regions } = createRegionData();
  @customElement('demo-grid-row-groups')
  class DemoRowGroups extends LitElement {
    @state() private grid = grid;
    @state() private regions = Object.keys(regions).map(key => regions[key]);

    render() {
      return html`<cds-grid aria-label="row groups datagrid demo" height="360">
        <cds-grid-column type="action" aria-label="region group actions"></cds-grid-column>
        ${this.grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
        ${this.regions.map(
          region => html`
            <cds-grid-row .selected=${region.expand}>
              <cds-grid-cell>
                <cds-button-expand
                  aria-label="view ${region.rows[0].cells[0].label} regions"
                  aria-controls="${[...region.rows]
                    .slice(1)
                    .map(r => r.id)
                    .join(' ')}"
                  .expanded=${region.expand}
                  @click=${() => this.toggleRegion(region)}
                ></cds-button-expand>
              </cds-grid-cell>
              ${region.rows[0].cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
            </cds-grid-row>

            ${region.expand
              ? html`${[...region.rows].slice(1).map(
                  row => html` <cds-grid-row>
                    <cds-grid-cell>
                      <span cds-layout="display:screen-reader-only">region ${row.cells[0].label}</span>
                    </cds-grid-cell>
                    ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
                  </cds-grid-row>`
                )}`
              : ''}
          `
        )}
        <cds-grid-footer></cds-grid-footer>
      </cds-grid>`;
    }

    private toggleRegion(region: { expand: boolean }) {
      region.expand = !region.expand;
      this.requestUpdate();
    }

    createRenderRoot() {
      return this;
    }
  }
  return html`<demo-grid-row-groups></demo-grid-row-groups>`;
}
