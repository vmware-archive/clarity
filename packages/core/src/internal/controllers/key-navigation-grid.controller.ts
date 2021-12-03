import { ReactiveController, ReactiveElement } from 'lit';
import { onChildListMutation, onFirstInteraction } from '../utils/events.js';
import { getFlattenedFocusableItems } from '../utils/traversal.js';
import { isElementTextInputType } from '../utils/dom.js';
import { getNextKeyGridItem, validKeyNavigationCode } from '../utils/keycodes.js';
import { focusElement } from '../utils/focus.js';

export interface KeyNavigationGridConfig {
  rowGroup: HTMLElement;
  rows: NodeListOf<HTMLElement>;
  cells: NodeListOf<HTMLElement>;
}

/**
 * Given a 2d array grid structure provide keyboard navigation following aria grid spec
 */
export function keyNavigationGrid<T extends ReactiveElement & KeyNavigationGridConfig>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new KeyNavigationGridController(instance));
}

export class KeyNavigationGridController<T extends ReactiveElement & KeyNavigationGridConfig>
  implements ReactiveController {
  private observers: MutationObserver[] = [];

  constructor(private host: T) {
    host.addController(this);
  }

  async hostConnected() {
    await this.host.updateComplete;

    onFirstInteraction(this.host).then(() => {
      this.initializeTabIndex();
      this.host.rowGroup.addEventListener('mousedown', (e: MouseEvent) => this.clickCell(e));
      this.host.rowGroup.addEventListener('keydown', (e: KeyboardEvent) => this.focusCell(e));
    });

    this.observers.push(onChildListMutation(this.host.rowGroup, () => this.initializeTabIndex()));
  }

  hostDisconnected() {
    this.observers.forEach(o => o.disconnect());
  }

  private initializeTabIndex() {
    this.host.cells.forEach((i: HTMLElement) => i.setAttribute('tabindex', '-1'));
    this.host.cells[0]?.setAttribute('tabindex', '0');
  }

  private clickCell(e: any) {
    // preserve right click for context menus & keyboard mouse control https://apple.stackexchange.com/questions/32715/how-do-i-open-the-context-menu-from-a-mac-keyboard
    if (e.buttons === 1 && !e.ctrlKey && this.host.cells[0]) {
      const tagName = this.host.cells[0].tagName.toLocaleLowerCase();
      const activeCell = Array.from(this.host.cells).find(c => c === e.target.closest(tagName) ?? c === e.target);
      if (activeCell) {
        this.setActiveCell(e, activeCell);
      }
    }
  }

  private focusCell(e: KeyboardEvent) {
    if (validKeyNavigationCode(e) && ((e.target as any).readOnly || !isElementTextInputType(e.target as any))) {
      // todo: test for readonly
      const { x, y } = getNextKeyGridItem(Array.from(this.host.cells), Array.from(this.host.rows), {
        code: e.code,
        ctrlKey: e.ctrlKey,
        dir: this.host.dir,
      });
      this.setActiveCell(e, this.host.rows[y].children[x] as HTMLElement);
      e.preventDefault();
    }
  }

  private setActiveCell(e: any, activeCell: HTMLElement) {
    const prior = Array.from(this.host.cells).find(c => c.getAttribute('tabindex') === '0');

    if (prior) {
      prior.setAttribute('tabindex', '-1');
    }

    activeCell.setAttribute('tabindex', '0');

    const items = getFlattenedFocusableItems(activeCell);
    const item = items[0] ?? activeCell;
    focusElement(item);

    item.dispatchEvent(
      new CustomEvent('cdsKeyChange', {
        bubbles: true,
        detail: { code: e.code, shiftKey: e.shiftKey, activeItem: activeCell },
      })
    );
  }
}
