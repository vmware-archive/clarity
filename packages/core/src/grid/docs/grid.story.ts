import { html, LitElement } from 'lit';
import { customElement, property, state } from '@cds/core/internal';
import { DemoGrid, DemoService } from '@cds/core/demo';

export function basic() {
  const grid = DemoService.data.grid;
  return html` <cds-grid aria-label="basic datagrid demo" height="360">
    ${grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
    ${grid.rows.map(
      row => html` <cds-grid-row>
        ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
      </cds-grid-row>`
    )}
    <cds-grid-footer></cds-grid-footer>
  </cds-grid>`;
}

export function keyboard() {
  return html`
    <cds-grid aria-label="keyboard navigation datagrid demo" height="360">
      <cds-grid-column width="200">Key</cds-grid-column>
      <cds-grid-column>Function</cds-grid-column>
      <cds-grid-row>
        <cds-grid-cell>Right Arrow</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>Moves focus one cell to the right.</li>
            <li>If focus is on the right-most cell in the row, focus does not move.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>Left Arrow</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>Moves focus one cell to the left.</li>
            <li>If focus is on the left-most cell in the row, focus does not move.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>Down Arrow</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>Moves focus one cell down.</li>
            <li>If focus is on the bottom cell in the column, focus does not move.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>Up Arrow</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>Moves focus one cell Up.</li>
            <li>If focus is on the top cell in the column, focus does not move.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>Page Down</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>
              Moves focus down five rows, scrolling so the bottom row in the currently visible set of rows becomes the
              first visible row.
            </li>
            <li>If focus is in the last row, focus does not move.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>Page Up</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>
              Moves focus up 5 rows, scrolling so the top row in the currently visible set of rows becomes the last
              visible row.
            </li>
            <li>If focus is in the first row of the grid, focus does not move.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>Home</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>Moves focus to the first cell in the row that contains focus.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>End</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>Moves focus to the last cell in the row that contains focus.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>Control + Home</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>Moves focus to the first cell in the first row.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-row>
        <cds-grid-cell>Control + End</cds-grid-cell>
        <cds-grid-cell>
          <ul cds-list>
            <li>Moves focus to the last cell in the last row.</li>
          </ul>
        </cds-grid-cell>
      </cds-grid-row>
      <cds-grid-footer>
        <a
          cds-text="subsection link"
          href="https://www.w3.org/TR/wai-aria-practices/examples/grid/dataGrids.html#kbd_label"
          >spec</a
        >
      </cds-grid-footer>
    </cds-grid>
  `;
}

export function dynamicGrid() {
  interface DynamicGrid extends DemoGrid {
    select: 'single' | 'multi' | 'none';
    columns: {
      id: number;
      label: string;
      suffix?: string;
      resizable: boolean;
    }[];
  }

  /**
   * Demo of a grid that can dynamically be created via a configuration object rather than declarative template
   */
  @customElement('grid-dynamic')
  class GridDynamicDemo extends LitElement {
    private _model: DynamicGrid;

    @property({ type: Object, reflect: false })
    get model() {
      return this._model;
    }

    set model(value) {
      this._model = { ...value };
      this.requestUpdate('model');
    }

    private get selected() {
      return this._model.rows.filter(r => r.selected).length;
    }

    render() {
      return html` ${this._model
        ? html` <cds-grid aria-label=${this._model.label} height="360">
            ${this._model.select === 'single'
              ? html` <cds-grid-column type="action">
                  <cds-checkbox>
                    <input
                      type="checkbox"
                      aria-label="select all rows"
                      .indeterminate=${this.selected > 0 && this.selected < this._model.rows.length}
                      @change=${(e: any) => this.selectAllRows(e.target.checked)}
                    />
                  </cds-checkbox>
                </cds-grid-column>`
              : ''}
            ${this._model.columns.map(
              c => html` <cds-grid-column .resizable=${c.resizable}>${c.label}</cds-grid-column>`
            )}
            ${this._model.rows.map(
              r => html` <cds-grid-row>
                ${this._model.select === 'single'
                  ? html` <cds-grid-cell>
                      <cds-checkbox>
                        <input
                          type="checkbox"
                          aria-label="select row"
                          .checked=${r.selected}
                          @change=${(e: any) => this.selectRow(r, e.target.checked)}
                        />
                      </cds-checkbox>
                    </cds-grid-cell>`
                  : ''}
                ${r.cells.map(
                  c => html` <cds-grid-cell>
                    ${c.label}
                  </cds-grid-cell>`
                )}
              </cds-grid-row>`
            )}
            <cds-grid-footer>
              ${this._model.select ? html`Selected: ${this.selected}` : ''}
            </cds-grid-footer>
          </cds-grid>`
        : ''}`;
    }

    private selectRow(row: any, checked: boolean) {
      row.selected = checked;
      this.modelChange();
    }

    private selectAllRows(checked: boolean) {
      this._model.rows.forEach(r => (r.selected = checked));
      this.modelChange();
    }

    private modelChange() {
      this.dispatchEvent(new CustomEvent('modelChange', { detail: this._model }));
    }
  }

  const grid = ({ ...DemoService.data.grid, select: 'single' } as unknown) as DynamicGrid;
  grid.select = 'single';
  grid.columns.forEach(c => (c.resizable = true));

  @customElement('demo-grid-dynamic')
  class DemoGridDynamic extends LitElement {
    @state() private grid = grid;

    render() {
      return html`
        <grid-dynamic .model=${this.grid} @modelChange=${(e: any) => this.updateModel(e.detail)}></grid-dynamic>
      `;
    }

    updateModel(model: DynamicGrid) {
      this.grid = model;
      console.log(this.grid);
    }
  }
  return html`<demo-grid-dynamic></demo-grid-dynamic>`;
}
