/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    AfterViewInit, OnDestroy, Component, ContentChild, ContentChildren, EventEmitter,
    Input, Output, QueryList, AfterContentInit
} from "@angular/core";
import { Subscription } from "rxjs/Subscription";

import { DatagridPropertyComparator } from "./built-in/comparators/datagrid-property-comparator";
import { DatagridPropertyStringFilter } from "./built-in/filters/datagrid-property-string-filter";
import { DatagridItems } from "./datagrid-items";
import { DatagridRow } from "./datagrid-row";
import { DatagridPlaceholder } from "./datagrid-placeholder";
import { State } from "./interfaces/state";
import { FiltersProvider } from "./providers/filters";
import { Items } from "./providers/items";
import { Page } from "./providers/page";
import { Selection, SelectionType } from "./providers/selection";
import { Sort } from "./providers/sort";
import { RowActionService } from "./providers/row-action-service";
import { GlobalExpandableRows } from "./providers/global-expandable-rows";
import { DatagridRenderOrganizer } from "./render/render-organizer";
import { DatagridActionOverflow } from "./datagrid-action-overflow";
import { DatagridStringFilterImpl } from "./built-in/filters/datagrid-string-filter-impl";
import { HideableColumnService } from "./providers/hideable-column.service";
import { DatagridColumn } from "./datagrid-column";
import {IfExpanded} from "../../utils/expand/if-expanded";

@Component({
    selector: "clr-datagrid",
    templateUrl: "./datagrid.html",
    providers: [ Selection, Sort, FiltersProvider, Page, Items, DatagridRenderOrganizer,
        RowActionService, GlobalExpandableRows, HideableColumnService ],
    host: {
        "[class.datagrid-host]": "true"
    }
})
export class Datagrid implements AfterContentInit, AfterViewInit, OnDestroy {

    constructor(private columnService: HideableColumnService,
                private filters: FiltersProvider,
                private organizer: DatagridRenderOrganizer,
                private page: Page,
                private sort: Sort,
                public items: Items,
                public expandableRows: GlobalExpandableRows,
                public selection: Selection,
                public rowActionService: RowActionService) {
    }

    /* reference to the enum so that template can access */
    public SELECTION_TYPE = SelectionType;

    /**
     * Freezes the datagrid while data is loading
     */
    public get loading(): boolean {
        return this.items.loading;
    }

    @Input("clrDgLoading")
    public set loading( value: boolean ) {
        this.items.loading = value;
    }

    /**
     * Output emitted whenever the data needs to be refreshed, based on user action or external ones
     */
    @Output("clrDgRefresh") public refresh = new EventEmitter<State>(false);

