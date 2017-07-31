/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {Point} from "../../popover/common/popover";

import {DatagridHideableColumn} from "./datagrid-hideable-column";
import {HideableColumnService} from "./providers/hideable-column.service";

@Component({
    selector: "clr-dg-column-toggle",
    template: `
        <button
                #anchor
                (click)="toggleUI()"
                class="btn btn-sm btn-link column-toggle--action"
                type="button">
            <clr-icon shape="view-columns"></clr-icon>
        </button>
        <div class="column-switch"
             *clrPopoverOld="open; anchor: anchor; anchorPoint: anchorPoint; popoverPoint: popoverPoint">
            <div class="switch-header">
                Show Columns
                <button
                    class="btn btn-sm btn-link"
                    (click)="toggleUI()"
                    type="button">
                    <clr-icon
                            shape="close"></clr-icon>
                </button>
            </div>
            <ul class="switch-content list-unstyled">
                <li *ngFor="let column of columns">
                    <clr-checkbox [clrChecked]="!column.hidden"
                                  [clrDisabled]="column.lastVisibleColumn"
                                  (clrCheckedChange)="toggleColumn($event, column)">
                        <ng-template [ngTemplateOutlet]="column.template"></ng-template>
                    </clr-checkbox>
                </li>
            </ul>
            <div class="switch-footer">
                <div>
                    <button
                            class="btn btn-sm btn-link p6 text-uppercase"
                            [disabled]="allColumnsVisible"
                            (click)="selectAll()"
                            type="button">Select All
                    </button>
                </div>
                <div class="action-right">
                    <button
                            (click)="toggleUI()"
                            class="btn btn-primary"
                            type="button">
                        Ok
                    </button>
                </div>
            </div>
        </div>
    `,
    host: {"[class.column-switch-wrapper]": "true", "[class.column-switch-wrapper--active]": "open"}
})

export class DatagridColumnToggle implements OnInit, OnDestroy {
    private _hideableColumnChangeSubscription: Subscription;
    private _allColumnsVisible: boolean;

    /***
     * Popover init
     * @type {Point}
     */
    public anchorPoint: Point = Point.TOP_LEFT;
    public popoverPoint: Point = Point.LEFT_BOTTOM;
    public open: boolean = false;

    /****
     * DatagridHideableColumn init
     * @type {Array}
     */
    public columns: DatagridHideableColumn[] = [];

    public get allColumnsVisible(): boolean {
        return this._allColumnsVisible;
    }

    public set allColumnsVisible(value: boolean) {
        this._allColumnsVisible = value;
    }

    constructor(public hideableColumnService: HideableColumnService) {}

    ngOnInit() {
        this._hideableColumnChangeSubscription = this.hideableColumnService.columnListChange.subscribe((columnList) => {
            // Reset the list of columns
            this.columns.length = 0;
            this.hideableColumnService.updateForLastVisibleColumn();
            this.allColumnsVisible = this.hideableColumnService.checkForAllColumnsVisible;

            // Add only the hidden columns to the toggler.
            columnList.forEach((col) => {
                if (col) {
                    this.columns.push(col);
                }
            });
        });
    }

    ngOnDestroy() {
        this._hideableColumnChangeSubscription.unsubscribe();
    }

    selectAll() {
        this.hideableColumnService.showHiddenColumns();
        this.allColumnsVisible = this.hideableColumnService.checkForAllColumnsVisible;
    }

    toggleColumn(event: boolean, column: DatagridHideableColumn) {
        column.hidden = !event;
        this.allColumnsVisible = this.hideableColumnService.checkForAllColumnsVisible;
        this.hideableColumnService.updateForLastVisibleColumn();
    }

    toggleUI() {
        this.open = !this.open;
    }
}
