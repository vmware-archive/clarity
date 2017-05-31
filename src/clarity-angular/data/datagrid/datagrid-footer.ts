/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Selection, SelectionType } from "./providers/selection";
import { HideableColumnService } from "./providers/hideable-column.service";

@Component({
    selector: "clr-dg-footer",
    template: `
        <ng-container
            *ngIf="(selection.selectionType === SELECTION_TYPE.Multi) && (selection.current.length > 0)">
            <clr-checkbox [clrDisabled]="true" [clrChecked]="true" class="datagrid-foot-select">
                {{selection.current.length}}
            </clr-checkbox>
        </ng-container>
        <clr-dg-column-toggle *ngIf="activeToggler"></clr-dg-column-toggle>
        <div class="datagrid-foot-description">
            <ng-content></ng-content>
        </div>
        <ng-content select="clr-dg-pagination"></ng-content>
    `,
    host: {
        "[class.datagrid-foot]": "true",
    },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatagridFooter implements OnInit {

    constructor( public selection: Selection,
                 public hideableColumnService: HideableColumnService,
                 public cdr: ChangeDetectorRef ) {}

    public activeToggler: boolean;
    private subscriptions: Subscription[] = [];

    /* reference to the enum so that template can access */
    public SELECTION_TYPE = SelectionType;

    ngOnInit() {
        this.subscriptions.push(
            this.hideableColumnService.columnListChange.subscribe(( change ) => {
                let hiddenColumns = change.filter(col => col);
                if ( hiddenColumns.length > 0 ) {
                    this.activeToggler = true;
                }
                this.cdr.detectChanges();
            })
        );

        this.subscriptions.push(
            this.selection.change.subscribe(() => {
                this.cdr.markForCheck();
            })
        );

        let hiddenColumns = this.hideableColumnService
                                .getColumns()
                                .filter(col => col);

        if ( hiddenColumns.length > 0 ) {
            this.activeToggler = true;
        }
    }

    ngOnDestroy() {
        this.subscriptions.forEach(( sub ) => {
            sub.unsubscribe();
        });
    }
}