    /**
     * Emits a State output to ask for the data to be refreshed
     */
    private triggerRefresh() {
        let state: State = {};
        if ( this.page.size > 0 ) {
            state.page = {
                from: this.page.firstItem,
                to: this.page.lastItem,
                size: this.page.size
            };
        }
        if ( this.sort.comparator ) {
            if ( this.sort.comparator instanceof DatagridPropertyComparator ) {
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
        if ( activeFilters.length > 0 ) {
            state.filters = [];
            for ( let filter of activeFilters ) {
                if ( filter instanceof DatagridStringFilterImpl ) {
                    let stringFilter = (<DatagridStringFilterImpl>filter).filterFn;
                    if ( stringFilter instanceof DatagridPropertyStringFilter ) {
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
        this.refresh.emit(state);
    }

    /**
     * Public method to re-trigger the computation of displayed items manually
     */
    public dataChanged() {
        this.items.refresh();
    }

    /**
     * We grab the smart iterator from projected content
     */
    @ContentChild(DatagridItems) public iterator: DatagridItems;

    /**
     * Array of all selected items
     */
    @Input("clrDgSelected")
    set selected( value: any[] ) {
        if ( value ) {
            this.selection.selectionType = SelectionType.Multi;
        } else {
            this.selection.selectionType = SelectionType.None;
        }
        this.selection.current = value;
    }

    @Output("clrDgSelectedChange") selectedChanged = new EventEmitter<any[]>(false);

    /**
     * Selected item in single-select mode
     */
    @Input("clrDgSingleSelected")
    set singleSelected( value: any ) {
        this.selection.selectionType = SelectionType.Single;
        if ( value ) {
            this.selection.currentSingle = value;
        }
    }

    @Output("clrDgSingleSelectedChange") singleSelectedChanged = new EventEmitter<any>(false);

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
    public set allSelected( value: boolean ) {
        /*
         * This is a setter but we ignore the value.
         * It's strange, but it lets us have an indeterminate state where only
         * some of the items are selected.
         */
        this.selection.toggleAll();
    }

    /**
     * Custom placeholder detection
     */
    @ContentChild(DatagridPlaceholder) public placeholder: DatagridPlaceholder;

    /**
     * Hideable Column data source / detection.
     */
    @ContentChildren(DatagridColumn) public columns: QueryList<DatagridColumn>;

    /**
     * When the datagrid is user-managed without the smart iterator, we get the items displayed
     * by querying the projected content. This is needed to keep track of the models currently
     * displayed, typically for selection.
     */

    @ContentChildren(DatagridRow) rows: QueryList<DatagridRow>;

    /**
     * We get deep nested DatagridActionOverflow children components, listen to the changes in them,
     * and figure out if the datagrid has at least one actionable row.
     */
    @ContentChildren(DatagridActionOverflow, { descendants: true }) public actionableRows: QueryList<DatagridRow>;

    /**
     * We grab all details for expandable rows to determine if we need the extra cell for carets or not
     */
    @ContentChildren(IfExpanded, { descendants: true }) details: QueryList<IfExpanded>;

    ngAfterContentInit() {
        // TODO: Move all this to ngOnInit() once https://github.com/angular/angular/issues/12818 goes in.
        // And when we do that, remove the manual step for each one.
        this._subscriptions.push(this.actionableRows.changes.subscribe(() => {
            /*if at least one row has actionable overflow, show a placeholder cell in every other row.*/
            this.rowActionService.hasActionableRow = this.actionableRows.length > 0;
        }));
        this.rowActionService.hasActionableRow = this.actionableRows.length > 0;

        this._subscriptions.push(this.details.changes.subscribe(() => {
            /* if at least one row is expandable, show a placeholder cell in every other row.*/
            this.expandableRows.hasExpandableRow = this.details.length > 0;
        }));
        this.expandableRows.hasExpandableRow = this.details.length > 0;

        this._subscriptions.push(this.rows.changes.subscribe(() => {
            if ( !this.items.smart ) {
                this.items.all = this.rows.map(( row: DatagridRow ) => row.item);
            }
        }));
        if ( !this.items.smart ) {
            this.items.all = this.rows.map(( row: DatagridRow ) => row.item);
        }
    }

    /**
     * Our setup happens in the view of some of our components, so we wait for it to be done before starting
     */
    ngAfterViewInit() {
        // TODO: determine if we can get rid of provider wiring in view init so that subscriptions can be done earlier
        this.triggerRefresh();
        this._subscriptions.push(this.sort.change.subscribe(() => this.triggerRefresh()));
        this._subscriptions.push(this.filters.change.subscribe(() => this.triggerRefresh()));
        this._subscriptions.push(this.page.change.subscribe(() => this.triggerRefresh()));
        this._subscriptions.push(this.selection.change.subscribe(s => {
            if ( this.selection.selectionType === SelectionType.Single ) {
                this.singleSelectedChanged.emit(s);
            } else if ( this.selection.selectionType === SelectionType.Multi ) {
                this.selectedChanged.emit(s);
            }
        }));

        this._subscriptions.push(
            this.columns.changes.subscribe(( columns: DatagridColumn[] ) => {
                this.columnService.updateColumnList(this.columns.map(col => col.hideable));
            })
        );

        // Get ColumnService ready for HideableColumns.
        this.columnService.updateColumnList(this.columns.map(col => col.hideable));
    }

    /**
     * Subscriptions to all the services and queries changes
     */
    private _subscriptions: Subscription[] = [];

    ngOnDestroy() {
        this._subscriptions.forEach(( sub: Subscription ) => sub.unsubscribe());
    }

    resize(): void {
        this.organizer.resize();
    }
}
