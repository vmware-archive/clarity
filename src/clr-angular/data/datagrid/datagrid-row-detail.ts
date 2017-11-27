/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {AfterContentInit, Component, ContentChildren, Input, OnDestroy, QueryList} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {Expand} from "../../utils/expand/providers/expand";

import {DatagridCell} from "./datagrid-cell";
import {DatagridHideableColumn} from "./datagrid-hideable-column";
import {HideableColumnService} from "./providers/hideable-column.service";
import {RowActionService} from "./providers/row-action-service";
import {Selection, SelectionType} from "./providers/selection";

/**
 * Generic bland container serving various purposes for Datagrid.
 * For instance, it can help span a text over multiple rows in detail view.
 */
@Component({
    selector: "clr-dg-row-detail",
    template: `
        <ng-container *ngIf="!replace">
            <clr-dg-cell class="datagrid-fixed-column"
                *ngIf="selection.selectionType === SELECTION_TYPE.Multi 
                    || selection.selectionType === SELECTION_TYPE.Single"></clr-dg-cell>
            <clr-dg-cell *ngIf="rowActionService.hasActionableRow" class="datagrid-fixed-column"></clr-dg-cell>
            <clr-dg-cell class="datagrid-fixed-column"></clr-dg-cell>
        </ng-container>
        <ng-content></ng-content>
    `,
    host: {
        "[class.datagrid-row-flex]": "true",
        "[class.datagrid-row-detail]": "!replace",
        "[class.datagrid-container]": "cells.length === 0",
    }
})
export class DatagridRowDetail implements AfterContentInit, OnDestroy {
    /* reference to the enum so that template can access it */
    public SELECTION_TYPE = SelectionType;

    constructor(public selection: Selection, public rowActionService: RowActionService, public expand: Expand,
                public hideableColumnService: HideableColumnService) {}

    @ContentChildren(DatagridCell) cells: QueryList<DatagridCell>;

    get replace() {
        return this.expand.replace;
    }

    @Input("clrDgReplace")
    set replace(value: boolean) {
        this.expand.replace = !!value;
    }

    private subscription: Subscription;

    ngAfterContentInit() {
        const columnsList = this.hideableColumnService.getColumns();
        this.updateCellsForColumns(columnsList);

        // Triggered when the Cells list changes per row-renderer
        this.cells.changes.subscribe((cellList) => {
            const columnList = this.hideableColumnService.getColumns();
            if (cellList.length === columnList.length) {
                this.updateCellsForColumns(columnList);
            }
        });

        // Used to set things up the first time but only after all the columns are ready.
        this.subscription = this.hideableColumnService.columnListChange.subscribe((columnList) => {
            // Prevents cell updates when cols and cells array are not aligned
            if (columnList.length === this.cells.length) {
                this.updateCellsForColumns(columnList);
            }
        });
    }

    public updateCellsForColumns(columnList: DatagridHideableColumn[]) {
        this.cells.forEach((cell, index) => {
            const currentColumn = columnList[index];  // Accounts for null space.
            if (currentColumn) {
                cell.id = currentColumn.id;
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
