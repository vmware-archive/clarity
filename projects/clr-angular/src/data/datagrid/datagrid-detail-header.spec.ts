/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { TestContext } from './helpers.spec';
import { DetailService } from './providers/detail.service';
import { ClrDatagridDetailHeader } from './datagrid-detail-header';

const content = 'Detail Pane';

export default function (): void {
  describe('ClrDatagridDetailHeader component', function () {
    describe('Typescript API', function () {
      let context: TestContext<ClrDatagridDetailHeader, FullTest>;

      beforeEach(function () {
        context = this.create(ClrDatagridDetailHeader, FullTest, [DetailService]);
        context.detectChanges();
      });

      it('should wire up host bindings', () => {
        expect(context.clarityElement.className).toContain('datagrid-detail-header');
      });
    });

    describe('View', function () {
      let context: TestContext<ClrDatagridDetailHeader, FullTest>;
      let detailService: DetailService;

      beforeEach(function () {
        context = this.create(ClrDatagridDetailHeader, FullTest, [DetailService]);
        detailService = context.getClarityProvider(DetailService);
        context.detectChanges();
      });

      it('projects content into the detail pane when open', () => {
        expect(context.clarityElement.innerHTML).toContain(content);
      });

      it('calls service when closing using close button', () => {
        spyOn(detailService, 'close');
        context.testElement.querySelector('.btn').click();
        context.detectChanges();
        expect(detailService.close).toHaveBeenCalled();
      });

      it(' -- titleId() should return formatted id', () => {
        const detailId = detailService.id;
        expect(context.testElement.querySelector('.datagrid-detail-header-title').id).toEqual(detailId + '-title');
      });
    });
  });
}

@Component({
  template: `<clr-dg-detail-header>${content}</clr-dg-detail-header>`,
})
class FullTest {}
