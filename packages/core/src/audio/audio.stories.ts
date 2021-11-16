/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/button/register.js';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { Audible } from './audio.element.js';
import { ClarityAudio } from './audio.service.js';
import { yesSound } from './sounds/yes.js';
import { noSound } from './sounds/no.js';
import { doneSound } from './sounds/done.js';
import { alertSound } from './sounds/alert.js';
import { activeSound } from './sounds/active';
import { slideSound } from './sounds/slide';
import { warningSound } from './sounds/warning';

ClarityAudio.add(...yesSound);
ClarityAudio.add(...noSound);
ClarityAudio.add(...doneSound);
ClarityAudio.add(...alertSound);
ClarityAudio.add(...activeSound);
ClarityAudio.add(...slideSound);
ClarityAudio.add(...warningSound);

export default {
  title: 'Stories/Audio',
  parameters: {
    options: { showPanel: false },
    design: {},
  },
};

@customElement('cds-noisy-button')
class NoisyButton extends LitElement implements Audible {
  @property({ type: String })
  audio: 'yes' | 'no' | 'done' | 'alert' | 'active' | 'slide' | 'warning' = 'yes';

  @property({ type: String })
  cdsAudio = 'on';

  @property({ type: String })
  status: 'primary' | 'success' | 'danger' = 'primary';

  @property({ type: Object })
  cdsAudioConfig = {};

  playSound() {
    ClarityAudio.play(this.audio);
  }

  render() {
    return html`<cds-button status=${this.status} @click=${this.playSound}><slot></slot></cds-button>`;
  }
}

export function testme() {
  return html`
    <div cds-layout="horizontal gap:md p-b:md">
      <cds-noisy-button status="success" audio="yes">Yes</cds-noisy-button>
      <cds-noisy-button status="danger" audio="no">No</cds-noisy-button>
      <cds-noisy-button audio="done">Done</cds-noisy-button>
    </div>
    <div cds-layout="horizontal gap:md">
      <cds-noisy-button audio="alert">Alert</cds-noisy-button>
      <cds-noisy-button audio="active">Active</cds-noisy-button>
      <cds-noisy-button audio="slide">Slide</cds-noisy-button>
      <cds-noisy-button audio="warning">Warning</cds-noisy-button>
    </div>
  `;
}

testme.element = NoisyButton;
