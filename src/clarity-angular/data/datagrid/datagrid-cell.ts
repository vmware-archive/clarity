/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { HideableColumnService } from "./providers/hideable-column.service";
import { DatagridHideableColumn } from "./datagrid-hideable-column";

@Component({
    selector: "clr-dg-cell",
    template: `
        <ng-content></ng-content>
    `,
    host: {
        "[class.datagrid-cell]": "true",
        "[class.datagrid-cell--hidden]": "hidden"
    }
})
export class DatagridCell {
    /**
     * @property hidden
     *
     * @description
     * Property used to apply a css class to this cell that hides it when hidden = true.
     *
     * @type {boolean}
     */
    public get hidden(): boolean {
        let column: DatagridHideableColumn = this.hideableColumnService.getColumnById(this.id);
        return ( column ) ? column.hidden : false;
    }

    /**
     * @property id
     *
     * @description
     * An identifier for an instance of this cell that maps it to a specific column
     *
     * @type {string}
     */
    public id: string;

    constructor( public hideableColumnService: HideableColumnService ) { }
}
