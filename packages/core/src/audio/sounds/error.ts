import { SoundTuple } from '../audio.element.js';
import { playSound } from '../utils';

export async function error(context: AudioContext) {
  playSound(context, 440, context.currentTime, 0.2, 0.5, -5000);
}

export const errorSoundName = 'error';
export const errorSound: SoundTuple = [
  errorSoundName,
  {
    play: error,
  },
];
