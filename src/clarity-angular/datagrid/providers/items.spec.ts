/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Subject} from "rxjs/Subject";
import {Items} from "./items";
import {Filter} from "../interfaces/filter";
import {Comparator} from "../interfaces/comparator";
import {Filters} from "./filters";
import {Sort} from "./sort";
import {Page} from "./page";

const ALL_ITEMS = [9, 3, 5, 8, 2, 6, 10, 7, 4, 1];

export default function(): void {
    describe("Items provider", function() {
        function setSmartItems(itemsInstance: Items) {
            itemsInstance.smartenUp();
            itemsInstance.all = ALL_ITEMS;
        }

        beforeEach(function() {
            this.filtersInstance = new Filters();
            this.evenFilter = new EvenFilter();
            this.filtersInstance.add(this.evenFilter);
            this.sortInstance = new Sort();
            this.comparator = new TestComparator();
            this.pageInstance = new Page();
            this.itemsInstance = new Items(this.filtersInstance, this.sortInstance, this.pageInstance);
        });

        afterEach(function() {
            this.itemsInstance.destroy();
        });

        it("starts uninitialized", function() {
            expect(this.itemsInstance.smart).toBe(false);
            expect(this.itemsInstance.displayed).toBeUndefined();
        });

        it("doesn't process the items at all if not smart", function() {
            this.itemsInstance.all = ALL_ITEMS;
            this.evenFilter.toggle();
            this.sortInstance.toggle(this.comparator);
            this.pageInstance.size = 3;
            // Yes, this is toBe() and no toEqual() because we want absolutely zero processing,
            // not even copying the array.
            expect(this.itemsInstance.displayed).toBe(ALL_ITEMS);
        });

        it("doesn't process the items if no filter, sort or pagination has been set", function() {
            setSmartItems(this.itemsInstance);
            expect(this.itemsInstance.displayed).toEqual(ALL_ITEMS);
        });

        it("filters according to the Filter provider", function() {
            setSmartItems(this.itemsInstance);
            this.evenFilter.toggle();
            expect(this.itemsInstance.displayed).toEqual([8, 2, 6, 10, 4]);
            this.evenFilter.toggle();
            expect(this.itemsInstance.displayed).toEqual(ALL_ITEMS);
        });

        it("sorts according to the Sort provider", function() {
            setSmartItems(this.itemsInstance);
            this.sortInstance.toggle(this.comparator);
            expect(this.itemsInstance.displayed).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            this.sortInstance.toggle(this.comparator);
            expect(this.itemsInstance.displayed).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
        });

        it("slices according to the Page provider", function() {
            setSmartItems(this.itemsInstance);
            this.pageInstance.size = 3;
            expect(this.itemsInstance.displayed).toEqual([9, 3, 5]);
            this.pageInstance.current = 2;
            expect(this.itemsInstance.displayed).toEqual([8, 2, 6]);
            this.pageInstance.current = 4;
            expect(this.itemsInstance.displayed).toEqual([1]);
        });

        it("combines filtering, sorting and pagination", function() {
            setSmartItems(this.itemsInstance);
            this.evenFilter.toggle();
            this.sortInstance.toggle(this.comparator);
            this.pageInstance.size = 3;
            expect(this.itemsInstance.displayed).toEqual([2, 4, 6]);
        });

        it("processes items immediately when they are set", function() {
            this.itemsInstance.smartenUp();
            this.evenFilter.toggle();
            this.sortInstance.toggle(this.comparator);
            this.pageInstance.size = 3;
            this.itemsInstance.all = ALL_ITEMS;
            expect(this.itemsInstance.displayed).toEqual([2, 4, 6]);
        });

        it("does not modify the original array", function() {
            let copy = ALL_ITEMS.slice();
            setSmartItems(this.itemsInstance);
            this.evenFilter.toggle();
            this.sortInstance.toggle(this.comparator);
            this.pageInstance.size = 3;
            expect(ALL_ITEMS).toEqual(copy);
        });

        it("sets the total number of items after filters in the Page provider", function() {
            setSmartItems(this.itemsInstance);
            expect(this.pageInstance.totalItems).toBe(10);
            this.evenFilter.toggle();
            expect(this.pageInstance.totalItems).toBe(5);
        });

        it("exposes an Observable to follow items changes", function() {
            let nbChanges = 0;
            let latestDisplayed: any[];
            this.itemsInstance.change.subscribe((items: any[]) => {
                nbChanges++;
                latestDisplayed = items;
            });
            expect(latestDisplayed).toBeUndefined();
            let unprocessed = [3, 1, 2];
            this.itemsInstance.all = unprocessed;
            expect(latestDisplayed).toBe(unprocessed);
            setSmartItems(this.itemsInstance);
            expect(latestDisplayed).toEqual(ALL_ITEMS);
            this.evenFilter.toggle();
            expect(latestDisplayed).toEqual([8, 2, 6, 10, 4]);
            this.sortInstance.toggle(this.comparator);
            expect(latestDisplayed).toEqual([2, 4, 6, 8, 10]);
            this.pageInstance.size = 3;
            expect(latestDisplayed).toEqual([2, 4, 6]);
            this.itemsInstance.all = [42];
            expect(latestDisplayed).toEqual([42]);
            expect(nbChanges).toBe(6);
        });
    });
};

class EvenFilter implements Filter<number> {
    private active = false;

    toggle() {
        this.active = !this.active;
        this.changes.next(this.active);
    }

    isActive(): boolean {
        return this.active;
    };

    changes = new Subject<boolean>();

    accepts(n: number): boolean {
        return n % 2 === 0;
    };
}

class TestComparator implements Comparator<number> {
    compare(a: number, b: number): number {
        return a - b;
    }
}