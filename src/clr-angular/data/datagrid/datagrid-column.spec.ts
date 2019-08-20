/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';

import { DatagridPropertyComparator } from './built-in/comparators/datagrid-property-comparator';
import { DatagridStringFilter } from './built-in/filters/datagrid-string-filter';
import { ClrDatagridColumn } from './datagrid-column';
import { ClrDatagridSortOrder } from './enums/sort-order.enum';
import { DATAGRID_SPEC_PROVIDERS, TestContext } from './helpers.spec';
import { ClrDatagridComparatorInterface } from './interfaces/comparator.interface';
import { ClrDatagridFilterInterface } from './interfaces/filter.interface';
import { ClrDatagridStringFilterInterface } from './interfaces/string-filter.interface';
import { FiltersProvider } from './providers/filters';
import { Page } from './providers/page';
import { Sort } from './providers/sort';
import { StateDebouncer } from './providers/state-debouncer.provider';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { commonStringsDefault } from 'src/clr-angular/utils/i18n/common-strings.default';

export default function(): void {
  describe('DatagridColumn component', function() {
    describe('Typescript API', function() {
      let sortService: Sort<number>;
      let filtersService: FiltersProvider<number>;
      let comparator: TestComparator;
      let component: ClrDatagridColumn<number>;
      const commonStrings = new ClrCommonStringsService();

      beforeEach(function() {
        const stateDebouncer = new StateDebouncer();
        sortService = new Sort(stateDebouncer);
        filtersService = new FiltersProvider(new Page(stateDebouncer), stateDebouncer);
        comparator = new TestComparator();
        component = new ClrDatagridColumn(sortService, filtersService, null, commonStrings);
      });

      afterEach(() => {
        component.ngOnDestroy();
        const popoverContent = document.querySelectorAll('.clr-popover-content');
        popoverContent.forEach(content => document.body.removeChild(content));
      });

      it('receives a comparator to sort the column', function() {
        expect(component.sortable).toBe(false);
        component.sortBy = comparator;
        expect(component.sortable).toBe(true);
      });

      it('can sort according to the given comparator', function() {
        component.sortBy = comparator;
        expect(sortService.comparator).toBeUndefined();
        component.sort();
        expect(sortService.comparator).toBe(component.sortBy);
        expect(sortService.reverse).toBe(false);
        component.sort();
        expect(sortService.comparator).toBe(component.sortBy);
        expect(sortService.reverse).toBe(true);
      });

      it("doesn't sort without a comparator", function() {
        expect(sortService.comparator).toBeUndefined();
        component.sort();
        expect(sortService.comparator).toBeUndefined();
      });

      it('knows if the column is currently sorted', function() {
        component.sortBy = comparator;
        expect(component.sorted).toBe(false);
        component.sort();
        expect(component.sorted).toBe(true);
        component.sort();
        expect(component.sorted).toBe(true);
      });

      it('sorts according to the optional input parameter', function() {
        component.sortBy = comparator;
        expect(component.sortOrder).toBe(ClrDatagridSortOrder.UNSORTED);
        component.sort(true);
        expect(component.sortOrder).toBe(ClrDatagridSortOrder.DESC);
        component.sort(true);
        expect(component.sortOrder).toBe(ClrDatagridSortOrder.DESC);
        component.sort(false);
        expect(component.sortOrder).toBe(ClrDatagridSortOrder.ASC);
      });

      it('knows the column current sorting order', function() {
        component.sortBy = comparator;
        expect(component.sortOrder).toBe(ClrDatagridSortOrder.UNSORTED);
        component.sort();
        expect(component.sortOrder).toBe(ClrDatagridSortOrder.ASC);
        component.sort();
        expect(component.sortOrder).toBe(ClrDatagridSortOrder.DESC);
      });

      it('knows when the column has an ascending sortIcon', function() {
        component.sortBy = comparator;
        expect(component.sortIcon).toBeUndefined();
        component.sort();
        expect(component.sortIcon).toBe('arrow');
      });

      it('knows when the column has a descending sortIcon', function() {
        component.sortBy = comparator;
        expect(component.sortIcon).toBeUndefined();
        component.sort();
        component.sort();
        expect(component.sortIcon).toBe('arrow down');
      });

      it('sets the column sortIcon to null when sort is cleared', function() {
        component.sortBy = comparator;
        expect(component.sortIcon).toBe(undefined);
        component.sort();
        sortService.clear();
        expect(component.sortIcon).toBeNull();
      });

      it('offers a shortcut to sort based on a property name', function() {
        component.field = 'test';
        expect(sortService.comparator).toBeUndefined();
        component.sort();
        expect(sortService.comparator).toEqual(new DatagridPropertyComparator('test'));
      });

      it('sorts based on a property name if sortyBy is undefined', function() {
        component.field = 'test';
        component.sortBy = undefined;
        expect(sortService.comparator).toBeUndefined();
        component.sort();
        expect(sortService.comparator).toEqual(new DatagridPropertyComparator('test'));
      });

      it('sorts based on a property name if sortyBy becomes undefined', function() {
        component.sortBy = comparator;
        component.field = 'test';
        component.sortBy = undefined;
        expect(sortService.comparator).toBeUndefined();
        component.sort();
        expect(sortService.comparator).toEqual(new DatagridPropertyComparator('test'));
      });

      it('sorts based on a property shortcut for sortBy without a given comparator', function() {
        component.sortBy = 'test';
        expect(sortService.comparator).toBeUndefined();
        component.sort();
        expect(sortService.comparator).toEqual(new DatagridPropertyComparator('test'));
      });
    });

    describe('Template API', function() {
      it('provides a wrapped view for the content', function() {
        this.context = this.create(ClrDatagridColumn, SimpleTest, DATAGRID_SPEC_PROVIDERS);
        this.directive = this.context.clarityDirective;
        expect(this.directive._view).toBeDefined();
      });
      it('receives an input for the comparator', function() {
        this.context = this.create(ClrDatagridColumn, SimpleTest, DATAGRID_SPEC_PROVIDERS);
        this.comparator = new TestComparator();
        this.context.testComponent.comparator = this.comparator;
        this.context.detectChanges();
        expect(this.context.clarityDirective.sortBy).toBe(this.comparator);
      });

      it('receives a string input for the property shortcut comparator', function() {
        this.context = this.create(ClrDatagridColumn, SimpleTest, DATAGRID_SPEC_PROVIDERS);
        this.comparator = new DatagridPropertyComparator('test');
        this.context.testComponent.comparator = 'test';
        this.context.detectChanges();
        expect(this.context.clarityDirective.sortBy).toEqual(this.comparator);
      });

      it('receives an input for the property name', function() {
        this.context = this.create(ClrDatagridColumn, SimpleTest, DATAGRID_SPEC_PROVIDERS);
        this.context.testComponent.field = 'test';
        this.context.detectChanges();
        expect(this.context.clarityDirective.field).toBe('test');
      });

      it('receives an input for the property filter value', function() {
        this.context = this.create(ClrDatagridColumn, PreFilterTest, DATAGRID_SPEC_PROVIDERS);
        this.context.testComponent.field = 'test';
        this.context.testComponent.filterValue = 'M';
        this.context.detectChanges();
        expect(this.context.clarityDirective.filterValue).toBe('M');
      });

      it('offers two-way binding on the sorted state', function() {
        this.context = this.create(ClrDatagridColumn, SimpleDeprecatedTest, DATAGRID_SPEC_PROVIDERS);
        this.comparator = new TestComparator();
        this.context.testComponent.comparator = this.comparator;
        this.context.testComponent.sorted = true;
        this.context.detectChanges();
        expect(this.context.clarityDirective.sorted).toBe(true); // dg col instance
        this.context.getClarityProvider(Sort).clear();
        this.context.detectChanges();
        expect(this.context.testComponent.sorted).toBe(false);
      });

      it('offers two-way binding on the sortOrder state', function() {
        this.context = this.create(ClrDatagridColumn, SimpleTest, DATAGRID_SPEC_PROVIDERS);
        this.comparator = new TestComparator();
        this.context.testComponent.comparator = this.comparator;
        this.context.testComponent.sortOrder = ClrDatagridSortOrder.DESC;
        this.context.detectChanges();
        expect(this.context.clarityDirective.sortOrder).toBe(ClrDatagridSortOrder.DESC); // dg col instance
        this.context.getClarityProvider(Sort).clear();
        this.context.detectChanges();
        expect(this.context.testComponent.sortOrder).toBe(ClrDatagridSortOrder.UNSORTED);
        this.context.clarityDirective.sortOrder = ClrDatagridSortOrder.ASC;
        this.context.detectChanges();
        expect(this.context.testComponent.sortOrder).toBe(ClrDatagridSortOrder.ASC);
      });

      it('offers two-way binding on the filtered state', function() {
        this.context = this.create(ClrDatagridColumn, PreFilterTest, DATAGRID_SPEC_PROVIDERS);
        this.context.testComponent.field = 'test';
        this.context.testComponent.filterValue = 'M';
        this.context.detectChanges();
        expect(this.context.clarityDirective.filterValue).toBe('M');

        this.context.clarityDirective.filterValue = 't';
        this.context.detectChanges();
        expect(this.context.testComponent.filterValue).toBe('t');
      });

      it('should emit on string filter value changes', function() {
        this.context = this.create(ClrDatagridColumn, PreFilterTest, DATAGRID_SPEC_PROVIDERS);
        this.context.testComponent.field = 'test';

        this.context.detectChanges();

        const stringFilterDebugElement = this.context.fixture.debugElement.query(By.directive(DatagridStringFilter));
        const stringFilterComponent = stringFilterDebugElement.injector.get(DatagridStringFilter);

        stringFilterComponent.value = 'T';
        expect(this.context.testComponent.filterValue).toBe('T');

        stringFilterComponent.value = '';
        expect(this.context.testComponent.filterValue).toBe('');

        stringFilterComponent.value = 'm';
        expect(this.context.testComponent.filterValue).toBe('m');
      });

      it('accepts a custom filter in the projected content', function() {
        this.context = this.create(ClrDatagridColumn, FilterTest, DATAGRID_SPEC_PROVIDERS);
        expect(TestBed.get(FiltersProvider).getActiveFilters()).toEqual([this.context.testComponent.filter]);
      });

      it('accepts a custom string filter in the projected content', function() {
        this.context = this.create(ClrDatagridColumn, StringFilterTest, DATAGRID_SPEC_PROVIDERS);
        this.stringFilter = this.context.testComponent.stringFilter.filter;
        // We make the filter active to see if the FiltersProvider provider knows about it
        this.stringFilter.value = 'hello';
        this.context.detectChanges();
        expect(TestBed.get(FiltersProvider).getActiveFilters()).toEqual([this.stringFilter]);
      });

      it('prioritizes custom comparators over the default property name one', function() {
        this.context = this.create(ClrDatagridColumn, SimpleTest, DATAGRID_SPEC_PROVIDERS);
        this.comparator = new TestComparator();
        this.context.testComponent.comparator = this.comparator;
        this.context.detectChanges();
        this.context.testComponent.field = 'test';
        this.context.detectChanges();
        expect(this.context.clarityDirective.sortBy).toBe(this.comparator);
      });

      it('prioritizes custom filters over the default property name one', function() {
        this.context = this.create(ClrDatagridColumn, FilterTest, DATAGRID_SPEC_PROVIDERS);
        this.context.testComponent.field = 'test';
        this.context.detectChanges();
        expect(this.context.clarityElement.querySelectorAll('clr-dg-filter').length).toBe(1);
        expect(TestBed.get(FiltersProvider).getActiveFilters()).toEqual([this.context.testComponent.filter]);
      });

      it('prioritizes custom string filters over the default property name one', function() {
        this.context = this.create(ClrDatagridColumn, StringFilterTest, DATAGRID_SPEC_PROVIDERS);
        this.context.testComponent.field = 'test';
        this.context.detectChanges();
        this.stringFilter = this.context.testComponent.stringFilter.filter;
        // We make the filter active to see if the FiltersProvider provider knows about it
        this.stringFilter.value = 'hello';
        this.context.detectChanges();
        expect(this.context.clarityElement.querySelectorAll('clr-dg-filter').length).toBe(1);
        expect(TestBed.get(FiltersProvider).getActiveFilters()).toEqual([this.stringFilter]);
      });
    });

    describe('View basics', function() {
      let context: TestContext<ClrDatagridColumn<number | string>, SimpleTest>;

      beforeEach(function() {
        context = this.create(ClrDatagridColumn, SimpleTest, DATAGRID_SPEC_PROVIDERS);
      });

      it('projects content', function() {
        expect(context.clarityElement.textContent.trim()).toMatch('Hello world');
      });

      it('adds the .datagrid-column class to the host', function() {
        expect(context.clarityElement.classList.contains('datagrid-column')).toBeTruthy();
      });

      it('displays a clickable column title to sort if the column is sortable', function() {
        let title = context.clarityElement.querySelector('.datagrid-column-title');
        expect(title.tagName).toBe('SPAN');
        title.click();
        context.detectChanges();
        expect(context.clarityDirective.sortOrder).toBe(ClrDatagridSortOrder.UNSORTED);
        context.testComponent.comparator = new TestComparator();
        context.detectChanges();
        title = context.clarityElement.querySelector('.datagrid-column-title');
        expect(title.tagName).toBe('BUTTON');
        title.click();
        context.detectChanges();
        expect(context.clarityDirective.sortOrder).toBe(ClrDatagridSortOrder.ASC);
        title.click();
        context.detectChanges();
        expect(context.clarityDirective.sortOrder).toBe(ClrDatagridSortOrder.DESC);
      });

      it('add aria-label to button', function() {
        context.testComponent.comparator = new TestComparator();
        context.detectChanges();
        const title = context.clarityElement.querySelector('.datagrid-column-title');
        expect(title.attributes['aria-label'].value).toBe(commonStringsDefault.sortColumn);
      });

      it('adds and removes the correct icon when sorting', function() {
        context.clarityDirective.sortBy = new TestComparator();
        context.clarityDirective.sort();
        context.detectChanges();

        const arrowIcon = context.clarityElement.querySelector('.sort-icon');
        expect(arrowIcon.getAttribute('shape')).toEqual('arrow');

        context.clarityDirective.sort();
        context.detectChanges();
        expect(arrowIcon.getAttribute('shape')).toEqual('arrow down');

        const sortService = context.fixture.debugElement.query(By.directive(ClrDatagridColumn)).injector.get(Sort);
        sortService.clear();
        context.detectChanges();
        expect(context.clarityElement.querySelector('.sort-icon')).toBeNull();
      });

      it('adds a11y roles to the column', function() {
        expect(context.clarityElement.attributes.role.value).toEqual('columnheader');
        expect(context.clarityElement.attributes['aria-sort'].value).toBe('none');

        context.clarityDirective.sortBy = new TestComparator();
        context.clarityDirective.sort();
        context.detectChanges();
        expect(context.clarityElement.attributes['aria-sort'].value).toBe('ascending');

        context.clarityDirective.sort();
        context.detectChanges();
        expect(context.clarityElement.attributes['aria-sort'].value).toBe('descending');
      });
    });

    describe('View filters', function() {
      it("doesn't display any filter by default", function() {
        this.context = this.create(ClrDatagridColumn, SimpleTest, DATAGRID_SPEC_PROVIDERS);
        expect(this.context.clarityElement.querySelector('clr-dg-filter')).toBeNull();
      });

      it('displays a string filter when using a property name', function() {
        this.context = this.create(ClrDatagridColumn, SimpleTest, DATAGRID_SPEC_PROVIDERS);
        this.context.testComponent.field = 'test';
        this.context.detectChanges();
        expect(this.context.clarityElement.querySelector('clr-dg-string-filter')).not.toBeNull();
      });

      it('projects custom filters outside of the title', function() {
        this.context = this.create(ClrDatagridColumn, FilterTest, DATAGRID_SPEC_PROVIDERS);
        expect(this.context.clarityElement.querySelector('.my-filter')).not.toBeNull();
        const title = this.context.clarityElement.querySelector('.datagrid-column-title');
        expect(title.querySelector('.my-filter')).toBeNull();
      });

      it('projects custom string filters outside of the title', function() {
        this.context = this.create(ClrDatagridColumn, StringFilterTest, DATAGRID_SPEC_PROVIDERS);
        expect(this.context.clarityElement.querySelector('.my-string-filter')).not.toBeNull();
        const title = this.context.clarityElement.querySelector('.datagrid-column-title');
        expect(title.querySelector('.my-string-filter')).toBeNull();
      });

      it('un-registers the correct filter', function() {
        this.context = this.create(ClrDatagridColumn, UnregisterTest, DATAGRID_SPEC_PROVIDERS);
        this.context.testComponent.show = true;
        this.context.clarityDirective.filters.add(new TestFilter());
        this.context.clarityDirective.filters.add(new TestFilter());
        this.context.detectChanges();
        const activeFilters = this.context.clarityDirective.filters.getActiveFilters();
        expect(activeFilters.length).toBe(3);
        this.context.testComponent.show = false;
        this.context.detectChanges();
        const activeFiltersTest = this.context.clarityDirective.filters.getActiveFilters();
        expect(activeFiltersTest.length).toBe(2);
      });
    });
  });
}

