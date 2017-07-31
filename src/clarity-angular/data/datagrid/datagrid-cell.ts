/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ContentChildren, QueryList} from "@angular/core";

import {Signpost} from "../../popover/signpost/signpost";

import {DatagridHideableColumn} from "./datagrid-hideable-column";
import {HideableColumnService} from "./providers/hideable-column.service";

@Component({
    selector: "clr-dg-cell",
    template: `
        <ng-content></ng-content>
    `,
    host: {
        "[class.datagrid-cell]": "true",
        "[class.datagrid-cell--hidden]": "hidden",
        "[class.datagrid-signpost-trigger]": "signpost.length > 0"
    }
})
export class DatagridCell {
    /*********
     * @property signpost
     *
     * @type {Signpost}
     *
     * @description
     * @ContentChild is used to detect the presence of a Signpost in the projected content.
     * On the host, we set the .datagrid-signpost-trigger class on the cell when signpost.length is greater than 0.
     *
     * @type {Querylist<Signpost>}
     */
    @ContentChildren(Signpost) signpost: QueryList<Signpost>;

    /**
     * @property hidden
     *
     * @description
     * Property used to apply a css class to this cell that hides it when hidden = true.
     *
     * @type {boolean}
     */
    public get hidden(): boolean {
        const column: DatagridHideableColumn = this.hideableColumnService.getColumnById(this.id);
        return (column) ? column.hidden : false;
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

    constructor(public hideableColumnService: HideableColumnService) {}
}
