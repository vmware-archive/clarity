/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {VTabsNavLink} from "../../clarity-angular/tabs/vtabs-nav-link";
import {VTabsContent} from "../../clarity-angular/tabs/vtabs-content";

@Component({
    moduleId: module.id,
    selector: "clr-vtabs-demo-static",
    templateUrl: "vtabs-angular.html"
})
export class VTabsAngularDemo {

    handleVTabsContentChange(event: VTabsContent) {
        console.log("VTabsContent item changed to: ", event);
    }

    handleVTabsNavChange(event: VTabsNavLink) {
        console.log("VTabsNavLink item changed to: ", event);
    }
}
