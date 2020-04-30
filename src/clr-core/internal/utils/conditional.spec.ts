/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { returnOrFallthrough } from './conditional.js';

describe('Conditional Helper: ', () => {
  describe('returnOrFallthrough() ', () => {
    let conditions: any[];
    let fallthrough: any;
    it('executes the first function where condition is true', () => {
      conditions = [
        [false, () => 1],
        [true, () => 2],
        [true, () => 3],
      ];
      fallthrough = () => 4;

      expect(returnOrFallthrough(conditions, fallthrough)).toEqual(2);
    });

    it('executes the fallthrough function if no conditions are true', () => {
      conditions = [
        [false, () => 1],
        [false, () => 2],
        [false, () => 3],
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
