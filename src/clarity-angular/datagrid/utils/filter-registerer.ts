import {OnDestroy} from "@angular/core";
import {Filter} from "../interfaces/filter";
import {Filters, RegisteredFilter} from "../providers/filters";

export abstract class FilterRegisterer<F extends Filter<any>> implements OnDestroy {

    constructor(private filters: Filters) {}

    public registered: RegisteredFilter<F>;

    public get filter(): F {
            return this.registered && this.registered.filter;
    }
    public set filter(filter: F) {
        // If we previously had another filter, we unregister it
        this.deleteFilter();
        if (filter instanceof RegisteredFilter) {
            console.log("Already registered", filter);
            this.registered = <RegisteredFilter<F>>filter;
        } else if (filter) {
            console.log("Registering", filter);
            this.registered = this.filters.add(filter);
        }
    };

    public deleteFilter() {
        if (this.registered) {
            console.log("Unregistering", this.filter);
            this.registered.unregister();
            delete this.registered;
        }
    }

    public ngOnDestroy(): void {
        this.deleteFilter();
    }
}