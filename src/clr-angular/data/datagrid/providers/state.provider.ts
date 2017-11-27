/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators/map";

import {DatagridPropertyComparator} from "../built-in/comparators/datagrid-property-comparator";
import {DatagridPropertyStringFilter} from "../built-in/filters/datagrid-property-string-filter";
import {DatagridStringFilterImpl} from "../built-in/filters/datagrid-string-filter-impl";
import {State} from "../interfaces/state";

import {FiltersProvider} from "./filters";
import {Page} from "./page";
import {Sort} from "./sort";
import {StateDebouncer} from "./state-debouncer.provider";

/**
 * This provider aggregates state changes from the various providers of the Datagrid
 */
@Injectable()
export class StateProvider {
    constructor(private filters: FiltersProvider, private sort: Sort, private page: Page,
                private debouncer: StateDebouncer) {}

    /**
     * The Observable that lets other classes subscribe to global state changes
     */
    change: Observable<State> = this.debouncer.change.pipe(map(() => this.state));

    /*
     * By making this a getter, we open the possibility for a setter in the future.
     * It's been requested a couple times.
     */
    get state(): State {
        const state: State = {};
        if (this.page.size > 0) {
            state.page = {from: this.page.firstItem, to: this.page.lastItem, size: this.page.size};
        }
        if (this.sort.comparator) {
            if (this.sort.comparator instanceof DatagridPropertyComparator) {
                /*
                 * Special case for the default object property comparator,
                 * we give the property name instead of the actual comparator.
                 */
                state.sort = {by: (<DatagridPropertyComparator>this.sort.comparator).prop, reverse: this.sort.reverse};
            } else {
                state.sort = {by: this.sort.comparator, reverse: this.sort.reverse};
            }
        }

        const activeFilters = this.filters.getActiveFilters();
        if (activeFilters.length > 0) {
            state.filters = [];
            for (const filter of activeFilters) {
                if (filter instanceof DatagridStringFilterImpl) {
                    const stringFilter = (<DatagridStringFilterImpl>filter).filterFn;
                    if (stringFilter instanceof DatagridPropertyStringFilter) {
                        /*
                         * Special case again for the default object property filter,
                         * we give the property name instead of the full filter object.
                         */
                        state.filters.push({
                            property: (<DatagridPropertyStringFilter>stringFilter).prop,
                            value: (<DatagridStringFilterImpl>filter).value
                        });
                        continue;
                    }
                }
                state.filters.push(filter);
            }
        }
        return state;
    }
}
