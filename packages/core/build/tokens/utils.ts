/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export interface CdsTheme {
  global: {
    layout: Tokens;
    space: Tokens;
    color: Tokens;
    typography: Tokens;
  };
  aliases: Tokens;
}

export interface Tokens {
  [key: string]: Token | Tokens;
}

export function token(value, config: any = {}) {
  return new Token(value, config);
}

export class Token {
  name: string;

  constructor(public value, public config: { absolute?: boolean } = {}) {}

  toJSON() {
    if (this.value instanceof Token) {
      return { value: this.value.value, alias: this.value.name };
    } else {
      return { value: this.value };
    }
  }
}

// element-[state]-[part]-property-(hover|focus|active)
