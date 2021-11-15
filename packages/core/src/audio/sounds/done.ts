import { SoundTuple } from '../audio.element.js';

export function donedid(context: AudioContext) {
  const finishedNoise = context.createOscillator();
  finishedNoise.frequency.value = 2000;
  finishedNoise.type = 'sine';
  finishedNoise.frequency.exponentialRampToValueAtTime(800, context.currentTime + 0.05);
  finishedNoise.frequency.exponentialRampToValueAtTime(1000, context.currentTime + 0.15);

  const gain = context.createGain();
  // successGain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.3);

  // const successFilter = context.createBiquadFilter();
  // successFilter.Q = 0.01;

  finishedNoise.connect(gain).connect(context.destination);
  finishedNoise.start();
  finishedNoise.stop(context.currentTime + 1.2);
}

export const doneSoundName = 'done';
export const doneSound: SoundTuple = [
  doneSoundName,
  {
    play: donedid,
  },
];
