/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { TrackByFunction } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { ClrDatagridFilterInterface } from '../interfaces/filter.interface';

import { FiltersProvider } from './filters';
import { Items } from './items';
import { Page } from './page';
import { Selection, SelectionType } from './selection';
import { Sort } from './sort';
import { StateDebouncer } from './state-debouncer.provider';

const numberSort = (a: number, b: number) => a - b;

export default function(): void {
  describe('Selection provider', function() {
    describe('with smart items', function() {
      let selectionInstance: Selection<number>;
      let sortInstance: Sort<number>;
      let pageInstance: Page;
      let filtersInstance: FiltersProvider<number>;
      let itemsInstance: Items<number>;

      beforeEach(function() {
        const stateDebouncer = new StateDebouncer();
        pageInstance = new Page(stateDebouncer);
        filtersInstance = new FiltersProvider(pageInstance, stateDebouncer);
        sortInstance = new Sort(stateDebouncer);
        itemsInstance = new Items(filtersInstance, sortInstance, pageInstance);
        itemsInstance.smartenUp();
        itemsInstance.all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        selectionInstance = new Selection(itemsInstance, filtersInstance);
      });

      afterEach(function() {
        selectionInstance.destroy();
        itemsInstance.destroy();
      });

      it('starts inactive', function() {
        expect(selectionInstance.selectionType).toBe(SelectionType.None);
        expect(selectionInstance.current).toBeUndefined();
        selectionInstance.setSelected(4, true);
        expect(selectionInstance.current).toBeUndefined();
      });

      it('can select/deselect items in multi selection type', function() {
        selectionInstance.selectionType = SelectionType.Multi;
        selectionInstance.setSelected(4, true);
        expect(selectionInstance.current).toEqual([4]);
        selectionInstance.setSelected(2, true);
        expect(selectionInstance.current).toEqual([4, 2]);
      });

      it('can select/deselect all items at once in multi selection type', function() {
        selectionInstance.selectionType = SelectionType.Multi;
        selectionInstance.toggleAll();
        expect(selectionInstance.current).toEqual(itemsInstance.displayed);
        selectionInstance.toggleAll();
        expect(selectionInstance.current).toEqual([]);
        selectionInstance.setSelected(4, true);
        expect(selectionInstance.current).toEqual([4]);
        selectionInstance.toggleAll();
        expect(selectionInstance.current.sort(numberSort)).toEqual(itemsInstance.displayed);
      });

      it("can't select/deselect all items at once in other single selection type", function() {
        selectionInstance.selectionType = SelectionType.Single;
        selectionInstance.toggleAll();
        expect(selectionInstance.currentSingle).toBeUndefined();
        selectionInstance.currentSingle = 4;
        selectionInstance.toggleAll();
        expect(selectionInstance.currentSingle).toEqual(4);
      });

      it('can select/deselect all items at once in multi selection type if no pagination exist', function() {
        selectionInstance.selectionType = SelectionType.Multi;
        selectionInstance.toggleAll();
        expect(selectionInstance.current).toEqual(itemsInstance.displayed);
        selectionInstance.toggleAll();
        expect(selectionInstance.current).toEqual([]);
        selectionInstance.setSelected(4, true);
        expect(selectionInstance.current).toEqual([4]);
        selectionInstance.toggleAll();
        expect(selectionInstance.current.sort(numberSort)).toEqual(itemsInstance.displayed);
      });

      it('can select/deselect items only on the current page', function() {
        selectionInstance.selectionType = SelectionType.Multi;
        pageInstance.size = 3;
        selectionInstance.current = [4, 1, 2];
        pageInstance.current = 2;
        selectionInstance.toggleAll();
        expect(selectionInstance.current).toEqual([4, 1, 2, 5, 6]);
        selectionInstance.toggleAll();
        expect(selectionInstance.current).toEqual([1, 2]);
      });

      it("can't select/deselect all items at once in other single selection type", function() {
        selectionInstance.selectionType = SelectionType.Single;
        selectionInstance.toggleAll();
        expect(selectionInstance.currentSingle).toBeUndefined();
        selectionInstance.currentSingle = 4;
        selectionInstance.toggleAll();
        expect(selectionInstance.currentSingle).toEqual(4);
      });

      it('can detect if an item is selected', function() {
        selectionInstance.selectionType = SelectionType.Multi;
        expect(selectionInstance.isSelected(4)).toBe(false);
        selectionInstance.setSelected(4, true);
        expect(selectionInstance.isSelected(4)).toBe(true);
        selectionInstance.setSelected(4, false);
        expect(selectionInstance.isSelected(4)).toBe(false);
      });

      it('can detect if all items are selected in multi selection type', function() {
        selectionInstance.selectionType = SelectionType.Multi;
        expect(selectionInstance.isAllSelected()).toBe(false);
        selectionInstance.setSelected(4, true);
        expect(selectionInstance.isAllSelected()).toBe(false);
        selectionInstance.current = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        expect(selectionInstance.isAllSelected()).toBe(true);
      });

      it('accepts pre-selected items in multi selection type', function() {
        selectionInstance.selectionType = SelectionType.Multi;
        selectionInstance.current = [4, 2];
        expect(selectionInstance.isSelected(1)).toBe(false);
        expect(selectionInstance.isSelected(2)).toBe(true);
        expect(selectionInstance.isSelected(3)).toBe(false);
        expect(selectionInstance.isSelected(4)).toBe(true);
      });

      it(
        'accepts pre-selected items in multi selection type when `all` has not been defined',
        fakeAsync(function() {
          itemsInstance.all = null;
          tick();
          selectionInstance.selectionType = SelectionType.Multi;
          selectionInstance.current = [4, 2];
          tick();
          itemsInstance.all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          tick();
          expect(selectionInstance.isSelected(1)).toBe(false);
          expect(selectionInstance.isSelected(2)).toBe(true);
          expect(selectionInstance.isSelected(3)).toBe(false);
          expect(selectionInstance.isSelected(4)).toBe(true);
        })
      );

      it('accepts pre-selected item in single selection type', function() {
        selectionInstance.selectionType = SelectionType.Single;
        selectionInstance.currentSingle = 2;
        expect(selectionInstance.isSelected(1)).toBe(false);
        expect(selectionInstance.isSelected(2)).toBe(true);
        expect(selectionInstance.isSelected(3)).toBe(false);
        expect(selectionInstance.isSelected(4)).toBe(false);
      });

      it(
        'accepts pre-selected item in single selection type when `all` has not been defined',
        fakeAsync(function() {
          itemsInstance.all = null;
          tick();
          selectionInstance.selectionType = SelectionType.Single;
          selectionInstance.currentSingle = 2;
          tick();
          itemsInstance.all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          tick();
          expect(selectionInstance.isSelected(1)).toBe(false);
          expect(selectionInstance.isSelected(2)).toBe(true);
          expect(selectionInstance.isSelected(3)).toBe(false);
          expect(selectionInstance.isSelected(4)).toBe(false);
        })
      );

      it('exposes an Observable to follow selection changes in multi selection type', function() {
        selectionInstance.selectionType = SelectionType.Multi;
        let nbChanges = 0;
        let currentSelection: number[];
        selectionInstance.change.subscribe((items: number[]) => {
          nbChanges++;
          currentSelection = items;
        });
        selectionInstance.setSelected(4, true);
        expect(currentSelection).toEqual([4]);
        selectionInstance.toggleAll();
        expect(currentSelection.sort(numberSort)).toEqual(itemsInstance.displayed);
        selectionInstance.toggleAll();
        expect(currentSelection).toEqual([]);
        expect(nbChanges).toBe(3);
      });

      it('exposes an Observable to follow selection changes in single selection type', function() {
        selectionInstance.selectionType = SelectionType.Single;
        let nbChanges = 0;
        let currentSelection: number;
        selectionInstance.change.subscribe((item: number) => {
          nbChanges++;
          currentSelection = item;
        });
        selectionInstance.currentSingle = 4;
        expect(currentSelection).toBe(4);
        selectionInstance.currentSingle = 2;
        expect(currentSelection).toBe(2);
        expect(nbChanges).toBe(2);
      });

      it('does not emit selection change twice after a filter is applied', function() {
        selectionInstance.selectionType = SelectionType.Multi;
        let nbChanges = 0;
        selectionInstance.change.subscribe((items: any) => {
          nbChanges++;
        });

        selectionInstance.current = [4, 2];
        expect(nbChanges).toBe(1);

        const evenFilter: EvenFilter = new EvenFilter();
        filtersInstance.add(<ClrDatagridFilterInterface<any>>evenFilter);
        evenFilter.toggle();

        // current is set to [] because filter is applied, and nbChanges is 3.
        // there isn't an additional change that would have been fired to
        // update current selection given the new data set post filter.
        expect(selectionInstance.current.length).toBe(0);
        expect(nbChanges).toBe(2);
      });

      it('clears selection when a filter is added', function() {
        selectionInstance.selectionType = SelectionType.Multi;
        selectionInstance.current = [4, 2];

        const evenFilter: EvenFilter = new EvenFilter();

        filtersInstance.add(<ClrDatagridFilterInterface<number>>evenFilter);

        evenFilter.toggle();

        expect(selectionInstance.current.length).toBe(0);
      });

      it(
        'keeps only the remaining selection when the items are updated',
        fakeAsync(function() {
          selectionInstance.selectionType = SelectionType.Multi;
          selectionInstance.current = [4, 2];

          itemsInstance.all = [1, 2, 3, 5];

          tick();

          expect(selectionInstance.current.length).toBe(1);
          expect(selectionInstance.current).toEqual([2]);
        })
      );

      it(
        'keeps all the selections when the items are updated ' + 'and the contain all the previous selection',
        fakeAsync(function() {
          selectionInstance.selectionType = SelectionType.Multi;
          selectionInstance.current = [4, 2];

          itemsInstance.all = [1, 2, 3, 4, 5];

          tick();

          expect(selectionInstance.current.length).toBe(2);
          expect(selectionInstance.current).toEqual([4, 2]);
        })
      );

      it(
        'clears the selections when the items are updated and ' + 'they do not contain the previous selection',
        fakeAsync(function() {
          selectionInstance.selectionType = SelectionType.Multi;
          selectionInstance.current = [4, 2];

          itemsInstance.all = [1, 3, 5];

          tick();

          expect(selectionInstance.current.length).toBe(0);
          expect(selectionInstance.current).toEqual([]);
        })
      );

      it('maintains the selection when the page is changed', function() {
        selectionInstance.selectionType = SelectionType.Multi;
        selectionInstance.current = [4, 2];

        pageInstance.size = 3;

        pageInstance.current = 2;

        expect(selectionInstance.current).toEqual([4, 2]);
      });
    });

    describe('client-side selection and pagination', function() {
      type Item = { id: number; modified?: boolean };

      let selectionInstance: Selection<Item>;
      let sortInstance: Sort<Item>;
      let pageInstance: Page;
      let filtersInstance: FiltersProvider<Item>;
      let itemsInstance: Items<Item>;

      const items = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
      ];

      function cloneItems() {
        return items.map(item => {
          return { ...item };
        });
      }

      function testSelectedItems(latestItems, selectedIndexes: number[]) {
        latestItems.forEach((item, index) => {
          const state = selectedIndexes.indexOf(index) > -1;
          expect(selectionInstance.isSelected(item)).toEqual(state);
        });
      }

      beforeEach(function() {
        const stateDebouncer = new StateDebouncer();
        pageInstance = new Page(stateDebouncer);
        filtersInstance = new FiltersProvider(pageInstance, stateDebouncer);
        sortInstance = new Sort(stateDebouncer);
        itemsInstance = new Items(filtersInstance, sortInstance, pageInstance);
        itemsInstance.smartenUp();
        itemsInstance.all = items;
        pageInstance.size = 3;

        selectionInstance = new Selection(itemsInstance, filtersInstance);
      });

      afterEach(function() {
        selectionInstance.destroy();
        itemsInstance.destroy();
      });

      describe('multi-selection', function() {
        beforeEach(function() {
          selectionInstance.selectionType = SelectionType.Multi;
        });

        it('should preserve selection on page change', function() {
          selectionInstance.setSelected(items[2], true);
          expect(selectionInstance.current).toEqual([items[2]]);
          pageInstance.current = 3;
          expect(selectionInstance.current).toEqual([items[2]]);
        });

        function testTrackBy(trackBy: TrackByFunction<{ id: number }>) {
          return fakeAsync(function() {
            itemsInstance.trackBy = trackBy;
            selectionInstance.setSelected(items[2], true);
            const clones = cloneItems();
            itemsInstance.all = clones;
            tick();
            expect(selectionInstance.current).toEqual([clones[2]]);
            testSelectedItems(clones, [2]);
          });
        }

        it('should support trackBy item', testTrackBy((index, item) => item.id));
        it('should support trackBy index', testTrackBy((index, item) => index));
      });

      describe('single selection', function() {
        beforeEach(function() {
          selectionInstance.selectionType = SelectionType.Single;
        });

        it('should preserve selection on page change', function() {
          selectionInstance.currentSingle = items[2];
          pageInstance.current = 2;
          expect(selectionInstance.isSelected(items[2])).toBe(true);
          selectionInstance.currentSingle = items[5];
          pageInstance.current = 3;
          expect(selectionInstance.isSelected(items[5])).toBe(true);
        });

        it(
          'should clear selection if it is no longer in dataset',
          fakeAsync(() => {
            selectionInstance.currentSingle = items[2];
            pageInstance.current = 2;
            expect(selectionInstance.isSelected(items[2])).toBe(true);

            itemsInstance.all = cloneItems().splice(2, 1);
            tick();
            expect(selectionInstance.currentSingle).toBe(undefined);
          })
        );

        it('does not apply trackBy to single selection with no items', () => {
          const emptyItems = new Items(filtersInstance, sortInstance, pageInstance);
          const selection = new Selection(emptyItems, filtersInstance);

          spyOn(emptyItems, 'trackBy');

          expect(selection.currentSingle).toBeUndefined();
          selection.currentSingle = items[2];

          expect(emptyItems.trackBy).not.toHaveBeenCalled();
        });

        function testTrackBy(trackBy: TrackByFunction<{ id: number }>) {
          return fakeAsync(function() {
            itemsInstance.trackBy = trackBy;
            selectionInstance.currentSingle = items[2];
            const clones = cloneItems();
            itemsInstance.all = clones;
            tick();
            testSelectedItems(clones, [2]);
          });
        }

        it('should support trackBy item', testTrackBy((index, item) => item.id));
        it('should support trackBy index', testTrackBy((index, item) => index));
      });
    });

    describe('server-driven selection and pagination', function() {
      type Item = { id: number; modified?: boolean };

      let selectionInstance: Selection<Item>;
      let sortInstance: Sort<Item>;
      let pageInstance: Page;
      let filtersInstance: FiltersProvider<Item>;
      let itemsInstance: Items<Item>;

      const itemsA = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const itemsB = [{ id: 4 }, { id: 5 }, { id: 6 }];
      const itemsC = itemsA.map(item => Object.assign({ modified: true }, item));

      function testSelection(stateA, stateB, stateC) {
        expect(selectionInstance.isSelected(itemsA[0])).toEqual(stateA);
        expect(selectionInstance.isSelected(itemsB[0])).toEqual(stateB);
        expect(selectionInstance.isSelected(itemsC[0])).toEqual(stateC);
      }

      function testToggleAllSelection(stateA, stateB, stateC) {
        itemsA.forEach(element => {
          expect(selectionInstance.isSelected(element)).toEqual(stateA);
        });
        itemsB.forEach(element => {
          expect(selectionInstance.isSelected(element)).toEqual(stateB);
        });
        itemsC.forEach(element => {
          expect(selectionInstance.isSelected(element)).toEqual(stateC);
        });
      }

      beforeEach(function() {
        const stateDebouncer = new StateDebouncer();
        pageInstance = new Page(stateDebouncer);
        filtersInstance = new FiltersProvider(pageInstance, stateDebouncer);
        sortInstance = new Sort(stateDebouncer);
        itemsInstance = new Items(filtersInstance, sortInstance, pageInstance);

        selectionInstance = new Selection(itemsInstance, filtersInstance);
      });

      afterEach(function() {
        selectionInstance.destroy();
        itemsInstance.destroy();
      });

      describe('multi-selection', function() {
        beforeEach(function() {
          selectionInstance.selectionType = SelectionType.Multi;
        });
        // We don't support server-driven, multi-selection without trackBy.
        // We don't support server-driven, multi-selection, trackBy index.
        it(
          'should support trackBy item',
          fakeAsync(() => {
            itemsInstance.trackBy = (index, item) => item.id;
            itemsInstance.all = itemsA;
            tick();
            selectionInstance.setSelected(itemsA[0], true);
            testSelection(true, false, false);
            itemsInstance.all = itemsB;
            tick();
            testSelection(true, false, false);
            itemsInstance.all = itemsC;
            tick();
            testSelection(false, false, true);
            expect(selectionInstance.current[0].modified).toEqual(true);
          })
        );

        it(
          'accepts pre-selected items with trackBy when `all` has not been defined',
          fakeAsync(() => {
            itemsInstance.trackBy = (index, item) => item.id;
            selectionInstance.current = [{ id: 1 }, { id: 2 }, { id: 3 }];
            tick();
            itemsInstance.all = itemsA;
            tick();
            itemsA.forEach(item => {
              expect(selectionInstance.isSelected(item)).toBe(true);
            });
          })
        );

        it(
          'should support toggleAll selection on page change',
          fakeAsync(() => {
            itemsInstance.trackBy = (index, item) => item.id;
            itemsInstance.all = itemsA;
            pageInstance.size = 3;
            pageInstance.current = 1;
            tick();
            selectionInstance.toggleAll();
            testToggleAllSelection(true, false, false);
            itemsInstance.all = itemsB;
            pageInstance.current = 2;
            tick();
            testToggleAllSelection(true, false, false);
            itemsInstance.all = itemsC;
            pageInstance.current = 1;
            tick();
            testToggleAllSelection(false, false, true);
            expect(selectionInstance.current[0].modified).toEqual(true);
          })
        );
      });

      describe('single selection', function() {
        beforeEach(function() {
          selectionInstance.selectionType = SelectionType.Single;
        });
        // We don't support server-driven, multi-selection without trackBy.
        // We don't support server-driven, multi-selection, trackBy index.
        it(
          'should support trackBy item',
          fakeAsync(() => {
            itemsInstance.trackBy = (index, item) => item.id;
            itemsInstance.all = itemsA;
            tick();
            selectionInstance.currentSingle = itemsA[0];
            testSelection(true, false, false);
            itemsInstance.all = itemsB;
            tick();
            testSelection(true, false, false);
            // itemsInstance.all = itemsC;
            // tick();
            // testSelection(false, false, true);
            // expect(selectionInstance.currentSingle.modified).toEqual(true);
          })
        );

        it(
          'accepts pre-selected items with trackBy when `all` has not been defined',
          fakeAsync(() => {
            itemsInstance.trackBy = (index, item) => item.id;
            selectionInstance.currentSingle = { id: 1 };
            tick();
            itemsInstance.all = itemsA;
            tick();
            expect(selectionInstance.isSelected(itemsA[0])).toBe(true);
            expect(selectionInstance.isSelected(itemsA[1])).toBe(false);
            expect(selectionInstance.isSelected(itemsA[2])).toBe(false);
          })
        );
      });
    });
  });
}

abstract class TestFilter implements ClrDatagridFilterInterface<number> {
  private active = false;

  toggle() {
    this.active = !this.active;
    this.changes.next(this.active);
  }

  isActive(): boolean {
    return this.active;
  }

  changes = new Subject<boolean>();

  abstract accepts(n: number): boolean;
}

class EvenFilter extends TestFilter {
  accepts(n: number): boolean {
    return n % 2 === 0;
  }
}
