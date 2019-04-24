/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { TestContext } from '../../utils/testing/helpers.spec';
import { ClrDatagrid } from './datagrid';
import { DATAGRID_SPEC_PROVIDERS } from './helpers.spec';

@Component({
  template: `
    <clr-tabs>
      <clr-tab>
        <button clrTabLink id="link1">Tab1</button>
        <clr-tab-content *clrIfActive>
          <clr-datagrid>
            <clr-dg-column [style.width.px]="123">Column1</clr-dg-column>
            <clr-dg-column>Column2</clr-dg-column>

            <clr-dg-row *clrDgItems="let item of items">
              <clr-dg-cell>{{item}}</clr-dg-cell>
              <clr-dg-cell></clr-dg-cell>
            </clr-dg-row>

          </clr-datagrid>
        </clr-tab-content>
      </clr-tab>
    </clr-tabs>
    `,
})
class IntegrationTest {
  items = Array(10).fill(0);
}

// Verifies issue #3273: https://github.com/vmware/clarity/issues/3273
export default function(): void {
  describe('ClrDatagrid and ClrTabs integration', function() {
    let context: TestContext<ClrDatagrid, IntegrationTest>;

    beforeEach(function() {
      context = this.create(ClrDatagrid, IntegrationTest, DATAGRID_SPEC_PROVIDERS);
    });

    // Tests that tab-content was already attached to DOM when datagrid column width calculation was completed.
    it('column width calculation has completed', function() {
      expect(context.clarityElement.querySelector('.datagrid-column').getAttribute('style')).not.toBe('width: 0px;');
    });

    // Tests if manual style="width: 123px" was applied and not overridden during the calculation from the above test.
    it('column width manual setting is applied', function() {
      expect(context.clarityElement.querySelector('.datagrid-column').clientWidth).toBe(123);
      expect(context.clarityElement.querySelector('.datagrid-column').getAttribute('style')).toBe('width: 123px;');
    });
  });
}
