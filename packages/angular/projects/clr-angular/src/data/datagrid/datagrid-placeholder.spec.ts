/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ClrDatagridPlaceholder } from './datagrid-placeholder';
import { TestContext } from './helpers.spec';
import { FiltersProvider } from './providers/filters';
import { Items } from './providers/items';
import { Page } from './providers/page';
import { Sort } from './providers/sort';
import { StateDebouncer } from './providers/state-debouncer.provider';

export default function(): void {
  describe('ClrDatagridPlaceholder component', function() {
    describe('Typescript API', function() {
      beforeEach(function() {
        this.pageProvider = new Page(new StateDebouncer());
        this.itemsProvider = new Items(null, null, this.pageProvider);
        this.component = new ClrDatagridPlaceholder(this.itemsProvider);
      });

      it('detects if the Datagrid is empty', function() {
        expect(this.component.emptyDatagrid).toBe(true);
        this.itemsProvider.all = new Array(1);
        expect(this.component.emptyDatagrid).toBe(false);
        this.itemsProvider.all = [];
        expect(this.component.emptyDatagrid).toBe(true);
      });
    });

    describe('View', function() {
      let context: TestContext<ClrDatagridPlaceholder<void>, SimpleTest>;
      let itemsProvider: Items<void>;

      beforeEach(function() {
        context = this.create(ClrDatagridPlaceholder, SimpleTest, [Items, Page, Sort, FiltersProvider, StateDebouncer]);
        itemsProvider = TestBed.get(Items);
      });

      it('is empty when there are items', function() {
        itemsProvider.all = new Array(1);
        context.detectChanges();
        expect(context.clarityElement.textContent.trim()).toMatch('');
      });

      it('is empty when the data is loading', function() {
        itemsProvider.loading = true;
        context.detectChanges();
        expect(context.clarityElement.textContent.trim()).toMatch('');
      });

      it('projects content when there are no items', function() {
        expect(context.clarityElement.textContent.trim()).toMatch('Hello world');
      });
    });
  });
}

@Component({ template: `<clr-dg-placeholder>Hello world</clr-dg-placeholder>` })
class SimpleTest {}
