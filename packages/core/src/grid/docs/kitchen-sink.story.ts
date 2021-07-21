import { html, LitElement, PropertyValues } from 'lit';
import pipe from 'ramda/es/pipe.js';
import { state, customElement } from '@cds/core/internal';
import {
  paginate,
  filter,
  sortStrings,
  getVMData,
  TestVM,
  StatusDisplayType,
  StatusIconType,
  ColumnTypes,
} from '@cds/core/demo';
import '@cds/core/button-action/register.js';
import '@cds/core/button-expand/register.js';
import '@cds/core/grid/register.js';

export function kitchenSink() {
  interface GridState {
    data: TestVM[];
    orderPreference: string[];
    currentDetail: string | null;
    sortType: 'none' | 'ascending' | 'descending';
    search: string;
    page: number;
    pageSize: number;
    idFilterAnchor: HTMLElement | null;
    columnsDropdownAnchor: HTMLElement | null;
    detailAnchor: HTMLElement;
    selectedColumns: ColumnTypes | null;
  }

  const initialState: GridState = {
    data: getVMData(),
    orderPreference: getVMData().map(vm => vm.id),
    selectedColumns: ColumnTypes.All,
    currentDetail: null,
    sortType: 'none',
    pageSize: 10,
    search: '',
    page: 1,
    idFilterAnchor: null,
    columnsDropdownAnchor: null,
    detailAnchor: null,
  };

  @customElement('demo-grid-kitchen-sink')
  class DemoKitchenSink extends LitElement {
    @state() private state: GridState = initialState;

    get selected() {
      return this.state.data.filter(i => i.selected).length;
    }

    render() {
      return html` <cds-grid aria-label="Active VM Management" height="360">
          <cds-grid-column type="action">
            <cds-checkbox>
              <input
                type="checkbox"
                .checked=${this.selected === this.state.data.length}
                .indeterminate=${this.selected > 0 && this.selected < this.state.data.length}
                @change=${(e: any) => this.selectAll(e)}
                aria-label="select all hosts"
              />
            </cds-checkbox>
          </cds-grid-column>
          <cds-grid-column type="action"></cds-grid-column>
          <cds-grid-column resizable width="180">
            Host
            <cds-button-action
              popup="id-filter"
              @click=${(e: any) => (this.state = { ...this.state, idFilterAnchor: e.target })}
              aria-label="column filter options"
              shape="filter"
              .expanded=${!!this.state.search}
            ></cds-button-action>
          </cds-grid-column>
          ${this.columnVisible(ColumnTypes.Status)
            ? html` <cds-grid-column resizable width="180">
                Status
                <cds-button-sort
                  aria-label="sort status"
                  .sort=${this.state.sortType}
                  @sortChange=${(e: any) => this.setSortType(e.detail)}
                ></cds-button-sort>
              </cds-grid-column>`
            : ''}
          ${this.columnVisible(ColumnTypes.CPU) ? html`<cds-grid-column resizable>CPU</cds-grid-column>` : ''}
          ${this.columnVisible(ColumnTypes.Memory) ? html`<cds-grid-column resizable>Memory</cds-grid-column>` : ''}
          ${this.currentPage.map(
            entry => html` <cds-grid-row .selected=${entry.selected}>
              <cds-grid-cell>
                <cds-checkbox>
                  <input
                    type="checkbox"
                    .checked=${entry.selected}
                    value=${entry.id}
                    @click=${(e: any) => this.select(entry, e.target.checked)}
                    aria-label="select host ${entry.id}"
                  />
                </cds-checkbox>
              </cds-grid-cell>
              <cds-grid-cell>
                <cds-button-expand
                  popup="row-detail"
                  action="detail"
                  aria-label="${entry.id} details"
                  .expanded=${this.currentDetail?.id === entry.id}
                  @click=${(e: any) => this.showDetail(entry.id, e.target)}
                ></cds-button-expand>
              </cds-grid-cell>
              <cds-grid-cell role="rowheader">${entry.id}</cds-grid-cell>
              ${this.columnVisible(ColumnTypes.Status)
                ? html` <cds-grid-cell>
                    <cds-tag status=${StatusDisplayType[entry.status]} readonly
                      ><cds-icon
                        shape=${StatusIconType[entry.status]}
                        inner-offset=${entry.status === 'deactivated' ? 0 : 3}
                      ></cds-icon>
                      ${entry.status}</cds-tag
                    >
                  </cds-grid-cell>`
                : ''}
              ${this.columnVisible(ColumnTypes.CPU) ? html`<cds-grid-cell>${entry.cpu}%</cds-grid-cell>` : ''}
              ${this.columnVisible(ColumnTypes.Memory) ? html`<cds-grid-cell>${entry.memory}%</cds-grid-cell>` : ''}
            </cds-grid-row>`
          )}
          <cds-grid-footer>
            <cds-button-action
              popup="column-visibility"
              @click=${(e: any) => (this.state = { ...this.state, columnsDropdownAnchor: e.target })}
              aria-label="filter columns"
              shape="view-columns"
              .expanded=${!!this.state.search}
            ></cds-button-action>
            <cds-grid-pagination
              .page=${this.state.page}
              .pageSize=${this.state.pageSize}
              .pageCount=${this.pageCount}
              @pageChange=${(e: any) => (this.state = { ...this.state, page: e.detail })}
              @pageSizeChange=${(e: any) => (this.state = { ...this.state, pageSize: e.detail })}
            >
            </cds-grid-pagination>
            <div cds-layout="display:screen-reader-only" aria-live="polite" aria-relevant="all" role="status">
              navigated to page ${this.state.page}
            </div>
          </cds-grid-footer>
          <cds-grid-detail
            id="row-detail"
            ?hidden=${!this.currentDetail}
            .anchor=${this.state.detailAnchor}
            @closeChange=${this.closeDetail}
          >
            <section cds-layout="vertical gap:xxl">
              <div cds-layout="horizontal gap:sm">
                <h2 cds-text="heading">${this.currentDetail?.id}</h2>
                <cds-tag status=${StatusDisplayType[this.currentDetail?.status]} readonly>
                  <cds-icon
                    shape=${StatusIconType[this.currentDetail?.status]}
                    size=${this.currentDetail?.status === 'deactivated' ? 15 : 16}
                    inner-offset=${this.currentDetail?.status === 'deactivated' ? 0 : 3}
                  ></cds-icon>
                  ${this.currentDetail?.status}
                </cds-tag>
              </div>
              <div cds-layout="grid cols:6">
                <div cds-layout="vertical gap:sm align:center">
                  <cds-progress-circle
                    size="xxl"
                    status=${StatusDisplayType[this.currentDetail?.status]}
                    value=${this.currentDetail?.cpu}
                  ></cds-progress-circle>
                  <p cds-text="subsection">CPU: ${this.currentDetail?.cpu}%</p>
                </div>
                <div cds-layout="vertical gap:sm align:center">
                  <cds-progress-circle
                    size="xxl"
                    status=${StatusDisplayType[this.currentDetail?.status]}
                    value=${this.currentDetail?.memory}
                  ></cds-progress-circle>
                  <p cds-text="subsection">Memory: ${this.currentDetail?.memory}%</p>
                </div>
              </div>
            </section>
          </cds-grid-detail>
        </cds-grid>
        <cds-dropdown
          id="id-filter"
          ?hidden=${!this.state.idFilterAnchor}
          @closeChange=${() => (this.state = { ...this.state, idFilterAnchor: null as any })}
          .anchor=${this.state.idFilterAnchor}
        >
          <div cds-layout="vertical align:stretch p:sm">
            <cds-input>
              <input
                type="text"
                placeholder="Search"
                aria-label="search rows"
                .value=${this.state.search}
                @input=${(e: any) => this.search(e.target.value)}
              />
            </cds-input>
          </div>
        </cds-dropdown>
        <cds-dropdown
          id="column-visibility"
          closable
          orientation="top"
          ?hidden=${!this.state.columnsDropdownAnchor}
          @closeChange=${() => (this.state = { ...this.state, columnsDropdownAnchor: null as any })}
          .anchor=${this.state.columnsDropdownAnchor}
          position="top"
        >
          <div cds-layout="vertical align:stretch p:sm">
            <cds-checkbox-group layout="vertical">
              <cds-checkbox>
                <label>Status</label>
                <input
                  type="checkbox"
                  value=${ColumnTypes.Status}
                  @click=${this.selectColumns}
                  .checked=${this.columnVisible(ColumnTypes.Status)}
                />
              </cds-checkbox>
              <cds-checkbox>
                <label>CPU</label>
                <input
                  type="checkbox"
                  value=${ColumnTypes.CPU}
                  @click=${this.selectColumns}
                  .checked=${this.columnVisible(ColumnTypes.CPU)}
                />
              </cds-checkbox>
              <cds-checkbox>
                <label>Memory</label>
                <input
                  type="checkbox"
                  value=${ColumnTypes.Memory}
                  @click=${this.selectColumns}
                  .checked=${this.columnVisible(ColumnTypes.Memory)}
                />
              </cds-checkbox>
            </cds-checkbox-group>
            <cds-button
              action="flat"
              @click=${() => (this.state = { ...this.state, selectedColumns: ColumnTypes.All })}
              ?disabled=${this.columnVisible(ColumnTypes.All)}
              >Select All</cds-button
            >
          </div>
        </cds-dropdown>
        <section cds-layout="vertical gap:lg m-t:lg">
          <cds-button action="outline" @click=${this.resetState}>clear local storage</cds-button>
          <pre style="width: 100%; overflow: auto;">
${JSON.stringify(
              {
                ...this.state,
                idFilterAnchor: null,
                columnsDropdownAnchor: null,
                detailAnchor: null,
                data: this.state.data.map(i => i.id).join(','),
                orderPreference: this.state.orderPreference.join(','),
              },
              null,
              2
            )}</pre
          >
        </section>`;
    }

    connectedCallback() {
      super.connectedCallback();
      this.state = JSON.parse(localStorage.getItem('CORE_KITCHEN_SINK_DEMO')) ?? this.state;
    }

    updated(props: PropertyValues) {
      super.updated(props);
      localStorage.setItem(
        'CORE_KITCHEN_SINK_DEMO',
        JSON.stringify({ ...this.state, idFilterAnchor: null, columnsDropdownAnchor: null, detailAnchor: null })
      );
    }

    private get currentDetail() {
      return this.state.data.find(i => i.id === this.state.currentDetail);
    }

    private get pageCount() {
      return Math.ceil(this.state.data.length / this.state.pageSize);
    }

    private get currentPage() {
      return paginate<TestVM>(this.sortedData, this.state.pageSize)[this.state.page] ?? [];
    }

    private get sortedData() {
      return pipe(
        (d: TestVM[]) =>
          d.sort((a, b) =>
            this.state.orderPreference.indexOf(a.id) > this.state.orderPreference.indexOf(b.id) ? 1 : -1
          ),
        d => filter<TestVM>(d, 'id', this.state.search),
        d => sortStrings<TestVM>(d, 'status', this.state.sortType)
      )([...this.state.data]);
    }

    private setSortType(sortType: 'none' | 'ascending' | 'descending') {
      this.state = { ...this.state, sortType };
    }

    private search(value: string) {
      this.state = { ...this.state, search: value, page: 0 };
    }

    private showDetail(id: string, detailAnchor: HTMLElement) {
      this.state = {
        ...this.state,
        currentDetail: id !== this.state.currentDetail ? this.state.data.find(i => i.id === id).id : null,
        detailAnchor,
      };
    }

    private closeDetail() {
      this.state = { ...this.state, currentDetail: null };
    }

    private select(entry: any, checked: boolean) {
      this.state.data.find(i => i.id === entry.id).selected = checked;
      this.state = { ...this.state };
    }

    private selectAll(e: any) {
      this.state.data.forEach(i => (i.selected = e.target.checked));
      this.state = { ...this.state };
    }

    private resetState() {
      localStorage.removeItem('CORE_KITCHEN_SINK_DEMO');
      this.state = initialState;
    }

    private selectColumns() {
      const selectedColumns: ColumnTypes = Array.from(
        this.querySelectorAll<HTMLInputElement>('cds-checkbox-group input[type="checkbox"]')
      )
        .filter(c => c.checked)
        .reduce((p: number, n: HTMLInputElement) => p + parseInt(n.value), 1);

      this.state = {
        ...this.state,
        selectedColumns,
      };
    }

    private columnVisible(value: any) {
      return parseInt(value) === (this.state.selectedColumns & parseInt(value));
    }

    protected createRenderRoot() {
      return this;
    }
  }
  return html`<demo-grid-kitchen-sink></demo-grid-kitchen-sink>`;
}
