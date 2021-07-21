import { ReactiveController, ReactiveElement } from 'lit';

type GridRange = {
  grid: HTMLElement;
  cells: NodeListOf<HTMLElement>;
  rows: NodeListOf<HTMLElement>;
  rangeSelection?: boolean;
};

/**
 * Given a 2d array grid structure provide a highlight/range selection of given cells
 */
export function gridRangeSelection<T extends ReactiveElement & GridRange>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new GridRangeSelectionController(instance));
}

export class GridRangeSelectionController<T extends ReactiveElement & GridRange> implements ReactiveController {
  private selectionActive = false;
  private firstCell: HTMLElement;
  private activeCell: HTMLElement;

  private get enabled() {
    return this.host.rangeSelection !== false && !Array.from(this.host.rows).find(r => r.draggable);
  }

  constructor(private host: T) {
    host.addController(this);
  }

  async hostConnected() {
    await this.host.updateComplete;
    this.setupKeyboardListeners();
    this.setupMouseEvents();
  }

  private setupMouseEvents() {
    const root = this.host.grid.shadowRoot ? this.host.grid.shadowRoot : this.host.grid;
    root.addEventListener('mousedown', (e: any) => {
      // preserve right click for context menus & keyboard mouse control https://apple.stackexchange.com/questions/32715/how-do-i-open-the-context-menu-from-a-mac-keyboard
      if (this.enabled && e.buttons === 1 && !e.ctrlKey) {
        this.setFirstCell(e);
      }
    });

    root.addEventListener('mouseover', (e: any) => {
      if (this.enabled) {
        this.setActiveCell(e.composedPath().find((i: any) => Array.from(this.host.cells).includes(i)));
      }
    });

    root.addEventListener('mouseup', () => {
      if (this.enabled) {
        this.stopSelection();
      }
    });
  }

  private setupKeyboardListeners() {
    this.host.addEventListener('cdsKeyChange', (e: any) => {
      if (this.enabled && e.detail.code) {
        this.setActiveCell(e.detail.activeItem);

        if (!e.detail.shiftKey) {
          this.stopSelection();
          this.resetAllActiveCells();
          this.host.dispatchEvent(new CustomEvent('rangeSelectionChange', { detail: [] }));
        }
      }
    });

    this.host.addEventListener('keydown', (e: any) => {
      if (this.enabled && e.code === 'ShiftLeft' && e.shiftKey && !this.selectionActive) {
        this.setFirstCell(e);
      }
    });
  }

  private setFirstCell(e: any) {
    const firstCell = e.composedPath().find((i: any) => Array.from(this.host.cells).includes(i));
    if (firstCell) {
      this.firstCell = firstCell;
      this.selectionActive = true;
      this.resetAllActiveCells();
    }
  }

  private setActiveCell(activeCell: HTMLElement) {
    if (activeCell && this.selectionActive) {
      this.activeCell = activeCell;
      this.calculateSelection();
    }
  }

  private stopSelection() {
    this.selectionActive = false;
  }

  private resetAllActiveCells() {
    this.host.cells.forEach(cell => cell.removeAttribute('highlight'));
  }

  private calculateSelection() {
    const x1 = parseInt(this.firstCell.ariaColIndex);
    const x2 = parseInt(this.activeCell.ariaColIndex);
    const y1 = parseInt(this.firstCell.parentElement?.ariaRowIndex);
    const y2 = parseInt(this.activeCell.parentElement?.ariaRowIndex);

    this.resetAllActiveCells();
    this.host.cells.forEach((cell: HTMLElement) => {
      const colIndex = parseInt(cell.ariaColIndex);
      const rowIndex = parseInt(cell.parentElement?.ariaRowIndex);
      if ((x1 <= x2 && colIndex >= x1 && colIndex <= x2) || (x1 >= x2 && colIndex <= x1 && colIndex >= x2)) {
        if ((y1 <= y2 && rowIndex >= y1 && rowIndex <= y2) || (y1 >= y2 && rowIndex <= y1 && rowIndex >= y2)) {
          cell.setAttribute('highlight', '');
        }
      }
    });

    this.host.dispatchEvent(
      new CustomEvent('rangeSelectionChange', {
        detail: Array.from(this.host.cells).filter(c => c.hasAttribute('highlight')),
      })
    );
  }
}
