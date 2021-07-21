import { css, html, LitElement } from 'lit';
import { asyncAppend } from 'lit/directives/async-append.js';
import { repeat } from 'lit/directives/repeat.js';
import { ref } from 'lit/directives/ref.js';
import { asyncGroupArray, baseStyles, customElement, state } from '@cds/core/internal';
import { DemoGridRow, DemoService } from '@cds/core/demo';
// import { measureElementRender } from 'web-test-runner-performance/browser.js'; // todo cory: fix rollup import path
import '@cds/core/grid/register.js';

export function performance() {
  @customElement('demo-grid-performance')
  class DemoPerformance extends LitElement {
    @state() private showParseAndRender = false;
    @state() private hide = false;
    @state() private asyncIteratorBatchSize = 50;
    @state() private grid = DemoService.data.grid;
    @state() private rows: DemoGridRow[] = [];
    @state() private numberOfRows = 1000;
    @state() private timing: any;

    static styles = [
      baseStyles,
      css`
        :host {
          contain: none;
        }
      `,
    ];

    render() {
      return html` <div style="opacity: 0">
          <!-- preload fonts to prevent re-render calcs -->
          <span style="font-weight: var(--cds-global-typography-font-weight-light)">i</span>
          <span style="font-weight: var(--cds-global-typography-font-weight-regular)">i</span>
          <span style="font-weight: var(--cds-global-typography-font-weight-medium)">i</span>
          <span style="font-weight: var(--cds-global-typography-font-weight-semibold)">i</span>
          <span style="font-weight: var(--cds-global-typography-font-weight-bold)">i</span>
          <span style="font-weight: var(--cds-global-typography-font-weight-extrabold)">i</span>
        </div>
        <section>
          <div cds-layout="vertical gap:lg p-y:sm">
            <div cds-layout="horizontal gap:lg">
              <cds-input layout="vertical" control-width="shrink">
                <label>Number of Rows</label>
                <input
                  type="number"
                  min="20"
                  .value=${`${this.numberOfRows}`}
                  @input=${(e: any) => this.setRows(parseInt(e.target.value))}
                />
              </cds-input>

              <cds-input layout="vertical" control-width="shrink">
                <label>Async Iterator Batch Size</label>
                <input
                  type="number"
                  min="0"
                  .value=${`${this.asyncIteratorBatchSize}`}
                  @input=${(e: any) => (this.asyncIteratorBatchSize = parseInt(e.target.value))}
                />
              </cds-input>
            </div>

            <!-- not cds-button to prevent click event side effects with render time -->
            <div cds-layout="horizontal gap:sm">
              <button @click=${this.toggleGrid}>Render Large Grid</button>
              <button @click=${this.toggleVisibility}>css visibility</button>
            </div>

            <p cds-text="body">
              Initial Render Time:
              ${this.timing ? html`~${this.timing.entry.duration.toFixed(2)}ms ${this.timing.score}` : ''}
            </p>
          </div>

          <div style="width: 800px; height: 398px;">
            ${this.showParseAndRender
              ? html` <cds-grid
                  ${ref(gridRef => this.measure(gridRef as HTMLElement))}
                  @performanceChange=${(e: any) => (this.timing = e.detail)}
                  aria-label="performance datagrid demo"
                  ?hidden=${this.hide}
                  height="360"
                  style="width: 800px; height: 398px;"
                >
                  ${this.grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
                  ${this.asyncIteratorBatchSize > 0
                    ? asyncAppend(asyncGroupArray(this.rows, this.asyncIteratorBatchSize), rows =>
                        (rows as DemoGridRow[]).map(
                          row => html` <cds-grid-row>
                            ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
                          </cds-grid-row>`
                        )
                      )
                    : repeat(
                        this.rows,
                        row => row.id,
                        row => html` <cds-grid-row>
                          ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
                        </cds-grid-row>`
                      )}
                  <cds-grid-footer>
                    <p style="margin: 0; line-height: 0">
                      ${this.rows.length} Rows ${this.rows.length * this.grid.columns.length} Cells
                    </p>
                  </cds-grid-footer>
                </cds-grid>`
              : ''}
          </div>
        </section>`;
    }

    connectedCallback() {
      super.connectedCallback();
      this.setRows(this.numberOfRows);
    }

    private measure(grid: HTMLElement) {
      if (!this.timing && grid) {
        // measureElementRender(grid).then((timing: any) => (this.timing = timing));
      }
    }

    private toggleGrid() {
      this.showParseAndRender = !this.showParseAndRender;
      this.hide = !this.showParseAndRender;
      this.timing = null;
    }

    private toggleVisibility() {
      if (this.showParseAndRender) {
        this.hide = !this.hide;
      }
    }

    private setRows(numberOfRows: number) {
      this.showParseAndRender = false;
      this.numberOfRows = numberOfRows;
      this.timing = null;
      const data: any[] = [];

      for (let i = 0; i < this.numberOfRows / 20; i++) {
        data.push(
          ...this.grid.rows.map(e => {
            e.id = `${e.id}${i === 0 ? '' : `-${i}`}`;
            return e;
          })
        );
      }

      this.rows = data;
    }
  }
  return html`<demo-grid-performance></demo-grid-performance>`;
}
