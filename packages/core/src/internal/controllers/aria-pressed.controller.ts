import { ReactiveController, ReactiveElement } from 'lit';

/**
 * Provides all nessesary aria-* attributes to create valid pressed button states
 * https://sarahmhigley.com/writing/playing-with-state/
 */
export class AriaPressedController<T extends ReactiveElement & { pressed: boolean }> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  hostUpdated() {
    if (this.host.pressed !== null && this.host.pressed !== undefined) {
      this.host.ariaPressed = this.host.pressed ? 'true' : 'false';
    }
  }
}
