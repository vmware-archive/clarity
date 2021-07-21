import { ReactiveController, ReactiveElement } from 'lit';

/**
 * List items default to `content-visibility: auto` for lazy initial render.
 * On scroll set all row items to `content-visibility: visible` for eager render.
 * This allows fast first render and smooth eager rendering anytime after for items within a bounded scroll box.
 */
export function scrollableVisibility<T extends ReactiveElement>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new ScrollableVisibilityController(instance));
}

export class ScrollableVisibilityController<T extends ReactiveElement> implements ReactiveController {
  private get root() {
    return this.host.shadowRoot ? (this.host.shadowRoot as ShadowRoot) : this.host;
  }

  constructor(private host: T) {
    this.host.addController(this);
  }

  async hostConnected() {
    await this.host.updateComplete;
    this.root.addEventListener('scroll', () => this.host.style.setProperty('--row-content-visibility', 'visibile'), {
      once: true,
      capture: true,
    });
  }
}
