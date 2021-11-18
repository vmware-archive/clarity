export function sweepFrequency(
  context: AudioContext,
  frequencyStart: number,
  frequencyEnd: number,
  duration: number,
  volume: number
): void {
  const osc1 = context.createOscillator(),
    volumeGain = context.createGain();
  osc1.type = 'sine';
  volumeGain.gain.value = volume;
  // routing the nodes
  osc1.connect(volumeGain);
  volumeGain.connect(context.destination);

  osc1.frequency.setValueAtTime(frequencyStart, context.currentTime);
  osc1.frequency.linearRampToValueAtTime(frequencyEnd, context.currentTime + duration);

  // Fade in
  volumeGain.gain.setValueAtTime(volume, context.currentTime + 0.05);
  volumeGain.gain.linearRampToValueAtTime(volume, context.currentTime);

  // Fade out
  // volumeGain.gain.setValueAtTime(.01, context.currentTime + duration - 0.05);
  volumeGain.gain.linearRampToValueAtTime(0, context.currentTime + duration);

  // Start oscillators
  osc1.start(context.currentTime);

  // Stop oscillators
  osc1.stop(context.currentTime + duration);
}

export function playSound(
  context: AudioContext,
  frequency: number,
  startTime: number,
  duration: number,
  volume: number,
  detune: number
): void {
  const osc1 = context.createOscillator(),
    volumeGain = context.createGain();

  osc1.type = 'sine';

  volumeGain.gain.value = volume;

  // routing the nodes
  osc1.connect(volumeGain);
  volumeGain.connect(context.destination);

  // Detune oscillators frequency for effect 'up' or 'down' if negative.
  osc1.frequency.value = frequency;
  osc1.detune.linearRampToValueAtTime(detune, startTime + duration);

  // Fade in
  volumeGain.gain.setValueAtTime(volume, startTime + 0.05);
  volumeGain.gain.linearRampToValueAtTime(volume, startTime);

  // Fade out
  // volumeGain.gain.setValueAtTime(.01, startTime + duration - 0.05);
  volumeGain.gain.linearRampToValueAtTime(0, startTime + duration);

  // Start oscillators
  osc1.start(context.currentTime);

  // Stop things
  osc1.stop(startTime + duration);
}

export function playNotes(context: AudioContext, notes: number[][], duration: number, volume: number): void {
  const osc = context.createOscillator();
  osc.type = 'sine';
  osc.start(context.currentTime);

  const vca = context.createGain();

  vca.gain.value = volume;

  osc.connect(vca).connect(context.destination);

  let time = context.currentTime;

  for (let i = 0; i < notes.length; i++) {
    // 120 bpm = 1 beat every 0.5 seconds
    const secondsPerBeat = duration / notes.length;
    const [note, noteLength, volume] = notes[i];
    vca.gain.setValueAtTime(volume, time);
    osc.frequency.setValueAtTime(note, time);
    time = time + secondsPerBeat * noteLength;
  }

  vca.gain.setValueAtTime(0, time);
  osc.stop(context.currentTime + duration);
}
