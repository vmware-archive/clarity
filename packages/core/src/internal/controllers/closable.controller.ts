import { ReactiveController, ReactiveElement } from 'lit';
import { listenForAttributeChange } from '../utils/events.js';
import { onEscape, onFocusOut } from '../utils/focus.js';
import { TriggerRefController } from './trigger-ref.controller.js';

export type CloseChangeType = 'focusout' | 'backdrop-click' | 'escape-keypress' | 'close-button-click' | 'custom';

export interface ClosableControllerConfig {
  escape?: boolean;
  focusout?: boolean;
}

/**
 * Given a closable component provides the following
 * - close on escape
 * - focus to trigger if available
 */
export class ClosableController<T extends ReactiveElement & { trigger?: HTMLElement }> implements ReactiveController {
  private observer: MutationObserver;

  private trigger: TriggerRefController<T>;

  constructor(private host: T, private config?: ClosableControllerConfig) {
    this.config = { escape: true, focusout: false, ...config };
    this.host.addController(this);
    this.trigger = new TriggerRefController(this.host);
  }

  hostConnected() {
    this.observer = listenForAttributeChange(this.host, 'hidden', () => {
      if (this.host.hidden) {
        this.trigger.current?.focus();
      }
    });

    if (this.config.escape) {
      onEscape(this.host, () => this.close('escape-keypress'));
    }

    if (this.config.focusout) {
      this.host.tabIndex = 0; // for a11y focus out https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element
      onFocusOut(this.host, () => this.close('focusout'));
    }
  }

  hostDisconnected() {
    this.trigger.current?.focus();
    this.observer.disconnect();
  }

  close(detail?: any) {
    this.host.dispatchEvent(
      new CustomEvent<CloseChangeType>('closeChange', { detail })
    );
  }
}
