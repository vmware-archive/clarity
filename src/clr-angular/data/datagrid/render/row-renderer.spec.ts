/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { DatagridWillyWonka } from '../chocolate/datagrid-willy-wonka';
import { DatagridRenderStep } from '../enums/render-step.enum';
import { TestContext } from '../helpers.spec';
import { DisplayModeService } from '../providers/display-mode.service';
import { FiltersProvider } from '../providers/filters';
import { ExpandableRowsCount } from '../providers/global-expandable-rows';
import { HideableColumnService } from '../providers/hideable-column.service';
import { Items } from '../providers/items';
import { Page } from '../providers/page';
import { RowActionService } from '../providers/row-action-service';
import { Selection } from '../providers/selection';
import { Sort } from '../providers/sort';
import { StateDebouncer } from '../providers/state-debouncer.provider';

import { DatagridCellRenderer } from './cell-renderer';
import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';
import { DatagridRenderOrganizer } from './render-organizer';
import { MOCK_ORGANIZER_PROVIDER, MockDatagridRenderOrganizer } from './render-organizer.mock';
import { DatagridRowRenderer } from './row-renderer';

const PROVIDERS = [
  Selection,
  Items,
  FiltersProvider,
  Sort,
  Page,
  RowActionService,
  ExpandableRowsCount,
  MOCK_ORGANIZER_PROVIDER,
  DomAdapter,
  HideableColumnService,
  DatagridWillyWonka,
  StateDebouncer,
  DisplayModeService,
];
export default function(): void {
  describe('DatagridRowRenderer directive', function() {
    let context: TestContext<DatagridRowRenderer, SimpleTest>;
    let organizer: MockDatagridRenderOrganizer;
    let cellWidthSpy: jasmine.Spy;

    beforeEach(function() {
      context = this.create(DatagridRowRenderer, SimpleTest, PROVIDERS);
      organizer = <MockDatagridRenderOrganizer>context.getClarityProvider(DatagridRenderOrganizer);
      organizer.widths = [{ px: 42, strict: false }, { px: 24, strict: true }];
      cellWidthSpy = spyOn(DatagridCellRenderer.prototype, 'setWidth');
    });

    it('sets the widths of the cells when notified', function() {
      organizer.updateRenderStep.next(DatagridRenderStep.ALIGN_COLUMNS);
      expect(cellWidthSpy.calls.allArgs()).toEqual([[false, 42], [true, 24]]);
    });

    it("doesn't set the width when the organizer doesn't have them yet", function() {
      organizer.widths = [];
      organizer.updateRenderStep.next(DatagridRenderStep.ALIGN_COLUMNS);
      expect(cellWidthSpy).not.toHaveBeenCalled();
    });

    it('sets the widths of the cells when created after the widths have been computed', function() {
      context.testComponent.show = false;
      context.detectChanges();
      expect(cellWidthSpy).not.toHaveBeenCalled();
      context.testComponent.show = true;
      context.detectChanges();
      expect(cellWidthSpy.calls.allArgs()).toEqual([[false, 42], [true, 24]]);
    });

    it('sets the size of cells when they change dynamically', function() {
      context.testComponent.world = false;
      context.detectChanges();
      expect(cellWidthSpy.calls.allArgs()).toEqual([[false, 42], [true, 24]]);
    });
  });
}

@Component({
  template: `
        <clr-dg-row *ngIf="show">
            <clr-dg-cell>Hello</clr-dg-cell>
            <clr-dg-cell *ngIf="world">World</clr-dg-cell>
            <clr-dg-cell *ngIf="!world">Clarity</clr-dg-cell>
        </clr-dg-row>
    `,
})
class SimpleTest {
  show = true;
  world = true;
}
