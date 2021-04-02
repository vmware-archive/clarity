import { LitElement } from 'lit';
import { listenForAttributeChange } from '../utils/events.js';
import { getFocusableItems } from '../utils/traversal.js';
import { getItemToFocus, ignoreFocusTrap } from './utils/first-focus.controller.utils.js';
import { FocusTrapTrackerService } from '../services/focus-trap-tracker.service.js';

/**
 * Provides a focus first behavior to any component via the cds-first-focus attribute
 */
export class FirstFocusController {
  private observer: MutationObserver;

  constructor(private host: LitElement) {
    this.host.addController(this);
  }

  private get focusableItems() {
    return getFocusableItems(this.host);
  }

  async hostConnected() {
    await this.host.updateComplete;
    this.observer = listenForAttributeChange(this.host, 'hidden', () => this.cdsFocusFirst());
    this.cdsFocusFirst();
  }

  hostDisconnected() {
    const hostFocusTrapId = (this.host as any).focusTrapId;
    if (hostFocusTrapId) {
      // usually handled in closable controller but here to force the issue if there is a problem there
      FocusTrapTrackerService.removeTrapElement({ focusTrapId: hostFocusTrapId });
    }
    this.observer.disconnect();
  }

  private cdsFocusFirst() {
    if (this.host.hidden || ignoreFocusTrap(this.host)) {
      return;
    }

    getItemToFocus(this.host, this.focusableItems).focus();
  }
}
