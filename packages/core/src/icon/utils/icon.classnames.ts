/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isTshirtSize, pxToRem, replaceWord, updateElementStyles, unsetElementStyles } from '@cds/core/internal';
import isNil from 'ramda/es/isNil.js'; // TODO: REPLACE WITH INTERNAL FN AFTER MERGING DROPDOWN BRANCH
import { CdsIcon } from '../icon.element.js';

export const enum SizeUpdateStrategies {
  BadSizeValue = 'bad-value',
  ValidSizeString = 'value-is-string',
  ValidNumericString = 'value-is-numeric',
  NilSizeValue = 'value-is-nil',
}

export function getUpdateSizeStrategy(size: string) {
  if (isNil(size) || size === '') {
    return SizeUpdateStrategies.NilSizeValue;
  }

  if (isTshirtSize(size)) {
    return SizeUpdateStrategies.ValidSizeString;
  }

  if (!isNaN(parseInt(size, 10)) && size.match(/^[0-9 ]+$/)) {
    return SizeUpdateStrategies.ValidNumericString;
  }

  return SizeUpdateStrategies.BadSizeValue;
}

export function getSizeValue(size: string) {
  return isNil(size) || size === '' ? '' : replaceWord(size, 'fit');
}

export function updateIconSizeStyle(el: CdsIcon, size: string) {
  const updateStrategy = getUpdateSizeStrategy(getSizeValue(size));
  const isFitSized = isNil(size) ? false : size.indexOf('fit') > -1;
  let val = '';

  switch (updateStrategy) {
    case SizeUpdateStrategies.ValidNumericString:
      val = pxToRem(parseInt(size)); // set val in block to run expensive call only when needed
      if (isFitSized) {
        updateElementStyles(el, ['width', 'auto'], ['height', 'auto'], ['min-width', val], ['min-height', val]);
      } else {
        updateElementStyles(el, ['width', val], ['height', val], ['min-width', val], ['min-height', val]);
      }
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
