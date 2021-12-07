import { ReactiveController, ReactiveElement } from 'lit';

export type AriaPopupTrigger = { popup: string };

/**
 * Provides all nessesary aria-* attributes to create a vaild aria popup trigger.
 * Used in combination of the `@ariaPopup` controller.
 */
export function ariaPopupTrigger<T extends ReactiveElement & AriaPopupTrigger>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new AriaPopupTriggerController(instance));
}

export class AriaPopupTriggerController<T extends ReactiveElement & AriaPopupTrigger> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  hostConnected() {
    if (this.host.popup) {
      this.host.ariaControls = this.host.popup;
      this.host.ariaHasPopup = 'true';
      this.host.ariaExpanded = 'false';
    }
  }
}
