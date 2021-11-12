/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/**
 * Obviously there is a bunch wrong with this pseudo code, but this is the idea
 * we have a global registry of predefined functions
 * the ClarityAudio Service can call the correct function when called upon
 */
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Advanced_techniques
// https://github.com/mdn/webaudio-examples

const CdsAudioRegistry = {
  yes: function success(context) {
    const successNoise = context.createOscillator();
    successNoise.frequency = '600';
    successNoise.type = 'sine';
    successNoise.frequency.exponentialRampToValueAtTime(800, context.currentTime + 0.05);
    successNoise.frequency.exponentialRampToValueAtTime(1000, context.currentTime + 0.15);

    successGain = context.createGain();
    successGain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.3);

    successFilter = context.createBiquadFilter('bandpass');
    successFilter.Q = 0.01;

    successNoise.connect(successFilter).connect(successGain).connect(context.destination);
    successNoise.start();
    successNoise.stop(context.currentTime + 0.2);
  },
};

export class ClarityAudio {
  //
  // create and maintain a global audio context (better to control volume, oscillators, nodes, channels etc)
  // play a given sound from the AudioRegistry ( a registry of functions ) when asked
  // CdsAudioRegistry.yes();
  private cdsAudioContext = new AudioContext();

  static playSound(soundName: string): void {
    // Call the function for the soundName and pass it the audio context
    // CdsAudioRegistry is a registry of functions that can be called with an AudioContext ¯\_(ツ)_/¯
    CdsAudioRegistry[soundName](this.cdsAudioContext);
  }
}
