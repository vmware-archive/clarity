
import {Component, Input, EventEmitter} from "@angular/core";

/**
 * @class VTabsNavLink
 *
 * @description
 * A child component of VTabs that:
 *  1. Creates the navigation links
 *  2. Exposes an input property that allows binding to preselect a specific tab
 *  3. Has functionality to allow an instance to become active and emit the change up to VTabs
 */
@Component({
    selector: "clr-vtabs-nav-link",
    template: `
        <li (click)="activateLink()" >
            <button role="tab" class="btn btn-link">
               <ng-content></ng-content>
            </button>
        </li>`,
    host: {
        "[class.nav-link]": "true",
        "[class.active]": "activated",
        "role": "presentation"
    }
})

export class VTabsNavLink {

    /**
     * @property activated
     *
     * @description
     * The property that is used to set/unset the .active style class for the link.
     * It is exposed as @Input("clrActivatedNavLink") so the user can preset a specific tab.
     *
     * @type {boolean}
     */
    @Input("clrActivatedNavLink")
    public activated: boolean = false;

    /**
     * @property id
     *
     * @description
     * iString set by VTabs during the ngAfterContentInit lifecycle. It is unique and used to:
     * 1. Map a VTabsNavLink to a corresponding VTabsContent
     *
     * @type {string}
     */
    public id: string;

    /**
     * @property activatedChange
     *
     * @description
     * Used to communicate changes up to VTabs when the VTabsNavLink instance is activated (clicked).
     *
     * @type {EventEmitter}
     */
    activatedChange: EventEmitter<VTabsNavLink> = new EventEmitter();


    /**
     * @function activatedLink
     *
     * @description
     * Click handler method used to:
     * 1. Check if instance is already active
     * 2. Set the instance of VTabsNavLink to active
     * 2. Emit the change to subscribers (VTabs) of activatedChange
     */
    activateLink() {
        if (!this.activated) {
            this.activated = true;
            this.activatedChange.emit(this);
        }
    }
}
