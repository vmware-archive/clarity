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

    private _selected = false;
    /**
     * Indicates if the row is selected
     */
    public get selected() {
        if (this.selection.selectable) {
            return this.selection.isSelected(this.item);
        } else {
            return this._selected;
        }
    }
    @Input("clrDgSelected")
    public set selected(value: boolean) {
        if (this.selection.selectable) {
            this.selection.setSelected(this.item, value);
        } else {
            this._selected = value;
        }
    }

    @Output("clrDgSelectedChange") selectedChanged = new EventEmitter<boolean>(false);

    public toggle(selected = !this.selected) {
        if (selected !== this.selected) {
            this.selected = selected;
            this.selectedChanged.emit(selected);
        }
    }
}