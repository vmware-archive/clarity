import '../dist/src/counter/register.js';

const counter = document.querySelector('cda-counter');
const currentCount = document.querySelector('#current-count');

counter.addEventListener('increment', () => updateCount(counter.value + 1));
counter.addEventListener('decrement', () => updateCount(counter.value - 1));

updateCount(0);

function updateCount(value) {
  counter.value = value;
  currentCount.textContent = value;
}
