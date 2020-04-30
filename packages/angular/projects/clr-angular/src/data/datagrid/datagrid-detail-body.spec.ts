/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { TestContext } from './helpers.spec';
import { ClrDatagridDetailBody } from './datagrid-detail-body';

const content = 'Detail Pane';

export default function (): void {
  describe('ClrDatagridDetailBody component', function () {
    describe('View', function () {
      let context: TestContext<ClrDatagridDetailBody, FullTest>;

      beforeEach(function () {
        context = this.create(ClrDatagridDetailBody, FullTest);
        context.detectChanges();
      });

      it('should wire up host bindings', () => {
        expect(context.clarityElement.className).toContain('datagrid-detail-body');
      });

      it('projects content into the detail pane ', () => {
        expect(context.clarityElement.innerHTML).toContain(content);
      });
    });
  });
}

@Component({
  template: `<clr-dg-detail-body>${content}</clr-dg-detail-body>`,
})
class FullTest {}
