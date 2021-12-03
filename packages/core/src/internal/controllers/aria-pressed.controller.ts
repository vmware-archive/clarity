import { ReactiveController, ReactiveElement } from 'lit';

export type AriaPressed = ReactiveElement & { pressed: boolean };

/**
 * Provides all nessesary aria-* attributes to create valid pressed button states
 * https://sarahmhigley.com/writing/playing-with-state/
 */
export function ariaPressed<T extends AriaPressed>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new AriaPressedController(instance));
}

export class AriaPressedController<T extends AriaPressed> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  hostUpdated() {
    if (this.host.pressed !== null && this.host.pressed !== undefined) {
      this.host.ariaPressed = this.host.pressed ? 'true' : 'false';
    }
  }
}
