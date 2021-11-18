import { SoundTuple } from '../audio.element.js';
import { sweepFrequency } from '../utils';

export async function expand(context: AudioContext) {
  sweepFrequency(context, 150, 350, 0.35, 0.5);
}

export const expandSoundName = 'expand';
export const expandSound: SoundTuple = [
  expandSoundName,
  {
    play: expand,
  },
];
