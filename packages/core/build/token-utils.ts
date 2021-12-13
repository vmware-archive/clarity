/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export interface CdsTheme {
  internal: Tokens;
  global: {
    scale: Tokens;
    layout: Tokens;
    space: Tokens;
    color: Tokens;
    typography: Tokens;
    animation: Tokens;
    base: Token;
  };
  aliases: Tokens;
}

export interface Tokens {
  [key: string]: Token | Tokens;
}

export function token(value: any, config: TokenConfig = {}) {
  return new Token(value, config);
}

export type HSL = [number, number, number];

export interface TokenConfig {
  raw?: boolean; // generate token with no format type conversions (px to rem)
  static?: boolean; // generate secondary static variable (wont generate dynamice css var usefull for media queries, calc)
  scale?: Token; // set a token scale multiplier on numeric types
}

export class Token {
  name = '';
  private _value: Token | number | string | HSL;

  get value() {
    return this._value instanceof Token ? this._value.value : this._value;
  }

  get alias() {
    return this._value instanceof Token ? this._value : null;
  }

  constructor(value: Token | number | string | HSL, public config: TokenConfig = {}) {
    this._value = value;
  }

  toJSON() {
    if (this.alias) {
      return { value: this.value, alias: this.alias.name };
    } else {
      return { value: this.value };
    }
  }
}
