import { SoundTuple } from '../audio.element.js';

export function yes(context: AudioContext) {
  const successNoise = context.createOscillator();
  successNoise.frequency.value = 600;
  successNoise.type = 'sine';
  successNoise.frequency.exponentialRampToValueAtTime(800, context.currentTime + 0.05);
  successNoise.frequency.exponentialRampToValueAtTime(1000, context.currentTime + 0.15);

  const successGain = context.createGain();
  successGain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.3);

  const successFilter = context.createBiquadFilter();
  // successFilter.Q = 0.01;

  successNoise.connect(successFilter).connect(successGain).connect(context.destination);
  successNoise.start();
  successNoise.stop(context.currentTime + 0.2);
}

export const yesSoundName = 'yes';
export const yesSound: SoundTuple = [
  yesSoundName,
  {
    play: yes,
  },
];
