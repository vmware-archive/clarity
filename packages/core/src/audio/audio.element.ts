/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { LitElement } from 'lit';
import { property } from '@cds/core/internal';
import { ClarityAudio } from './audio.service';

export interface Audible {
  cdsAudio: string;
  cdsAudioConfig: object;
}

export type SoundTuple = [string, { play: (context: AudioContext) => void }];
export class CdsAudio extends LitElement {
  /**
   * Obviously there is a bunch wrong with this pseudo code, but this is the idea
   * we have a global registry of predefined functions
   * the ClarityAudio Service can call the correct function when called upon
   */

  // events could also be a list of events to listen for: click mouseover, custom ...
  @property({ type: String })
  events: string;

  @property({ type: String })
  sound: string;

  constructor() {
    super();
    this.addEventListener(this.events, this.play.bind(this));
  }

  private play = () => {
    ClarityAudio.play(this.sound);
    console.log('I am playing sound!');
  };
  // events property is an event or list of events that notify the system to play a sound
  // sound property is the sound to play when triggered
  //
  // idea: manage the appropriate event listeners for this element instance
  // idea: pull in the CdsAudioService singleton and tell it play the sound when an event is heard
}
