/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { sleep } from './async.js';
import { createTestElement } from '@cds/core/test/utils';

describe('async utilities: ', () => {
  describe('sleep()', () => {
    it('should delay execution by a minimum time value', async () => {
      const timeToWait = 55;
      const startId = 'ohai';
      const endId = 'kthxbye';
      const element = await createTestElement();
      element.setAttribute('id', startId);
      const timer = setTimeout(() => {
        element.setAttribute('id', endId);
        clearTimeout(timer);
      }, timeToWait);
      expect(element.getAttribute('id')).toBe(startId);
      await sleep(timeToWait);
      expect(element.getAttribute('id')).not.toBe(startId);
      expect(element.getAttribute('id')).toBe(endId);
    });

    it('should default to 10ms if no time value is given', async () => {
      const timeToWait = 10;
      const startId = 'ohai';
      const endId = 'kthxbye';
      const element = await createTestElement();
      element.setAttribute('id', startId);
      const timer = setTimeout(() => {
        element.setAttribute('id', endId);
        clearTimeout(timer);
      }, timeToWait);
      expect(element.getAttribute('id')).toBe(startId);
      await sleep();
      expect(element.getAttribute('id')).not.toBe(startId);
      expect(element.getAttribute('id')).toBe(endId);
    });
  });
});
