import { SoundTuple } from '../audio.element.js';
import audioFile from '../files/SoundFX_click.mp3';

let cachedAudio: HTMLAudioElement;
let keepTypescriptHappy: any;

export function active(context: AudioContext) {
  if (!cachedAudio || !keepTypescriptHappy) {
    cachedAudio = new Audio(audioFile);
    keepTypescriptHappy = context;
  }

  cachedAudio.play();
}

export const activeSoundName = 'active';
export const activeSound: SoundTuple = [
  activeSoundName,
  {
    play: active,
  },
];
