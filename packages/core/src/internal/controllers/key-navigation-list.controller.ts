import { ReactiveController, ReactiveElement } from 'lit';
import { focusElement } from '../utils/focus.js';
import { getNextKeyListItem, validKeyNavigationCode } from '../utils/keycodes.js';
import { getFlattenedFocusableItems } from '../utils/traversal.js';

export interface KeyNavigationListConfig {
  shadowRoot: boolean;
  keyListItems: string;
  layout: 'both' | 'horizontal' | 'vertical';
  manageFocus: boolean;
  manageTabindex: boolean;
  loop: boolean;
  dir: string | null;
}

/**
 * Provides key list naviation behavior
 * https://webaim.org/techniques/keyboard/
 */
export function keyNavigationList<T extends ReactiveElement>(
  config: Partial<KeyNavigationListConfig> = {}
): ClassDecorator {
  return (target: any) => {
    target.addInitializer((instance: T & { keyNavigationListController?: KeyNavigationListController<T> }) => {
      if (!instance.keyNavigationListController) {
        instance.keyNavigationListController = new KeyNavigationListController(instance, config);
      }
    });
  };
}

export class KeyNavigationListController<T extends ReactiveElement> implements ReactiveController {
  private get listItems() {
    return (this.host as any)[this.config.keyListItems] as NodeListOf<HTMLElement>;
  }

  private get hostRoot() {
    return this.config.shadowRoot ? (this.host.shadowRoot as ShadowRoot) : this.host;
  }

  private config: KeyNavigationListConfig;

  constructor(private host: T, config: Partial<KeyNavigationListConfig> = {}) {
    this.config = {
      shadowRoot: true,
      keyListItems: 'keyListItems',
      layout: 'horizontal',
      manageFocus: true,
      manageTabindex: true,
      loop: false,
      dir: this.host.getAttribute('rtl'),
      ...config,
    };
    host.addController(this);
  }

  async hostConnected() {
    await this.host.updateComplete;

    this.hostRoot.addEventListener('click', (e: any) => {
      const activeItem = this.getActiveItem(e);
      if (activeItem) {
        this.setActiveCell(e, activeItem);
      }
    });

    this.hostRoot.addEventListener('keydown', (e: any) => {
      if (validKeyNavigationCode(e)) {
        const activeItem = this.getActiveItem(e);
        if (activeItem) {
          const { next, previous } = getNextKeyListItem(activeItem, Array.from(this.listItems), {
            ...this.config,
            code: e.code,
          });

          if (next !== previous) {
            // todo: test for only emiting when position has changed
            this.setActiveCell(e, this.listItems[next], this.listItems[previous]);
          }
        }
      }
    });

    if (this.config.manageFocus && this.config.manageTabindex) {
      Array.from(this.listItems).forEach((i: HTMLElement) => i.setAttribute('tabindex', '-1'));
      const firstCell = this.listItems[0];
      firstCell?.setAttribute('tabindex', '0');
    }
  }

  private getActiveItem(e: Event) {
    return Array.from(this.listItems).find(
      c => c === (e.target as HTMLElement).closest(this.listItems[0].tagName.toLocaleLowerCase()) ?? c === e.target
    );
  }

  private setActiveCell(e: any, activeItem: HTMLElement, prev?: HTMLElement) {
    const previousItem = prev ?? Array.from(this.listItems).find(c => c.getAttribute('tabindex') === '0');
    if (this.config.manageFocus) {
      if (previousItem && this.config.manageTabindex) {
        previousItem.setAttribute('tabindex', '-1');
      }

      if (this.config.manageTabindex) {
        activeItem.setAttribute('tabindex', '0');
      }

      const items = getFlattenedFocusableItems(activeItem);
      const item = items[0] ?? activeItem;
      focusElement(item);
      e.preventDefault();
    }

    activeItem.dispatchEvent(
      new CustomEvent('cdsKeyChange', {
        bubbles: true,
        detail: {
          activeItem,
          previousItem,
          code: e.code,
          metaKey: e.ctrlKey || e.metaKey,
          keyListItems: this.config.keyListItems,
        },
      })
    );
  }
}
