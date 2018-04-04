/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Renderer2, TemplateRef, ViewChild } from '@angular/core';

import { ClrDatagridColumn } from './datagrid-column';
import { DatagridHideableColumnModel } from './datagrid-hideable-column.model';
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
  describe('DatagridHideableColumnModel', function() {
    let context: TestContext<ClrDatagridColumn<void>, SimpleTest>;
    let testDgHideableColumn: DatagridHideableColumnModel;

    beforeEach(function() {
      context = this.create(ClrDatagridColumn, SimpleTest, PROVIDERS_NEEDED);
      testDgHideableColumn = new DatagridHideableColumnModel(
        context.testComponent.templateRef,
        context.testComponent.id,
        context.testComponent.hidden
      );
    });

    it('should have a template ref', function() {
      expect(testDgHideableColumn.template).toBeDefined();
    });

    it('should have an id', function() {
      expect(testDgHideableColumn.id).toBe('dg-col-0');
    });

    it('should have a hidden flag default to false', function() {
      expect(testDgHideableColumn.hidden).toBeDefined();
      expect(testDgHideableColumn.hidden).toBe(false);
    });

    it('should allow hidden flag to be set', function() {
      testDgHideableColumn.hidden = true;
      expect(testDgHideableColumn.hidden).toBe(true);
    });

    it('should provide an observable for the hidden changes', function() {
      let changeValue: boolean;
      let nbChanges: number = 0;

      testDgHideableColumn.hiddenChangeState.subscribe(change => {
        nbChanges++;
        changeValue = change;
      });

      testDgHideableColumn.hidden = true;
      expect(changeValue).toBe(true);
      expect(nbChanges).toEqual(1);

      testDgHideableColumn.hidden = false;
      expect(changeValue).toBe(false);
      expect(nbChanges).toEqual(2);
    });

    it('only updates hidden with a new value', function() {
      let changeValue: boolean;
      let nbChanges: number = 0;

      testDgHideableColumn.hiddenChangeState.subscribe(change => {
        nbChanges++;
        changeValue = change;
      });

      testDgHideableColumn.hidden = false;
      expect(changeValue).toBeUndefined();
      expect(nbChanges).toBe(0);
    });
  });
}

@Component({
  template: `
        <!-- NOTE: The column is needed to make TestContext happy. TODO: Remove when TestContext is more flexible. -->
        <clr-dg-column>Test Column</clr-dg-column>
        <ng-template #testRef>
            Hideable Column
        </ng-template>
    `,
})
class SimpleTest {
  @ViewChild('testRef') templateRef: TemplateRef<any>;
  id: string = 'dg-col-0';
  hidden: boolean;
}
