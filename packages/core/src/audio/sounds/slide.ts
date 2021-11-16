import { SoundTuple } from '../audio.element.js';
import audioFile from '../files/SoundFX_slide.mp3';

let cachedAudio: HTMLAudioElement;
let keepTypescriptHappy: any;

export function slide(context: AudioContext) {
  if (!cachedAudio || !keepTypescriptHappy) {
    cachedAudio = new Audio(audioFile);
    keepTypescriptHappy = context;
  }

  cachedAudio.play();
}

export const slideSoundName = 'slide';
export const slideSound: SoundTuple = [
  slideSoundName,
  {
    play: slide,
  },
];
