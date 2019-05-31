/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ClrDatagridItems } from './datagrid-items';
import { ClrDatagridModule } from './datagrid.module';
import { FiltersProvider } from './providers/filters';
import { Items } from './providers/items';
import { Page } from './providers/page';
import { Sort } from './providers/sort';
import { StateDebouncer } from './providers/state-debouncer.provider';

@Component({
  template: `
<ul>
  <li *clrDgItems="let n of numbers; trackBy: trackBy">{{n}}</li>
</ul>
`,
})
class FullTest {
  @ViewChild(ClrDatagridItems) datagridItems: ClrDatagridItems<number>;

  numbers = [1, 2, 3, 4, 5];

  trackBy: (index: number, item: number) => any;
}

@Component({
  template: `
<ul>
  <li *clrDgItems="let n of numbers; trackBy: trackBy">{{n}}</li>
</ul>
`,
})
class TrackByIndexTest {
  @ViewChild(ClrDatagridItems) datagridItems: ClrDatagridItems<number>;

  numbers = [1, 2, 3, 4, 5];

  trackBy = (index, item) => index;
}

export default function(): void {
  describe('ClrDatagridItems directive', function() {
    describe('correctly initializes', () => {
      beforeEach(function() {
        /*
               * Since the ClrDatagridItems element is a template that isn't rendered in the DOM,
               * we can't use our usual shortcut, we need to rely on @ViewChild
               */
        TestBed.configureTestingModule({
          imports: [ClrDatagridModule],
          declarations: [FullTest],
          providers: [Items, FiltersProvider, Sort, Page, StateDebouncer],
        });
        this.fixture = TestBed.createComponent(FullTest);
        this.fixture.detectChanges();
        this.testComponent = this.fixture.componentInstance;
        this.clarityDirective = this.fixture.componentInstance.datagridItems;
        this.itemsProvider = TestBed.get(Items);
      });

      afterEach(function() {
        this.fixture.destroy();
      });

      it('makes the Items provider smart', function() {
        expect(this.itemsProvider.smart).toBe(true);
      });

      it('receives an input for the array of items', function() {
        expect(this.itemsProvider.displayed).toEqual([1, 2, 3, 4, 5]);
      });

      it('subscribes to changes in the datagrid Items (_items)', function() {
        const initialContent = this.fixture.elementRef.nativeElement.textContent;
        expect(initialContent.trim()).toEqual('12345');
        this.testComponent.numbers.push(6);
        this.fixture.detectChanges();
        const updatedContent = this.fixture.elementRef.nativeElement.textContent;
        expect(updatedContent.trim()).toEqual('123456');
      });

      it('handles a null input for the array of items', function() {
        this.testComponent.numbers = null;
        this.fixture.detectChanges();
        expect(this.clarityDirective._rawItems).toEqual([]);
      });

      it('handles an undefined input for the array of items', function() {
        this.testComponent.numbers = undefined;
        this.fixture.detectChanges();
        expect(this.clarityDirective._rawItems).toEqual([]);
      });
    });

    describe('handles Item arrays correctly', () => {
      beforeEach(function() {
        /*
               * Since the ClrDatagridItems element is a template that isn't rendered in the DOM,
               * we can't use our usual shortcut, we need to rely on @ViewChild
               */
        TestBed.configureTestingModule({
          imports: [ClrDatagridModule],
          declarations: [TrackByIndexTest],
          providers: [Items, FiltersProvider, Sort, Page, StateDebouncer],
        });
        this.fixture = TestBed.createComponent(TrackByIndexTest);
        this.fixture.detectChanges();
        this.testComponent = this.fixture.componentInstance;
        this.clarityDirective = this.fixture.componentInstance.datagridItems;
        this.itemsProvider = TestBed.get(Items);
      });

      afterEach(function() {
        this.fixture.destroy();
      });

      it('keeps the Items provider up to date with array changes', function() {
        expect(this.itemsProvider.displayed).toEqual([1, 2, 3, 4, 5]);
        this.testComponent.numbers[0] = 6;
        this.fixture.detectChanges();
        expect(this.itemsProvider.displayed).toEqual([6, 2, 3, 4, 5]);
        this.testComponent.numbers = [];
        this.fixture.detectChanges();
        expect(this.itemsProvider.displayed).toEqual([]);
      });

      it('receives an input for the trackBy option', function() {
        expect(this.clarityDirective.iterableProxy.ngForTrackBy).toBe(this.testComponent.trackBy);
      });

      it('correctly mutates and resets an array with trackBy', function() {
        // Initial state
        this.fixture.nativeElement.querySelectorAll('li:first-child').forEach(li => (li.style.color = 'red'));
        const firstItem = this.fixture.nativeElement.querySelector('li');
        expect(firstItem.style.color).toBe('red');
        expect(firstItem.textContent.trim()).toBe('1');

        // First mutation
        this.testComponent.numbers.unshift(42);
        this.fixture.detectChanges();
        const unshiftedItem = this.fixture.nativeElement.querySelector('li');
        expect(this.itemsProvider.displayed).toEqual([42, 1, 2, 3, 4, 5]);
        expect(unshiftedItem.style.color).toBe('red');

        // Second mutation
        this.testComponent.numbers.unshift(42);
        this.fixture.detectChanges();

        // Resetting
        this.testComponent.numbers = [42];
        this.fixture.detectChanges();
        const replacedItem = this.fixture.nativeElement.querySelector('li');
        expect(replacedItem.style.color).toBe('red');
      });
    });
  });
}
