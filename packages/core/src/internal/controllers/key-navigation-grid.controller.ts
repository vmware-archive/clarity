import { ReactiveController, ReactiveElement } from 'lit';
import { onChildListMutation, onFirstInteraction } from '../utils/events.js';
import { getFlattenedDOMTree, getFlattenedFocusableItems } from '../utils/traversal.js';
import { contextMenuClick } from '../utils/dom.js';
import { validKeyNavigationCode } from '../utils/keycodes.js';
import {
  focusElement,
  getActiveElement,
  initializeKeyListItems,
  setActiveKeyListItem,
  simpleFocusable,
} from '../utils/focus.js';
import { getNextKeyGridItem } from './key-navigation.utils.js';

export interface KeyNavigationGridConfig {
  keyNavGrid?: HTMLElement;
  columnRow?: HTMLElement;
  columns?: NodeListOf<HTMLElement> | HTMLElement[];
  rows: NodeListOf<HTMLElement> | HTMLElement[];
  cells: NodeListOf<HTMLElement> | HTMLElement[];
}

/**
 * Given a 2d array grid structure provide keyboard navigation following aria grid spec
 * https://w3c.github.io/aria-practices/#gridNav_focus
 */
export function keyNavigationGrid<T extends ReactiveElement & KeyNavigationGridConfig>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new KeyNavigationGridController(instance));
}

export class KeyNavigationGridController<T extends ReactiveElement & KeyNavigationGridConfig>
  implements ReactiveController {
  private observers: MutationObserver[] = [];

  private get hostGrid() {
    return this.host.keyNavGrid ? this.host.keyNavGrid : this.host;
  }

  private get hostRows() {
    const rows = Array.from(this.host.rows);

    if (this.host.columnRow) {
      rows.unshift(this.host.columnRow);
    }

    return rows;
  }

  private get hostCells() {
    const cells = Array.from(this.host.cells);

    if (this.host.columns) {
      cells.unshift(...Array.from(this.host.columns));
    }

    return cells;
  }

  private get activeCell() {
    return Array.from(this.hostCells).find(i => i.tabIndex === 0) as HTMLElement;
  }

  constructor(private host: T) {
    this.host.addController(this);
  }

  async hostConnected() {
    await this.host.updateComplete;

    onFirstInteraction(this.host).then(() => {
      initializeKeyListItems(this.hostCells);
      this.hostGrid.addEventListener('mouseup', (e: MouseEvent) => this.clickCell(e));
      this.hostGrid.addEventListener('keydown', (e: KeyboardEvent) => this.keynavCell(e));
      this.hostGrid.addEventListener('keyup', (e: KeyboardEvent) => this.updateCellActivation(e));
    });

    this.observers.push(onChildListMutation(this.host, () => initializeKeyListItems(this.hostCells)));
  }

  hostDisconnected() {
    this.observers.forEach(o => o.disconnect());
  }

  private clickCell(e: MouseEvent) {
    if (!contextMenuClick(e)) {
      const activeCell = e.composedPath().find(i => this.hostCells.find(c => c === i));
      if (activeCell) {
        this.setActiveCell(e, activeCell as HTMLElement);
      }
    }
  }

  private keynavCell(e: KeyboardEvent) {
    if (validKeyNavigationCode(e) && simpleFocusable(getActiveElement() as Element)) {
      const { x, y } = getNextKeyGridItem(this.hostCells, this.hostRows, {
        code: e.code,
        ctrlKey: e.ctrlKey,
        dir: this.host.dir,
      });

      const nextCell = Array.from(getFlattenedDOMTree(this.hostRows[y])).filter(
        c => !!this.hostCells.find(i => i === c)
      )[x];
      this.setActiveCell(e, nextCell);
      e.preventDefault();
    }
  }

  private setActiveCell(e: any, activeCell: HTMLElement) {
    setActiveKeyListItem(this.hostCells, activeCell);

    // https://w3c.github.io/aria-practices/#gridNav_focus
    const items = getFlattenedFocusableItems(activeCell);
    const simpleItems = items.filter(i => simpleFocusable(i));

    if (simpleItems.length === 1 && items.length === 1) {
      focusElement(simpleItems[0]);
    } else {
      focusElement(activeCell);
    }

    activeCell.dispatchEvent(
      new CustomEvent('cdsKeyChange', {
        bubbles: true,
        detail: { code: e.code, shiftKey: e.shiftKey, activeItem: activeCell },
      })
    );
  }

  private updateCellActivation(e: KeyboardEvent) {
    if (e.code === 'Escape') {
      this.activeCell?.focus();
    }

    if (e.code === 'Enter' && this.activeCell === e.composedPath()[0]) {
      getFlattenedFocusableItems(this.activeCell as Node)[0]?.focus();
    }
  }
}
