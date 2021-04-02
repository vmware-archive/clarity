import { ReactiveControllerHost } from 'lit';
import { setAttributes } from '../utils/dom.js';

export class AriaPopupTriggerController {
  constructor(private host: ReactiveControllerHost & HTMLElement) {
    this.host.addController(this);
  }

  hostConnected() {
    /* c8 ignore next */
    const popup = this.host.getAttribute('popup');
    if (popup) {
      setAttributes(this.host, ['aria-controls', popup], ['aria-haspopup', 'true'], ['aria-expanded', 'false']);
    }
  }
}
