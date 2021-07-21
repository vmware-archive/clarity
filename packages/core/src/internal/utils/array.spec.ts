/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  arrayHead,
  arrayTail,
  arrayToObject,
  nextInArray,
  previousInArray,
  arrayRemoveFirstInstance,
  arrayRemoveLastInstance,
  arrayRemoveAllInstances,
  groupArray,
} from './array.js';

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

  describe('arrayRemoveFirstInstance: ', () => {
    it('handles empty arrays', () => {
      expect(arrayRemoveFirstInstance(1, [])).toEqual([]);
    });
    it('removes first instance of value as expected', () => {
      const testMe = [1, 2, 3, 1, 2, 3, 1, 2, 3];
      expect(arrayRemoveFirstInstance(1, testMe)).toEqual([2, 3, 1, 2, 3, 1, 2, 3], '1 of 2');
      expect(arrayRemoveFirstInstance(3, testMe)).toEqual([1, 2, 1, 2, 3, 1, 2, 3], '2 of 2');
    });
    xit('does not mutate array', () => {
      const orig = ['a', 'b', 'c', 'd'];
      const modded = arrayRemoveFirstInstance('c', orig);
      expect(modded).toEqual(['a', 'b', 'd'], 'instance removed');
      expect(orig).toEqual(['a', 'b', 'c', 'd'], 'original unchanged');
    });
  });

  describe('arrayRemoveLastInstance: ', () => {
    it('handles empty arrays', () => {
      expect(arrayRemoveLastInstance(1, [])).toEqual([]);
    });
    it('removes last instance of value as expected', () => {
      const testMe = ['elmo', 'abby', 'cookie', 'grover', 'elmo', 'abby', 'cookie', 'grover'];
      expect(arrayRemoveLastInstance('cookie', testMe)).toEqual(
        ['elmo', 'abby', 'cookie', 'grover', 'elmo', 'abby', 'grover'],
        '1 of 3'
      );
      expect(arrayRemoveLastInstance('grover', testMe)).toEqual(
        ['elmo', 'abby', 'cookie', 'grover', 'elmo', 'abby', 'cookie'],
        '2 of 3'
      );
      expect(arrayRemoveLastInstance('elmo', testMe)).toEqual(
        ['elmo', 'abby', 'cookie', 'grover', 'abby', 'cookie', 'grover'],
        '3 of 3'
      );
    });
    it('does not mutate array', () => {
      const orig = ['a', 'b', 'a', 'b', 'a', 'b'];
      const modded = arrayRemoveLastInstance('a', orig);
      expect(modded).toEqual(['a', 'b', 'a', 'b', 'b'], 'instance removed');
      expect(orig).toEqual(['a', 'b', 'a', 'b', 'a', 'b'], 'original unchanged');
    });
  });

  describe('arrayRemoveAllInstances: ', () => {
    it('handles empty arrays', () => {
      expect(arrayRemoveAllInstances(2, [])).toEqual([]);
    });
    it('removes all instances of value as expected', () => {
      const testMe = ['elmo', 'abby', 'elmo', 'elmo', 'elmo', 'grover', 'cookie', 'cookie'];
      expect(arrayRemoveAllInstances('cookie', testMe)).toEqual(
        ['elmo', 'abby', 'elmo', 'elmo', 'elmo', 'grover'],
        '1 of 3'
      );
      expect(arrayRemoveAllInstances('elmo', testMe)).toEqual(['abby', 'grover', 'cookie', 'cookie'], '2 of 3');
      expect(arrayRemoveAllInstances(['elmo', 'cookie'], testMe)).toEqual(['abby', 'grover'], '3 of 3');
    });
    it('does not mutate array', () => {
      const orig = ['a', 'b', 'a', 'c', 'b', 'a', 'b'];
      const modded = arrayRemoveAllInstances(['b', 'a'], orig);
      expect(modded).toEqual(['c'], 'instance removed');
      expect(orig).toEqual(['a', 'b', 'a', 'c', 'b', 'a', 'b'], 'original unchanged');
    });
  });

  describe('groupArray: ', () => {
    it('splits an array into a given number of groups', () => {
      const groups = groupArray([1, 1, 1, 2, 2, 2, 3, 3, 3], 3);
      expect(groups.length).toEqual(3);
      expect(groups[0].length).toEqual(3);
      expect(groups[1].length).toEqual(3);
      expect(groups[2].length).toEqual(3);
    });
  });
});
