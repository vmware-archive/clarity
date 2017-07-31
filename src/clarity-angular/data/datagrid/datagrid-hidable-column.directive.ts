/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";

import {DatagridColumn} from "./datagrid-column";
import {DatagridHideableColumn} from "./datagrid-hideable-column";

@Directive({selector: "[clrDgHideableColumn]"})

/**
 * @class DatagridHideableColumnDirective
 *
 * @description
 * A structural directive meant to be used inside a clr-dg-column component.
 *
 * <clr-dg-column>
 *       <ng-container *clrDgHideableColumn="{ hidden: true }">
 *           User ID
 *       </ng-container>
 *   </clr-dg-column>
 *
 * It sets up state and properties so that columns can be manges for hide/show by a service and an internal
 * datagrid toggle component.
 *
 */
export class DatagridHideableColumnDirective {
    /**
     * @property _hidden
     *
     * @description
     * Used to initialize the column with either hidden or visible state.
     *
     * @type boolean
     */
    private _hidden: boolean;

    /**
     * @function clrDgHideableColumn
     *
     * @description
     * Setter fn for the @Input with the same name as this structural directive.
     * It allows the user to pre-configure the column's hide/show state. { hidden: true }
     * It's more verbose but has more Clarity.
     *
     * @default false
     *
     * @type object
     *
     * @example
     * *clrDgHideableColumn
     * *clrDgHideableColumn={hidden: false}
     * *clrDgHideableColumn={hidden: true}
     *
     * @param value
     *
     */
    @Input("clrDgHideableColumn")
    set clrDgHideableColumn(value: any) {
        this._hidden = (value && value.hidden) ? value.hidden : false;
        if (this.dgColumn.hideable) {
            this.dgColumn.hideable.hidden = (value && value.hidden) ? value.hidden : false;
        }
    }

    /**
     * @property columnId
     *
     * @description
     * A unique identifier passed into the directive from the parent (A DatagridColumn).
     *
     *  @type {string}
     */
    public columnId: string;

    /**
     * @property column
     *
     * @description
     * An instance of the DatagridHideableColumn Utility class that is used to:
     * 1. Create an instance of HideableColumn that will manage the TemplateRef, state and communication
     * 2. Manage the hidden/shown state for the column to which this directive is applied
     * 3. track the id of the hidden column so it can be used in cells as well as on the column
     */
    public column: DatagridHideableColumn;

    /**
     * @description
     * Used the DatagridColumn to get and set an id for this HiddenColumn
     *
     * @param templateRef
     * @param viewContainerRef
     * @param hideableColumnService
     * @param dgColumn
     */
    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef,
                private dgColumn: DatagridColumn) {
        this.columnId = dgColumn.columnId;

        // Use the templateRef to create this view
        this.viewContainerRef.createEmbeddedView(this.templateRef);

        // Create instance of the utility class DatagridHideableColumn.
        // Note this is on the parent instance of DatagridColumn.
        this.dgColumn.hideable = new DatagridHideableColumn(this.templateRef, this.columnId, this._hidden);
    }
}
