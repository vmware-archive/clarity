import { ReactiveController, ReactiveElement } from 'lit';

export interface AriaButton extends ReactiveElement {
  readonly: boolean;
  disabled: boolean;
}

export function ariaButton<T extends AriaButton>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new AriaButtonController(instance));
}

/**
 * Provides nessesary attributes for indicating a non-button element as an accessible button type.
 */
export class AriaButtonController<T extends AriaButton> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  hostConnected() {
    this.host.tabIndex = 0; // initialize immediately so element can be focused synchronously
  }

  hostUpdated() {
    this.host.role = this.host.readonly ? null : 'button';
    this.host.tabIndex = !this.host.readonly && !this.host.disabled ? 0 : -1;
  }
}
