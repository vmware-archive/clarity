/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { TestContext } from '../../data/datagrid/helpers.spec';

import { ClrCombobox } from './combobox';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';

@Component({
  template: `
    <clr-combobox>
      <clr-options class="test"> Test </clr-options>
    </clr-combobox>
  `,
})
class TestSelectWithMenu {}

export default function (): void {
  describe('Select with Menu', function () {
    let context: TestContext<ClrCombobox<string>, TestSelectWithMenu>;
    let toggleService: ClrPopoverToggleService;

    beforeEach(function () {
      context = this.create(ClrCombobox, TestSelectWithMenu, [], []);
      toggleService = context.getClarityProvider(ClrPopoverToggleService);
      toggleService.open = true;
      context.detectChanges();
    });

    afterEach(function () {
      toggleService.open = false;
      context.detectChanges();
    });

    it('renders the menu projected by the consumer', function () {
      const menus = document.body.querySelectorAll('clr-options');
      expect(menus.length).toBe(1);
      expect(menus[0].classList.contains('test')).toBe(true);
    });
  });
}
