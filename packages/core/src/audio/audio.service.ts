/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { GlobalStateService } from '../internal/services/global.service.js';

/**
 *
 * The ClarityAudio service is a static class that gives users the ability to retrieve
 * and override sound/audio player configurations based on the Web Animations API that are targeted
 * at a CSS selector defined in the configuration.
 *
 */
export class ClarityAudio {
  /**
   * Returns a readonly reference of the registry of animations.
   */
  static get registry(): Readonly<{}> {
    return { ...GlobalStateService.state.audioRegistry };
  }

  static get player(): AudioContext {
    return window.CDS.getDetails().audioContext;
  }

  static play(sound: string) {
    const soundConfig = (ClarityAudio as any).get(sound);
    if (!!soundConfig) {
      soundConfig(ClarityAudio.player);
    }
  }

  static has(name: string): boolean {
    return !!name && !!(ClarityAudio as any).registry[name];
  }

  static get(name: string): any {
    return (ClarityAudio as any).registry[name] || [];
  }

  // could do the icon tuple thing here is we wanted. just not doing it right now.
  static add(soundName: string, config: any) {
    if (!soundName || !config) {
      return;
    }

    GlobalStateService.state.audioRegistry = {
      ...GlobalStateService.state.audioRegistry,
      [soundName]: config,
    };
  }
}

/**
 * Obviously there is a bunch wrong with this pseudo code, but this is the idea
 * we have a global registry of predefined functions
 * the ClarityAudio Service can call the correct function when called upon
 */
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Advanced_techniques
// https://github.com/mdn/webaudio-examples

const yesSoundConfig = function success(context: AudioContext) {
  const successNoise = context.createOscillator();
  // successNoise.frequency = '600';
  successNoise.type = 'sine';
  successNoise.frequency.exponentialRampToValueAtTime(800, context.currentTime + 0.05);
  successNoise.frequency.exponentialRampToValueAtTime(1000, context.currentTime + 0.15);

  const successGain = context.createGain();
  successGain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.3);

  const successFilter = context.createBiquadFilter();
  // successFilter.Q = 0.01;

  successNoise.connect(successFilter).connect(successGain).connect(context.destination);
  successNoise.start();
  successNoise.stop(context.currentTime + 0.2);
};

ClarityAudio.add('yes', yesSoundConfig);
