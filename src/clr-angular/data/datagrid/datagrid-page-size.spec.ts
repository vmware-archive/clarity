/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { ClrDatagridPageSize } from './datagrid-page-size';
import { TestContext } from './helpers.spec';
import { Page } from './providers/page';
import { StateDebouncer } from './providers/state-debouncer.provider';

export default function(): void {
  describe('ClrDatagridPageSize component', function() {
    describe('Template API', function() {
      let context: TestContext<ClrDatagridPageSize, FullTest>;

      beforeEach(function() {
        context = this.create(ClrDatagridPageSize, FullTest, [Page, StateDebouncer]);
      });

      it('receives an input for page size options', function() {
        context.testComponent.pageSizeOptions = [10, 20, 50, 100];
        context.detectChanges();
        expect(context.clarityDirective.pageSizeOptions).toEqual([10, 20, 50, 100]);
      });
    });

    describe('View', function() {
      describe('Default View Without Input Test', function() {
        let context: TestContext<ClrDatagridPageSize, FullTest>;

        beforeEach(function() {
          context = this.create(ClrDatagridPageSize, SimpleTest, [Page, StateDebouncer]);
        });

        it('displays a select with a default pageSize if no input is given', function() {
          const select = context.clarityElement.querySelector('select');
          expect(select).not.toBeNull();
          expect(select.options.length).toBe(1);
          expect(select.options[0].innerText).toMatch('0');
        });
      });

      describe('Full Test', function() {
        let context: TestContext<ClrDatagridPageSize, FullTest>;
        let pageProvider: Page;

        beforeEach(function() {
          context = this.create(ClrDatagridPageSize, FullTest, [Page, StateDebouncer]);
          pageProvider = context.getClarityProvider(Page);
        });

        it('projects content before the select element', function() {
          expect(context.clarityElement.textContent.trim()).toMatch('Hello world');
        });

        it('displays a select with pageSizeOptions as choices', function() {
          const pageSizeOptions = [10, 20, 50, 100];
          context.testComponent.pageSizeOptions = pageSizeOptions;
          context.detectChanges();
          const select = context.clarityElement.querySelector('select');
          expect(select).not.toBeNull();
          expect(select.options.length).toBe(pageSizeOptions.length);
          for (let i = 0; i < pageSizeOptions.length; i++) {
            expect(select.options[i].innerText).toMatch(pageSizeOptions[i].toString());
          }
        });

        it('updates the page size upon pageSizeOption selection', function() {
          pageProvider.size = 10;
          pageProvider.totalItems = 100;
          pageProvider.current = 1;
          context.testComponent.pageSizeOptions = [10, 20, 50, 100];
          context.detectChanges();

          const select = context.clarityElement.querySelector('select');
          expect(select).not.toBeNull();
          select.value = '2: 20'; // setting it to the second option, with the expected value syntax when we use [ngValue]
          select.dispatchEvent(new Event('change'));
          expect(pageProvider.size).toBe(20);
        });
      });
    });
  });
}

@Component({ template: `<clr-dg-page-size>Hello world</clr-dg-page-size>` })
class SimpleTest {}

@Component({ template: `<clr-dg-page-size [clrPageSizeOptions]="pageSizeOptions">Hello world</clr-dg-page-size>` })
class FullTest {
  pageSizeOptions: number[];
}
