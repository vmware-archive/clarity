/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Directive } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { spec, TestContext } from '../../utils/testing/helpers.spec';
import { ClrDatagridModule } from './datagrid.module';
import { ClrDatagridPagination } from './datagrid-pagination';
import { Page } from './providers/page';

@Component({
  template: `
    <clr-datagrid>
      <clr-dg-column>Column</clr-dg-column>

      <clr-dg-row *clrDgItems="let item of items" instantiationCounter>
        <clr-dg-cell>{{ item }}</clr-dg-cell>
      </clr-dg-row>

      <clr-dg-footer>
        <clr-dg-pagination [clrDgPageSize]="20"></clr-dg-pagination>
      </clr-dg-footer>
    </clr-datagrid>
  `,
})
class IntegrationTest {
  items = Array(100).fill(0);
}

/**
 * We cannot spy on constructors in Typescript, so this tricks allows us to count the number
 * of rows instantiated during a test.
 */
@Directive({
  selector: '[instantiationCounter]',
})
class InstantiationCounter {
  static total = 0;

  constructor() {
    InstantiationCounter.total++;
  }
}

export default function (): void {
  describe('ClrDatagridPagination component integration', function () {
    type Context = TestContext<ClrDatagridPagination, IntegrationTest>;

    spec(
      ClrDatagridPagination,
      IntegrationTest,
      ClrDatagridModule,
      { declarations: [InstantiationCounter], imports: [NoopAnimationsModule] },
      false
    );

    it('sets the page size a single time on initialization', function (this: Context) {
      const spy = spyOnProperty(Page.prototype, 'size', 'set').and.callThrough();
      this.init();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(20);
    });

    it('only instantiates rows that need to be displayed', function (this: Context) {
      InstantiationCounter.total = 0;
      this.init();
      expect(InstantiationCounter.total).toBe(20);
    });
  });
}
