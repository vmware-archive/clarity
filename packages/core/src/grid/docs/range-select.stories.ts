import { html, LitElement } from 'lit';
import { customElement, state, groupArray } from '@cds/core/internal';
import { DemoService } from '@cds/core/demo';
import { CdsGridCell } from '@cds/core/grid';

export default {
  title: 'Stories/Grid',
  component: 'cds-grid',
};

export function rangeSelect() {
  @customElement('demo-grid-selectable-cells')
  class DemoSelectableCells extends LitElement {
    @state() private grid = DemoService.data.grid;
    @state() private activeCells: CdsGridCell[] = [];

    render() {
      return html`
        <cds-grid aria-label="range selection datagrid demo" @rangeSelectionChange=${(e: any) => this.activeCells = e.detail} height="490">
          ${this.grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
          ${this.grid.rows.map(row => html`  
          <cds-grid-row id=${row.id}>
            ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
          </cds-grid-row>`)}
          <cds-grid-footer>
            <p cds-text="body">
              <strong>${this.grid.columns[3].label}:</strong>
              ${(this.activeCells.filter(c => c.ariaColIndex === '4').reduce((prev, cell) => prev + (this.grid.rows.find(i => i.id === cell.parentElement.id).cells[3].value as number), 0) / (this.activeCells.length ? this.activeCells.length : 1)).toFixed(2)}
              <strong>${this.grid.columns[4].label}:</strong>
              ${(this.activeCells.filter(c => c.ariaColIndex === '5').reduce((prev, cell) => prev + (this.grid.rows.find(i => i.id === cell.parentElement.id).cells[4].value as number), 0) / (this.activeCells.length ? this.activeCells.length : 1)).toFixed(2)}
            </p>
          </cds-grid-footer>
        </cds-grid>
        <p cds-text="body">Active Cells: ${this.activeCells.map(c => html`(${c.ariaColIndex},${c.parentElement.ariaRowIndex}) `)}</p>
      `;
    }
  }
  return html`<demo-grid-selectable-cells></demo-grid-selectable-cells>`;
}

export function rangeSelectContextMenu() {
  @customElement('demo-range-select-context-menu')
  class DemoRangeSelectContextMenu extends LitElement {
    @state() private grid = DemoService.data.grid;
    @state() private activeCells: CdsGridCell[] = [];
    @state() private anchor: HTMLElement = null;
    @state() private csv: string;

    render() {
      return html`
        <cds-grid aria-label="range select context menu datagrid demo" @rangeSelectionChange=${(e: any) => this.activeCells = e.detail} height="490">
          ${this.grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
          ${this.grid.rows.map(row => html`  
          <cds-grid-row id=${row.id}>
            ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
          </cds-grid-row>`)}
          <cds-grid-footer></cds-grid-footer>
        </cds-grid>
        <cds-dropdown ?hidden=${!this.anchor} .anchor=${this.anchor} @closeChange=${() => (this.anchor = null) as void}>
          <cds-button action="flat" size="sm" @click=${() => this.log()}>Log</cds-button>
          <cds-button action="flat" size="sm" @click=${() => this.log()}>Alert</cds-button>
        </cds-dropdown>
        <pre cds-text="body">${this.csv}</pre>`;
    }

    connectedCallback() {
      super.connectedCallback();
      window.addEventListener('contextmenu', (e: any) => {
        const cell: CdsGridCell = e.path.find((e: any) => e.tagName === 'CDS-GRID-CELL');
        if (this.activeCells.length && cell.hasAttribute('highlight') && e.target === this) {
          e.preventDefault();
          this.anchor = cell;
        }
      });
    }

    private log() {
      const columns = Array.from(new Set(this.activeCells.map(c => parseInt(c.ariaColIndex) - 1))).map(i => this.grid.columns[i].label);
      const cells = groupArray(this.activeCells.map(c => c.textContent), columns.length);
      const result = `${columns.join(',')}\n${cells.join('\n')}`;
      alert(result);
      console.log(result);
      this.anchor = null;
    }
  }
  return html`<demo-range-select-context-menu></demo-range-select-context-menu>`;
}