import { ReactiveController, ReactiveElement } from 'lit';
import { isSafari, isWindows } from '../utils/browser.js';
import { onChildListMutation } from '../utils/events.js';
import { getFlattenedFocusableItems } from '../utils/traversal.js';

export interface AriaGrid {
  grid: HTMLElement;
  columnRowGroup: HTMLElement;
  columnRow: HTMLElement;
  columns: NodeListOf<HTMLElement>;
  rowGroup: HTMLElement;
  rows: NodeListOf<HTMLElement>;
  cells: NodeListOf<HTMLElement>;
  footerRowGroup?: HTMLElement;
  footerRow?: HTMLElement;
  footerCells?: NodeListOf<HTMLElement>;
  placeholderCell?: HTMLElement;
}

export type AriaGridConfig = { update: 'mutation' | 'slot' };

/**
 * Provides all nessesary role/aria-* attributes to create a vaild aria grid
 * https://www.w3.org/TR/wai-aria-practices/examples/grid/dataGrids.html
 */
export function ariaGrid<T extends ReactiveElement & AriaGrid>(
  config: AriaGridConfig = { update: 'slot' }
): ClassDecorator {
  return (target: any) => {
    target.addInitializer((instance: T & { ariaGridController?: AriaGridController<T> }) => {
      if (!instance.ariaGridController) {
        instance.ariaGridController = new AriaGridController(instance, config);
      }
    });
  };
}

export class AriaGridController<T extends ReactiveElement & AriaGrid> implements ReactiveController {
  private observers: MutationObserver[] = [];

  private grid: AriaGrid;

  constructor(private host: T, private config: AriaGridConfig = { update: 'slot' }) {
    host.addController(this);
  }

  async hostConnected() {
    await this.host.updateComplete;
    this.intializeColumnSort();
    this.update();

    if (this.config.update === 'slot') {
      (this.host.shadowRoot as ShadowRoot).addEventListener('slotchange', () =>
        this.host.updateComplete.then(() => this.update())
      );
    } else {
      this.observers.push(onChildListMutation(this.host, () => this.host.updateComplete.then(() => this.update())));
    }
  }

  hostDisconnected() {
    this.observers.forEach(o => o.disconnect());
  }

  update() {
    // create one copy per update to prevent multiple DOM queries from @query getters
    this.grid = {
      grid: this.host.grid ? this.host.grid : this.host,
      columnRowGroup: this.host.columnRowGroup,
      columnRow: this.host.columnRow,
      columns: this.host.columns,
      rowGroup: this.host.rowGroup,
      rows: this.host.rows,
      cells: this.host.cells,
      footerRowGroup: this.host.footerRowGroup,
      footerRow: this.host.footerRow,
      footerCells: this.host.footerCells,
      placeholderCell: this.host.placeholderCell,
    };

    this.initializeGrid();
    this.intializeColumns();
    this.initializeRows();
    this.initializeCells();
    this.initializePlaceholder();
    this.intializeFooter();
  }

  private intializeColumnSort() {
    this.host.addEventListener('sortChange', (e: any) => {
      const col = e.composedPath().find((i: HTMLElement) => i.role === 'columnheader');
      if (col) {
        col.ariaSort = e.detail;
      }
    });
  }

  private initializeGrid() {
    const columnRowCount = 1;
    const rowCountOrDefault = Math.max(this.grid.rows?.length, 1);
    const footerRowCountOrDefault = this.grid.footerRow ? 1 : 0;

    this.grid.grid.role = 'grid';
    this.grid.grid.ariaRowCount = `${columnRowCount + rowCountOrDefault + footerRowCountOrDefault}`;
    this.grid.grid.ariaColCount = `${this.grid.columns.length}`;
  }

  private intializeColumns() {
    this.grid.columnRowGroup.role = 'rowgroup';
    this.grid.columnRow.role = 'row';
    this.grid.columnRow.ariaRowIndex = '1';
    this.grid.columns.forEach((c, i) => {
      c.role = 'columnheader';
      c.ariaColIndex = `${i + 1}`;
      c.ariaSort = 'none';
      this.patchInvalidScreenReaderBehavior(c);
    });
  }

  private initializeRows() {
    this.grid.rows?.forEach((r, i) => {
      r.role = 'row';
      r.ariaRowIndex = `${i + 2}`; // +2 for column header row offset
    });
  }

  /**
   * If cell has focusable items NVDA will go into forms mode (expected behavior)
   * Use table navigation ctrl+alt+arrow to move in and out of cells
   * https://github.com/nvaccess/nvda/issues/7718
   */
  private initializeCells() {
    const colsCount = this.grid.columns.length;
    this.grid.cells?.forEach((c, i) => {
      if (!c.role) {
        c.role = 'gridcell';
      }
      c.ariaColIndex = `${(i % colsCount) + 1}`; // colindex starts at 1
    });
  }

  private initializePlaceholder() {
    if (this.grid.placeholderCell) {
      this.grid.placeholderCell.ariaColSpan = this.grid.grid.ariaColCount;
    }
  }

  private intializeFooter() {
    if (this.grid.footerRowGroup && this.grid.footerRow) {
      this.grid.footerRowGroup.role = 'rowgroup';
      this.grid.footerRow.role = 'row';
      this.grid.footerRow.ariaRowIndex = `${this.grid.rows.length + 2}`; // offset for header row
      this.grid.footerCells?.forEach(c => (c.role = 'gridcell'));

      if (this.grid.footerCells?.length === 1) {
        this.grid.footerCells[0].ariaColSpan = this.grid.grid.ariaColCount;
      }
    }
  }

  /**
   * Only visible columnheader text should be read to SRs but Safari/VO and NVDA violates the spec
   * and deep merges any labeled content within the header even if hidden or interactive.
   * This will apply a patch to force Safari and NVDA to read only the provided aria-label
   *
   * https://github.com/nvaccess/nvda/issues/10096
   * https://github.com/nvaccess/nvda/issues/9017
   * https://github.com/nvaccess/nvda/pull/12763
   * https://github.com/nvaccess/nvda/issues/12392
   * https://github.com/nvaccess/nvda/issues/6826
   * https://github.com/nvaccess/nvda/issues/11181
   */
  private patchInvalidScreenReaderBehavior(c: HTMLElement) {
    if (isSafari() || isWindows()) {
      const fousableItems = getFlattenedFocusableItems(c).filter((c: any) => !c.readonly);
      const label = c.ariaLabel ? c.ariaLabel : c?.textContent?.trim();
      // todo: generic catch for resizable component
      if ((fousableItems.length || (c as any).resizable) && label.length) {
        c.ariaLabel = label;
        c.setAttribute('scope', 'col');
      }
    }
  }
}
