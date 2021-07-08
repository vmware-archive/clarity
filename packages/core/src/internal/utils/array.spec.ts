/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { arrayHead, arrayTail, arrayToObject, nextInArray, previousInArray } from './array.js';

describe('array utils', () => {
  it('arrayToObject', () => {
    const obj = arrayToObject(
      [
        { id: 'one', value: 'value 1' },
        { id: 'two', value: 'value 2' },
        { id: 'three', value: 'value 3' },
      ],
      'id'
    );
    expect(obj.one.value).toBe('value 1');
    expect(obj.two.value).toBe('value 2');
    expect(obj.three.value).toBe('value 3');
  });

  describe('arrayHead: ', () => {
    it('returns undefined if array is empty', () => {
      expect(arrayHead([])).toBeUndefined();
    });
    it('returns head of array as expected', () => {
      expect(arrayHead([0, 1, 2, 3, 4, 5])).toBe(0);
    });
  });

  describe('arrayTail: ', () => {
    it('returns undefined if array is empty', () => {
      expect(arrayTail([])).toBeUndefined();
    });
    it('returns tail of array as expected', () => {
      expect(arrayTail([0, 1, 2, 3, 4, 5])).toBe(5);
    });
  });

  describe('previousInArray: ', () => {
    it('returns undefined if array is empty', () => {
      expect(previousInArray(1, [])).toBeUndefined();
    });

    it('returns undefined if current is not in array', () => {
      expect(previousInArray(6, [0, 1, 2, 3, 4, 5])).toBeUndefined();
    });

    it('returns first item of an array if there is no previous', () => {
      expect(previousInArray(0, [0, 1, 2, 3, 4, 5])).toBe(0);
    });

    it('returns previous item of an array as expected', () => {
      expect(previousInArray(3, [0, 1, 2, 3, 4, 5])).toBe(2);
    });
  });

  describe('nextInArray: ', () => {
    it('returns undefined if array is empty', () => {
      expect(nextInArray(1, [])).toBeUndefined();
    });

    it('returns undefined if current is not in array', () => {
      expect(nextInArray(6, [0, 1, 2, 3, 4, 5])).toBeUndefined();
    });

    it('returns last item of an array if there is no next', () => {
      expect(nextInArray(5, [0, 1, 2, 3, 4, 5])).toBe(5);
    });

    it('returns next item of an array as expected', () => {
      expect(nextInArray(3, [0, 1, 2, 3, 4, 5])).toBe(4);
    });
  });
});
