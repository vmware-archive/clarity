/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { ClrDatagridPagination } from './datagrid-pagination';
import { TestContext } from './helpers.spec';
import { Page } from './providers/page';
import { StateDebouncer } from './providers/state-debouncer.provider';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { DetailService } from './providers/detail.service';

export default function(): void {
  describe('ClrDatagridPagination component', function() {
    describe('Typescript API', function() {
      let pageService: Page;
      let component: ClrDatagridPagination;
      let commonStrings: ClrCommonStringsService;

      beforeEach(function() {
        pageService = new Page(new StateDebouncer());
        commonStrings = new ClrCommonStringsService();
        component = new ClrDatagridPagination(pageService, commonStrings, null);
        component.ngOnInit(); // For the subscription that will get destroyed.
      });

      afterEach(function() {
        component.ngOnDestroy();
      });

      it('sets the default page size to 10', function() {
        expect(pageService.size).toBe(10);
      });

      it("uses the page service's page size", function() {
        component.pageSize = 20;
        expect(pageService.size).toBe(20);
        pageService.size = 30;
        expect(component.pageSize).toBe(30);
      });

      it("uses the page service's total items", function() {
        component.totalItems = 20;
        expect(pageService.totalItems).toBe(20);
        pageService.totalItems = 30;
        expect(component.totalItems).toBe(30);
      });

      it("uses the page service's last page", function() {
        component.lastPage = 20;
        expect(pageService.last).toBe(20);
        pageService.last = 30;
        expect(component.lastPage).toBe(30);
      });

      it('offers a next() method that delegates to the page service', function() {
        spyOn(pageService, 'next');
        component.next();
        expect(pageService.next).toHaveBeenCalled();
      });

      it('offers a previous() method that delegates to the page service', function() {
        spyOn(pageService, 'previous');
        component.previous();
        expect(pageService.previous).toHaveBeenCalled();
      });

      it("uses the page service's first and last items", function() {
        pageService.size = 7;
        pageService.current = 42;
        expect(component.firstItem).toBe(pageService.firstItem);
        expect(component.lastItem).toBe(pageService.lastItem);
        pageService.totalItems = 0;
        expect(component.firstItem).toBe(-1);
        expect(component.lastItem).toBe(-1);
      });

      it('resets the page size to 0 when pagination is destroyed', () => {
        pageService.size = 7;
        component.ngOnDestroy();
        expect(pageService.size).toBe(0);
      });

      it('does not emit the changes on destroy', () => {
        spyOn(pageService, 'resetPageSize');
        pageService.size = 7;
        component.ngOnDestroy();
        expect(pageService.resetPageSize).toHaveBeenCalledWith(true);
      });
    });

    describe('Template API', function() {
      // Until we can properly type "this"
      let context: TestContext<ClrDatagridPagination, FullTest>;

      beforeEach(function(this: any) {
        context = this.create(ClrDatagridPagination, FullTest, [Page, DetailService, StateDebouncer]);
      });

      it('receives an input for page size', function() {
        context.testComponent.size = 42;
        context.detectChanges();
        expect(context.clarityDirective.pageSize).toBe(42);
      });

      it('receives an input for total number of items', function() {
        context.testComponent.total = 42;
        context.detectChanges();
        expect(context.clarityDirective.totalItems).toBe(42);
      });

      it('receives an input for last page', function() {
        context.testComponent.last = 42;
        context.detectChanges();
        expect(context.clarityDirective.lastPage).toBe(42);
      });

      it('offers two-way binding on the current page', function() {
        context.testComponent.current = 42;
        context.detectChanges();
        expect(context.clarityDirective.currentPage).toBe(42);
        context.clarityDirective.currentPage = 3;
        context.detectChanges();
        expect(context.testComponent.current).toBe(3);
      });

      it('disables the current page input', function() {
        context.testComponent.disableCurrentPageInput = true;
        context.detectChanges();
        expect(context.clarityDirective.disableCurrentPageInput).toBe(true);
      });

      it('enables the current page input', function() {
        context.testComponent.disableCurrentPageInput = false;
        context.detectChanges();
        expect(context.clarityDirective.disableCurrentPageInput).toBe(false);
      });
    });

    describe('View', function() {
      // Until we can properly type "this"
      let context: TestContext<ClrDatagridPagination, FullTest>;

      beforeEach(function(this: any) {
        context = this.create(ClrDatagridPagination, FullTest, [Page, DetailService, StateDebouncer]);
      });

      it("doesn't display anything if there is only one page", function() {
        context.testComponent.size = 10;
        context.testComponent.total = 10;
        context.detectChanges();
        expect(context.clarityElement.textContent.trim()).toBe('');
      });

      it('displays a next button', function() {
        context.testComponent.size = 10;
        context.testComponent.total = 100;
        context.testComponent.current = 1;
        context.detectChanges();
        const next = context.clarityElement.querySelector('.pagination-next');
        expect(next).not.toBeNull();
        next.click();
        context.detectChanges();
        expect(context.testComponent.current).toBe(2);
      });

      it('displays a last button', function() {
        context.testComponent.size = 10;
        context.testComponent.total = 100;
        context.testComponent.current = 1;
        context.detectChanges();
        const last = context.clarityElement.querySelector('.pagination-last');
        expect(last).not.toBeNull();
        last.click();
        context.detectChanges();
        expect(context.testComponent.current).toBe(10);
      });

      it('disables the next button on the last page', function() {
        context.testComponent.size = 10;
        context.testComponent.total = 100;
        context.testComponent.current = 10;
        context.detectChanges();
        expect(context.clarityElement.querySelector('.pagination-next:disabled')).not.toBeNull();
      });

      it('disables the last button on the last page', function() {
        context.testComponent.size = 10;
        context.testComponent.total = 100;
        context.testComponent.current = 10;
        context.detectChanges();
        expect(context.clarityElement.querySelector('.pagination-last:disabled')).not.toBeNull();
      });

      it('displays a previous button', function() {
        context.testComponent.size = 10;
        context.testComponent.total = 100;
        context.testComponent.current = 10;
        context.detectChanges();
        const previous = context.clarityElement.querySelector('.pagination-previous');
        expect(previous).not.toBeNull();
        previous.click();
        context.detectChanges();
        expect(context.testComponent.current).toBe(9);
      });

      it('displays a first button', function() {
        context.testComponent.size = 10;
        context.testComponent.total = 100;
        context.testComponent.current = 10;
        context.detectChanges();
        const first = context.clarityElement.querySelector('.pagination-first');
        expect(first).not.toBeNull();
        first.click();
        context.detectChanges();
        expect(context.testComponent.current).toBe(1);
      });

      it('disables the previous button on the first page', function() {
        context.testComponent.size = 10;
        context.testComponent.total = 100;
        context.testComponent.current = 1;
        context.detectChanges();
        expect(context.clarityElement.querySelector('.pagination-previous:disabled')).not.toBeNull();
      });

      it('disables the first button on the first page', function() {
        context.testComponent.size = 10;
        context.testComponent.total = 100;
        context.testComponent.current = 1;
        context.detectChanges();
        expect(context.clarityElement.querySelector('.pagination-first:disabled')).not.toBeNull();
      });

      it('changes the current page on enter', function() {
        context.testComponent.size = 10;
        context.testComponent.total = 100;
        context.testComponent.current = 1;
        context.detectChanges();

        const current = context.clarityElement.querySelector('.pagination-current');
        expect(current).not.toBeNull();
        current.value = 4;
        current.dispatchEvent(new Event('input'));
        current.dispatchEvent(
          new KeyboardEvent('keydown', {
            code: 'Enter',
            key: 'Enter',
          })
        );
        // Note: the toString() wouldn't be necessary if we used input type='number',
        // but we decided to opt for type='text' for now due to limited cross-browser support
        expect(context.testComponent.current.toString()).toBe('4');
      });

      it('changes the current page on blur', function() {
        context.testComponent.size = 10;
        context.testComponent.total = 100;
        context.testComponent.current = 1;
        context.detectChanges();

        const current = context.clarityElement.querySelector('.pagination-current');
        expect(current).not.toBeNull();
        current.value = 4;
        current.dispatchEvent(new Event('input'));
        current.dispatchEvent(new Event('blur'));
        // Note: the toString() wouldn't be necessary if we used input type='number',
        // but we decided to opt for type='text' for now due to limited cross-browser support
        expect(context.testComponent.current.toString()).toBe('4');
      });

      it('ignores the current page when input value is invalid', function() {
        context.testComponent.size = 10;
        context.testComponent.total = 100;
        context.testComponent.current = 4;
        context.detectChanges();

        const current = context.clarityElement.querySelector('.pagination-current');
        expect(current).not.toBeNull();
        current.value = 'foo';
        current.dispatchEvent(new Event('input'));
        current.dispatchEvent(new Event('blur'));
        // Note: the toString() wouldn't be necessary if we used input type='number',
        // but we decided to opt for type='text' for now due to limited cross-browser support
        expect(context.testComponent.current.toString()).toBe('4');
      });

      it('sets the current page to 1 when input value is less than 1', function() {
        context.testComponent.size = 10;
        context.testComponent.total = 100;
        context.testComponent.current = 4;
        context.detectChanges();

        const current = context.clarityElement.querySelector('.pagination-current');
        expect(current).not.toBeNull();
        current.value = 0;
        current.dispatchEvent(new Event('input'));
        current.dispatchEvent(new Event('blur'));
        // Note: the toString() wouldn't be necessary if we used input type='number',
        // but we decided to opt for type='text' for now due to limited cross-browser support
        expect(context.testComponent.current.toString()).toBe('1');
      });

      it('sets the current page to last page when input value is greater than the last page', function() {
        context.testComponent.size = 10;
        context.testComponent.total = 100;
        context.testComponent.current = 4;
        context.detectChanges();

        const current = context.clarityElement.querySelector('.pagination-current');
        expect(current).not.toBeNull();
        current.value = 20;
        current.dispatchEvent(new Event('input'));
        current.dispatchEvent(new Event('blur'));
        // Note: the toString() wouldn't be necessary if we used input type='number',
        // but we decided to opt for type='text' for now due to limited cross-browser support
        expect(context.testComponent.current.toString()).toBe('10');
      });

      it('should have type button on all button elements', function() {
        context.testComponent.size = 10;
        context.testComponent.total = 100;
        context.testComponent.current = 1;
        context.detectChanges();

        const invalidButton = (Array.from(context.clarityElement.querySelectorAll('button')) as HTMLElement[]).find(
          (btn: HTMLElement) => btn.getAttribute('type') !== 'button'
        );

        expect(invalidButton).toBeUndefined();
      });

      it('disables current page input', () => {
        context.clarityDirective.lastPage = 2;
        context.testComponent.disableCurrentPageInput = true;
        context.detectChanges();

        expect(context.clarityDirective.currentPageInputRef).toBeUndefined();
      });

      it('enables current page input', () => {
        context.clarityDirective.lastPage = 2;
        context.testComponent.disableCurrentPageInput = false;
        context.detectChanges();

        expect(context.clarityDirective.currentPageInputRef).toBeDefined();
      });
    });

    describe('Accessibility', function() {
      // Until we can properly type "this"
      let context: TestContext<ClrDatagridPagination, FullTest>;
      let commonStrings: ClrCommonStringsService;

      beforeEach(function(this: any) {
        context = this.create(ClrDatagridPagination, FullTest, [Page, DetailService, StateDebouncer]);
        commonStrings = new ClrCommonStringsService();

        context.testComponent.size = 10;
        context.testComponent.total = 100;
        context.testComponent.current = 10;
        context.detectChanges();
      });

      it('expect buttons to have the correct aria-label from ClrCommonStringsService', function() {
        expect(context.clarityElement.querySelector('.pagination-first').attributes['aria-label'].value).toBe(
          commonStrings.keys.firstPage
        );
        expect(context.clarityElement.querySelector('.pagination-last').attributes['aria-label'].value).toBe(
          commonStrings.keys.lastPage
        );
        expect(context.clarityElement.querySelector('.pagination-previous').attributes['aria-label'].value).toBe(
          commonStrings.keys.previousPage
        );
        expect(context.clarityElement.querySelector('.pagination-next').attributes['aria-label'].value).toBe(
          commonStrings.keys.nextPage
        );
        expect(context.clarityElement.querySelector('.pagination-current').attributes['aria-label'].value).toBe(
          commonStrings.keys.currentPage
        );
        expect(context.clarityElement.querySelector('.pagination-list span').attributes['aria-label'].value).toBe(
          commonStrings.keys.totalPages
        );
      });
    });
  });
}

@Component({
  template: `<clr-dg-pagination
                    [(clrDgPage)]="current"
                    [clrDgPageSize]="size"
                    [clrDgTotalItems]="total"
                    [clrDgLastPage]="last"
                    [clrDgPageInputDisabled]="disableCurrentPageInput">
                </clr-dg-pagination>`,
})
class FullTest {
  // this value needs to be initialized; otherwise, when you call a setter for size, the page number is set
  // mid-cycle and throws an error.
  current = 1;
  size: number;
  total: number;
  last: number;
  disableCurrentPageInput: boolean;
}
