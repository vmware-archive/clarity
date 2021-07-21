import { css, html, LitElement } from 'lit';
import { queryAll } from 'lit/decorators.js';
import { customElement, getInputValueType, state } from '@cds/core/internal';
import { DemoGridCell, DemoService, exportElementsToCSV, parseCSV } from '@cds/core/demo';
import { pencilIcon } from '@cds/core/icon/shapes/pencil.js';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { CdsGridCell, CdsGridColumn, CdsGridRow } from '@cds/core/grid';
import '@cds/core/file/register.js';
import '@cds/core/grid/register.js';

ClarityIcons.addIcons(pencilIcon);

export function cellEditable() {
  @customElement('demo-grid-cell-editable')
  class DemoCellEditable extends LitElement {
    @state() private grid = DemoService.data.grid;

    render() {
      return html` <cds-grid aria-label="cell editable datagrid demo" height="360">
        ${this.grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
        ${this.grid.rows.map(
          row => html` <cds-grid-row>
            ${row.cells.map(
              cell => html`<cds-grid-cell
                @keyup=${(e: any) => this.toggleEdit(e, cell)}
                @dblclick=${(e: any) => this.toggleEdit(e, cell)}
              >
                <cds-input>
                  <input
                    ?readonly=${!cell.selected}
                    value=${cell.value}
                    aria-label=${cell.label}
                    @change=${(e: any) => (cell.value = e.target.value)}
                    @blur=${(e: any) => this.toggleEdit(e, cell)}
                  />
                </cds-input>
              </cds-grid-cell>`
            )}
          </cds-grid-row>`
        )}
      </cds-grid>`;
    }

    private toggleEdit(e: any, cell: DemoGridCell) {
      if (!cell.selected && (e.code === 'Enter' || e.type === 'dblclick')) {
        cell.selected = true;
        this.grid = { ...this.grid };
        e.target.querySelector('input')?.focus();
      } else if (cell.selected && (e.code === 'Enter' || e.code === 'Escape' || e.type === 'blur')) {
        cell.selected = false;
        this.grid = { ...this.grid };
        e.target.closest('cds-grid-cell').focus();
      }
    }
  }
  return html`<demo-grid-cell-editable></demo-grid-cell-editable>`;
}

export function csv() {
  @customElement('demo-csv')
  class DemoCsv extends LitElement {
    @state() csv = '';
    @state() data: { columns: string[]; rows: string[][] } = { columns: [], rows: [] };

    @queryAll('cds-grid-column') columns: NodeListOf<CdsGridColumn>;
    @queryAll('cds-grid-row') rows: NodeListOf<CdsGridRow>;
    @queryAll('cds-grid-cells') cells: NodeListOf<CdsGridCell>;

    render() {
      return html` <cds-button size="sm" action="outline" @click=${this.setCSV}>generate csv</cds-button>
        <cds-button size="sm" action="outline" @click=${this.download}>download csv</cds-button>
        <cds-button size="sm" action="outline" @click=${this.deleteCSV}>delete csv</cds-button>
        <cds-grid aria-label="editable demo" border="cell" height="360">
          ${this.data.columns.map(c => html`<cds-grid-column resizable>${c}</cds-grid-column>`)}
          ${this.data.rows.map(
            cells => html` <cds-grid-row>
              ${cells.map(
                c => html` <cds-grid-cell>
                  <cds-input>
                    <input
                      readonly
                      type=${getInputValueType(c)}
                      .value=${c}
                      aria-label=${c}
                      @keydown=${this.keydown}
                      @blur=${this.blurInput}
                      @dblclick=${this.toggleInput}
                    />
                  </cds-input>
                </cds-grid-cell>`
              )}
            </cds-grid-row>`
          )}
          ${this.data.rows.length === 0
            ? html` <cds-grid-placeholder>
                <cds-file control-width="shrink">
                  <label>Upload CSV</label>
                  <input type="file" accept=".csv" @change=${this.uploadFile} />
                </cds-file>
              </cds-grid-placeholder>`
            : ''}
        </cds-grid>`;
    }

    private uploadFile(e: any) {
      const files = e.target.files;
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.csv = fileReader.result as string;
        this.data = parseCSV(this.csv);
      };
      fileReader.readAsText(files[0]);
    }

    private download() {
      this.csv = exportElementsToCSV(this.columns, this.rows);
      const a = document.createElement('a');
      a.href = `data:application/octet-stream,${encodeURIComponent(this.csv)}`;
      a.download = 'download.csv';
      a.click();
    }

    private setCSV() {
      this.csv = demoCSVFile;
      this.data = parseCSV(this.csv);
    }

    private deleteCSV() {
      this.csv = '';
      this.data = { columns: [], rows: [] };
    }

    private keydown(e: any) {
      if (e.code === 'Enter') {
        this.toggleInput(e);
      } else if (e.code === 'Escape') {
        this.blurInput(e);
      }
    }

    private toggleInput(e: any) {
      e.target.readOnly = !e.target.readOnly;
    }

    private blurInput(e: any) {
      e.target.readOnly = true;
    }
  }

  return html`<demo-csv></demo-csv>`;
}

export const demoCSVFile = `
Host,Startup,Status,CPU,Memory
vm-host-003,2017-06-01,online,10,30
vm-host-002,2019-03-01,online,20,30
vm-host-011,2020-07-01,online,5,15
vm-host-004,2017-05-01,offline,90,80
vm-host-016,2014-06-01,online,5,15
vm-host-008,2020-02-01,disruption,50,60
vm-host-018,2013-03-01,offline,0,0
vm-host-006,2012-08-01,deactivated,0,0
vm-host-005,2015-06-01,offline,85,70
vm-host-014,2019-09-01,disruption,73,62
vm-host-017,2017-01-01,offline,0,0
vm-host-007,2021-02-01,deactivated,0,0
vm-host-010,2021-07-01,disruption,50,60`;
