import { ReactiveController, ReactiveElement } from 'lit';

export type AriaDisabled = ReactiveElement & { disabled: boolean; readonly?: boolean };

export function ariaDisabled<T extends AriaDisabled>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new AriaDisabledController(instance));
}

/**
 * Provides all nessesary aria-* attributes to create valid disabled state for interactive components.
 */
export class AriaDisabledController<T extends AriaDisabled> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  hostUpdated() {
    if (this.host.disabled !== null) {
      this.host.ariaDisabled = this.host.disabled;
    }

    if (this.host.readonly) {
      this.host.ariaDisabled = null;
    }
  }
}
