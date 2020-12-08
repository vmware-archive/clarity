/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isTshirtSize, updateElementStyles } from '@cds/core/internal';
import isNil from 'ramda/es/isNil';
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

  if (!isNaN(parseInt(size, 10))) {
    return SizeUpdateStrategies.ValidNumericString;
  }

  return SizeUpdateStrategies.BadSizeValue;
}

export function updateIconSizeStyle(el: CdsIcon, size: string) {
  const updateStrategy = getUpdateSizeStrategy(size);

  switch (updateStrategy) {
    case SizeUpdateStrategies.ValidNumericString:
      updateElementStyles(el, ['width', `${size}px`], ['height', `${size}px`]);
      return;
    case SizeUpdateStrategies.ValidSizeString:
      updateElementStyles(el, ['width', ''], ['height', '']);
      return;
    case SizeUpdateStrategies.NilSizeValue: // nil values empty out all sizing
      updateElementStyles(el, ['width', ''], ['height', '']);
      return;
    case SizeUpdateStrategies.BadSizeValue:
      // bad-value is ignored
      return;
    default:
      return;
  }
}
