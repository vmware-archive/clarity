/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { ClrDatagrid } from '../datagrid';
import { TestContext } from '../helpers.spec';
import { ExpandableRowsCount } from '../providers/global-expandable-rows';
import { DatagridIfExpandService } from '../datagrid-if-expanded.service';
import { DetailService } from '../providers/detail.service';
import { IfExpandService } from '../../../utils/conditional/if-expanded.service';
import { DatagridDetailRegisterer } from '../datagrid-detail-registerer';

export default function (): void {
  describe('DatagridDetailRegisterer directive', function () {
    let context: TestContext<ClrDatagrid<void>, FullTest>;

    beforeEach(function () {
      context = this.create(ClrDatagrid, FullTest, [
        ExpandableRowsCount,
        DatagridIfExpandService,
        DetailService,
        IfExpandService,
        DatagridDetailRegisterer,
      ]);
    });

    it('is present', function () {
      expect(context.getClarityProvider(DatagridDetailRegisterer)).toBeDefined();
    });
  });
}

// more of an integration test than anything else
@Component({
  template: `
    <clr-datagrid>
      <clr-dg-column>Col 1</clr-dg-column>
      <clr-dg-column>Col 2</clr-dg-column>

      <clr-dg-row>
        <clr-dg-cell>A</clr-dg-cell>
        <clr-dg-cell>B</clr-dg-cell>
        <clr-dg-row-detail *clrIfExpanded> Lorem ipsum...{{ user | json }} </clr-dg-row-detail>
      </clr-dg-row>

      <clr-dg-detail *clrIfDetail="let detail">
        <clr-dg-detail-header>ohai</clr-dg-detail-header>
        <clr-dg-detail-body>
          <p>ohai</p>
        </clr-dg-detail-body>
      </clr-dg-detail>

      <clr-dg-footer>1 row</clr-dg-footer>
    </clr-datagrid>
  `,
})
class FullTest {}
