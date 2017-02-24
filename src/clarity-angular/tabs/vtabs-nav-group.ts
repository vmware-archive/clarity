
import {Component} from "@angular/core";

/**
 * @class VTabsNavGroup
 *
 * @description
 * A child component of VTabs that is a container for a group of nav links.
 * An optional label can be passed in to give the group a title.
 * clr-vtabs-nav-links are projected to the VTabsNavLink class.
 *
 * Style is set in the template, not dynamically.
 */
@Component({
    selector: "clr-vtabs-nav-group",
    template: `
        <div class="nav-group">
            <ng-content select="label"></ng-content>
            <ul class="nav-list" role="tablist">              
                <ng-content select="clr-vtabs-nav-link"></ng-content>
             </ul>
         </div>
    `
})
export class VTabsNavGroup { }
