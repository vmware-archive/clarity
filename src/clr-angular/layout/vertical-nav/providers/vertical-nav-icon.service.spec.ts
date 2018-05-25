/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { VerticalNavIconService } from './vertical-nav-icon.service';

export default function(): void {
  describe('Vertical Nav Icon Service', function() {
    let vertNavService: VerticalNavIconService;

    beforeEach(() => {
      vertNavService = new VerticalNavIconService();
    });

    afterEach(() => {
      vertNavService = null;
    });

    it('supports registration of icons', () => {
      expect(vertNavService.hasIcons).toBe(false);

      vertNavService.registerIcon();

      expect(vertNavService.hasIcons).toBe(true);
    });

    it('supports unregisration of icons', () => {
      expect(vertNavService.hasIcons).toBe(false);

      vertNavService.registerIcon();

      expect(vertNavService.hasIcons).toBe(true);

      vertNavService.unregisterIcon();

      expect(vertNavService.hasIcons).toBe(false);
    });
  });
}
