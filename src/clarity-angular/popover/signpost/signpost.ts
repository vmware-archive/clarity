import {
    Component,
    Input,
} from "@angular/core";

import { Point, PopoverOptions } from "../common/popover";
import { IfOpenService } from "./if-open.service";
import { Subscription } from "rxjs/Subscription";

//aka where the arrow / pointer is at in relation to the anchor
const signpostPositions: string[] = [
    "top-left",
    "top-middle",
    "top-right",
    "right-top",
    "right-middle", // default
    "right-bottom",
    "bottom-right",
    "bottom-middle",
    "bottom-left",
    "left-bottom",
    "left-middle",
    "left-top",
];

@Component({
    selector: "clr-signpost",
    template: `
        <button
            #anchor
            type="button"
            class="signpost-action btn btn-small btn-link"
            [ngClass]="{active: open}"
            clrSignpostTrigger>
            <clr-icon shape="info"></clr-icon>
        </button><!-- TODO: turn into ng-content to handle default signpost icon and clrSignpostTrigger @Input. -->
        <ng-template [(clrPopover)]="ifOpenService.open"
                     [clrPopoverAnchor]="anchor"
                     [clrPopoverAnchorPoint]="anchorPoint"
                     [clrPopoverPopoverPoint]="popoverPoint"
                     [clrPopoverOptions]="signpostOptions">
            <ng-content select="clr-signpost-content"></ng-content>
        </ng-template>
    `,
    host: {
        "[class.signpost]": "true",
        "[class.top-left]": "signpostPosition == 'top-left'",
        "[class.top-middle]": "signpostPosition == 'top-middle'",
        "[class.top-right]": "signpostPosition == 'top-right'",
        "[class.right-top]": "signpostPosition == 'right-top'",
        "[class.right-middle]": "signpostPosition == 'right-middle'", //Default
        "[class.right-bottom]": "signpostPosition == 'right-bottom'",
        "[class.bottom-right]": "signpostPosition == 'bottom-right'",
        "[class.bottom-middle]": "signpostPosition == 'bottom-middle'",
        "[class.bottom-left]": "signpostPosition == 'bottom-left'",
        "[class.left-bottom]": "signpostPosition == 'left-bottom'",
        "[class.left-middle]": "signpostPosition == 'left-middle'",
        "[class.left-top]": "signpostPosition == 'left-top'",
        "[class.open]": "true" // always set to true; clrPopover will remove it from DOM when not open
    },
    providers: [ IfOpenService ]
})

/*********
 *
 * @class Signpost
 *
 * @description
 * Class used to configure and control the state of a Signpost and its associated SignpostContent.
 * It supports the clrSignpostPosition with a 'right-middle' default.
 *
 */
export class Signpost {

    /**********
     * @param _signpostPostion
     *
     * @description
     * This is the anchor position for the content in the popover in relation to the trigger icon.
     * The default is 'right-middle' meaning that the content will be on the right hand side of the trigger icon
     * and the icon will be vertically positioned in the middle of the popover window.
     *
     * @type {string}
     *
     * @private
     */
    private _signpostPostion: string = "right-middle"; // For default position

    /**********
     * @param _offsetY
     * @description
     * A value given to the popover class that moves the popover window +/- that many px in the Y axis
     * @type {number}
     * @private
     */
    private _offsetY: number = 6; // For default position

    /**********
     * @param _offsetX
     * @description
     * A value given to the popover class that moves the popover window +/- that many px in the X axis
     * @type {number}
     * @private
     */
    private _offsetX: number = 14; // For default position

    /*********
     * @param openSubscription
     *
     * @description
     * Used for resource allocation and clean up related to subscribing to the IfOpen service changes.
     * @type {Subscription}
     * @private
     */
    private openSubscription: Subscription;

    /**********
     * @param anchorPoint
     *
     * @description
     * A Point that is used by the popover directive to determine where the popover should be anchored relative to the
     * trigger icon. For example, Point.RIGHT_CENTER will anchor the popover template to the right center of the trigger
     * icon.
     *
     * @default Point.RIGHT_CENTER
     * @type {Point}
     */
    public anchorPoint: Point = Point.RIGHT_CENTER; // default if menuPosition isn't set

    /**********
     * @param popoverPoint
     *
     * @description
     * A Point that is used by the popover directive to determine where the popover should be placed in relation to the
     * trigger. For example, Point.LEFT_CENTER will position the rendered popover template on the LEFT_CENTER point of
     * popover container relative to the anchorPoint.
     *
     * @default Point.LEFT_CENTER
     * @type {Point}
     */
    public popoverPoint: Point = Point.LEFT_CENTER; // default if menuPosition isn't set

    /********
     * @param signpostOptions
     *
     * @description options that configure the popover used to display a SignpostContent component. We do not allow
     * multiple signposts to be open at the same time. offsetY and offsetX are used to 'move' the popover contining the
     * SignpostContent vertically (offsetY) or horizontally (offsetX) as needed for the Position. Both offsets take
     * both posative and negative values.
     *
     * @type {{allowMultipleOpen: boolean; offsetY: number; offsetX: number}}
     */
    public signpostOptions: PopoverOptions = {
        allowMultipleOpen: false,
        offsetY: this._offsetY, //TODO: set these based on signPostPosition case
        offsetX: this._offsetX
    };

