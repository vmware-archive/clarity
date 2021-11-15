import { SoundTuple } from '../audio.element.js';

export async function donedid(context: AudioContext) {
  // const notes = [[261.63, 0.25], [349.23, 0.25], [392, 0.25]]; // <= 4
  const notes = [
    [523.25, 0.1875, 0.25],
    [698.46, 0.1875, 0.67],
    [1046.5, 0.1875, 1.0],
  ]; // <= 5
  const vco = context.createOscillator();
  vco.type = 'triangle';

  vco.start(0);

  const vca = context.createGain();

  vca.gain.value = 1;

  vco.connect(vca).connect(context.destination);

  let time = context.currentTime;

  for (let i = 0; i < notes.length; i++) {
    // 120 bpm = 1 beat every 0.5 seconds
    const secondsPerBeat = 0.5;
    const [note, noteLength, volume] = notes[i];
    vca.gain.setValueAtTime(volume, time);
    vco.frequency.setValueAtTime(note, time);
    time = time + secondsPerBeat * noteLength;
  }

  vca.gain.setValueAtTime(0, time);
  vco.stop(time);
}

export const doneSoundName = 'done';
export const doneSound: SoundTuple = [
  doneSoundName,
  {
    play: donedid,
  },
];
