import { ReactiveController, ReactiveElement } from 'lit';

export type AriaExpanded = ReactiveElement & { expanded: boolean; readonly?: boolean };

/**
 * Provides all nessesary aria-* attributes to create valid expanded button state
 */
export function ariaExpanded<T extends AriaExpanded>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new AriaExpandedController(instance));
}

export class AriaExpandedController<T extends AriaExpanded> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  hostUpdated() {
    if (this.host.expanded !== null && this.host.expanded !== undefined) {
      this.host.ariaExpanded = this.host.expanded ? 'true' : 'false';
    }

    if (this.host.readonly) {
      this.host.ariaExpanded = null;
    }
  }
}
