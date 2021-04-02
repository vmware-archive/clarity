/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { AnimationResponsivePopupEnterConfig } from './cds-dropdown-open.js';

describe('Offset required: ', () => {
  describe('cds-dropdown-open', () => {
    it('includes expected offset', () => {
      const hostAnimation = AnimationResponsivePopupEnterConfig.filter(anim => anim.target === '.private-host');

      expect(hostAnimation.length > 0).toBe(true);
      expect((hostAnimation[0] as any).animation[1].offset).toBeDefined();
    });
  });
});
