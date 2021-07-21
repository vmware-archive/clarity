import { css, html, LitElement } from 'lit';
import { baseStyles, customElement, state } from '@cds/core/internal';
import { DemoGrid, DemoService } from '@cds/core/demo';
import '@cds/core/grid/register.js';
import '@cds/core/divider/register.js';

export function rowBatchAction() {
  @customElement('demo-grid-row-batch-action')
  class DemoRowBatchAction extends LitElement {
    @state() private grid: DemoGrid = DemoService.data.grid;
    @state() private rows = this.grid.rows;

    static styles = [
      baseStyles,
      css`
        :host {
          contain: none;
        }
      `,
    ];

    get selected() {
      return this.rows.filter(i => i.selected).length;
    }

    render() {
      return html` <section cds-layout="vertical gap:sm">
        <p cds-text="secondary">Select one or more VMs in the grid below to manage.</p>
        <div cds-layout="horizontal gap:xs align:vertical-center">
          <p id="batch-action-demo-grid" cds-text="message">${this.grid.label} &nbsp;</p>
          <cds-divider orientation="vertical"></cds-divider>&nbsp;
          ${this.grid.rowActions.map(
            action =>
              html`<cds-button action="outline" size="sm" @click=${() => this.action(action.value)}
                >${action.label}</cds-button
              >`
          )}
        </div>
        <cds-grid aria-labelledby="batch-action-demo-grid" selectable="multi" height="360">
          <cds-grid-column type="action">
            <cds-checkbox>
              <input
                type="checkbox"
                .checked=${this.selected === this.rows.length}
                .indeterminate=${this.selected > 0 && this.selected < this.rows.length}
                @change=${(e: any) => this.selectAll(e)}
                aria-label="select all hosts"
              />
            </cds-checkbox>
          </cds-grid-column>
          ${this.grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
          ${this.rows.map(
            row => html` <cds-grid-row .selected=${row.selected}>
              <cds-grid-cell>
                <cds-checkbox>
                  <input
                    type="checkbox"
                    .checked=${row.selected}
                    value=${row.id}
                    @click=${(e: any) => this.select(row, e.target.checked)}
                    aria-label="select ${row.id}"
                  />
                </cds-checkbox>
              </cds-grid-cell>
              ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
            </cds-grid-row>`
          )}
          <cds-grid-footer></cds-grid-footer>
        </cds-grid>
      </section>`;
    }

    private select(entry: any, checked: boolean) {
      this.rows.find(i => i.id === entry.id).selected = checked;
      this.rows = [...this.rows];
    }

    private selectAll(e: any) {
      this.rows.forEach(i => (i.selected = e.target.checked));
      this.rows = [...this.rows];
    }

    private action(name: string) {
      alert(
        `${name}: ${this.rows
          .filter(i => i.selected)
          .map(i => i.id)
          .join(', ')}`
      );
      this.rows.forEach(i => (i.selected = false));
      this.rows = [...this.rows];
    }
  }
  return html`<demo-grid-row-batch-action></demo-grid-row-batch-action>`;
}
