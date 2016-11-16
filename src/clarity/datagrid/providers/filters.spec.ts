/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Subject} from "rxjs";
import {Filters} from "./filters";
import {Filter} from "../interfaces/filter";

export default function(): void {
    describe("Filters provider", function() {
        beforeEach(function() {
            this.filtersInstance = new Filters();
            this.evenFilter = new EvenFilter();
            this.positiveFilter = new PositiveFilter();
            this.filtersInstance.add(this.evenFilter);
            this.filtersInstance.add(this.positiveFilter);
        });

        it("detects if it has active filters", function() {
            expect(this.filtersInstance.hasActiveFilters()).toBe(false);
            this.evenFilter.toggle();
            expect(this.filtersInstance.hasActiveFilters()).toBe(true);
            this.evenFilter.toggle();
            expect(this.filtersInstance.hasActiveFilters()).toBe(false);
        });

        it("can return a list of active filters", function() {
            expect(this.filtersInstance.getActiveFilters()).toEqual([]);
            this.evenFilter.toggle();
            expect(this.filtersInstance.getActiveFilters()).toEqual([this.evenFilter]);
            this.positiveFilter.toggle();
            expect(this.filtersInstance.getActiveFilters()).toEqual([this.evenFilter, this.positiveFilter]);
            this.evenFilter.toggle();
            expect(this.filtersInstance.getActiveFilters()).toEqual([this.positiveFilter]);
        });

        it("ignores inactive filters", function() {
            expect(this.filtersInstance.accepts(-1)).toBe(true);
            expect(this.filtersInstance.accepts(-2)).toBe(true);
            expect(this.filtersInstance.accepts(1)).toBe(true);
            expect(this.filtersInstance.accepts(2)).toBe(true);
        });

        it("uses all active filters", function() {
            this.positiveFilter.toggle();
            expect(this.filtersInstance.accepts(-1)).toBe(false);
            expect(this.filtersInstance.accepts(-2)).toBe(false);
            expect(this.filtersInstance.accepts(1)).toBe(true);
            expect(this.filtersInstance.accepts(2)).toBe(true);
            this.evenFilter.toggle();
            expect(this.filtersInstance.accepts(-1)).toBe(false);
            expect(this.filtersInstance.accepts(-2)).toBe(false);
            expect(this.filtersInstance.accepts(1)).toBe(false);
            expect(this.filtersInstance.accepts(2)).toBe(true);
        });

        it("exposes an Observable that proxies all filters changes", function() {
            let nbChanges = 0;
            let latestChanges: Filter<any>[];
            this.filtersInstance.change.subscribe((changes: Filter<any>[]) => {
                nbChanges++;
                latestChanges = changes;
            });
            expect(latestChanges).toBeUndefined();
            this.evenFilter.toggle();
            expect(latestChanges).toEqual([this.evenFilter]);
            this.positiveFilter.toggle();
            expect(latestChanges).toEqual([this.positiveFilter]);
            this.evenFilter.toggle();
            expect(latestChanges).toEqual([this.evenFilter]);
            expect(nbChanges).toBe(3);
        });

        it("offers a way to unregister a filter", function() {
            let filter = new EvenFilter();
            let unregister = this.filtersInstance.add(filter);
            let nbChanges = 0;
            this.filtersInstance.change.subscribe(() => nbChanges++);
            filter.toggle();
            expect(this.filtersInstance.getActiveFilters()).toEqual([filter]);
            expect(nbChanges).toBe(1);
            unregister();
            expect(this.filtersInstance.getActiveFilters()).toEqual([]);
            filter.toggle();
            expect(nbChanges).toBe(1);
        });
    });
};

abstract class TestFilter  implements Filter<number> {
    private active = false;

    toggle() {
        this.active = !this.active;
        this.changes.next(this.active);
    }

    isActive(): boolean {
        return this.active;
    };

    changes = new Subject<boolean>();

    abstract accepts(n: number): boolean;
}

class EvenFilter extends TestFilter {
    accepts(n: number): boolean {
        return n % 2 === 0;
    };
}

class PositiveFilter extends TestFilter {
    accepts(n: number): boolean {
        return n > 0;
    };
}