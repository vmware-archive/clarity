import { ReactiveControllerHost } from 'lit';
import {
  isNumericString,
  listenForAttributeListChange,
  LogService,
  notProductionEnvironment,
  onChildListMutation,
} from '@cds/core/internal';

export type Column = HTMLElement & {
  width?: string;
  ariaColIndex?: string;
  type?: string;
};

type Grid = HTMLElement & {
  columns: NodeListOf<Column>;
  columnLayout: 'fixed' | 'flex';
  height?: string;
};

export class GridLayoutController {
  #observers: MutationObserver[] = [];
  #host: ReactiveControllerHost & Grid;

  #_columns: NodeListOf<Column>;
  get #columns() {
    return Array.from(this.#_columns ?? []);
  }

  get #visibleColumns() {
    return this.#columns.filter(c => !c.hidden);
  }

  get #lastVisibleColumn() {
    return this.#visibleColumns[this.#host.getAttribute('dir') === 'rtl' ? 0 : this.#visibleColumns.length - 1];
  }

  constructor(host: ReactiveControllerHost & Grid) {
    this.#host = host;
    this.#host.addController(this);
  }

  async hostConnected() {
    await this.#host.updateComplete;
    this.#updateLayout();
    this.#host.addEventListener('resizeChange', () => this.#initializeColumnWidths(), { once: true, capture: true });

    this.#observers.push(
      onChildListMutation(this.#host, async mutation => {
        await this.#host.updateComplete;
        if (this.#columnAddedOrRemoved(mutation)) {
          this.#updateLayout();
        }
      })
    );

    this.#observers.push(listenForAttributeListChange(this.#host, ['hidden'], () => this.#updateLayout()));
  }

  hostUpdated() {
    if (this.#host.height) {
      this.#host.style.setProperty(
        '--body-height',
        isNumericString(this.#host.height) ? `${this.#host.height}px` : this.#host.height
      );
    }
  }

  hostDisconnected() {
    this.#observers.forEach(o => o.disconnect());
  }

  #columnAddedOrRemoved(mutation: MutationRecord) {
    return [...Array.from(mutation.removedNodes), ...Array.from(mutation.addedNodes)].find(
      (i: any) => i.tagName === 'CDS-GRID-COLUMN'
    );
  }

  #initializeColumnWidths() {
    if (this.#host.columnLayout === 'fixed') {
      this.#visibleColumns
        .filter(c => c.width)
        .forEach(c =>
          this.#host.style.setProperty(`--ch${c.ariaColIndex}`, isNumericString(c.width) ? `${c.width}px` : c.width)
        );

      this.#visibleColumns
        .filter(c => !c.width && parseInt(c.ariaColIndex) !== this.#columns.length)
        .forEach(c =>
          this.#host.style.setProperty(`--ch${c.ariaColIndex}`, `${parseInt(getComputedStyle(c).width)}px`)
        );

      const lastColWidth = isNumericString(this.#lastVisibleColumn.width)
        ? `${this.#lastVisibleColumn.width}px`
        : this.#lastVisibleColumn.width;
      this.#host.style.setProperty(
        `--ch${this.#lastVisibleColumn.ariaColIndex}`,
        `minmax(${lastColWidth ?? `${parseInt(getComputedStyle(this.#lastVisibleColumn).width)}px`}, 100%)`
      );
    }
  }

  #updateLayout() {
    this.#_columns = this.#host.columns; // create copy per update to prevent multiple DOM queries from @query getters
    this.#validateColumnLayout();
    this.#createColumnGrids();
    this.#setColumnDividers();
  }

  #createColumnGrids() {
    const colWidths = this.#columns
      .filter(c => !c.hidden)
      .reduce((p, c) => {
        const width = isNumericString(c.width) ? `${c.width}px` : c.width;
        return `${p} ${`var(--ch${c.ariaColIndex}, ${width ? width : '1fr'})`}`;
      }, '');

    this.#host.style.setProperty('--ch-grid', colWidths);
  }

  #setColumnDividers() {
    this.#visibleColumns.forEach((c, i) => {
      c.removeAttribute('draggable-hidden');

      if (c.type === 'action' && this.#visibleColumns[i + 1]?.type === 'action') {
        c.setAttribute('draggable-hidden', '');
      }
    });
    this.#lastVisibleColumn?.setAttribute('draggable-hidden', '');
  }

  #validateColumnLayout() {
    if (notProductionEnvironment()) {
      const visibleCells = Array.from((this.#host as any).rows[0]?.cells ?? []).filter((c: any) => !c.hidden);
      if (this.#visibleColumns.length !== visibleCells?.length && visibleCells?.length !== 0) {
        LogService.error(
          `Error: column mismatch, ${this.#visibleColumns.length} visible column headers with ${
            visibleCells.length
          } visible cells`
        );
      }
    }
  }
}
