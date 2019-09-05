/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { exists } from './exists';

describe('Functional Helper: ', () => {
  describe('exists() ', () => {
    beforeEach(function() {
      (window as any).test = {
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
    });

    it('works shallowly', () => {
      expect(exists(window)).toEqual(true);
    });

    it('works deeply', () => {
      expect(exists((window as any).test, 'levelOne', 'levelTwo', 'levelThree')).toEqual(true);
    });

    it('works with false properties', () => {
      expect(exists((window as any).test, 'levelOne', 'levelTwo', 'levelThree', 'notTrue')).toEqual(true);
    });

    it('works with falsy strings', () => {
      expect(exists((window as any).test, 'levelOne', 'levelTwo', 'levelThree', 'notStrung')).toEqual(true);
    });

    it('works with null values', () => {
      expect(exists((window as any).test, 'levelOne', 'levelTwo', 'levelThree', 'nullified')).toEqual(true);
    });

    it('returns false on undefined properties', () => {
      expect(exists((window as any).test, 'levelOne', 'levelTwo', 'levelThree', 'notDefined')).toEqual(false);
    });

    it('returns false shallowly', () => {
      const notDefined = undefined;
      expect(exists(notDefined)).toEqual(false);
    });

    it('returns false deeply', () => {
      expect(exists((window as any).test, 'levelOne', 'levelTwo', 'levelThree', 'jabberwocky')).toEqual(false);
    });
  });
});
