/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

function removeNonDigitOrDots(text: string): string {
  return text.replace(/[^\d.]/g, '');
}

export function compareVersions(first: string, second: string): 0 | 1 | -1 {
  first = removeNonDigitOrDots(first);
  second = removeNonDigitOrDots(second);

  const firstDigits = first.split('.');
  const secondDigits = second.split('.');

  for (let i = 0; i < 3; i += 1) {
    const firstDigit = Number(firstDigits[i]);
    const secondDigit = Number(secondDigits[i]);
    if (firstDigit > secondDigit) {
      return 1;
    } else if (secondDigit > firstDigit) {
      return -1;
    }
  }

  return 0;
}
