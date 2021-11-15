import '@cds/core/button/register';
import '../dist/src/counter/register.js';

const counter = document.querySelector('cda-counter');
const currentCount = document.querySelector('#current-count');

const successButton = document.querySelector('#success');
const errorButton = document.querySelector('#error');
const questionButton = document.querySelector('#question');
const eventButton = document.querySelector('#event');

successButton.addEventListener('click', () => {
  playAudio('success');
});
errorButton.addEventListener('click', () => {
  playAudio('error');
});
questionButton.addEventListener('click', () => {
  playAudio('question');
});
eventButton.addEventListener('click', () => {
  playAudio('event');
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-typ

window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const success = 1000;
const error = 99;
const question = 461.63;
const event = 6500;

function playAudio(sound) {
  console.log('sounding: ', sound);
  const osc = audioCtx.createOscillator();
  osc.type = 'sine';

  switch (sound) {
    case 'success':
      osc.frequency.value = success;
      break;
    case 'error':
      osc.frequency.value = error;
      break;
    case 'question':
      osc.frequency.value = question;
      break;
    case 'event':
      osc.frequency.value = event;
      break;
    default:
  }

  const volume = audioCtx.createGain();
  volume.gain.value = 0.1; // 10% volume
  osc.connect(volume);

  osc.start(0);
  // volume.gain.exponentialRampToValueAtTime(1, audioCtx.currentTime + 0.5);
  osc.connect(audioCtx.destination);
  osc.stop(audioCtx.currentTime + 0.5);
}
