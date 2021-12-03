import { ReactiveController, ReactiveElement } from 'lit';

/**
 * Provides all nessesary aria-* attributes to create a valid aria modal.
 * Recommended use with `@focusTrap` controller.
 */
export function ariaModal<T extends ReactiveElement>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new AriaModalController(instance));
}

export class AriaModalController<T extends ReactiveElement> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  hostConnected() {
    // safari https://bugs.webkit.org/show_bug.cgi?id=174667
    this.host.ariaModal = 'true';
    this.host.role = 'dialog';
  }
}
