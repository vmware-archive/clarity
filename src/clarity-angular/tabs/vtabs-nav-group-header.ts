
import {Component} from "@angular/core";

@Component({
    selector: "clr-vtabs-nav-group-header",
    template: `
        <label>
            <ng-content></ng-content>
        </label>
    `,
    host: {
        "[class.vtabs-nav-header]": "true"
    }
})

export class VTabsNavGroupHeader { }
