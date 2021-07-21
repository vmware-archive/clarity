import { ReactiveController, ReactiveElement } from 'lit';

/**
 * Provides all nessesary aria-* attributes to create valid multi-selection state
 */
export class AriaMultiSelectableController<T extends ReactiveElement & { selectable: 'multi' | 'single' | null }>
  implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  hostUpdated() {
    if (this.host.selectable !== undefined && this.host.selectable !== null) {
      this.host.ariaMultiSelectable = this.host.selectable === 'multi' ? 'true' : 'false';
    } else {
      this.host.ariaMultiSelectable = null;
    }
  }
}
