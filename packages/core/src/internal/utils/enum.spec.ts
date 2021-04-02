/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { getEnumValueFromStringKey } from './enum.js';
import { capitalizeFirstLetter } from './string.js';

enum TestNumericEnum {
  A = 1,
  B = 10,
  C = 100,
}

enum TestKeyTransformEnumOne {
  Alpha = 1,
  Bravo = 10,
  Charlie = 100,
}

enum TestStringEnum {
  A = 'ohai',
  B = 'kthxbye',
  C = 3000,
}

enum TestComputedEnum {
  A,
  B = 100,
  C = Math.pow(4, 2),
}

describe('Functional Helper: ', () => {
  describe('getEnumValueFromStringKey(): ', () => {
    describe(': defaults - ', () => {
      it('defaults to an empty string as a fallback', () => {
        expect(getEnumValueFromStringKey(TestNumericEnum, 'nil')).toBe('', 'handles non-found keys');
        expect(getEnumValueFromStringKey(TestNumericEnum, 'b')).toBe('', 'handles whoops keys');
      });

      it('handles bad key values', () => {
        expect(getEnumValueFromStringKey(TestNumericEnum, null)).toBe('', 'handles null');
        expect(getEnumValueFromStringKey(TestNumericEnum, void 0)).toBe('', 'handles undefined');
        expect(getEnumValueFromStringKey(TestNumericEnum, 'Z')).toBe('', 'handles keys that do not exist');
      });

      it('defaults to an identity key transform', () => {
        expect(getEnumValueFromStringKey(TestNumericEnum, 'b')).toBe('', 'does not transform by default (1 of 2)');
        expect(getEnumValueFromStringKey(TestNumericEnum, 'B')).toBe(10, 'does not transform by default (1 of 2)');
      });
    });

    describe(': returning values - ', () => {
      it('returns numeric values as expected', () => {
        expect(getEnumValueFromStringKey(TestNumericEnum, 'A')).toBe(1, 'returns as expected (1 of 2)');
        expect(getEnumValueFromStringKey(TestStringEnum, 'C')).toBe(3000, 'returns as expected (2 of 2)');
      });

      it('returns string values as expected', () => {
        expect(getEnumValueFromStringKey(TestStringEnum, 'A')).toBe('ohai', 'returns as expected');
      });

      it('returns computed values as expected', () => {
        expect(getEnumValueFromStringKey(TestComputedEnum, 'C')).toBe(16, 'returns as expected');
      });

      it('returns default values as expected', () => {
        expect(getEnumValueFromStringKey(TestComputedEnum, 'A')).toBe(0, 'returns as expected');
      });

      it('returns custom fallback value when key is not found', () => {
        expect(getEnumValueFromStringKey(TestComputedEnum, 'Z', k => k, 4949)).toBe(4949, 'returns numeric fallback');
        expect(getEnumValueFromStringKey(TestComputedEnum, 'Z', k => k, 'jabberwocky')).toBe(
          'jabberwocky',
          'returns string fallback too'
        );
      });
    });

    describe('key transforms - ', () => {
      it('transforms keys as expected', () => {
        const transformer = function (str: string) {
          return capitalizeFirstLetter(str.toLowerCase());
        };
        expect(getEnumValueFromStringKey(TestKeyTransformEnumOne, 'alpha', transformer)).toBe(
          1,
          'returns as expected (1 of 4)'
        );
        expect(getEnumValueFromStringKey(TestKeyTransformEnumOne, 'BRAVO', transformer)).toBe(
          10,
          'returns as expected (2 of 4)'
        );
        expect(getEnumValueFromStringKey(TestKeyTransformEnumOne, 'cHaRLie', transformer)).toBe(
          100,
          'returns as expected (3 of 4)'
        );
        expect(getEnumValueFromStringKey(TestKeyTransformEnumOne, 'dino', transformer, 'nope')).toBe(
          'nope',
          'returns as expected (4 of 4)'
        );
      });
    });
  });
});
