/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { async } from '@angular/core/testing';

import { TestContext } from './helpers.spec';
import { ClrDatagridDetail } from './datagrid-detail';
import { DetailService } from './providers/detail.service';
import { createKeyboardEvent } from '../../forms/datepicker/utils/test-utils';
import { ESC } from '../../utils/key-codes/key-codes';

const content = 'Detail Pane';

export default function(): void {
  describe('ClrDatagridDetail component', function() {
    describe('Typescript API', function() {
      let context: TestContext<ClrDatagridDetail, FullTest>;
      let detailService: DetailService;

      beforeEach(function() {
        context = this.create(ClrDatagridDetail, FullTest, [DetailService]);
        detailService = context.getClarityProvider(DetailService);
        context.detectChanges();
      });

      it('should close and hide content', () => {
        detailService.open({});
        context.detectChanges();
        expect(context.clarityElement.innerHTML).toContain(content);
        detailService.close();
        context.detectChanges();
        expect(context.clarityElement.innerHTML).not.toContain(content);
      });

      it('should wire up host bindings', () => {
        expect(context.clarityElement.className).toContain('datagrid-detail-pane');
      });
    });

    describe('View', function() {
      let context: TestContext<ClrDatagridDetail, FullTest>;
      let detailService: DetailService;

      beforeEach(function() {
        context = this.create(ClrDatagridDetail, FullTest, [DetailService]);
        detailService = context.getClarityProvider(DetailService);
        context.detectChanges();
      });

      it('projects content into the detail pane when open', () => {
        expect(context.clarityElement.innerHTML).not.toContain(content);
        detailService.open({});
        context.detectChanges();
        expect(context.clarityElement.innerHTML).toContain(content);
        detailService.close();
        context.detectChanges();
        expect(context.clarityElement.innerHTML).not.toContain(content);
      });

      it('hides content with the esc key', async(() => {
        spyOn(detailService, 'close');
        detailService.open({});
        context.detectChanges();
        expect(context.clarityElement.innerHTML).toContain(content);
        document.dispatchEvent(createKeyboardEvent(ESC, 'keydown'));
        context.detectChanges();
        expect(detailService.close).toHaveBeenCalled();
      }));

      it('conditionally enables focus trap when opened', () => {
        expect(context.clarityElement.innerHTML).not.toContain('clrfocustrap');
        detailService.open({});
        context.detectChanges();
        expect(context.clarityElement.innerHTML).toContain('clrfocustrap');
        detailService.close();
        context.detectChanges();
        expect(context.clarityElement.innerHTML).not.toContain('clrfocustrap');
      });
    });
  });
}

@Component({
  template: `<clr-dg-detail>${content}</clr-dg-detail>`,
})
class FullTest {}
