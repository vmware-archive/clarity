/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, SkipSelf, Optional } from '@angular/core';

import { ClrCommonStrings } from './common-strings.interface';

@Injectable()
export class ClrCommonStringsService implements Required<ClrCommonStrings> {
  open = 'Open';
  close = 'Close';
  show = 'Show';
  hide = 'Hide';
  expand = 'Expand';
  collapse = 'Collapse';
  more = 'More';
  select = 'Select';
  selectAll = 'Select All';
  previous = 'Previous';
  next = 'Next';
  current = 'Jump to current';
  info = 'Info';
  success = 'Success';
  warning = 'Warning';
  danger = 'Error';
  rowActions = 'Available actions';
  pickColumns = 'Show or hide columns';
}

export function commonStringsFactory(existing?: ClrCommonStrings): ClrCommonStrings {
  const defaults = new ClrCommonStringsService();
  if (existing) {
    return { ...defaults, ...existing };
  }
  return defaults;
}

export const COMMON_STRINGS_PROVIDER = {
  provide: ClrCommonStrings,
  useFactory: commonStringsFactory,
  deps: [[new Optional(), new SkipSelf(), ClrCommonStrings]],
};
