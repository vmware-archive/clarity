import { LitElement } from 'lit';
import { ClosableController } from './closable.controller.js';

export class AriaPopupController {
  private observer: MutationObserver;

  constructor(private host: LitElement) {
    this.host.addController(this);
  }

  private get closableController(): ClosableController {
    return (this.host as any).closableController;
  }

  /* c8 ignore next 3 */
  async hostConnected() {
    await this.host.updateComplete;
    this.onExpand(!this.host.hasAttribute('hidden'));

    this.observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'hidden') {
          this.onExpand(!this.host.hasAttribute('hidden'));
        }
      }
    });

    this.observer.observe(this.host, { attributes: true });
  }

  /* c8 ignore next 2 */
  hostDisconnected() {
    this.onExpand(false);
    this.observer.disconnect();
  }

  private onExpand(expand: boolean) {
    if (this.closableController) {
      const previousFocusElement = this.closableController.priorActiveElement;
      if (previousFocusElement && previousFocusElement.hasAttribute('popup')) {
        previousFocusElement.setAttribute('aria-expanded', expand ? 'true' : 'false');
      }
    }
  }
}
