/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { TestContext } from '../../data/datagrid/helpers.spec';

import { ClrCombobox } from './combobox';
import { ClrOptions } from './options';
import { ClrOption } from './option';

@Component({
  template: `
        <clr-combobox>
            <clr-options class="test">
                Test
            </clr-options>
        </clr-combobox>
    `,
})
class TestSelectWithMenu {}

export default function(): void {
  describe('Select with Menu', () => {
    let context: TestContext<ClrCombobox<string>, TestSelectWithMenu>;

    beforeEach(function() {
      context = this.create(ClrCombobox, TestSelectWithMenu, [], [ClrCombobox, ClrOptions, ClrOption]);
    });

    it('renders the menu projected by the consumer', () => {
      const menus = context.clarityElement.querySelectorAll('clr-options');
      expect(menus.length).toBe(1);
      expect(menus[0].classList.contains('test')).toBe(true);
    });
  });
}
