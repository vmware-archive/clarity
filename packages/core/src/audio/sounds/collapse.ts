import { SoundTuple } from '../audio.element.js';
import { sweepFrequency } from '../utils';

export async function collapse(context: AudioContext) {
  sweepFrequency(context, 350, 150, 0.35, 0.5);
}

export const collapseSoundName = 'collapse';
export const collapseSound: SoundTuple = [
  collapseSoundName,
  {
    play: collapse,
  },
];
