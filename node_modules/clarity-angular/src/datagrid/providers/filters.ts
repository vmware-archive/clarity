import {Injectable} from "@angular/core";
import {Subject, Subscription, Observable} from "rxjs";

import {Filter} from "../interfaces/filter";

@Injectable()
export class Filters {
    /**
     * This subject is the list of filters that changed last, not the whole list.
     * We emit a list rather than just one filter to allow batch changes to several at once.
     */
    private _change = new Subject<Filter<any>[]>();
    // We do not want to expose the Subject itself, but the Observable which is read-only
    public get change(): Observable<Filter<any>[]> {
        return this._change.asObservable();
    };

    /**
     * List of all filters, whether they're active or not
     */
    private _all: FilterWithSub[] = [];

    /**
     * Tests if at least one filter is currently active
     */
    public hasActiveFilters(): boolean {
        // We do not use getActiveFilters() because this function will be called much more often
        // and stopping the loop early might be relevant.
        for (let {filter} of this._all) {
            if (filter && filter.isActive()) {
                return true;
            }
        }
        return false;
    }

    /**
     * Returns a list of all currently active filters
     */
    public getActiveFilters(): Filter<any>[] {
        let ret: Filter<any>[] = [];
        for (let {filter} of this._all) {
            if (filter && filter.isActive()) {
                ret.push(filter);
            }
        }
        return ret;
    }

    /**
     * Registers a filter, and returns a deregistration function
     */
    public add(filter: Filter<any>): () => void {
        let index = this._all.length;
        let subscription = filter.changes.subscribe(() => this._change.next([filter]));
        this._all.push({filter, subscription});
        return () => {
            subscription.unsubscribe();
            this._all.splice(index, 1);
        };
    }

    /**
     * Accepts an item if it is accepted by all currently active filters
     */
    public accepts(item: any): boolean {
        for (let {filter} of this._all) {
            if (filter && filter.isActive() && !filter.accepts(item)) {
                return false;
            }
        }
        return true;
    }
}

interface FilterWithSub {
    filter: Filter<any>;
    subscription: Subscription;
}