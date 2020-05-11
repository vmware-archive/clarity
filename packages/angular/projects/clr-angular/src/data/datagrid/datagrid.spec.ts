/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { async } from '@angular/core/testing';

import { commonStringsDefault } from './../../utils/i18n/common-strings.default';
import { DatagridPropertyStringFilter } from './built-in/filters/datagrid-property-string-filter';
import { DatagridStringFilterImpl } from './built-in/filters/datagrid-string-filter-impl';
import { ClrDatagrid } from './datagrid';
import { DatagridDisplayMode } from './enums/display-mode.enum';
import { DATAGRID_SPEC_PROVIDERS, TestContext } from './helpers.spec';
import { ClrDatagridComparatorInterface } from './interfaces/comparator.interface';
import { ClrDatagridFilterInterface } from './interfaces/filter.interface';
import { ClrDatagridStateInterface } from './interfaces/state.interface';
import { ClrDatagridStringFilterInterface } from './interfaces/string-filter.interface';
import { MockDisplayModeService } from './providers/display-mode.mock';
import { DisplayModeService } from './providers/display-mode.service';
import { FiltersProvider } from './providers/filters';
import { ExpandableRowsCount } from './providers/global-expandable-rows';
import { Items } from './providers/items';
import { Page } from './providers/page';
import { RowActionService } from './providers/row-action-service';
import { Selection } from './providers/selection';
import { Sort } from './providers/sort';
import { DatagridRenderOrganizer } from './render/render-organizer';
import { SelectionType } from './enums/selection-type';
import { HIDDEN_COLUMN_CLASS } from './render/constants';

@Component({
  template: `
    <clr-datagrid
      *ngIf="!destroy"
      [(clrDgSelected)]="selected"
      [clrDgLoading]="loading"
      (clrDgRefresh)="refresh($event)"
    >
      <clr-dg-column>
        First
        <clr-dg-filter *ngIf="filter" [clrDgFilter]="testFilter"></clr-dg-filter>
      </clr-dg-column>
      <clr-dg-column>Second</clr-dg-column>

      <clr-dg-row *clrDgItems="let item of items">
        <clr-dg-cell>{{ item }}</clr-dg-cell>
        <clr-dg-cell>{{ item * item }}</clr-dg-cell>
      </clr-dg-row>

      <clr-dg-footer>{{ items.length }} items</clr-dg-footer>
    </clr-datagrid>
  `,
})
class FullTest {
  items = [1, 2, 3];

  loading = false;
  selected: number[];

  nbRefreshed = 0;
  latestState: ClrDatagridStateInterface;

  fakeLoad = false;

  // ClrDatagridFilterInterface needed to test the non-emission of refresh on destroy, even with an active filter
  filter = false;
  testFilter = new TestFilter();

  destroy = false;

  refresh(state: ClrDatagridStateInterface) {
    this.nbRefreshed++;
    this.latestState = state;
    this.loading = this.fakeLoad;
  }
}

@Component({
  template: `
    <clr-datagrid>
      <clr-dg-column>First</clr-dg-column>
      <clr-dg-column>Second</clr-dg-column>

      <clr-dg-row *ngFor="let item of items">
        <clr-dg-cell>{{ item }}</clr-dg-cell>
        <clr-dg-cell>{{ item * item }}</clr-dg-cell>
      </clr-dg-row>

      <clr-dg-footer>{{ items.length }} items</clr-dg-footer>
    </clr-datagrid>
  `,
})
class NgForTest {
  items = [1, 2, 3];
}

// Have to wrap the OnPush component otherwise change detection doesn't run.
// The secret here is OnPush only updates on input changes, hence the wrapper.
@Component({
  template: ` <multi-select-test [items]="items" [selected]="selected"></multi-select-test> `,
})
class OnPushTest {
  items = [1, 2, 3];
  selected: any[] = [];
}

