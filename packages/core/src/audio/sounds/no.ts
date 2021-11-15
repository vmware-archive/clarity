import { SoundTuple } from '../audio.element.js';

export function no(context: AudioContext) {
  const errorNoise = context.createOscillator();
  errorNoise.frequency.value = 200;
  errorNoise.type = 'triangle';
  errorNoise.frequency.exponentialRampToValueAtTime(800, context.currentTime + 0.05);
  errorNoise.frequency.exponentialRampToValueAtTime(1000, context.currentTime + 0.15);

  const gain = context.createGain();
  // successGain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.3);

  const successFilter = context.createBiquadFilter();
  // successFilter.Q = 0.01;

  errorNoise.connect(successFilter).connect(gain).connect(context.destination);
  errorNoise.start();
  errorNoise.stop(context.currentTime + 0.08);
}

export const noSoundName = 'no';
export const noSound: SoundTuple = [
  noSoundName,
  {
    play: no,
  },
];
