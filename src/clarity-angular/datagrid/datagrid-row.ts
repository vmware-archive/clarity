/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Selection} from "./providers/selection";

@Component({
    selector: "clr-dg-row",
    template: `
        <clr-dg-cell *ngIf="selection.selectable" class="datagrid-select">
            <clr-checkbox [ngModel]="selected" (ngModelChange)="toggle($event)"></clr-checkbox>
        </clr-dg-cell>
        <ng-content></ng-content>
    `,
    host: {
        "[class.datagrid-row]": "true",
        "[class.datagrid-selected]": "selected"
    }
})
export class DatagridRow {
    /**
     * Model of the row, to use for selection
     */
    @Input("clrDgItem") item: any;

    constructor(private selection: Selection) {}

    /**
     * Indicates if the row is selected
     */
    public get selected() {
        return this.selection.isSelected(this.item);
    }
    @Input("clrDgSelected")
    public set selected(value: boolean) {
        this.selection.setSelected(this.item, value);
    }

    @Output("clrDgSelectedChange") selectedChanged = new EventEmitter<boolean>(false);

    public toggle(selected = !this.selected) {
        if (selected !== this.selected) {
            this.selected = selected;
            this.selectedChanged.emit(selected);
        }
    }
}