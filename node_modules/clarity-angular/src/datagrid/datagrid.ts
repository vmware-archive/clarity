import {AfterViewInit, OnDestroy, Component, ContentChild, ContentChildren, EventEmitter,
    Input, Output, QueryList} from "@angular/core";
import {Subscription} from "rxjs";

import {DatagridPropertyComparator} from "./built-in/comparators/datagrid-property-comparator";
import {DatagridPropertyStringFilter} from "./built-in/filters/datagrid-property-string-filter";
import {DatagridStringFilter} from "./built-in/filters/datagrid-string-filter";
import {DatagridItems} from "./datagrid-items";
import {DatagridRow} from "./datagrid-row";
import {State} from "./interfaces/state";
import {Filters} from "./providers/filters";
import {Items} from "./providers/items";
import {Page} from "./providers/page";
import {Selection} from "./providers/selection";
import {Sort} from "./providers/sort";

@Component({
    selector: "clr-datagrid",
    templateUrl: "./datagrid.html",
    providers: [Selection, Sort, Filters, Page, Items]
})
export class Datagrid implements AfterViewInit, OnDestroy {

    constructor(private selection: Selection, private sort: Sort, private filters: Filters,
                private page: Page, public items: Items) {}

    /**
     * Freezes the datagrid while data is loading
     */
    @Input("clrDgLoading") public loading = false;

    /**
     * Output emitted whenever the data needs to be refreshed, based on user action or external ones
     */
    @Output("clrDgRefresh") public refresh = new EventEmitter<State>(false);

    /**
     * Emits a State output to ask for the data to be refreshed
     */
    private triggerRefresh() {
        let state: State = {};
        if (this.page.size > 0) {
            state.page = {
                from: this.page.firstItem,
                to: this.page.lastItem,
                size: this.page.size
            };
        }
        if (this.sort.comparator) {
            if (this.sort.comparator instanceof DatagridPropertyComparator) {
                /*
                 * Special case for the default object property comparator,
                 * we give the property name instead of the actual comparator.
                 */
                state.sort = {
                    by: (<DatagridPropertyComparator>this.sort.comparator).prop,
                    reverse: this.sort.reverse
                };
            } else {
                state.sort = {
                    by: this.sort.comparator,
                    reverse: this.sort.reverse
                };
            }
        }

        let activeFilters = this.filters.getActiveFilters();
        if (activeFilters.length > 0) {
            state.filters = [];
            for (let filter of activeFilters) {
                if (filter instanceof DatagridStringFilter) {
                    let stringFilter = (<DatagridStringFilter>filter).filter;
                    if (stringFilter instanceof DatagridPropertyStringFilter) {
                        /*
                         * Special case again for the default object property filter,
                         * we give the property name instead of the full filter object.
                         */
                        state.filters.push({
                            property: (<DatagridPropertyStringFilter>stringFilter).prop,
                            value: (<DatagridStringFilter>filter).value
                        });
                        continue;
                    }
                }
                state.filters.push(filter);
            }
        }
        this.refresh.emit(state);
    }

    /**
     * We grab the smart iterator from projected content
     */
    @ContentChild(DatagridItems) public iterator: DatagridItems;

    /**
     * When the datagrid is user-managed without the smart iterator, we get the items displayed
     * by querying the projected content. This is needed to keep track of the models currently
     * displayed, typically for selection.
     */
    @ContentChildren(DatagridRow) private _rows: QueryList<DatagridRow>;

    /**
     * Array of all selected items
     */
    @Input("clrDgSelected")
    set selected(value: any[]) {
        if (value) {
            this.selection.selectable = true;
        }
        this.selection.current = value;
    }
    @Output("clrDgSelectedChange") selectedChanged = new EventEmitter<any[]>(false);

    /**
     * Indicates if all currently displayed items are selected
     */
    public get allSelected() {
        return this.selection.isAllSelected();
    }

    /**
     * Selects/deselects all currently displayed items
     * @param value
     */
    public set allSelected(value: boolean) {
        /*
         * This is a setter but we ignore the value.
         * It's strange, but it lets us have an indeterminate state where only
         * some of the items are selected.
         */
        this.selection.toggleAll();
    }

    /**
     * Number of empty rows to display to ensure we preserve a fixed height on the datagrid,
     * even if the last page has less items than the previous ones
     */
    get nbEmptyRows() {
        console.log(this._rows.length);
        let rowsDisplayed = 0;
        if (this.items.displayed) {
            rowsDisplayed = this.items.displayed.length;
        }
        // Always leave space for at least 2 rows even if the datagrid isn't paginated
        return Math.max(this.page.size, 2) - rowsDisplayed;
    }

    /**
     * Our setup happens in the view of some of our components, so we wait for it to be done before starting
     */
    ngAfterViewInit() {
        this.triggerRefresh();
        this._subscriptions.push(this.sort.change.subscribe(() => this.triggerRefresh()));
        this._subscriptions.push(this.filters.change.subscribe(() => this.triggerRefresh()));
        this._subscriptions.push(this.page.change.subscribe(() => this.triggerRefresh()));
        this._subscriptions.push(this.selection.change.subscribe(s => this.selectedChanged.emit(s)));

        this._subscriptions.push(this._rows.changes.subscribe(() => {
            if (!this.items.smart) {
                this.items.all = this._rows.map((row: DatagridRow) => row.item);
            }
        }));
        if (!this.items.smart) {
            this.items.all = this._rows.map((row: DatagridRow) => row.item);
        }
    }
    /**
     * Subscriptions to all the services changes
     */
    private _subscriptions: Subscription[] = [];
    ngOnDestroy() {
        this._subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }
}