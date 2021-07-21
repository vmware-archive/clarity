import { ReactiveControllerHost } from 'lit';

export type GridRowPosition = ReactiveControllerHost &
  HTMLElement & {
    position: '' | 'fixed' | 'sticky';
  };

export class GridRowPositionController {
  #host: GridRowPosition;

  constructor(host: GridRowPosition) {
    this.#host = host;
    this.#host.addController(this);
  }

  hostUpdated() {
    if (this.#host.position === 'fixed' || this.#host.position === 'sticky') {
      this.#setScrollTop('calc(var(--row-height) * 2)');
    }
  }

  #setScrollTop(value: string) {
    this.#host.parentElement.style.setProperty('--scroll-padding-top', value);
  }
}
