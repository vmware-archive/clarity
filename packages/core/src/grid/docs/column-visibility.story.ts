import { css, html, LitElement } from 'lit';
import { baseStyles, customElement, state } from '@cds/core/internal';
import { DemoService } from '@cds/core/demo';
import '@cds/core/button-action/register.js';
import '@cds/core/grid/register.js';

export function columnVisibility() {
  @customElement('demo-grid-column-visibility')
  class DemoColumnVisibility extends LitElement {
    @state() private grid = DemoService.data.grid;
    @state() private columnAnchor: HTMLElement;
    @state() private all = this.grid.columns.reduce((p, n) => n.id + p, 0);
    @state() private selectedColumns = this.all;

    static styles = [
      baseStyles,
      css`
        :host {
          contain: none;
        }
      `,
    ];

    render() {
      return html` <cds-grid aria-label="column visibility datagrid demo" height="360">
          ${this.grid.columns.map((column, i) =>
            this.checked(this.grid.columns[i].id) ? html`<cds-grid-column>${column.label}</cds-grid-column>` : ''
          )}
          ${this.grid.rows.map(
            row => html` <cds-grid-row>
              ${row.cells.map(
                (cell, i) =>
                  html`${this.checked(this.grid.columns[i].id)
                    ? html`<cds-grid-cell>${cell.label}</cds-grid-cell>`
                    : ''}`
              )}
            </cds-grid-row>`
          )}
          <cds-grid-footer>
            <cds-button-action
              popup="column-visbility"
              @click=${(e: any) => (this.columnAnchor = e.target)}
              aria-label="filter column"
              shape="view-columns"
              .expanded=${!this.checked(this.all)}
            ></cds-button-action>
          </cds-grid-footer>
        </cds-grid>
        <cds-dropdown
          closable
          orientation="top"
          id="column-visbility"
          ?hidden=${!this.columnAnchor}
          @closeChange=${(): void => (this.columnAnchor = null)}
          .anchor=${this.columnAnchor}
          position="top"
        >
          <div cds-layout="p:sm" style="min-width: 150px">
            <cds-checkbox-group layout="vertical">
              <label>Columns Filter</label>
              ${this.grid.columns
                .filter((_c, i) => i !== 0)
                .map(
                  column => html` <cds-checkbox>
                    <label>${column.label}</label>
                    <input
                      type="checkbox"
                      value=${column.id}
                      @click=${this.selectColumns}
                      .checked=${this.checked(column.id)}
                    />
                  </cds-checkbox>`
                )}
              <cds-checkbox>
                <label>All Columns</label>
                <input
                  type="checkbox"
                  all-columns
                  value=${this.all}
                  @click=${this.toggleAll}
                  .checked=${this.checked(this.all)}
                  ?indeterminate=${this.indeterminate()}
                />
              </cds-checkbox>
            </cds-checkbox-group>
          </div>
        </cds-dropdown>`;
    }

    private selectColumns() {
      this.selectedColumns = Array.from(
        this.shadowRoot.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:not([all-columns])')
      )
        .filter(c => c.checked)
        .map(c => parseInt(c.value))
        .reduce((p, n) => p + n, 1);
    }

    private toggleAll() {
      this.selectedColumns = this.selectedColumns === this.all ? 1 : this.all;
    }

    private checked(value: number) {
      return value === (this.selectedColumns & value);
    }

    private indeterminate() {
      return !this.checked(this.all) && this.selectedColumns !== 1;
    }
  }
  return html`<demo-grid-column-visibility></demo-grid-column-visibility>`;
}
