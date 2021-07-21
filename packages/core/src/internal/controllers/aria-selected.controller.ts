import { ReactiveController, ReactiveElement } from 'lit';

/**
 * Provides all nessesary aria-* attributes to create valid selection state
 */
export class AriaSelectedController<T extends ReactiveElement & { selected: boolean }> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  hostUpdated() {
    if (this.host.selected !== null && this.host.selected !== undefined) {
      this.host.ariaSelected = this.host.selected ? 'true' : 'false';
    }
  }
}
