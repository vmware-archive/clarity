import {
    Component,
    Input
} from "@angular/core";

import { Tabs } from "./tabs";

@Component({
    selector: "clr-tab-link",
    templateUrl: "./tab-link.html",
    host: {
        "[id]": "id",
        "[attr.aria-selected]" : "active",
        "[attr.aria-controls]" : "ariaControls",
        "role" : "presentation",
        "[class.nav-item]" : "true",
        "[class.active]" : "active"
    }
})
export class TabLink {
    @Input("clrTabLinkActive") active: boolean = false;
    @Input("clrTabLinkId") id: string;
    ariaControls: string;

    constructor(private tabs: Tabs) {
    }

    onClick(): boolean {
        this.tabs.selectTab(this);
        return false; // so that browser doesn't navigate to the href of the anchor tag
    }

}
