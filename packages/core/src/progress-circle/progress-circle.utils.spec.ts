/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { getProgressCircleRadius } from './progress-circle.utils.js';

describe('progress circle helpers', () => {
  describe('getProgressCircleRadius:', () => {
    it('should default to viewBox size of 36', () => {
      expect(getProgressCircleRadius(3)).toBe(16);
      expect(getProgressCircleRadius(8)).toBe(14);
      expect(getProgressCircleRadius(1)).toBe(17);
    });
    it('should accept other viewBox sizes if needed', () => {
      expect(getProgressCircleRadius(3, 24)).toBe(10);
      expect(getProgressCircleRadius(8, 50)).toBe(21);
      expect(getProgressCircleRadius(1, 20)).toBe(9);
    });
  });
});
