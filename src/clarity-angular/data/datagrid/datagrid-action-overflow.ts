/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    Component, EventEmitter, HostListener, Input, Output, ElementRef
} from "@angular/core";
import {Point} from "../../popover/common/popover";

@Component({
    selector: "clr-dg-action-overflow",
    template: `
        <clr-icon #anchor shape="ellipsis-vertical" class="datagrid-action-toggle" (click)="toggle()"></clr-icon>
        <ng-template [(clrPopoverOld)]="open" [clrPopoverOldAnchor]="anchor" [clrPopoverOldAnchorPoint]="anchorPoint"
             [clrPopoverOldPopoverPoint]="popoverPoint">
            <div #menu class="datagrid-action-overflow">
                <ng-content></ng-content>
            </div>
        </ng-template>
    `
})

export class DatagridActionOverflow {

    public anchorPoint: Point = Point.RIGHT_CENTER;
    public popoverPoint: Point = Point.LEFT_CENTER;

    constructor(private elementRef: ElementRef) {
    }

    /**
     * Tracks whether the action overflow menu is open or not
     */
    private _open = false;
    public get open() {
        return this._open;
    }

    @Input("clrDgActionOverflowOpen")
    public set open(open: boolean) {
        let boolOpen = !!open;
        if (boolOpen !== this._open) {
            this._open = boolOpen;
            this.openChanged.emit(boolOpen);
        }
    }

    @Output("clrDgActionOverflowOpenChange") public openChanged = new EventEmitter<boolean>(false);

    /**
     * Shows/hides the action overflow menu
     */
    public toggle() {
        this.open = !this.open;
    }

    //called on mouse clicks anywhere in the DOM.
    //Checks to see if the mouseclick happened on the host or outside
    @HostListener("document:click", [ "$event.target" ])
    onMouseClick(target: any): void {
        if (this._open) {
            let current: any = target; //Get the element in the DOM on which the mouse was clicked
            let actionMenuHost: any = this.elementRef.nativeElement; //Get the current actionMenu native HTML element

            if (target.className === "datagrid-action-overflow") {
                return; // if clicking on the action overflow container but not the content, return without closing
            }

            //Start checking if current and actionMenuHost are equal. If not traverse to the parentNode and check again.
            while (current) {
                if (current.className === "datagrid-action-overflow") {
                    break; // if user clicked on the overflow menu, hide it
                }
                if (current === actionMenuHost) {
                    return;
                }
                current = current.parentNode;
            }
            this._open = false; // Hide the overflow menu
        }
    }
}
