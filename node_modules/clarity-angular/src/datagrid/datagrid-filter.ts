import {Component, EventEmitter, Input, OnDestroy, Output} from "@angular/core";

import {Filter} from "./interfaces/filter";
import {CustomFilter} from "./providers/custom-filter";
import {Filters} from "./providers/filters";


/**
 * Custom filter that can be added in any column to override the default object property string filter.
 * The reason this is not just an input on DatagridColumn is because we need the filter's template to be projected,
 * since it can be anything (not just a text input).
 */
@Component({
    selector: "clr-dg-filter",
    // We register this component as a CustomFilter, for the parent column to detect it.
    providers: [{provide: CustomFilter, useExisting: DatagridFilter}],
    template: `
        <button class="datagrid-filter-toggle" (click)="toggle()" 
           [class.datagrid-filter-open]="open" [class.datagrid-filtered]="active"></button>

        <div class="datagrid-filter" *ngIf="open">
            <!-- FIXME: this whole filter part needs a final design before we can try to have a cleaner DOM -->
            <div class="datagrid-filter-close-wrapper">
                <button type="button" class="close" aria-label="Close" (click)="open = false">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            
            <ng-content></ng-content>
        </div>
    `
})
export class DatagridFilter implements CustomFilter, OnDestroy {
    constructor(private _filters: Filters) {}

    /**
     * Tracks whether the filter dropdown is open or not
     */
    private _open = false;
    public get open() {
        return this._open;
    }
    @Input("clrDgFilterOpen")
    public set open(open: boolean) {
        let boolOpen = !!open;
        if (boolOpen !== this._open) {
            this._open = boolOpen;
            this.openChanged.emit(boolOpen);
        }
    }
    @Output("clrDgFilterOpenChange") public openChanged = new EventEmitter<boolean>(false);

    /**
     * Customizable filter logic
     */
    private _filter: Filter<any>;
    public get filter(): Filter<any> {
        return this._filter;
    }
    @Input("clrDgFilter")
    public set filter(filter: Filter<any>) {
        // If we previously had another filter, we unregister it
        if (this._unregister) {
            this._unregister();
            delete this._unregister;
        }
        this._filter = filter;
        if (typeof filter !== "undefined") {
            this._unregister = this._filters.add(filter);
        }
    };

    /**
     * Function to unregister the filter on clean-up
     */
    private _unregister: () => void;
    ngOnDestroy(): void {
        if (this._unregister) {
            this._unregister();
        }
    }

    /**
     * Indicates if the filter is currently active
     */
    public get active() {
        return !!this.filter && this.filter.isActive();
    }

    /**
     * Shows/hides the filter dropdown
     */
    public toggle() {
        this.open = !this.open;
    }
}