class TestComparator implements ClrDatagridComparatorInterface<number> {
  compare(a: number, b: number): number {
    return 0;
  }
}

class TestFilter implements ClrDatagridFilterInterface<number> {
  isActive(): boolean {
    return true;
  }

  accepts(n: number): boolean {
    return true;
  }

  changes = new Subject<boolean>();
}

class TestStringFilter implements ClrDatagridStringFilterInterface<number> {
  accepts(n: number, search: string): boolean {
    return true;
  }
}

@Component({
  template: `
        <clr-dg-column
                [clrDgSortBy]="comparator"
                [clrDgField]="field"
                [(clrDgSorted)]="sorted">
            Hello world
        </clr-dg-column>
    `,
})
class SimpleDeprecatedTest {
  comparator: ClrDatagridComparatorInterface<number>;
  field: string;
  sorted = false;
}

@Component({
  template: `
        <clr-dg-column
                [clrDgSortBy]="comparator"
                [clrDgField]="field"
                [(clrDgSortOrder)]="sortOrder">
            Hello world
        </clr-dg-column>
    `,
})
class SimpleTest {
  comparator: ClrDatagridComparatorInterface<number> | string;
  field: string;
  sortOrder = ClrDatagridSortOrder.UNSORTED;
}

@Component({
  template: `
        <clr-dg-column [clrDgField]="field">
            Column title
            <clr-dg-filter class="my-filter" [clrDgFilter]="filter">
                Filter content
            </clr-dg-filter>
        </clr-dg-column>
    `,
})
class FilterTest {
  filter = new TestFilter();
  field: string;
}

@Component({
  template: `
        <clr-dg-column [clrDgField]="field" [(clrFilterValue)]="filterValue">
            Hello world
            <clr-dg-string-filter class="my-string-filter" [clrDgStringFilter]="filter"></clr-dg-string-filter>
        </clr-dg-column>
    `,
})
class StringFilterTest {
  filter = new TestStringFilter();
  field: string;

  @ViewChild(DatagridStringFilter, { static: false })
  stringFilter: DatagridStringFilter<number>;
}

@Component({
  template: `
        <clr-dg-column [(clrFilterValue)]="filterValue" [clrDgField]="field" >
            Column Title
        </clr-dg-column>
    `,
})
class PreFilterTest {
  field: string;
  filterValue: string;
}

@Component({
  template: `
        <clr-dg-column>
            Column Title
            <clr-dg-string-filter *ngIf="show" [(clrFilterValue)]="filterValue"
                                  [clrDgStringFilter]="filter"></clr-dg-string-filter>
        </clr-dg-column>
    `,
})
class UnregisterTest {
  show: boolean;
  filter = new TestStringFilter();
  filterValue = 'M';
}
