/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { existsIn, existsInWindow } from './exists';

describe('Functional Helper: ', () => {
  describe('existsInWindow(): ', () => {
    beforeEach(() => {
      (window as any).test = {
        levelOne: {
          levelTwo: {
            levelThree: {
              notTrue: false,
            },
          },
        },
      };
    });

    it('works shallowly', () => {
      expect(existsInWindow(['test'])).toEqual(true);
    });

    it('works deeply', () => {
      expect(existsInWindow(['test', 'levelOne', 'levelTwo', 'levelThree'])).toEqual(true);
    });

    it('returns false shallowly', () => {
      expect(existsInWindow(['notThere'])).toEqual(false);
    });

    it('returns false deeply', () => {
      expect(existsInWindow(['test', 'levelOne', 'levelTwo', 'levelThree', 'jabberwocky'])).toEqual(false);
    });
  });

  describe('existsIn(): ', () => {
    const myTestObject = {
      levelOne: {
        levelTwo: {
          levelThree: {
            notTrue: false,
            notStrung: '',
            nullified: null,
            notDefined: undefined,
          },
        },
      },
    };

    it('is curried', () => {
      expect(existsIn(['levelOne'])(myTestObject)).toEqual(true);
    });

    it('works shallowly', () => {
      expect(existsIn(['levelOne'], myTestObject)).toEqual(true);
    });

    it('works deeply', () => {
      expect(existsIn(['levelOne', 'levelTwo', 'levelThree'], myTestObject)).toEqual(true);
    });

    it('returns false shallowly', () => {
      expect(existsIn(['nope'], myTestObject)).toEqual(false);
    });

    it('returns false deeply', () => {
      expect(existsIn(['levelOne', 'levelTwo', 'levelThree', 'jabberwocky'], myTestObject)).toEqual(false);
    });

    it('works with false properties', () => {
      expect(existsIn(['levelOne', 'levelTwo', 'levelThree', 'notTrue'], myTestObject)).toEqual(true);
    });

    it('works with falsy strings', () => {
      expect(existsIn(['levelOne', 'levelTwo', 'levelThree', 'notStrung'], myTestObject)).toEqual(true);
    });

    it('works with null values', () => {
      expect(existsIn(['levelOne', 'levelTwo', 'levelThree', 'nullified'], myTestObject)).toEqual(true);
    });

    it('returns false on undefined properties', () => {
      expect(existsIn(['levelOne', 'levelTwo', 'notDefined'], myTestObject)).toEqual(false);
    });

    it('returns false shallowly', () => {
      expect(existsIn(['notDefined'], myTestObject)).toEqual(false);
    });
  });
});
