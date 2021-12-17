/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  isNil,
  isNilOrEmpty,
  isNumericString,
  isTshirtSize,
  pxToRem,
  replaceWord,
  updateElementStyles,
  unsetElementStyles,
} from '@cds/core/internal';
import { CdsIcon } from '../icon.element.js';

export const enum SizeUpdateStrategies {
  BadSizeValue = 'bad-value',
  ValidSizeString = 'value-is-string',
  ValidNumericString = 'value-is-numeric',
  NilSizeValue = 'value-is-nil',
}

export function getUpdateSizeStrategy(size: string) {
  switch (true) {
    case isNilOrEmpty(size):
      return SizeUpdateStrategies.NilSizeValue;
    case isTshirtSize(size):
      return SizeUpdateStrategies.ValidSizeString;
    case isNumericString(size):
      return SizeUpdateStrategies.ValidNumericString;
    default:
      return SizeUpdateStrategies.BadSizeValue;
  }
}

export function getSizeValue(size: string) {
  return isNilOrEmpty(size) ? '' : replaceWord(size, 'fit');
}

export function getIconSizeStylesToUpdate(size: string, sizeValueInRem: string): [string, string][] {
  const isFitSized = isNil(size) ? false : size.indexOf('fit') > -1;
  if (isFitSized) {
    return [
      ['width', 'auto'],
      ['height', 'auto'],
      ['min-width', sizeValueInRem],
      ['min-height', sizeValueInRem],
    ];
  } else {
    return [
      ['width', sizeValueInRem],
      ['height', sizeValueInRem],
      ['min-width', sizeValueInRem],
      ['min-height', sizeValueInRem],
    ];
  }
}

export function updateIconSizeStyle(el: CdsIcon, size: string) {
  const updateStrategy = getUpdateSizeStrategy(getSizeValue(size));
  let val = '';

  switch (updateStrategy) {
    case SizeUpdateStrategies.ValidNumericString:
      val = pxToRem(parseInt(size)); // set val in block to run expensive call only when needed
      updateElementStyles(el, ...getIconSizeStylesToUpdate(size, val));
      return;
    case SizeUpdateStrategies.ValidSizeString:
      unsetElementStyles(el, 'width', 'height', 'min-width', 'min-height');
      return;
    case SizeUpdateStrategies.NilSizeValue: // nil values empty out all sizing
      unsetElementStyles(el, 'width', 'height', 'min-width', 'min-height');
      return;
    case SizeUpdateStrategies.BadSizeValue:
      // bad-value is ignored
      return;
    default:
      return;
  }
}
