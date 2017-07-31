/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ElementRef, Injector, Input, SkipSelf} from "@angular/core";
import {AbstractPopover} from "../common/abstract-popover";
import {SIGNPOST_POSITIONS} from "./signpost-positions";

// aka where the arrow / pointer is at in relation to the anchor
const POSITIONS: string[] = [
    "top-left",
    "top-middle",
    "top-right",
    "right-top",
    "right-middle",  // default
    "right-bottom",
    "bottom-right",
    "bottom-middle",
    "bottom-left",
    "left-bottom",
    "left-middle",
    "left-top",
];

@Component({
    selector: "clr-signpost-content",
    template: `
        <div class="signpost-flex-wrap">
            <div class="popover-pointer"></div>
            <div class="signpost-content-header">
                <button type="button" class="signpost-action close" aria-label="Close" (click)="close()">
                    <clr-icon aria-hidden="true" shape="close"></clr-icon>
                </button>
            </div>
            <div class="signpost-content-body">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    host: {"[class.signpost-content]": "true"}
})
export class SignpostContent extends AbstractPopover {
    constructor(injector: Injector, @SkipSelf() parentHost: ElementRef) {
        super(injector, parentHost);
        // Defaults
        this.position = "right-middle";
        this.closeOnOutsideClick = true;
    }

    /**********
     * @function close
     *
     * @description
     * Close function that uses the signpost instance to toggle the state of the content popover.
     *
     */
    close() {
        this.ifOpenService.open = false;
    }

    private _position: string;

    get position() {
        return this._position;
    }

    /*********
     * @function set position
     *
     * @description
     * A setter for the position of the SignpostContent popover. This is a combination of the following:
     * - anchorPoint - where on the trigger to anchor the SignpostContent
     * - popoverPoint - where on the SignpostContent container to align with the anchorPoint
     * - offsetY - where on the Y axis to align the SignpostContent so it meets specs
     * - offsetX - where on the X axis to align the SignpostContent so it meets specs
     * There are 12 possible positions to place a SignpostContent container:
     * - top-left
     * - top-middle
     * - top-right
     * - right-top
     * - right-middle
     * - right-bottom
     * - bottom-right
     * - bottom-middle
     * - bottom-left
     * - left-bottom
     * - left-middle
     * - left-top
     *
     * I think of it as follows for 'top-left' -> CONTAINER_SIDE-SIDE_POSITION. In this case CONTAINER_SIDE is 'top'
     * meaning the top of the trigger icon (above the icon that hides/shows) the SignpostContent. And, SIDE_POSITION is
     * 'left' meaning two things: 1) the SignpostContent container extends to the left and 2) the 'arrow/pointer'
     * linking the SingpostContent to the trigger points down at the horizontal center of the trigger icon.
     *
     * @param newPosition
     */
    @Input("clrPosition")
    set position(position: string) {
        // Ugh
        this.renderer.removeClass(this.el.nativeElement, this.position);
        if (position && (POSITIONS.indexOf(position) > -1)) {
            this._position = position;
        } else {
            this._position = "right-middle";
        }
        // Ugh
        this.renderer.addClass(this.el.nativeElement, this.position);

        const setPosition = SIGNPOST_POSITIONS[this.position];
        this.anchorPoint = setPosition.anchorPoint;
        this.popoverPoint = setPosition.popoverPoint;
        this.popoverOptions.offsetY = setPosition.offsetY;
        this.popoverOptions.offsetX = setPosition.offsetX;
    }
}
