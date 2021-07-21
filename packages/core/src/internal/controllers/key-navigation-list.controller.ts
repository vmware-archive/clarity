import { ReactiveController, ReactiveElement } from 'lit';
import { focusElement, initializeKeyListItems, setActiveKeyListItem } from '../utils/focus.js';
import { KeyNavigationCode, validKeyNavigationCode } from '../utils/keycodes.js';
import { getFlattenedFocusableItems } from '../utils/traversal.js';
import { getNextKeyListItem } from './key-navigation.utils.js';

export interface KeyNavigationListConfig {
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

  private config: KeyNavigationListConfig;

  constructor(private host: T, config: Partial<KeyNavigationListConfig> = {}) {
    this.host.addController(this);
    this.config = {
      keyListItems: 'keyListItems',
      layout: 'horizontal',
      manageFocus: true,
      manageTabindex: true,
      loop: false,
      dir: this.host.getAttribute('rtl'),
      ...config,
    };
  }

  async hostConnected() {
    await this.host.updateComplete;
    this.initializeTabIndex();
    this.host.addEventListener('click', (e: any) => this.clickItem(e));
    this.host.addEventListener('keydown', (e: any) => this.focusItem(e));
    this.host.shadowRoot?.addEventListener('click', (e: any) => this.clickItem(e));
    this.host.shadowRoot?.addEventListener('keydown', (e: any) => this.focusItem(e));
  }

  private initializeTabIndex() {
    if (this.config.manageFocus && this.config.manageTabindex) {
      initializeKeyListItems(this.listItems);
    }
  }

  private clickItem(e: Event) {
    const activeItem = this.getActiveItem(e);
    if (activeItem) {
      this.setActiveItem(e, activeItem);
    }
  }

  private focusItem(e: KeyboardEvent) {
    if (validKeyNavigationCode(e)) {
      const activeItem = this.getActiveItem(e);
      if (activeItem) {
        const { next, previous } = getNextKeyListItem(activeItem, Array.from(this.listItems), {
          ...this.config,
          code: e.code as KeyNavigationCode,
        });

        if (next !== previous) {
          // todo: test for only emiting when position has changed
          this.setActiveItem(e, this.listItems[next], this.listItems[previous]);
        }
      }
    }
  }

  private getActiveItem(e: Event) {
    return Array.from(this.listItems).find(
      c => c === (e.target as HTMLElement).closest(this.listItems[0].tagName.toLocaleLowerCase()) ?? c === e.target
    );
  }

  private setActiveItem(e: any, activeItem: HTMLElement, previousItem?: HTMLElement) {
    if (this.config.manageFocus) {
      if (this.config.manageTabindex) {
        setActiveKeyListItem(this.listItems, activeItem);
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
