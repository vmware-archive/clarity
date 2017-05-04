/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input } from "@angular/core";
import { Point } from "../common/popover";


const tooltipDirections: string[] = [
    "bottom-left",
    "bottom-right",
    "top-left",
    "top-right",
    "right",
    "left"
];

const tooltipSizes: string[] = [
    "xs",
    "sm",
    "md",
    "lg"
];

@Component({
    selector: "clr-tooltip",
    template: `
       <a #anchor href="javascript://" role="tooltip" aria-haspopup="true" class="tooltip" 
                [ngClass]="'tooltip-' + direction + ' tooltip-' + size">
           <ng-content></ng-content>
           <ng-template [(clrPopover)]="visible" [clrPopoverAnchor]="anchor" [clrPopoverAnchorPoint]="anchorPoint"
                        [clrPopoverPopoverPoint]="popoverPoint">
                <span class="tooltip-content">
                    <ng-content select="clr-tooltip-content"></ng-content>
                </span>
           </ng-template>
        </a>
    `,
    host: {
        "(mouseenter)": "onMouseEnter()",
        "(mouseleave)": "onMouseLeave()"
    }
})
export class Tooltip {
    public visible: boolean = false;
    public anchorPoint: Point = Point.RIGHT_CENTER;
    public popoverPoint: Point = Point.LEFT_TOP;
    private _tooltipDirection: string = "right";
    private _tooltipSize: string = "sm";

    @Input("clrTooltipDirection")
    set direction(direction: string) {
        if (direction && (tooltipDirections.indexOf(direction) > -1)) {
            this._tooltipDirection = direction;
        } else {
            this._tooltipDirection = "right";
        }
        // set the popover values based on direction
        switch (this._tooltipDirection) {
            case ("top-right"):
                this.anchorPoint = Point.TOP_CENTER;
                this.popoverPoint = Point.LEFT_BOTTOM;
                break;
            case ("top-left"):
                this.anchorPoint = Point.TOP_CENTER;
                this.popoverPoint = Point.RIGHT_BOTTOM;
                break;
            case ("bottom-right"):
                this.anchorPoint = Point.BOTTOM_CENTER;
                this.popoverPoint = Point.LEFT_TOP;
                break;
            case ("bottom-left"):
                this.anchorPoint = Point.BOTTOM_CENTER;
                this.popoverPoint = Point.RIGHT_TOP;
                break;
            case ("right"):
                this.anchorPoint = Point.RIGHT_CENTER;
                this.popoverPoint = Point.LEFT_TOP;
                break;
            case ("left"):
                this.anchorPoint = Point.LEFT_CENTER;
                this.popoverPoint = Point.RIGHT_TOP;
                break;
            default:
                this.anchorPoint = Point.RIGHT_CENTER;
                this.popoverPoint = Point.LEFT_TOP;
                break;
        }
    }

    get direction(): string {
        return this._tooltipDirection;
    }

    @Input("clrTooltipSize")
    set size(size: string) {
        if (size && (tooltipSizes.indexOf(size) > -1)) {
            this._tooltipSize = size;
        } else {
            this._tooltipSize = "md";
        }
    }

    get size(): string {
        return this._tooltipSize;
    }

    onMouseEnter() {
        this.visible = true;
    }

    onMouseLeave() {
        this.visible = false;
    }

}
