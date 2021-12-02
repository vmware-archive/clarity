import { ReactiveController, ReactiveElement } from 'lit';

export interface ButtonActive extends ReactiveElement {
  readonly: boolean;
  disabled: boolean;
}

export function buttonActive<T extends ButtonActive>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new ButtonActiveController(instance));
}

/**
 * This mimics the mouse-click visual behavior for keyboard only users and screen readers.
 * Browsers do not apply the CSS psuedo-selector :active in those instances. So we need this
 * for our :active styles to show.
 *
 * Make sure to update a component's CSS to account for the presence of the [cds-active] attribute
 * in all instance where :active is defined.
 */
export class ButtonActiveController<T extends ButtonActive> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  async hostConnected() {
    await this.host.updateComplete;
    this.host.addEventListener('keydown', (e: any) => this.emulateActive(e));
    this.host.addEventListener('mousedown', (e: any) => this.emulateActive(e));
    this.host.addEventListener('keyup', () => this.emulateInactive());
    this.host.addEventListener('blur', () => this.emulateInactive());
    this.host.addEventListener('mouseup', () => this.emulateInactive());
  }

  private emulateActive(e: any) {
    if (!this.host.disabled && !this.host.readonly) {
      this.host?.setAttribute('cds-active', '');
    }

    if (e.code === 'Space' && e.target === this.host) {
      e.preventDefault(); // prevent space bar scroll with button behavior
    }
  }

  private emulateInactive() {
    this.host.removeAttribute('cds-active');
  }
}
