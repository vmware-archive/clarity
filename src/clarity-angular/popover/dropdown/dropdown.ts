/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    Optional,
    Output,
    SkipSelf
} from "@angular/core";

import { Point, PopoverOptions } from "../common/popover";
import { menuPositions } from "./menu-positions";

// TODO: the ng-content inside the ng-template should ideally just be
// <ng-content select="clr-dropdown-menu"></ng-content>. Remove .dropdown-menu in 1.0?
@Component({
    selector: "clr-dropdown",
    template: `
        <ng-content select="[clrDropdownToggle]"></ng-content>
        <ng-template [(clrPopover)]="open" [clrPopoverAnchor]="anchor" [clrPopoverAnchorPoint]="anchorPoint"
                     [clrPopoverPopoverPoint]="popoverPoint" [clrPopoverOptions]="popoverOptions">
            <ng-content select="[clr-dropdown-menu, .dropdown-menu]"></ng-content>
        </ng-template>
    `,
    host: {
        "[class.dropdown]" : "true",
        "[class.right-top]" : "menuPosition == 'right-top'",
        "[class.left-top]" : "menuPosition == 'left-top'",
        "[class.right-bottom]" : "menuPosition == 'right-bottom'",
        "[class.left-bottom]" : "menuPosition == 'left-bottom'",
        "[class.open]" : "true" // always set to true; clrPopover will remove it from DOM when not open
    }
})
export class Dropdown {

    @Input("clrDropdownMenuOpen") _open: boolean = false;

    @Output("clrDropdownMenuOpenChange") _openChanged: EventEmitter<boolean> = new EventEmitter<boolean>(false);

    @Input("clrCloseMenuOnItemClick") isMenuClosable: boolean = true;

    private _menuPosition: string;
    public anchorPoint: Point = Point.BOTTOM_LEFT; // default if menuPosition isn't set
    public popoverPoint: Point = Point.LEFT_TOP; // default if menuPosition isn't set
    public anchor: any; // host element is the anchor
    public popoverOptions: PopoverOptions = { allowMultipleOpen: true };

    constructor(public elementRef: ElementRef, @SkipSelf() @Optional() public parent: Dropdown) {
        this.anchor = elementRef.nativeElement;
    }

    get isRootLevelDropdown(): boolean {
        return this.parent === null;
    }

    @Input("clrMenuPosition")
    set menuPosition(pos: string) {
        if (pos && (menuPositions.indexOf(pos) > -1)) {
            this._menuPosition = pos;
        } else {
            this._menuPosition = "bottom-left";
        }
        // set the popover values based on menu position
        switch (this._menuPosition) {
            case ("top-right"):
                this.anchorPoint = Point.TOP_RIGHT;
                this.popoverPoint = Point.RIGHT_BOTTOM;
                break;
            case ("top-left"):
                this.anchorPoint = Point.TOP_LEFT;
                this.popoverPoint = Point.LEFT_BOTTOM;
                break;
            case ("bottom-right"):
                this.anchorPoint = Point.BOTTOM_RIGHT;
                this.popoverPoint = Point.RIGHT_TOP;
                break;
            case ("bottom-left"):
                this.anchorPoint = Point.BOTTOM_LEFT;
                this.popoverPoint = Point.LEFT_TOP;
                break;
            case ("right-top"):
                this.anchorPoint = Point.RIGHT_TOP;
                this.popoverPoint = Point.LEFT_TOP;
                break;
            case ("right-bottom"):
                this.anchorPoint = Point.RIGHT_BOTTOM;
                this.popoverPoint = Point.LEFT_BOTTOM;
                break;
            case ("left-top"):
                this.anchorPoint = Point.LEFT_TOP;
                this.popoverPoint = Point.RIGHT_TOP;
                break;
            case ("left-bottom"):
                this.anchorPoint = Point.LEFT_BOTTOM;
                this.popoverPoint = Point.RIGHT_BOTTOM;
                break;
            default:
                this.anchorPoint = Point.BOTTOM_LEFT;
                this.popoverPoint = Point.LEFT_TOP;
                break;
        }
    }

    get menuPosition(): string {
        return this._menuPosition;
    }

    toggleDropdown(): void {
        this.open = !this.open;
    }

    get open(): boolean {
        return this._open;
    }

    set open(val: boolean) {
        this._open = val;
        this._openChanged.emit(val);
    }

    //called on mouse clicks anywhere in the DOM.
    //Checks to see if the mouseclick happened on the host or outside
    @HostListener("document:click", ["$event.target"])
    onMouseClick(target: any): void {
        if (this.open) {
            let current: any = target; //Get the element in the DOM on which the mouse was clicked
            let dropdownHost: any = this.elementRef.nativeElement; //Get the current dropdown native HTML element

            //Start checking if current and dropdownHost are equal. If not traverse to the parentNode and check again.
            while (current) {
                if (current === dropdownHost) {
                    return;
                }
                current = current.parentNode;
            }
            this.open = false; //Remove .open from the dropdown
        }
    }
}
