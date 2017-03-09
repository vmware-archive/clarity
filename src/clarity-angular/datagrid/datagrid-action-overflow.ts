/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    Component, EventEmitter, HostListener, Input, Output, ElementRef, ViewChildren, QueryList, AfterViewInit, OnDestroy
} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {RowActionService} from "./providers/row-action-service";
import {Popover, Direction} from "../popover/popover";


@Component({
    selector: "clr-dg-action-overflow",
    template: `
        <clr-icon shape="ellipsis-vertical" class="datagrid-action-toggle" (click)="toggle()"></clr-icon>
        <div #menu class="datagrid-action-overflow" *ngIf="open">
            <ng-content></ng-content>
        </div>
    `
})

export class DatagridActionOverflow implements OnDestroy, AfterViewInit {

    constructor(private elementRef: ElementRef, private rowActionService: RowActionService) {}

    private position: Popover;

    @ViewChildren("menu") menu: QueryList<ElementRef>;

    ngAfterViewInit() {
        this._menuSubscription = this.menu.changes.subscribe(() => {
            if (this.menu.length > 0) {
                this.rowActionService.open(() => {
                    this.position = new Popover(this.menu.first.nativeElement);
                    this.position.anchor(this.elementRef.nativeElement, Direction.RIGHT, {userAnchorParent: true});
                });
            } else {
                this.position.destroy();
                delete this.position;
                this.rowActionService.close();
            }
        });
    }

    private _menuSubscription: Subscription;
    ngOnDestroy() {
        this._menuSubscription.unsubscribe();
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