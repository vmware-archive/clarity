/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { HTMLAttributeTuple, isNilOrEmpty } from '@cds/core/internal';

// note: these may be of more general use with progress bars in general; perhaps promote them at some point???

// 36 is the default viewbox dimensions
export function getProgressCircleRadius(lineThickness: number, viewboxDimension = 36) {
  // we need to keep this so that circular-progress remains aligned with our icons
  // we shouldn't change it unless we change the default viewbox of the icons!
  const halfOfViewbox = viewboxDimension / 2;

  // line offset takes the width/thickness of the progress circle into account
  const lineOffset = Math.ceil(lineThickness / 2);

  return halfOfViewbox - lineOffset;
}

// TODO: once the global i18n templating from the datagrid is merged in, pretty much all
// of this code and a good chunk of code in progress-circle.element.ts can go away
export function getAriaLabelFromTemplate(currentValue: number, loadingi18n: string, forceToValue?: number) {
  const value = isNilOrEmpty(forceToValue) ? currentValue : forceToValue;
  // this default will be overrideable once the datagrid enhancements to i18n are in
  return `${loadingi18n} ${value}%`;
}

export function getDefaultAriaLabel(currentValue: number | undefined | null, loadingi18n: string, loopingMsg: string) {
  if (isNilOrEmpty(currentValue)) {
    return loopingMsg;
  } else {
    return getAriaLabelFromTemplate(currentValue as number, loadingi18n);
  }
}

export function getAriaLabelOrDefault(
  existingAriaLabel: string,
  currentValue: number,
  loadingi18n: string,
  loopingMsg: string,
  previousValue?: number
) {
  switch (true) {
    case !existingAriaLabel:
      return getDefaultAriaLabel(currentValue, loadingi18n, loopingMsg);
    case previousValue && existingAriaLabel === getAriaLabelFromTemplate(currentValue, loadingi18n, previousValue):
      return getDefaultAriaLabel(currentValue, loadingi18n, loopingMsg);
    default:
      return existingAriaLabel;
  }
}

export function getProgressCircleAriaAttributes(
  currentValue: number | undefined | null,
  ariaLabel: string
): HTMLAttributeTuple[] {
  if (isNilOrEmpty(currentValue)) {
    // no value so return aria attrs of the looping progress circle
    return [
      ['role', 'img'],
      ['aria-valuemin', false],
      ['aria-valuemax', false],
      ['aria-valuenow', false],
      ['aria-label', ariaLabel],
    ];
  } else {
    // if the progress has a value, then we return as if we expect it to be incrementing
    return [
      ['role', 'progressbar'],
      ['aria-valuemin', '0'],
      ['aria-valuemax', '100'],
      ['aria-valuenow', currentValue + ''],
      ['aria-label', ariaLabel],
    ];
  }
}
