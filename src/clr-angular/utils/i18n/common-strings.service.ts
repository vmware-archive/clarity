/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { SkipSelf, Optional, InjectableProvider, forwardRef } from '@angular/core';

import { ClrCommonStrings } from './common-strings.interface';

// @TODO Put the Required type back in when our minimumly supported version of Angular uses
// TS 2.8 or greater (should be Angular 7)
// export class ClrCommonStringsService implements Required<ClrCommonStrings> {
export class ClrCommonStringsService implements ClrCommonStrings {
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

export const COMMON_STRINGS_PROVIDER: InjectableProvider = {
  useFactory: commonStringsFactory,
  // We have a circular dependency for now, we can address it later once these
  // tree-shakeable providers have proper documentation.
  deps: [[new Optional(), new SkipSelf(), forwardRef(() => ClrCommonStrings)]],
};
