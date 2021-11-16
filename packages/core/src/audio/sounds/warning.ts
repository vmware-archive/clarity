import { SoundTuple } from '../audio.element.js';
import audioFile from '../files/SoundFX_thunk.mp3';

let cachedAudio: HTMLAudioElement;
let keepTypescriptHappy: any;

export function warning(context: AudioContext) {
  if (!cachedAudio || !keepTypescriptHappy) {
    cachedAudio = new Audio(audioFile);
    keepTypescriptHappy = context;
  }

  cachedAudio.play();
}

export const warningSoundName = 'warning';
export const warningSound: SoundTuple = [
  warningSoundName,
  {
    play: warning,
  },
];
