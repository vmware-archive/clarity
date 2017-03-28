/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {Selection, SelectionType} from "./providers/selection";

@Component({
    selector: "clr-dg-footer",
    template: `
        <ng-container 
            *ngIf="(selection.selectionType === SELECTION_TYPE.Multi) && (selection.current.length > 0)">
            <clr-checkbox [clrDisabled]="true" [clrChecked]="true" class="datagrid-footer-select">
                {{selection.current.length}}
            </clr-checkbox>
        </ng-container>
        <ng-content></ng-content>
    `,
    host: {
        "[class.datagrid-foot]": "true",
    }
})
export class DatagridFooter {

    constructor(public selection: Selection) {}

    /* reference to the enum so that template can access */
    public SELECTION_TYPE = SelectionType;
}