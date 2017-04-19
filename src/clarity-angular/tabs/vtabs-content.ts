import {Component} from "@angular/core";


/**
 * @class VTabContent
 *
 * @description
 * A child component of VTabs that:
 * 1. Provides an id property set and used by the VTabs class to map VTabsNavLink items to the corresponding
 *    VTabsContent items
 * 2. Provides an activated property that triggers Angular to add/remove the content to the DOM via *ngIf
 */
@Component({
    selector: "clr-vtabs-content",
    template: `
            <ng-content *ngIf="activated"></ng-content>
    `,
    host: {
        "[class.vtabs-content]": "true",
        "[class.active]": "activated",
        "role": "tabpanel"
    }
})

export class VTabsContent {

    /**
     * @property activated
     *
     * @description
     * The property that is used with *ngIf to add/remove a VTabsContent item from the UI.
     * It is managed by the activateTabContentAtIndex method in VTabs
     *
     * @type {boolean}
     */
    public activated: boolean = false;

    /**
     * @property id
     *
     * @description
     * An identifier that is used to map one VTabsNavLink to on VTabsContent pair.
     */
    public id: string;
}
