/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';

import { ClrCommonStrings } from './common-strings.interface';
import { commonStringsDefault } from './common-strings.default';

@Injectable({
  providedIn: 'root',
})
export class ClrCommonStringsService {
  private _strings = commonStringsDefault;

  /**
   * Allows you to pass in new overrides for localization
   */
  localize(overrides: ClrCommonStrings) {
    this._strings = { ...this._strings, ...overrides };
  }

  /**
   * Access to all of the keys as strings
   */
  get keys(): Readonly<ClrCommonStrings> {
    return this._strings;
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
