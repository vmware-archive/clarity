import { SoundTuple } from '../audio.element.js';
import { playSound } from '../utils';

export async function success(context: AudioContext) {
  playSound(context, 440, context.currentTime, 0.2, 0.5, 2000);
}

export const successSoundName = 'success';
export const successSound: SoundTuple = [
  successSoundName,
  {
    play: success,
  },
];
