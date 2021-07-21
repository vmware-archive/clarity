import { ReactiveController, ReactiveElement } from 'lit';
import { onEscape, onFocusOut } from '../utils/focus.js';

export type CloseChangeType = 'focusout' | 'backdrop-click' | 'escape-keypress' | 'close-button-click' | 'custom';

export type Closable = ReactiveElement & { trigger?: HTMLElement };

export interface ClosableControllerConfig {
  escape: boolean;
  focusout: boolean;
}

/**
 * Given a closable component provides the following
 * - close on escape
 * - close on focusout
 * - close on custom event
 */
export function closable<T extends Closable>(config: Partial<ClosableControllerConfig> = {}): ClassDecorator {
  return (target: any) => {
    target.addInitializer((instance: T & { closableController?: ClosableController<T> }) => {
      if (!instance.closableController) {
        instance.closableController = new ClosableController(instance, config);
      }
    });
  };
}

export class ClosableController<T extends Closable> implements ReactiveController {
  private config: ClosableControllerConfig;

  constructor(private host: T, config: Partial<ClosableControllerConfig> = {}) {
    this.config = { escape: true, focusout: false, ...config };
    this.host.addController(this);
  }

  hostConnected() {
    if (this.config.escape) {
      onEscape(this.host, () => this.close('escape-keypress'));
    }

    if (this.config.focusout) {
      this.host.tabIndex = 0; // for a11y focus out https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element
      onFocusOut(this.host, () => this.close('focusout'));
    }
  }

  close(detail?: any) {
    this.host.dispatchEvent(
      new CustomEvent<CloseChangeType>('closeChange', { detail })
    );
  }
}
