/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Renderer2, ViewChild } from '@angular/core';

import { ClrDatagridColumn } from './datagrid-column';
import { ClrDatagridHideableColumn } from './datagrid-hideable-column';
import { TestContext } from './helpers.spec';
import { DragDispatcher } from './providers/drag-dispatcher';
import { FiltersProvider } from './providers/filters';
import { Page } from './providers/page';
import { Sort } from './providers/sort';
import { StateDebouncer } from './providers/state-debouncer.provider';
import { TableSizeService } from './providers/table-size.service';
import { DomAdapter } from '../../utils/dom-adapter/dom-adapter';
import { DatagridRenderOrganizer } from './render/render-organizer';

const PROVIDERS_NEEDED = [
  Sort,
  FiltersProvider,
  DatagridRenderOrganizer,
  DomAdapter,
  DragDispatcher,
  Page,
  StateDebouncer,
  TableSizeService,
  Renderer2,
];

export default function(): void {
  describe('DatagridHideableColumn directive', function() {
    describe('TypeScript API', function() {
      let context: TestContext<ClrDatagridColumn<void>, HideableTest>;

      beforeEach(function() {
        context = this.create(ClrDatagridColumn, HideableTest, PROVIDERS_NEEDED);
      });

      it('creates a DatagridHideableColumn instance on the DatagridColumn', function() {
        expect(context.clarityDirective.hideable).toBeDefined();
      });

      it('defaults the HideableColumn.hidden property to false', function() {
        expect(context.clarityDirective.hideable.hidden).toBe(false);
      });

      // it("takes an input for {hidden: false}", function () {
      //    // not sure how to test this yet because I can't grab instances with #templateRefs
      // });

      // it("takes an input for {hidden:true}", function () {
      //    // not sure how to test this yet because I can't grab instances with #templateRefs
      //    // AND -> results in EHCAIWC error
      // });

      it('correctly populates the DatagridHideableColumn instance with an id', function() {
        expect(context.clarityDirective.columnId).toEqual(context.clarityDirective.hideable.id);
      });
    });

    describe('TypeScript Output API', function() {
      let context: TestContext<ClrDatagridColumn<void>, HideableOutputTest>;

      beforeEach(function() {
        context = this.create(ClrDatagridColumn, HideableOutputTest, PROVIDERS_NEEDED);
      });

      it('creates a DatagridHideableColumn instance on the DatagridColumn', function() {
        expect(context.clarityDirective.hideable).toBeDefined();
      });

      it('defaults the HideableColumn.hidden property to false', function() {
        expect(context.clarityDirective.hideable.hidden).toBe(false);
      });

      it('correctly populates the DatagridHideableColumn instance with an id', function() {
        expect(context.clarityDirective.columnId).toEqual(context.clarityDirective.hideable.id);
      });

      it('input works correctly', function() {
        context.testComponent.hidden = true;
        context.detectChanges();
        expect(context.clarityDirective.hideable.hidden).toBeTrue();
      });

      it('emits column state change', function() {
        context.clarityDirective.hideable.hidden = true;
        expect(context.testComponent.hidden).toBeTrue();
      });
    });
  });
}

@Component({
  template: `
        <clr-dg-column>
            <ng-container *clrDgHideableColumn>
                Name
            </ng-container>
        </clr-dg-column>
    `,
})
class HideableTest {
  @ViewChild(ClrDatagridHideableColumn) directive: ClrDatagridHideableColumn;
}

@Component({
  template: `
        <clr-dg-column>
            <!-- sugar syntax does not support @Output on structural directives, see https://github.com/angular/angular/issues/12121 -->
            <ng-template clrDgHideableColumn [(clrDgHidden)]="hidden">
                Name
            </ng-template>
        </clr-dg-column>
    `,
})
class HideableOutputTest {
  @ViewChild(ClrDatagridHideableColumn) directive: ClrDatagridHideableColumn;
  hidden = false;
}
