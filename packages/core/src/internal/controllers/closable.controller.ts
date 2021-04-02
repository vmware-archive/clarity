import { ReactiveControllerHost } from 'lit';
import { listenForAttributeChange } from '../utils/events.js';
import { EventEmitter } from '../decorators/event.js';
import { ignoreFocusTrap } from './utils/first-focus.controller.utils.js';
import { FocusTrapTrackerService } from '../services/focus-trap-tracker.service.js';

interface ClosableConfig {
  escape?: boolean;
  lastFocus?: boolean;
  closable?: () => boolean;
}

/**
 * Given a closable component provides the following
 * - close on escape
 * - focus to trigger
 * - close method for component specific events
 */
export class ClosableController {
  private config: ClosableConfig;
  private observer: MutationObserver;

  priorActiveElement: HTMLElement;

  private get isFocusTrapper(): boolean {
    return (this.host as any).focusTrapId && !ignoreFocusTrap(this.host);
  }

  constructor(private host: ReactiveControllerHost & HTMLElement, config?: ClosableConfig) {
    this.config = { escape: true, lastFocus: true, closable: () => true, ...config };
    this.host.addController(this);
  }

  hostConnected() {
    this.togglePriorActiveElement();
    this.host.addEventListener('keyup', (e: KeyboardEvent) => this.keyEvent(e));
    this.observer = listenForAttributeChange(this.host, 'hidden', () => this.togglePriorActiveElement());
  }

  hostDisconnected() {
    this.priorActiveElement?.focus();
    this.removeFocusTrap();
    this.observer.disconnect();
  }

  close(detail?: any) {
    if (this.config && this.config.closable && this.config.closable()) {
      // host has an event emitter so use it
      if ((this.host as any).closeChange) {
        ((this.host as any).closeChange as EventEmitter<string>).emit(detail);
      } else {
        this.host.dispatchEvent(new CustomEvent('closeChange', { detail }));
      }
    }
  }

  private setFocusTrap() {
    if (this.isFocusTrapper) {
      FocusTrapTrackerService.setCurrent({ focusTrapId: (this.host as any).focusTrapId });
    }
  }

  private removeFocusTrap() {
    if (this.isFocusTrapper) {
      FocusTrapTrackerService.removeTrapElement({ focusTrapId: (this.host as any).focusTrapId });
    }
  }

  private togglePriorActiveElement() {
    if (this.host.hidden && this.config.lastFocus) {
      this.removeFocusTrap();
      this.priorActiveElement?.focus();
    } else {
      this.setFocusTrap();
      this.setPriorActiveElement();
    }
  }

  private setPriorActiveElement() {
    this.priorActiveElement = (this.host.getRootNode() as any).activeElement;
  }

  private keyEvent(e: KeyboardEvent) {
    if (this.config.escape && e.code === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      this.close('escape-keypress');
    }
  }
}
