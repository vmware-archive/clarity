import { ReactiveController, ReactiveElement } from 'lit';

/**
 * Provides all nessesary aria-* attributes to create a vaild aria popup trigger
 */
export class AriaPopupTriggerController<T extends ReactiveElement> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  hostConnected() {
    const popup = this.host.getAttribute('popup');
    if (popup) {
      this.host.ariaControls = popup;
      this.host.ariaHasPopup = 'true';
      this.host.ariaExpanded = 'false';
    }
  }
}
