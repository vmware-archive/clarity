/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { VerticalNavGroupRegistrationService } from './vertical-nav-group-registration.service';

export default function(): void {
  describe('Vertical Nav Group Registration Service', function() {
    let vertNavGroupService: VerticalNavGroupRegistrationService;

    function registerGroups() {
      vertNavGroupService.registerNavGroup();
      vertNavGroupService.registerNavGroup();
      vertNavGroupService.registerNavGroup();
    }

    beforeEach(() => {
      vertNavGroupService = new VerticalNavGroupRegistrationService();
    });

    afterEach(() => {
      vertNavGroupService = null;
    });

    it('supports registration of nav groups', () => {
      expect(vertNavGroupService.navGroupCount).toBe(0);

      vertNavGroupService.registerNavGroup();

      expect(vertNavGroupService.navGroupCount).toBe(1);

      vertNavGroupService.registerNavGroup();

      expect(vertNavGroupService.navGroupCount).toBe(2);

      vertNavGroupService.registerNavGroup();

      expect(vertNavGroupService.navGroupCount).toBe(3);
    });

    it('supports unregisration of icons', () => {
      registerGroups();

      expect(vertNavGroupService.navGroupCount).toBe(3);

      vertNavGroupService.unregisterNavGroup();

      expect(vertNavGroupService.navGroupCount).toBe(2);

      vertNavGroupService.unregisterNavGroup();

      expect(vertNavGroupService.navGroupCount).toBe(1);

      vertNavGroupService.unregisterNavGroup();

      expect(vertNavGroupService.navGroupCount).toBe(0);
    });
  });
}
