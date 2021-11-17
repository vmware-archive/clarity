import { SoundTuple } from '../audio.element.js';
import { playNotes } from '../utils';

export async function question(context: AudioContext) {
  // const notes = [[261.63, 0.25], [349.23, 0.25], [392, 0.25]]; // <= 4
  // const notes = [
  //   [698.46, 0.1875, 0.33],
  //   [523.25, 0.1875, 0.66],
  //   [1046.5, 0.1875, 0.99],
  // ]; // <= 5
  const notes = [
    [698.46, 0.1875, 0.33],
    [523.25, 0.1875, 0.66],
  ]; // <= 5
  playNotes(context, notes, 4, 0.5);
}

export const questionSoundName = 'question';
export const questionSound: SoundTuple = [
  questionSoundName,
  {
    play: question,
  },
];
