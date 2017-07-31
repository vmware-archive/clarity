/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {OnDestroy} from "@angular/core";
import {Filter} from "../interfaces/filter";
import {FiltersProvider, RegisteredFilter} from "../providers/filters";

export abstract class DatagridFilterRegistrar<F extends Filter<any>> implements OnDestroy {
    constructor(private filters: FiltersProvider) {}

    public registered: RegisteredFilter<F>;

    public get filter(): F {
        return this.registered && this.registered.filter;
    }

    public setFilter(filter: F|RegisteredFilter<F>) {
        // If we previously had another filter, we unregister it
        this.deleteFilter();
        if (filter instanceof RegisteredFilter) {
            this.registered = <RegisteredFilter<F>>filter;
        } else if (filter) {
            this.registered = this.filters.add(<F>filter);
        }
    }

    public deleteFilter() {
        if (this.registered) {
            this.registered.unregister();
            delete this.registered;
        }
    }

    public ngOnDestroy(): void {
        this.deleteFilter();
    }
}
