import { ReactiveController, ReactiveElement } from 'lit';

export type AriaPopupTrigger = { popup: string | HTMLElement };

export function ariaPopupTrigger<T extends ReactiveElement & AriaPopupTrigger>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new AriaPopupTriggerController(instance));
}

/**
 * Provides all nessesary aria-* attributes to create a vaild aria popup trigger.
 * Used in combination of the `@ariaPopup` controller.
 */
export class AriaPopupTriggerController<T extends ReactiveElement & AriaPopupTrigger> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  hostConnected() {
    const popupElementId = (this.host.popup as HTMLElement)?.id;
    const popupId = popupElementId ? popupElementId : this.host.getAttribute('popup');
    if (popupId) {
      this.host.ariaControls = popupId;
      this.host.ariaHasPopup = 'true';
      this.host.ariaExpanded = 'false';
    }
  }
}