    /**********
     *
     * @function open
     *
     * @description
     * A setter for the _open value which is subscribed to the IfOpen service of the IfOpen structural directive that
     * controls the creation and removal of the SignpostContent template.
     *
     * @param value<boolean>
     */
    public set open(value: boolean) {
        this.ifOpenService.open = value;
    }

    constructor( public ifOpenService: IfOpenService) {
        this.openSubscription = ifOpenService.openedChange.subscribe(change => {
            this.open = change;
        });
    }

    /*********
     * @function signpostPosition
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
     * @param position
     */
    @Input("clrSignpostPosition")
    set signpostPosition( position: string ) {
        if ( position && (signpostPositions.indexOf(position) > -1) ) {
            this._signpostPostion = position;
        } else {
            console.log("Setting default");
            this._signpostPostion = "right-middle";
        }
        // // set the popover values based on menu position
        switch ( this._signpostPostion ) {
            case ("top-left"):
                this.anchorPoint = Point.TOP_LEFT;
                this.popoverPoint = Point.BOTTOM_RIGHT;
                this.signpostOptions.offsetY = -8;
                this.signpostOptions.offsetX = 10;
                break;
            case ("top-middle"):
                this.anchorPoint = Point.TOP_CENTER;
                this.popoverPoint = Point.BOTTOM_CENTER;
                this.signpostOptions.offsetY = -8;
                this.signpostOptions.offsetX = 0;
                break;
            case ("top-right"):
                this.anchorPoint = Point.TOP_RIGHT;
                this.popoverPoint = Point.BOTTOM_LEFT;
                this.signpostOptions.offsetY = -8;
                this.signpostOptions.offsetX = -10;
                break;
            case ("right-top"):
                this.anchorPoint = Point.RIGHT_TOP;
                this.popoverPoint = Point.LEFT_BOTTOM;
                this.signpostOptions.offsetY = 18;
                this.signpostOptions.offsetX = 14;
                break;
            case ("right-middle"):
                this.anchorPoint = Point.RIGHT_CENTER;
                this.popoverPoint = Point.LEFT_CENTER;
                this.signpostOptions.offsetY = 6;
                this.signpostOptions.offsetX = 14;
                break;
            case ("right-bottom"):
                this.anchorPoint = Point.RIGHT_BOTTOM;
                this.popoverPoint = Point.LEFT_TOP;
                this.signpostOptions.offsetY = -18;
                this.signpostOptions.offsetX = 14;
                break;
            case ("bottom-right"):
                this.anchorPoint = Point.BOTTOM_RIGHT;
                this.popoverPoint = Point.TOP_LEFT;
                this.signpostOptions.offsetY = 6;
                this.signpostOptions.offsetX = -10;
                break;
            case ("bottom-middle"):
                this.anchorPoint = Point.BOTTOM_CENTER;
                this.popoverPoint = Point.TOP_CENTER;
                this.signpostOptions.offsetY = 6;
                this.signpostOptions.offsetX = 12;
                break;
            case ("bottom-left"):
                this.anchorPoint = Point.BOTTOM_LEFT;
                this.popoverPoint = Point.TOP_RIGHT;
                this.signpostOptions.offsetY = 6;
                this.signpostOptions.offsetX = 10;
                break;
            case ("left-top"):
                this.anchorPoint = Point.LEFT_TOP;
                this.popoverPoint = Point.RIGHT_BOTTOM;
                this.signpostOptions.offsetY = 18;
                this.signpostOptions.offsetX = -14;
                break;
            case ("left-middle"):
                this.anchorPoint = Point.LEFT_CENTER;
                this.popoverPoint = Point.RIGHT_CENTER;
                this.signpostOptions.offsetY = 6;
                this.signpostOptions.offsetX = -14;
                break;
            case ("left-bottom"):
                this.anchorPoint = Point.LEFT_BOTTOM;
                this.popoverPoint = Point.RIGHT_TOP;
                this.signpostOptions.offsetY = -18;
                this.signpostOptions.offsetX = -14;
                break;
            default:
                this.anchorPoint = Point.RIGHT_CENTER;
                this.popoverPoint = Point.LEFT_CENTER;
                break;
        }
    }

    /*********
     *
     * @function signpostPosition
     *
     * @description
     * A getter function for the current value of the _signpostPosition.
     *
     * @returns {string}
     */
    get signpostPosition(): string {
        return this._signpostPostion;
    }

    /*********
     *
     * @function toggleSignpost
     *
     * @description
     * function used to open and close the SignpostContent. It uses the setter of the open property for the
     * IfOpenService of the IfOpen structural directive used to create and destroy the SignpostContent popover
     * template.
     *
     * @description
     */
    public toggleSignpost() {
        this.ifOpenService.open = !this.ifOpenService.open;
    }
}
