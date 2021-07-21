import { css, html, LitElement } from 'lit';
import { baseStyles, customElement, state } from '@cds/core/internal';
import { DemoService } from '@cds/core/demo';
import '@cds/core/button-action/register.js';
import '@cds/core/grid/register.js';

export function columnFilter() {
  @customElement('demo-grid-column-filter')
  class DemoColumnFilter extends LitElement {
    @state() private search = '';
    @state() private anchor: HTMLElement = null;
    @state() private grid = DemoService.data.grid;

    static styles = [
      baseStyles,
      css`
        :host {
          contain: none;
        }
      `,
    ];

    private get filteredRows() {
      return [...this.grid.rows].filter(r =>
        r.cells[0].value.toString().toLocaleLowerCase().includes(this.search.toLocaleLowerCase())
      );
    }

    render() {
      return html` <cds-grid aria-label="column filter datagrid demo" height="360">
          ${this.grid.columns.map(
            (column, i) => html` <cds-grid-column>
              ${column.label}
              ${i === 0
                ? html`<cds-button-action
                    popup="column-filter"
                    @click=${(e: any) => (this.anchor = e.target)}
                    shape="filter"
                    .expanded=${!!this.search.length}
                    aria-label="search ${column.label}"
                  ></cds-button-action>`
                : ''}
            </cds-grid-column>`
          )}
          ${this.filteredRows.map(
            row => html` <cds-grid-row>
              ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
            </cds-grid-row>`
          )}
          <cds-grid-footer></cds-grid-footer>
        </cds-grid>
        <cds-dropdown
          closable
          id="column-filter"
          ?hidden=${!this.anchor}
          @closeChange=${() => (this.anchor = null) as any}
          .anchor=${this.anchor}
        >
          <div cds-layout="p:sm">
            <cds-input>
              <input
                placeholder="Search"
                cds-first-focus
                aria-label="search ${this.grid.columns[0].label}"
                .value=${this.search}
                @input=${(e: any) => (this.search = e.target.value)}
              />
            </cds-input>
          </div>
        </cds-dropdown>`;
    }
  }
  return html`<demo-grid-column-filter></demo-grid-column-filter>`;
}
