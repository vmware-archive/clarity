/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    Component, EventEmitter, HostListener, Input, Output, ElementRef, ViewChild
} from "@angular/core";
import {Point} from "../popover/popover";
import {DatagridRenderOrganizer} from "./render/render-organizer";


@Component({
    selector: "clr-dg-action-overflow",
    template: `
        <clr-icon #anchor shape="ellipsis-vertical" class="datagrid-action-toggle" (click)="toggle()"></clr-icon>
        <div #menu class="datagrid-action-overflow" *clrPopover="open; anchor: anchor; anchorPoint: anchorPoint; 
            popoverPoint: popoverPoint;">
            <ng-content></ng-content>
        </div>
    `
})

export class DatagridActionOverflow {

    public anchorPoint: Point = Point.RIGHT_CENTER;
    public popoverPoint: Point = Point.LEFT_CENTER;

    constructor(private elementRef: ElementRef, private datagridRenderOrganizer: DatagridRenderOrganizer) {
    }

    // after change detection cycle settles, refresh the scrollbar
    // NOTE: this might break if angular decides to change when @ViewChild's setter is called in its lifecycle
    @ViewChild("menu") set menu(child: any) {
        // Scrollbar might have disappeared, we need to warn the renderers
        if (child) {
            // TODO: A webkit bug prevents us from simply refreshing the scrollbar. Weird. Needs investigation.
            // this.renderOrganizer.scrollbar.next();
            this.datagridRenderOrganizer.resize();
        }
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