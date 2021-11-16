import { ReactiveControllerHost } from 'lit';
import { Audible } from './audio.element.js';

/**
 *
 * What would be interesting here is adding a robust config option like we have with clarity
 * motion. Clarity motion works off of transitions, which is fine, but audio would need to
 * extend that functionality to also work off of events fired by components inside it (light
 * AND shadow DOM?). That could be cool but it could also be tricky because these reactive
 * controllers tend to execute in a specific order and I'm not exactly sure how that is
 * determined (yet)
 *
 */
export class CdsAudioController {
  constructor(private host: ReactiveControllerHost & HTMLElement & Audible) {
    this.host.addController(this);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async hostConnected() {
    // await this.host.updateComplete;
  }

  // ???
  //   private get root() {
  //     return (this.host.shadowRoot ? this.host.shadowRoot : this.host) as HTMLElement;
  //   }
}