@Component({
  selector: 'multi-select-test',
  template: ` <clr-datagrid [(clrDgSelected)]="selected">
    <clr-dg-column>First</clr-dg-column>
    <clr-dg-column>Second</clr-dg-column>

    <clr-dg-row *clrDgItems="let item of items" [clrDgItem]="item">
      <clr-dg-cell>{{ item }}</clr-dg-cell>
      <clr-dg-cell>{{ item * item }}</clr-dg-cell>
    </clr-dg-row>
  </clr-datagrid>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class MultiSelectionTest {
  @Input() items: any[] = [];
  @Input() selected: any[] = [];
}

@Component({
  template: `
    <clr-datagrid [(clrDgSingleSelected)]="selected" clrDgSingleSelectionAriaLabel="Select row from Datagrid">
      <clr-dg-column>First</clr-dg-column>
      <clr-dg-column>Second</clr-dg-column>

      <clr-dg-row *clrDgItems="let item of items" [clrDgItem]="item">
        <clr-dg-cell>{{ item }}</clr-dg-cell>
        <clr-dg-cell>{{ item * item }}</clr-dg-cell>
      </clr-dg-row>

      <clr-dg-footer (click)="selected = null">{{ selected }}</clr-dg-footer>
    </clr-datagrid>
  `,
})
class SingleSelectionTest {
  items = [1, 2, 3];
  selected: any;
}

@Component({
  template: `
    <clr-datagrid clrDgSingleActionableAriaLabel="Select one of actionable rows">
      <clr-dg-column>First</clr-dg-column>
      <clr-dg-column>Second</clr-dg-column>

      <clr-dg-row *clrDgItems="let item of items">
        <clr-dg-action-overflow *ngIf="item > showIfGreaterThan">
          <button class="action-item">Edit</button>
        </clr-dg-action-overflow>

        <clr-dg-cell>{{ item }}</clr-dg-cell>
        <clr-dg-cell>{{ item * item }}</clr-dg-cell>
      </clr-dg-row>

      <clr-dg-footer>{{ items.length }} items</clr-dg-footer>
    </clr-datagrid>
  `,
})
class ActionableRowTest {
  items = [1, 2, 3];
  showIfGreaterThan = 0;
}

@Component({
  template: `
    <clr-datagrid clrDetailExpandableAriaLabel="Expand one of the rows">
      <clr-dg-column>First</clr-dg-column>
      <clr-dg-column>Second</clr-dg-column>

      <clr-dg-row *clrDgItems="let item of items" [clrDgItem]="item">
        <clr-dg-cell>{{ item }}</clr-dg-cell>
        <clr-dg-cell>{{ item * item }}</clr-dg-cell>
        <ng-template [ngIf]="expandable">
          <clr-dg-row-detail *clrIfExpanded>Detail</clr-dg-row-detail>
        </ng-template>
      </clr-dg-row>

      <clr-dg-footer>{{ items.length }} items</clr-dg-footer>
    </clr-datagrid>
  `,
})
class ExpandableRowTest {
  items = [1, 2, 3];
  expandable = true;
}

@Component({
  template: `
    <clr-datagrid>
      <clr-dg-column>First</clr-dg-column>
      <clr-dg-column>Second</clr-dg-column>

      <clr-dg-row>
        <clr-dg-cell>First item</clr-dg-cell>
        <clr-dg-cell>Second item</clr-dg-cell>
        <clr-dg-row-detail *clrIfExpanded="true">Detail</clr-dg-row-detail>
      </clr-dg-row>
      <clr-dg-footer></clr-dg-footer>
    </clr-datagrid>
  `,
})
class ExpandedOnInitTest {
  expandable = true;
}

@Component({
  template: `
    <clr-datagrid>
      <clr-dg-column>First</clr-dg-column>
      <clr-dg-column>Second</clr-dg-column>

      <clr-dg-row *clrDgItems="let item of items; index as i">
        <clr-dg-action-overflow *ngIf="action && i === 1">
          <button class="action-item">Edit</button>
        </clr-dg-action-overflow>
        <clr-dg-cell>{{ item }}</clr-dg-cell>
        <clr-dg-cell>{{ item * item }}</clr-dg-cell>
        <ng-template [ngIf]="expandable && i === 1">
          <clr-dg-row-detail *clrIfExpanded>Detail</clr-dg-row-detail>
        </ng-template>
      </clr-dg-row>

      <clr-dg-footer>{{ items.length }} items</clr-dg-footer>
    </clr-datagrid>
  `,
})
class ChocolateClrDgItemsTest {
  items = [1, 2, 3];
  action = false;
  expandable = false;
}

@Component({
  template: `
    <clr-datagrid>
      <clr-dg-column>First</clr-dg-column>
      <clr-dg-column>Second</clr-dg-column>

      <clr-dg-row *ngFor="let item of items; index as i">
        <clr-dg-action-overflow *ngIf="action && i === 1">
          <button class="action-item">Edit</button>
        </clr-dg-action-overflow>
        <clr-dg-cell>{{ item }}</clr-dg-cell>
        <clr-dg-cell>{{ item * item }}</clr-dg-cell>
        <ng-template [ngIf]="expandable && i === 1">
          <clr-dg-row-detail *clrIfExpanded>Detail</clr-dg-row-detail>
        </ng-template>
      </clr-dg-row>

      <clr-dg-footer>{{ items.length }} items</clr-dg-footer>
    </clr-datagrid>
  `,
})
class ChocolateNgForTest {
  items = [1, 2, 3];
  action = false;
  expandable = false;
}

@Component({
  template: `
    <clr-datagrid>
      <clr-dg-column>First</clr-dg-column>
      <clr-dg-column>Second</clr-dg-column>

      <clr-dg-row *clrDgItems="let item of items" [clrDgItem]="item">
        <clr-dg-cell>{{ item }}</clr-dg-cell>
        <ng-template [ngIf]="expandable">
          <clr-dg-row-detail *clrIfExpanded>Detail</clr-dg-row-detail>
        </ng-template>
      </clr-dg-row>

      <clr-dg-footer>{{ items.length }} items</clr-dg-footer>
    </clr-datagrid>
  `,
})
class MixedExpandableRowTest {
  items = [1, 2, 3, 4];
  private _expandable = true;
  get expandable() {
    this._expandable = !this._expandable;
    return this._expandable;
  }
}

class TestComparator implements ClrDatagridComparatorInterface<number> {
  compare(_a: number, _b: number): number {
    return 0;
  }
}

class TestFilter implements ClrDatagridFilterInterface<number> {
  isActive(): boolean {
    return true;
  }

  accepts(_n: number): boolean {
    return true;
  }

  changes = new Subject<boolean>();
}

class TestCustomStateFilter extends TestFilter {
  private innerState: any;
  constructor(stateCode: string) {
    super();
    this.innerState = { stateCode: stateCode };
  }

  get state() {
    return this.innerState;
  }
}

class TestStringFilter implements ClrDatagridStringFilterInterface<number> {
  accepts(_item: number, _search: string) {
    return true;
  }
}

@Component({
  selector: 'hidden-column-test',
  template: ` <clr-datagrid>
    <clr-dg-column>
      <ng-container *clrDgHideableColumn="{ hidden: true }">
        First
      </ng-container>
    </clr-dg-column>
    <clr-dg-column>Second</clr-dg-column>

    <clr-dg-row *ngFor="let item of items">
      <clr-dg-cell>{{ item }}</clr-dg-cell>
      <clr-dg-cell>{{ item * item }}</clr-dg-cell>
    </clr-dg-row>
  </clr-datagrid>`,
})
class HiddenColumnTest {
  items = [1, 2, 3];
}

@Component({
  template: ` <clr-datagrid>
    <clr-dg-column>First</clr-dg-column>
    <clr-dg-column>Second</clr-dg-column>

    <clr-dg-row *ngFor="let item of items">
      <clr-dg-cell>{{ item }}</clr-dg-cell>
      <clr-dg-cell>{{ item * item }}</clr-dg-cell>
    </clr-dg-row>
  </clr-datagrid>`,
})
class ProjectionTest {
  items = [1, 2, 3];
}

@Component({
  template: `
    <clr-datagrid>
      <clr-dg-column>
        <ng-container *clrDgHideableColumn="{ hidden: true }">
          First
        </ng-container>
      </clr-dg-column>
      <clr-dg-column>Second</clr-dg-column>

      <clr-dg-row *ngFor="let item of items">
        <clr-dg-cell>{{ item }}</clr-dg-cell>
        <clr-dg-cell>{{ item * item }}</clr-dg-cell>
        <clr-dg-row-detail *clrIfExpanded="true" [clrDgReplace]="true">
          <clr-dg-cell class="hidden-cell">{{ item }} (col 1 detail)</clr-dg-cell>
          <clr-dg-cell>{{ item * item }} detail (col 2 detail)</clr-dg-cell>
        </clr-dg-row-detail>
      </clr-dg-row>
    </clr-datagrid>
  `,
})
class ExpandedReplacedCellsTest {
  items = [1, 2, 3];
}

@Component({
  template: `
    <clr-tabs>
      <clr-tab>
        <button clrTabLink id="link1">Tab1</button>
        <clr-tab-content *clrIfActive>
          <clr-datagrid>
            <clr-dg-column [style.width.px]="123">Column1</clr-dg-column>
            <clr-dg-column>Column2</clr-dg-column>

            <clr-dg-row *clrDgItems="let item of items">
              <clr-dg-cell>{{ item }}</clr-dg-cell>
              <clr-dg-cell></clr-dg-cell>
            </clr-dg-row>
          </clr-datagrid>
        </clr-tab-content>
      </clr-tab>
    </clr-tabs>
  `,
})
class TabsIntegrationTest {
  items = Array(10).fill(0);
}

export default function (): void {
  describe('ClrDatagrid component', function () {
    describe('Typescript API', function () {
      let context: TestContext<ClrDatagrid<number>, FullTest>;

      beforeEach(function () {
        context = this.create(ClrDatagrid, FullTest);
      });

      it('allows to manually force a refresh of displayed items when data mutates', function () {
        const items = context.getClarityProvider(Items);
        let refreshed = false;
        items.change.subscribe(() => (refreshed = true));
        expect(refreshed).toBe(false);
        context.clarityDirective.dataChanged();
        expect(refreshed).toBe(true);
      });

      it('allows to manually resize the datagrid', function () {
        const organizer: DatagridRenderOrganizer = context.getClarityProvider(DatagridRenderOrganizer);
        let resizeSteps = 0;
        organizer.renderStep.subscribe(() => {
          resizeSteps++;
        });
        expect(resizeSteps).toBe(0);
        context.clarityDirective.resize();
        expect(resizeSteps).toBe(5);
      });
    });

    describe('Template API', function () {
      let context: TestContext<ClrDatagrid<number>, FullTest>;

      beforeEach(function () {
        context = this.create(ClrDatagrid, FullTest);
      });

      it('should cretae default values for clrDgSingleSelectionAriaLabel, clrDgSingleActionableAriaLabel, clrDetailExpandableAriaLabel', function () {
        expect(context.clarityDirective.clrDgSingleSelectionAriaLabel).toBe(
          commonStringsDefault.singleSelectionAriaLabel
        );
        expect(context.clarityDirective.clrDgSingleActionableAriaLabel).toBe(
          commonStringsDefault.singleActionableAriaLabel
        );
        expect(context.clarityDirective.clrDetailExpandableAriaLabel).toBe(
          commonStringsDefault.detailExpandableAriaLabel
        );
      });

      it('receives an input for the loading state', function () {
        expect(context.clarityDirective.loading).toBe(false);
        context.testComponent.loading = true;
        context.detectChanges();
        expect(context.clarityDirective.loading).toBe(true);
      });

      it('offers two-way binding on the currently selected items', function () {
        const selection = context.getClarityProvider(Selection);
        context.testComponent.selected = [2];
        context.detectChanges();
        expect(selection.current).toEqual([2]);
        selection.setSelected(1, true);
        context.detectChanges();
        expect(context.testComponent.selected).toEqual([2, 1]);
      });

      it('allows to set pre-selected items when initializing the full list of items', function () {
        const selection = context.getClarityProvider(Selection);
        context.testComponent.items = [4, 5, 6];
        context.testComponent.selected = [5];
        context.detectChanges();
        expect(selection.current).toEqual([5]);
      });

      describe('clrDgRefresh output', function () {
        it('emits once when the datagrid is ready', function () {
          expect(context.testComponent.nbRefreshed).toBe(1);
        });

        it('emits once when the sort order changes', function () {
          context.testComponent.nbRefreshed = 0;
          const sort = context.getClarityProvider(Sort);
          sort.toggle(new TestComparator());
          context.detectChanges();
          expect(context.testComponent.nbRefreshed).toBe(1);
        });

        it('emits once when the filters change', function () {
          context.testComponent.nbRefreshed = 0;
          const filters = context.getClarityProvider(FiltersProvider);
          const filter = new TestFilter();
          filters.add(filter);
          context.detectChanges();
          expect(context.testComponent.nbRefreshed).toBe(1);
        });

        it('emits once when the filters change when currentPage > 1', function () {
          // filter change should set the page to 1, so we expect two events that trigger emits
          // datagrid should consolidate and still emit once
          context.testComponent.items = [1, 2, 3, 4, 5, 6];
          context.detectChanges();
          const page: Page = context.getClarityProvider(Page);
          page.size = 2;
          page.current = 2;
          context.testComponent.nbRefreshed = 0;
          const filters = context.getClarityProvider(FiltersProvider);
          const filter = new TestFilter();
          filters.add(filter);
          context.detectChanges();
          expect(context.testComponent.nbRefreshed).toBe(1);
        });

        it('emits once when the page changes', function () {
          context.testComponent.nbRefreshed = 0;
          const page: Page = context.getClarityProvider(Page);
          page.current = 2;
          context.detectChanges();
          expect(context.testComponent.nbRefreshed).toBe(1);
        });

        it('emits once when the page size changes', function () {
          context.testComponent.nbRefreshed = 0;
          const page: Page = context.getClarityProvider(Page);
          page.size = 2;
          context.detectChanges();
          expect(context.testComponent.nbRefreshed).toBe(1);
          page.size = 5;
          context.detectChanges();
          expect(context.testComponent.nbRefreshed).toBe(2);
          page.resetPageSize();
          expect(context.testComponent.nbRefreshed).toBe(3);
        });

        it('emits the complete state of the datagrid', function () {
          context.testComponent.items = [1, 2, 3, 4, 5, 6];
          context.detectChanges();
          const comparator = new TestComparator();
          const sort = context.getClarityProvider(Sort);
          sort.toggle(comparator);
          const filters = context.getClarityProvider(FiltersProvider);
          const filter = new TestFilter();
          filters.add(filter);
          const page: Page = context.getClarityProvider(Page);
          page.size = 2;
          page.current = 2;
          context.detectChanges();
          expect(context.testComponent.latestState).toEqual({
            page: {
              from: 2,
              to: 3,
              size: 2,
              current: 2,
            },
            sort: {
              by: comparator,
              reverse: false,
            },
            filters: [filter],
          });
        });

        it('emits the correct data for all filter types', function () {
          const filters = context.getClarityProvider(FiltersProvider);
          const customFilter = new TestFilter();
          const testStringFilter = new DatagridStringFilterImpl(new TestStringFilter());
          testStringFilter.value = 'whatever';
          const builtinStringFilter = new DatagridStringFilterImpl(new DatagridPropertyStringFilter('test'));
          const filterWithState = new TestCustomStateFilter('test');
          builtinStringFilter.value = '1234';
          filters.add(customFilter); // custom filter
          filters.add(testStringFilter); // custom ClrDatagridStringFilterInterface ??
          filters.add(builtinStringFilter);
          filters.add(filterWithState);
          context.detectChanges();
          expect(context.testComponent.latestState.filters).toEqual([
            customFilter,
            testStringFilter,
            { property: 'test', value: '1234' },
            { stateCode: 'test' },
          ]);
        });

        it('emits early enough to avoid chocolate errors on the loading input', function () {
          context.testComponent.fakeLoad = true;
          const page: Page = context.getClarityProvider(Page);
          page.current = 2;
          expect(() => context.detectChanges()).not.toThrow();
        });

        // Actually not fixed yet, my bad
        xit("doesn't emit when the datagrid is destroyed", function () {
          context.testComponent.filter = true;
          context.detectChanges();
          context.testComponent.nbRefreshed = 0;
          context.testComponent.destroy = true;
          context.detectChanges();
          expect(context.testComponent.nbRefreshed).toBe(0);
        });
      });
    });

    describe('View basics', function () {
      let context: TestContext<ClrDatagrid<number>, FullTest>;

      beforeEach(function () {
        context = this.create(ClrDatagrid, FullTest);
      });

      it('projects columns in the header', function () {
        const header = context.clarityElement.querySelector('.datagrid-header');
        expect(header.textContent).toMatch(/First\s*Second/);
      });

      it('projects the footer', function () {
        expect(context.clarityElement.querySelector('.datagrid-footer')).not.toBeNull();
      });

      it('adds a11y roles to datagrid', function () {
        const tableWrapper = context.clarityElement.querySelector('.datagrid-table');
        expect(tableWrapper.attributes.role.value).toEqual('grid');

        const header = context.clarityElement.querySelector('.datagrid-header');
        expect(header.attributes.role.value).toEqual('rowgroup');

        const row = context.clarityElement.querySelector('.datagrid-row');
        expect(row.attributes.role.value).toEqual('row');

        const columns = context.clarityElement.querySelectorAll('.datagrid-column');
        columns.forEach(column => expect(column.attributes.role.value).toEqual('columnheader'));
      });
    });

    describe('Iterators', function () {
      it('projects rows when using ngFor', function () {
        this.context = this.create(ClrDatagrid, NgForTest);
        const rows = this.context.clarityElement.querySelectorAll('.datagrid-cell');
        expect(['1', '1', '2', '4', '3', '9']).toEqual([...rows].map(r => r.textContent));
      });

      it('uses the rows template when using clrDgItems', function () {
        this.context = this.create(ClrDatagrid, FullTest);
        const rows = this.context.clarityElement.querySelectorAll('.datagrid-cell');
        expect(['1', '1', '2', '4', '3', '9']).toEqual([...rows].map(r => r.textContent));
      });
    });

    describe('Actionable rows', function () {
      let context: TestContext<ClrDatagrid<number>, ActionableRowTest>;
      let rowActionService: RowActionService;
      let headActionOverflowCell: HTMLElement;
      let actionOverflowCell: HTMLElement[];
      let actionOverflow: HTMLElement[];

      it('it has cells for action overflows if there is at least one of them.', function () {
        context = this.create(ClrDatagrid, ActionableRowTest);
        rowActionService = context.getClarityProvider(RowActionService);
        expect(rowActionService.hasActionableRow).toBe(true);
        const datagridHead = context.clarityElement.querySelector('.datagrid-header');
        headActionOverflowCell = datagridHead.querySelector('.datagrid-column.datagrid-row-actions');
        actionOverflowCell = context.clarityElement.querySelectorAll('.datagrid-row-actions');
        actionOverflow = context.clarityElement.querySelectorAll('clr-dg-action-overflow');
        expect(headActionOverflowCell).not.toBeNull();
        expect(actionOverflowCell.length).toEqual(4);
        expect(actionOverflow.length).toEqual(3);
      });

      it('it has no cells for action overflows if there is none of them.', function () {
        context = this.create(ClrDatagrid, ActionableRowTest);
        rowActionService = context.getClarityProvider(RowActionService);
        context.testComponent.showIfGreaterThan = 10;
        context.detectChanges();
        actionOverflow = context.clarityElement.querySelectorAll('clr-dg-action-overflow');
        expect(actionOverflow.length).toEqual(0);
        expect(rowActionService.hasActionableRow).toBe(false);
        const datagridHead = context.clarityElement.querySelector('.datagrid-header');
        headActionOverflowCell = datagridHead.querySelector('.datagrid-column.datagrid-row-actions');
        actionOverflowCell = context.clarityElement.querySelectorAll('clr-dg-cell.datagrid-single-select');
        expect(headActionOverflowCell).toBeNull();
        expect(actionOverflowCell.length).toEqual(0);
      });

      it('should have aria-label with value `Select one of actionable rows`', function () {
        context = this.create(ClrDatagrid, ActionableRowTest);
        context.getClarityProvider(RowActionService);
        expect(
          context.clarityElement
            .querySelector('.datagrid-header .datagrid-column.datagrid-row-actions')
            .getAttribute('aria-label')
        ).toBe('Select one of actionable rows');
      });
    });

    describe('Expandable rows', function () {
      it('detects if there is at least one expandable row', function () {
        const context = this.create(ClrDatagrid, ExpandableRowTest);
        const globalExpandableRows: ExpandableRowsCount = context.getClarityProvider(ExpandableRowsCount);
        expect(globalExpandableRows.hasExpandableRow).toBe(true);
        expect(context.clarityElement.querySelector('.datagrid-column.datagrid-expandable-caret')).not.toBeNull();
        context.testComponent.expandable = false;
        context.detectChanges();
        expect(globalExpandableRows.hasExpandableRow).toBe(false);
        expect(context.clarityElement.querySelector('.datagrid-column.datagrid-expandable-caret')).toBeNull();
      });

      it('can expand rows on initialization', async(function () {
        const context = this.create(ClrDatagrid, ExpandedOnInitTest);
        const caretIcon = context.clarityElement.querySelector('.datagrid-expandable-caret-icon');
        expect(caretIcon).not.toBeNull();
        expect(caretIcon.getAttribute('dir')).toBe('down');
        const rowDetail = context.clarityElement.querySelector('.datagrid-row-detail');
        expect(rowDetail).not.toBeNull();
      }));

      it('hides cells in dg-row-detail when columns are hidden and rows are replaced', function () {
        const context = this.create(ClrDatagrid, ExpandedReplacedCellsTest);
        context.detectChanges();
        const hiddenCell: HTMLElement = context.clarityElement.querySelector('.hidden-cell');
        expect(hiddenCell.classList).toContain(HIDDEN_COLUMN_CLASS);
        expect(window.getComputedStyle(hiddenCell).display).toBe('none');
      });

      it('can render mixed expandable/non-expandable', function () {
        const context = this.create(ClrDatagrid, MixedExpandableRowTest);
        const caretIcons = context.clarityElement.querySelectorAll('.datagrid-expandable-caret-icon');
        expect(caretIcons.length).toBe(2);
        const datagridCells = context.clarityElement.querySelectorAll('.datagrid-cell');
        expect(datagridCells.length).toBe(8); // 4 items * (1 for the data + 1 for the caret/placeholder)
      });

      it('should have aria-label with value `Expand one of the rows`', function () {
        const context = this.create(ClrDatagrid, ExpandableRowTest);
        context.getClarityProvider(RowActionService);
        expect(
          context.clarityElement
            .querySelector('.datagrid-header .datagrid-column.datagrid-expandable-caret')
            .getAttribute('aria-label')
        ).toBe('Expand one of the rows');
      });
    });

    describe('Single selection', function () {
      let context: TestContext<ClrDatagrid<number>, SingleSelectionTest>;
      let selection: Selection<number>;

      beforeEach(function () {
        context = this.create(ClrDatagrid, SingleSelectionTest, [Selection]);
        selection = context.getClarityProvider(Selection) as Selection<number>;
      });

      describe('TypeScript API', function () {
        // None for now, would duplicate tests of Selection provider
      });

      describe('Template API', function () {
        it('sets the currentSingle binding', function () {
          expect(selection.currentSingle).toBeUndefined();
          context.testComponent.selected = 1;
          context.detectChanges();
          expect(selection.currentSingle).toEqual(1);
          context.testComponent.selected = null;
          context.detectChanges();
          expect(selection.currentSingle).toBeNull();
        });

        it('does not emit a change event for on initialization, before selection', function () {
          let singleSelectedchangeCount = 0;
          const sub = context.clarityDirective.singleSelectedChanged.subscribe(() => singleSelectedchangeCount++);

          expect(selection.currentSingle).toBeUndefined();
          expect(singleSelectedchangeCount).toEqual(0);

          sub.unsubscribe();
        });

        it('it emits a change event when changing the selection', function () {
          let singleSelectedchangeCount = 0;
          const sub = context.clarityDirective.singleSelectedChanged.subscribe(() => singleSelectedchangeCount++);

          context.testComponent.selected = 1;
          context.detectChanges();
          expect(selection.currentSingle).toEqual(1);
          expect(singleSelectedchangeCount).toEqual(1);

          sub.unsubscribe();
        });

        it('it does not emit a change event when setting selection to undefined/null if already undefined/null', function () {
          let singleSelectedchangeCount = 0;
          const sub = context.clarityDirective.singleSelectedChanged.subscribe(() => singleSelectedchangeCount++);

          expect(selection.currentSingle).toBeUndefined();
          expect(singleSelectedchangeCount).toEqual(0);

          context.testComponent.selected = null;
          context.detectChanges();
          expect(selection.currentSingle).toBeUndefined();
          expect(singleSelectedchangeCount).toEqual(0);

          sub.unsubscribe();
        });

        it('it does not emit a change event when selecting the same value', function () {
          let singleSelectedchangeCount = 0;
          const sub = context.clarityDirective.singleSelectedChanged.subscribe(() => singleSelectedchangeCount++);

          context.testComponent.selected = 1;
          context.detectChanges();
          expect(selection.currentSingle).toEqual(1);
          expect(singleSelectedchangeCount).toEqual(1);

          // re-assigning to the same value should not increase the singleSelectedchangeCount
          context.testComponent.selected = 1;
          context.detectChanges();
          expect(selection.currentSingle).toEqual(1);
          expect(singleSelectedchangeCount).toEqual(1);

          sub.unsubscribe();
        });

        it('offers two way binding on the currentSingle value', function () {
          expect(selection.currentSingle).toBeUndefined();
          context.testComponent.selected = 1;
          context.detectChanges();
          expect(selection.currentSingle).toEqual(1);
          selection.currentSingle = 2;
          context.detectChanges();
          expect(context.testComponent.selected).toEqual(2);
        });
      });

      describe('View', function () {
        /*
         * For some reason this test is breaking all other tests.
         * Not sure why - need to investigate more
         *
        it('should have aria-label with  value Select', function() {
          expect(context.clarityElement.querySelector('.datagrid-header .datagrid-column.datagrid-select')
          .getAttribute('aria-label')).toBe('Select row from Datagrid');
        });
        */

        it('sets the proper selected class', function () {
          const row = context.clarityElement.querySelectorAll('.datagrid-row')[1];
          expect(row.classList.contains('datagrid-selected')).toBeFalsy();
          selection.currentSingle = 1;
          context.detectChanges();
          expect(row.classList.contains('datagrid-selected')).toBeTruthy();
        });
      });
    });

    describe('Multi selection', function () {
      let context: TestContext<ClrDatagrid<number>, OnPushTest>;
      let selection: Selection<number>;

      beforeEach(function () {
        context = this.create(ClrDatagrid, OnPushTest, [Selection], [MultiSelectionTest]);
        selection = context.getClarityProvider(Selection) as Selection<number>;
      });

      describe('Template API', function () {
        it('sets the selected binding with OnPush', function () {
          selection.selectionType = SelectionType.Multi;
          expect(selection.current).toEqual(context.testComponent.selected);
          context.testComponent.selected = [1];
          context.detectChanges();
          expect(selection.current).toEqual(context.testComponent.selected);
          context.testComponent.selected = [];
          context.detectChanges();
          expect(selection.current).toEqual(context.testComponent.selected);
        });
      });
    });

    describe('Chocolate', function () {
      describe('clrDgItems', function () {
        it("doesn't taunt with chocolate on actionable rows", function () {
          const context = this.create(ClrDatagrid, ChocolateClrDgItemsTest);
          context.testComponent.action = true;
          expect(() => context.detectChanges()).not.toThrow();
        });

        it("doesn't taunt with chocolate on expandable rows", function () {
          const context = this.create(ClrDatagrid, ChocolateClrDgItemsTest);
          context.testComponent.expandable = true;
          expect(() => context.detectChanges()).not.toThrow();
        });
      });

      describe('ngFor', function () {
        it("doesn't taunt with chocolate on actionable rows", function () {
          const context = this.create(ClrDatagrid, ChocolateNgForTest);
          context.testComponent.action = true;
          expect(() => context.detectChanges()).not.toThrow();
        });

        it("doesn't taunt with chocolate on expandable rows", function () {
          const context = this.create(ClrDatagrid, ChocolateNgForTest);
          context.testComponent.expandable = true;
          expect(() => context.detectChanges()).not.toThrow();
        });
      });

      describe('column hidden by default', function () {
        it("doesn't taunt with chocolate on columns hidden by default", function () {
          const context = this.create(ClrDatagrid, HiddenColumnTest);
          expect(() => context.detectChanges()).not.toThrow();
        });
      });
    });

    describe('Content Projection', function () {
      let context: TestContext<ClrDatagrid, OnPushTest>;
      let displayModeService: MockDisplayModeService;

      beforeEach(function () {
        context = this.createWithOverrideComponent(ClrDatagrid, ProjectionTest, [], [], DATAGRID_SPEC_PROVIDERS);
        displayModeService = context.getClarityProvider(DisplayModeService) as MockDisplayModeService;
      });

      it('moves columns into the display container', function () {
        displayModeService.updateView(DatagridDisplayMode.DISPLAY);
        const displayHeader = context.clarityElement.querySelector('.datagrid-header');
        const displayColumns = displayHeader.querySelectorAll('.datagrid-column');
        expect(displayColumns.length).toBe(2);
      });

      it('moves rows into the display container', function () {
        displayModeService.updateView(DatagridDisplayMode.DISPLAY);
        const displayTable = context.clarityElement.querySelector('.datagrid-table');
        const displayRows = displayTable.querySelectorAll('.datagrid-row');
        expect(displayRows.length).toBe(4);
      });

      it('moves columns into the calculation container', function () {
        displayModeService.updateView(DatagridDisplayMode.CALCULATE);
        const calculationHeader = context.clarityElement.querySelector('.datagrid-calculation-header');
        const calculationColumns = calculationHeader.querySelectorAll('.datagrid-column');
        expect(calculationColumns.length).toBe(2);
      });

      it('moves the rows into the calculation container', function () {
        displayModeService.updateView(DatagridDisplayMode.CALCULATE);
        const calculationTable = context.clarityElement.querySelector('.datagrid-calculation-table');
        const calculationRows = calculationTable.querySelectorAll('.datagrid-row');
        expect(calculationRows.length).toBe(3);
      });

      it('projects async row cells in correct order', function () {
        context.testComponent.items.push(7);
        context.detectChanges();
        const rows = context.clarityElement.querySelectorAll('.datagrid-row');
        const lastAddedRow = rows[rows.length - 1];
        const lastAddedRowCells = lastAddedRow.querySelectorAll('.datagrid-cell');
        expect(lastAddedRowCells[0].textContent).toBe('7');
        expect(lastAddedRowCells[1].textContent).toBe('49');
      });
    });

    describe('Integration with TabsContent and *clrIfActive', function () {
      let context: TestContext<ClrDatagrid, TabsIntegrationTest>;

      beforeEach(function () {
        context = this.create(ClrDatagrid, TabsIntegrationTest, DATAGRID_SPEC_PROVIDERS);
      });

      // Tests that tab-content was already attached to DOM when datagrid column width calculation was completed.
      it('column width calculation has completed', function () {
        expect(context.clarityElement.querySelector('.datagrid-column').getAttribute('style')).not.toBe('width: 0px;');
      });

      // Tests if manual style="width: 123px" was applied and not overridden during the calculation from the above test.
      it('column width manual setting is applied', function () {
        expect(context.clarityElement.querySelector('.datagrid-column').clientWidth).toBe(123);
        expect(context.clarityElement.querySelector('.datagrid-column').getAttribute('style')).toBe('width: 123px;');
      });
    });
  });
}
