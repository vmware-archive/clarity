/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { EssentialShapes } from '../clr-icons/shapes/essential-shapes';

describe('Deprecations', () => {
  describe('since v0.13, remove in 1.0', () => {
    it('should export deprecated icons', () => {
      expect(EssentialShapes.eye).toBeDefined();
      expect(EssentialShapes['eye-hide']).toBeDefined();
    });
  });
});
