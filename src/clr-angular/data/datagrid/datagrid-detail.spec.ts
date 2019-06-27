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
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';

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
        const event = new KeyboardEvent('keyup', { key: 'Escape' });
        document.dispatchEvent(event);
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

      it('should have text based boundaries for screen readers', () => {
        const commonStrings = context.getClarityProvider(ClrCommonStrings);
        detailService.open({});
        context.detectChanges();
        const messages = context.testElement.querySelectorAll('.clr-sr-only');
        expect(messages[0].innerText).toBe(commonStrings.detailPaneStart);
        expect(messages[1].innerText).toBe(commonStrings.detailPaneEnd);
      });
    });
  });
}

@Component({
  template: `<clr-dg-detail>${content}</clr-dg-detail>`,
})
class FullTest {}
