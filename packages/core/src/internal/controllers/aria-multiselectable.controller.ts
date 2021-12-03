import { ReactiveController, ReactiveElement } from 'lit';

export type AriaMultiSelectable = ReactiveElement & { selectable: 'multi' | 'single' | null };

/**
 * Provides all nessesary aria-* attributes to create valid multi-selection state
 */
export function ariaMultiSelectable<T extends AriaMultiSelectable>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new AriaMultiSelectableController(instance));
}

export class AriaMultiSelectableController<T extends AriaMultiSelectable> implements ReactiveController {
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
