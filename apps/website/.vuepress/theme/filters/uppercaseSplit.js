import Vue from 'vue';

export const uppercaseSplit = function (value) {
  if (!value) {
    return '';
  }

  const chars = value.split('');

  let currentWordIndex = 0;
  const words = [''];

  chars.forEach(char => {
    if (char.toUpperCase() === char) {
      currentWordIndex += 1;
      words[currentWordIndex] = '';
    }

    if (currentWordIndex > 0) {
      words[currentWordIndex] = words[currentWordIndex] + char.toLowerCase();
      return;
    }

    if (currentWordIndex > -1) {
      words[currentWordIndex] = words[currentWordIndex] + char;
      return;
    }
  });

  return words.map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
};

Vue.filter('uppercaseSplit', uppercaseSplit);
