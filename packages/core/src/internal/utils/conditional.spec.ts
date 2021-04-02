/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { anyPassOrAnyFail, returnOrFallthrough } from './conditional.js';
type BoolFn = () => boolean;

describe('Conditional Helper: ', () => {
  describe('anyPassOrAnyFail(): ', () => {
    let truths: BoolFn[];
    let untruths: BoolFn[];

    beforeEach(() => {
      truths = [() => true];

      untruths = [() => false];
    });

    describe('returns that some failed, regardless of `fallthrough`', () => {
      it('returns that any failed', () => {
        truths = [() => false];

        untruths = [() => true];

        expect(anyPassOrAnyFail(truths, untruths, true)).toBe(false);
      });

      it('returns that any failed, regardless of `fallthrough`', () => {
        truths = [() => false];

        untruths = [() => true];

        expect(anyPassOrAnyFail(truths, untruths, false)).toBe(false);
      });
    });

    describe('returns some passed', () => {
      it('returns that any passes', () => {
        expect(anyPassOrAnyFail(truths, untruths, true)).toBe(true);
      });

      it('returns that any passes', () => {
        untruths = [() => true];

        expect(anyPassOrAnyFail(truths, untruths, false)).toBe(true);
      });
    });

    it('nothing passed neither failed, assume everything passes', () => {
      truths = [() => false];

      expect(anyPassOrAnyFail(truths, untruths, true)).toBe(true);
    });

    it('nothing passed neither failed, assume everything failed', () => {
      truths = [() => false];

      expect(anyPassOrAnyFail(truths, untruths, false)).toBe(false);
    });

    it('should return fallthrough value', () => {
      expect(anyPassOrAnyFail([], [], true)).toBe(true);
    });
  });

  describe('returnOrFallthrough() ', () => {
    let conditions: any[];
    let fallthrough: any;
    it('executes the first function where condition is true', () => {
      conditions = [
        [() => false, () => 1],
        [() => true, () => 2],
        [() => true, () => 3],
      ];
      fallthrough = () => 4;

      expect(returnOrFallthrough(conditions, fallthrough)).toEqual(2);
    });

    it('executes the fallthrough function if no conditions are true', () => {
      conditions = [
        [() => false, () => 1],
        [() => false, () => 2],
        [() => false, () => 3],
      ];
      fallthrough = () => 4;

      expect(returnOrFallthrough(conditions, fallthrough)).toEqual(4);
    });

    it('executes the fallthrough function if no conditions are passed in', () => {
      conditions = [];
      fallthrough = () => 4;

      expect(returnOrFallthrough(conditions, fallthrough)).toEqual(4);
    });
  });
});
