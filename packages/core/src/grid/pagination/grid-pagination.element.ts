import { LitElement, html } from 'lit';
import { baseStyles, EventEmitter, i18n, I18nService, property, event } from '@cds/core/internal';
import styles from './grid-pagination.element.scss';

/**
 * Grid Pagination
 *
 * ```typescript
 * import '@cds/core/grid/register.js';
 * ```
 *
 * ```html
 * <cds-grid-pagination></cds-grid-pagination>
 * ```
 *
 * @element cds-grid-pagination
 * @event pageChange
 * @event pageSizeChange
 */
export class CdsGridPagination extends LitElement {
  @i18n() i18n = I18nService.keys.grid;

  @property({ type: Number }) page = 1;

  @property({ type: Number }) pageSize = 10;

  @property({ type: Number }) pageCount = 1;

  @property({ type: Array }) pageSizeOptions = [10, 20, 50, 100];

  @event() pageChange: EventEmitter<number>;

  @event() pageSizeChange: EventEmitter<number>;

  static styles = [baseStyles, styles];

  render() {
    return html`
      <cds-pagination .ariaLabel=${this.i18n.pagination.label}>
        <cds-select control-width="shrink">
          <select
            .value=${this.pageSize.toString()}
            .ariaLabel=${this.i18n.pagination.pageSize}
            @input=${(e: any) => this.pageSizeChange.emit(parseInt(e.target.value))}
          >
            ${this.pageSizeOptions.map(i => html`<option value=${i} ?selected=${i === this.pageSize}>${i}</option>`)}
          </select>
        </cds-select>
        <cds-pagination-button
          .ariaLabel=${this.i18n.pagination.firstPage}
          .disabled=${this.page === 1}
          action="first"
          @click=${this.firstPage}
        ></cds-pagination-button>
        <cds-pagination-button
          .ariaLabel=${this.i18n.pagination.previousPage}
          .disabled=${this.page === 1}
          action="prev"
          @click=${this.prevPage}
        ></cds-pagination-button>
        <cds-input cds-pagination-number>
          <input
            type="number"
            .ariaLabel=${`${this.i18n.pagination.page} ${this.page} of ${this.pageCount}`}
            @input=${this.setPage}
            .valueAsNumber=${this.page}
            min="1"
            max=${this.pageCount}
          />
          <cds-control-message><span aria-hidden="true">/ ${this.pageCount}</span></cds-control-message>
        </cds-input>
        <cds-pagination-button
          .ariaLabel=${this.i18n.pagination.nextPage}
          ?disabled=${this.page === this.pageCount}
          action="next"
          @click=${this.nextPage}
        ></cds-pagination-button>
        <cds-pagination-button
          .ariaLabel=${this.i18n.pagination.lastPage}
          ?disabled=${this.page === this.pageCount}
          action="last"
          @click=${this.lastPage}
        ></cds-pagination-button>
      </cds-pagination>
    `;
  }

  private setPage(event: any) {
    this.pageChange.emit((event.target as HTMLInputElement).valueAsNumber);
  }

  private nextPage() {
    this.pageChange.emit(this.page + 1);
  }

  private prevPage() {
    this.pageChange.emit(this.page - 1);
  }

  private firstPage() {
    this.pageChange.emit(1);
  }

  private lastPage() {
    this.pageChange.emit(this.pageCount - 1);
  }
}
