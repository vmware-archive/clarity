/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ɵivyEnabled as ivyEnabled } from '@angular/core';
import { ifIvyEnabled } from './if-ivy-enabled';

const dummyCallback = () => {
  throw new Error('Ivy is enabled');
};

describe('Utilitiy helper for Ivy', () => {
  it('should call callback when ivy is enabled', () => {
    if (ivyEnabled) {
      expect(() => ifIvyEnabled(dummyCallback)).toThrow();
    } else {
      expect(() => ifIvyEnabled(dummyCallback)).not.toThrow();
    }
  });
});
