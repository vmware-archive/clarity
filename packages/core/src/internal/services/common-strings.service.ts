/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { commonStringsDefault } from './common-strings.default.js';
import { ClrCommonStrings } from './common-strings.interface.js';

export class CommonStringsServiceInternal {
  /**
   * Access to all of the keys as strings
   */
  get keys(): Readonly<ClrCommonStrings> {
    return this.strings;
  }

  private strings = commonStringsDefault;

  /**
   * Allows you to pass in new overrides for localization
   */
  localize(overrides: Partial<ClrCommonStrings>) {
    this.strings = { ...this.strings, ...overrides };
  }

  /**
   * Parse a string with a set of tokens to replace
   */
  parse(source: string, tokens: { [key: string]: string } = {}) {
    const names = Object.keys(tokens);
    let output = source;
    if (names.length) {
      names.forEach(name => {
        output = output.replace(`{${name}}`, tokens[name]);
      });
    }
    return output;
  }
}

// typically for core we would use a Static class with a instance object but for
// clr-angular support we keep this a Class instance.
/**
 * I18n service for updating internalized component strings
 *
 * ```typescript
 * import { CommonStringsService } from '@cds/core';
 *
 * CommonStringsService.keys.success // 'success'
 * ```
 */
export const CommonStringsService = new CommonStringsServiceInternal();
