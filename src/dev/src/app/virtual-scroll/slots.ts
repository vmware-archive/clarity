/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const images = [
  'https://vignette.wikia.nocookie.net/fallout/images/2/2f/Slot_7.png',
  'https://vignette.wikia.nocookie.net/fallout/images/c/ca/Slot_Cherry.png',
  'https://vignette.wikia.nocookie.net/fallout/images/0/0f/Slot_Bell.png',
  'https://vignette.wikia.nocookie.net/fallout/images/c/c6/Slot_Bar.png',
  'https://vignette.wikia.nocookie.net/fallout/images/3/32/Slot_Lemon.png',
  'https://vignette.wikia.nocookie.net/fallout/images/b/b7/Slot_Grapes.png',
  'https://vignette.wikia.nocookie.net/fallout/images/f/f8/Slot_Orange.png',
];

const imagesIndices = [[6, 0, 1, 2, 3, 4, 5], [5, 0, 2, 4, 6, 1, 3], [4, 0, 3, 6, 2, 5, 1]];

export function slotGenerator(slot: number) {
  /*
     * Preferred solution, but doesn't work yet because Angular iterates over it.
     */
  // return function*() {
  //     let index = yield images[imagesIndices[slot][0]];
  //     while (true) {
  //         index = yield images[imagesIndices[slot][positiveModulo(index, 7)]];
  //     }
  // };

  return {
    get(index: number) {
      return images[imagesIndices[slot][positiveModulo(index, 7)]];
    },
  };
}

function positiveModulo(n: number, m: number) {
  return (n % m + m) % m;
}
