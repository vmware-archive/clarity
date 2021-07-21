import { ReactiveControllerHost } from 'lit';
import {
  isNumericString,
  listenForAttributeListChange,
  LogService,
  notProductionEnvironment,
  onChildListMutation,
} from '@cds/core/internal';

export type Column = HTMLElement & {
  width: string;
  ariaColIndex: string;
  type: string;
};

type Grid = HTMLElement & {
  columns: NodeListOf<Column>;
  columnLayout: 'fixed' | 'flex';
  height?: string;
};

export class GridLayoutController {
  private observers: MutationObserver[] = [];

  private _columns: NodeListOf<Column>;
  private get columns() {
    return Array.from(this._columns ?? []);
  }

  private get visibleColumns() {
    return this.columns.filter(c => !c.hidden);
  }

  private get lastVisibleColumn() {
    return this.visibleColumns[this.host.getAttribute('dir') === 'rtl' ? 0 : this.visibleColumns.length - 1];
  }

  constructor(private host: ReactiveControllerHost & Grid) {
    this.host.addController(this);
  }

  async hostConnected() {
    await this.host.updateComplete;
    this.updateLayout();
    this.host.addEventListener('resizeChange', () => this.initializeColumnWidths(), { once: true, capture: true });

    this.observers.push(
      onChildListMutation(this.host, async mutation => {
        await this.host.updateComplete;
        if (mutation && this.columnAddedOrRemoved(mutation)) {
          this.updateLayout();
        }
      })
    );

    this.observers.push(listenForAttributeListChange(this.host, ['hidden'], () => this.updateLayout()));
  }

  hostUpdated() {
    if (this.host.height) {
      this.host.style.setProperty(
        '--body-height',
        isNumericString(this.host.height) ? `${this.host.height}px` : this.host.height
      );
    }
  }

  hostDisconnected() {
    this.observers.forEach(o => o.disconnect());
  }

  private columnAddedOrRemoved(mutation: MutationRecord) {
    return [...Array.from(mutation.removedNodes), ...Array.from(mutation.addedNodes)].find(
      (i: any) => i.tagName === 'CDS-GRID-COLUMN'
    );
  }

  private initializeColumnWidths() {
    if (this.host.columnLayout === 'fixed') {
      this.visibleColumns
        .filter(c => c.width)
        .forEach(c =>
          this.host.style.setProperty(`--ch${c.ariaColIndex}`, isNumericString(c.width) ? `${c.width}px` : c.width)
        );

      this.visibleColumns
        .filter(c => !c.width && parseInt(c.ariaColIndex) !== this.columns.length)
        .forEach(c => this.host.style.setProperty(`--ch${c.ariaColIndex}`, `${parseInt(getComputedStyle(c).width)}px`));

      this.host.style.setProperty(
        `--ch${this.lastVisibleColumn.ariaColIndex}`,
        `minmax(${this.getLastColumnWidth() ?? `${parseInt(getComputedStyle(this.lastVisibleColumn).width)}px`}, 100%)`
      );
    }
  }

  private getLastColumnWidth() {
    if (isNumericString(this.lastVisibleColumn.width)) {
      return `${this.lastVisibleColumn.width}px`;
    } else {
      return this.lastVisibleColumn.width ? this.lastVisibleColumn.width : null;
    }
  }

  private updateLayout() {
    this._columns = this.host.columns; // create copy per update to prevent multiple DOM queries from @query getters
    this.validateColumnLayout();
    this.createColumnGrids();
    this.setColumnDividers();
  }

  private createColumnGrids() {
    const colWidths = this.columns
      .filter(c => !c.hidden)
      .reduce((p, c) => {
        const width = isNumericString(c.width) ? `${c.width}px` : c.width;
        return `${p} ${`var(--ch${c.ariaColIndex}, ${width ? width : '1fr'})`}`;
      }, '');

    this.host.style.setProperty('--ch-grid', colWidths);
  }

  private setColumnDividers() {
    this.visibleColumns.forEach((c, i) => {
      c.removeAttribute('draggable-hidden');

      if (c.type === 'action' && this.visibleColumns[i + 1]?.type === 'action') {
        c.setAttribute('draggable-hidden', '');
      }
    });
    this.lastVisibleColumn?.setAttribute('draggable-hidden', '');
  }

  private validateColumnLayout() {
    if (notProductionEnvironment()) {
      const visibleCells = Array.from((this.host as any).rows[0]?.cells ?? []).filter((c: any) => !c.hidden);
      if (this.visibleColumns.length !== visibleCells?.length && visibleCells?.length !== 0) {
        LogService.error(
          `Error: column mismatch, ${this.visibleColumns.length} visible column headers with ${visibleCells.length} visible cells`
        );
      }
    }
  }
}
