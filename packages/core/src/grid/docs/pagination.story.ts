import { html, LitElement } from 'lit';
import { customElement, state } from '@cds/core/internal';
import { DemoGridRow, DemoService, paginate } from '@cds/core/demo';
import '@cds/core/grid/register.js';

export function pagination() {
  @customElement('demo-grid-pagination')
  class DemoPagination extends LitElement {
    @state() private grid = DemoService.data.grid;
    @state() private filteredList: DemoGridRow[] = [];
    @state() private page = 1;
    @state() private pageSize = 10;
    @state() private pageCount = 1;
    @state() private pageSizeOptions = [5, 10, 20, 50];

    render() {
      return html` <cds-grid aria-label="pagination datagrid demo" height="360">
        ${this.grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
        ${this.filteredList.map(
          row => html` <cds-grid-row>
            ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
          </cds-grid-row>`
        )}
        <cds-grid-footer>
          <cds-grid-pagination
            .page=${this.page}
            .pageSize=${this.pageSize}
            .pageCount=${this.pageCount}
            .pageSizeOptions=${this.pageSizeOptions}
            @pageChange=${(e: any) => this.updatePage(e.detail)}
            @pageSizeChange=${(e: any) => this.updatePageSize(e.detail)}
          >
          </cds-grid-pagination>
          <div cds-layout="display:screen-reader-only" aria-live="polite" aria-relevant="all" role="status">
            navigated to page ${this.page}
          </div>
        </cds-grid-footer>
      </cds-grid>`;
    }

    connectedCallback() {
      super.connectedCallback();
      this.updatePages();
    }

    private updatePage(page: number) {
      this.page = page;
      this.updatePages();
    }

    private updatePageSize(pageSize: number) {
      this.pageSize = pageSize;
      this.updatePages();
    }

    private updatePages() {
      const list = [...this.grid.rows];
      this.pageCount = Math.ceil(list.length / this.pageSize);
      this.filteredList = paginate(list, this.pageSize)[this.page] ?? [];
    }
  }
  return html`<demo-grid-pagination></demo-grid-pagination>`;
}
