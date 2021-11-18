import { SoundTuple } from '../audio.element.js';
import { playNotes } from '../utils';

export async function question(context: AudioContext) {
  const notes = [
    [783.99, 0.1875, 0.33],
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
