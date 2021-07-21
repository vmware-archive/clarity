import { ReactiveController, ReactiveElement } from 'lit';
import { focusable, focusElement, ignoreFocus } from '../utils/focus.js';
import { listenForAttributeChange } from '../utils/events.js';
import { getFlattenedDOMTree } from '../utils/traversal.js';

export interface FirstFocusConfig {
  fallback: 'none' | 'host' | 'focusable';
}

/**
 * Provides a focus first behavior to any component via the cds-first-focus attribute
 */
export function firstFocus<T extends ReactiveElement>(
  config: FirstFocusConfig = { fallback: 'focusable' }
): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new FirstFocusController(instance, config));
}

export class FirstFocusController<T extends ReactiveElement> implements ReactiveController {
  private observer: MutationObserver;

  constructor(private host: T, private config: FirstFocusConfig = { fallback: 'focusable' }) {
    this.host.addController(this);
  }

  async hostConnected() {
    await this.host.updateComplete;
    this.observer = listenForAttributeChange(this.host, 'hidden', () => this.cdsFocusFirst());
    this.cdsFocusFirst();
  }

  hostDisconnected() {
    this.observer.disconnect();
  }

  private cdsFocusFirst() {
    if (!ignoreFocus(this.host)) {
      const root = this.host.shadowRoot ? this.host.shadowRoot : this.host;
      const rootHost = root.querySelector<HTMLElement>('.private-host') ?? this.host;
      const elements = getFlattenedDOMTree(root).filter(i => !i.hasAttribute('cds-focus-boundary'));

      const firstFocus = elements.find(i => i.hasAttribute('cds-first-focus'));
      const focusableElement =
        this.config.fallback === 'focusable'
          ? elements.find(i => focusable(i) && !i.classList.contains('private-host'))
          : null;
      const host = this.config.fallback === 'none' ? null : rootHost;

      const focus = firstFocus ?? focusableElement ?? host;
      if (focus) {
        focusElement(focus);
      }
    }
  }
}
