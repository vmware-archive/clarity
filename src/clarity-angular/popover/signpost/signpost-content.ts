import {
    Component, ElementRef, HostListener
} from "@angular/core";
import { IfOpenService } from "../../utils/conditional/if-open.service";

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
    host: {
        "[class.signpost-content]": "true"
    }
})
export class SignpostContent {

    /**********
     * @param nbClick
     *
     * @description
     * Used to keep count of the clicks heard by the @HostListener. We always, always, always ignores the first click
     * (i.e - the click that opened the SignpostContent)
     * @type {number}
     */
    private nbClick: number = 0;

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

    constructor(private ifOpenService: IfOpenService, private elementRef: ElementRef) { }

    /**********
     * @function onClick
     *
     * @description
     * This function is an angular @HostListener that listens for clicks on the document and
     * 1. Ignores any clicks inside the host
     * 2. Always, always always ignores the first click (i.e - the click that opened the SignpostContent)
     *
     * @param target
     */
    @HostListener("document:click", [ "$event.target" ]) onClick( target: any ) {
        if ( this.ifOpenService.open ) {
            if ( this.nbClick === 0 ) {
                // Ignore the first click so we don't auto close the SignpostContent.
                this.nbClick++;
                return;
            }

            let current: any = target; //Get the element in the DOM on which the mouse was clicked
            let signpostContentHost: any = this.elementRef.nativeElement; //Get current signpost native HTML element

            //Start checking if current and signpost host are equal. If not traverse to the parentNode and check again.
            while ( current ) {
                if ( current === signpostContentHost ) {
                    return;
                }
                current = current.parentNode;
            }
            this.ifOpenService.open = false; //Remove .open from the dropdown
        }
    }
}
