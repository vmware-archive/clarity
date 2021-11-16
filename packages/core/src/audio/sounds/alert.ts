import { SoundTuple } from '../audio.element.js';
import audioFile from '../files/SoundFX_beeps.mp3';

let cachedAudio: HTMLAudioElement;
let keepTypescriptHappy: any;

export async function alert(context: AudioContext) {
  if (!cachedAudio) {
    cachedAudio = new Audio(audioFile);
    keepTypescriptHappy = context;
  }

  cachedAudio.play();
}

export const alertSoundName = 'alert';
export const alertSound: SoundTuple = [
  alertSoundName,
  {
    play: alert,
  },
];
