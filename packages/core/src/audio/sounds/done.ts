import { SoundTuple } from '../audio.element.js';
import { playNotes } from '../utils';

export async function donedid(context: AudioContext) {
  // const notes = [[261.63, 0.25], [349.23, 0.25], [392, 0.25]]; // <= 4
  const notes = [
    [523.25, 0.1875, 0.2],
    [698.46, 0.1875, 0.6],
    [1046.5, 0.1875, 0.99],
  ]; // <= 5
  // playNotes(context, notes);
  playNotes(context, notes.reverse(), 9, 0.5);
}

export const doneSoundName = 'done';
export const doneSound: SoundTuple = [
  doneSoundName,
  {
    play: donedid,
  },
];
