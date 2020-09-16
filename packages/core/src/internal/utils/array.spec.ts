/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { arrayTail, arrayToObject } from './array.js';

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

  describe('arrayTail: ', () => {
    it('returns undefined if array is empty', () => {
      expect(arrayTail([])).toBeUndefined();
    });
    it('returns tail of array as expected', () => {
      expect(arrayTail([0, 1, 2, 3, 4, 5])).toBe(5);
    });
  });
});
