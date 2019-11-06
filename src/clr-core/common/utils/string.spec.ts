/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { transformToSpacedString, transformToString, transformToUnspacedString } from './string';

describe('Functional Helper: ', () => {
  function funcFactory(str: string): (x: number, y: number, z: number) => string {
    return (x: number, y: number, z: number) => (x + y + z > 9 ? str + '-High' : str + '-Low');
  }

  const tests = [funcFactory('A'), funcFactory('B'), funcFactory('C')];

  describe('transformToString(): ', () => {
    it('merges strings together from functions', () => {
      const expected = 'A-LowB-LowC-Low';
      expect(transformToString('', tests, 1, 1, 1)).toEqual(expected);
    });

    it('respects delimiter when set', () => {
      const expected = 'A-High///B-High///C-High';
      expect(transformToString('///', tests, 3, 5, 2)).toEqual(expected);
    });
  });

  describe('transformToSpacedString(): ', () => {
    it('contains spaces', () => {
      const expected = 'A-High B-High C-High';
      expect(transformToSpacedString(tests, 2, 7, 1)).toEqual(expected);
    });
  });

  describe('transformToUnspacedString(): ', () => {
    it('has no spaces in it', () => {
      expect(transformToUnspacedString(tests, 2, 7, 1).indexOf(' ') < 0).toEqual(true);
    });
  });
});
