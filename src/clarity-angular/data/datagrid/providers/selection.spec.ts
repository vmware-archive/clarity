/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {fakeAsync, tick} from "@angular/core/testing";
import {Subject} from "rxjs/Subject";

import {Filter} from "../interfaces/filter";

import {FiltersProvider} from "./filters";
import {Items} from "./items";
import {Page} from "./page";
import {Selection, SelectionType} from "./selection";
import {Sort} from "./sort";
import {StateDebouncer} from "./state-debouncer.provider";

const numberSort = (a: number, b: number) => a - b;

export default function(): void {
    let selectionInstance: Selection;
    let sortInstance: Sort;
    let pageInstance: Page;
    let filtersInstance: FiltersProvider;
    let itemsInstance: Items;
    describe("Selection provider", function() {
        beforeEach(function() {
            const stateDebouncer = new StateDebouncer();
            pageInstance = new Page(stateDebouncer);
            filtersInstance = new FiltersProvider(pageInstance, stateDebouncer);
            sortInstance = new Sort(stateDebouncer);
            itemsInstance = new Items(filtersInstance, sortInstance, pageInstance);

            selectionInstance = new Selection(itemsInstance, filtersInstance);

            itemsInstance.smartenUp();
            itemsInstance.all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        });

        afterEach(function() {
            selectionInstance.destroy();
            itemsInstance.destroy();
        });

        it("starts inactive", function() {
            expect(selectionInstance.selectionType).toBe(SelectionType.None);
            expect(selectionInstance.current).toBeUndefined();
            selectionInstance.setSelected(4, true);
            expect(selectionInstance.current).toBeUndefined();
        });

        it("can select/deselect items in multi selection type", function() {
            selectionInstance.selectionType = SelectionType.Multi;
            selectionInstance.setSelected(4, true);
            expect(selectionInstance.current).toEqual([4]);
            selectionInstance.setSelected(2, true);
            expect(selectionInstance.current).toEqual([4, 2]);
        });

        it("can select/deselect all items at once in multi selection type", function() {
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

        it("can detect if an item is selected", function() {
            selectionInstance.selectionType = SelectionType.Multi;
            expect(selectionInstance.isSelected(4)).toBe(false);
            selectionInstance.setSelected(4, true);
            expect(selectionInstance.isSelected(4)).toBe(true);
            selectionInstance.setSelected(4, false);
            expect(selectionInstance.isSelected(4)).toBe(false);
        });

        it("can detect if all items are selected in multi selection type", function() {
            selectionInstance.selectionType = SelectionType.Multi;
            expect(selectionInstance.isAllSelected()).toBe(false);
            selectionInstance.setSelected(4, true);
            expect(selectionInstance.isAllSelected()).toBe(false);
            selectionInstance.current = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
            expect(selectionInstance.isAllSelected()).toBe(true);
        });

        it("accepts pre-selected items in multi selection type", function() {
            selectionInstance.selectionType = SelectionType.Multi;
            selectionInstance.current = [4, 2];
            expect(selectionInstance.isSelected(1)).toBe(false);
            expect(selectionInstance.isSelected(2)).toBe(true);
            expect(selectionInstance.isSelected(3)).toBe(false);
            expect(selectionInstance.isSelected(4)).toBe(true);
        });

        it("accepts pre-selected item in single selection type", function() {
            selectionInstance.selectionType = SelectionType.Single;
            selectionInstance.currentSingle = 2;
            expect(selectionInstance.isSelected(1)).toBe(false);
            expect(selectionInstance.isSelected(2)).toBe(true);
            expect(selectionInstance.isSelected(3)).toBe(false);
            expect(selectionInstance.isSelected(4)).toBe(false);
        });

        it("exposes an Observable to follow selection changes in multi selection type", function() {
            let nbChanges = 0;
            let currentSelection: any[];
            selectionInstance.change.subscribe((items: any[]) => {
                nbChanges++;
                currentSelection = items;
            });
            expect(currentSelection).toBeUndefined();
            selectionInstance.selectionType = SelectionType.Multi;
            expect(currentSelection).toEqual([]);
            selectionInstance.setSelected(4, true);
            expect(selectionInstance.current).toEqual([4]);
            selectionInstance.toggleAll();
            expect(selectionInstance.current.sort(numberSort)).toEqual(itemsInstance.displayed);
            selectionInstance.toggleAll();
            expect(selectionInstance.current).toEqual([]);
            expect(nbChanges).toBe(4);
        });

        it("exposes an Observable to follow selection changes in single selection type", function() {
            let nbChanges = 0;
            let currentSelection: any;
            selectionInstance.change.subscribe((items: any) => {
                nbChanges++;
                currentSelection = items;
            });
            expect(currentSelection).toBeUndefined();
            selectionInstance.selectionType = SelectionType.Single;
            expect(currentSelection).toBeUndefined();
            selectionInstance.currentSingle = 4;
            selectionInstance.currentSingle = 2;
            expect(nbChanges).toBe(3);
        });

        it("clears selection when a filter is added", function() {
            selectionInstance.selectionType = SelectionType.Multi;
            selectionInstance.current = [4, 2];

            const evenFilter: EvenFilter = new EvenFilter();

            filtersInstance.add(<Filter<any>>evenFilter);

            evenFilter.toggle();

            expect(selectionInstance.current.length).toBe(0);
        });

        it("keeps only the remaining selection when the items are updated", fakeAsync(function() {
               selectionInstance.selectionType = SelectionType.Multi;
               selectionInstance.current = [4, 2];

               itemsInstance.all = [1, 2, 3, 5];

               tick();

               expect(selectionInstance.current.length).toBe(1);
               expect(selectionInstance.current).toEqual([2]);
           }));

        it("keeps all the selections when the items are updated " +
               "and the contain all the previous selection",
           fakeAsync(function() {
               selectionInstance.selectionType = SelectionType.Multi;
               selectionInstance.current = [4, 2];

               itemsInstance.all = [1, 2, 3, 4, 5];

               tick();

               expect(selectionInstance.current.length).toBe(2);
               expect(selectionInstance.current).toEqual([4, 2]);
           }));

        it("clears the selections when the items are updated and " +
               "they do not contain the previous selection",
           fakeAsync(function() {
               selectionInstance.selectionType = SelectionType.Multi;
               selectionInstance.current = [4, 2];

               itemsInstance.all = [1, 3, 5];

               tick();

               expect(selectionInstance.current.length).toBe(0);
               expect(selectionInstance.current).toEqual([]);
           }));

        it("maintains the selection when the page is changed", function() {
            selectionInstance.selectionType = SelectionType.Multi;
            selectionInstance.current = [4, 2];

            pageInstance.size = 3;

            pageInstance.current = 2;

            expect(selectionInstance.current).toEqual([4, 2]);
        });
    });
}

abstract class TestFilter implements Filter<number> {
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
