/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Input, ContentChildren, QueryList} from "@angular/core";
import {Selection, SelectionType} from "./providers/selection";
import {RowActionService} from "./providers/row-action-service";
import {DatagridCell} from "./datagrid-cell";
import {Expand} from "../../utils/expand/providers/expand";

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
export class DatagridRowDetail {
    /* reference to the enum so that template can access it */
    public SELECTION_TYPE = SelectionType;

    constructor(public selection: Selection, public rowActionService: RowActionService,
                public expand: Expand) {}

    @ContentChildren(DatagridCell) cells: QueryList<DatagridCell>;

    get replace() {
        return this.expand.replace;
    }

    @Input("clrDgReplace") set replace(value: boolean) {
        this.expand.replace = !!value;
    }
}
