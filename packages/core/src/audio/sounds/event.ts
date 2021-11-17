import { SoundTuple } from '../audio.element.js';
import { playSound } from '../utils';

export async function event(context: AudioContext) {
  playSound(context, 440, context.currentTime, 0.09, 0.25, -15000);
}

export const eventSoundName = 'event';
export const eventSound: SoundTuple = [
  eventSoundName,
  {
    play: event,
  },
];
