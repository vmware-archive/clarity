/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { ClrDatagridActionBar } from './datagrid-action-bar';
import { TestContext } from './helpers.spec';
import { FiltersProvider } from './providers/filters';
import { Items } from './providers/items';
import { Page } from './providers/page';
import { Selection } from './providers/selection';
import { Sort } from './providers/sort';

export default function(): void {
  describe('DatagridActionBar component', function() {
    let context: TestContext<ClrDatagridActionBar, SimpleTest>;

    beforeEach(function() {
      context = this.create(ClrDatagridActionBar, SimpleTest, [Selection, Items, FiltersProvider, Sort, Page]);
    });

    it('projects content', function() {
      expect(context.clarityElement.textContent.trim()).toMatch('Hello world');
    });
  });
}

@Component({ template: `<clr-dg-action-bar>Hello world</clr-dg-action-bar>` })
class SimpleTest {}
