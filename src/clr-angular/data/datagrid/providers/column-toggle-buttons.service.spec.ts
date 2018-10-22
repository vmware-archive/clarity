/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ColumnToggleButtonsService } from './column-toggle-buttons.service';

export default function(): void {
  describe('ColumnToggleButtons provider', function() {
    let service: ColumnToggleButtonsService;

    beforeEach(function() {
      service = new ColumnToggleButtonsService();
    });

    it('should have expected properties', function() {
      expect(service.buttons).toBeNull();
      expect(service.selectAllDisabled).toBe(false);
      expect(service.selectAllButtonClicked.subscribe).toBeDefined();
    });

    it('should emit clicks', function() {
      let calls = 0;
      service.selectAllButtonClicked.subscribe(() => {
        calls++;
      });

      service.buttonClicked();
      expect(calls).toEqual(1);
    });
  });
}
