/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {ClarityDocComponent} from "../clarity-doc";

const COMP_JSON = require("../../../../settings/componentlist.json");

let BADGE_COMPONENT = {
    url: "",
    text: "",
    ui: -1,
    ng: -1,
    newLayout: false
};

for (let component of COMP_JSON.list) {
    if (component.url === "badges") {
        BADGE_COMPONENT = component;
        break;
    } else {
        throw new Error("Component does not exist in componentlist.json");
    }
}

@Component({
    selector: "clr-badges-demo",
    templateUrl: "./badges.demo.html",
    host: {
        "[class.content-area]": "true",
        "[class.dox-content-panel]": "true"
    }
})
export class BadgesDemo extends ClarityDocComponent {
    expanded: boolean = false;

    constructor() {
        super(BADGE_COMPONENT.text, BADGE_COMPONENT.ui, BADGE_COMPONENT.ng, BADGE_COMPONENT.newLayout);
    }

    static DATA = {
        bodyClass: "page-" + BADGE_COMPONENT.url,
        browserTitle: BADGE_COMPONENT.text
    };

    static URL: string = BADGE_COMPONENT.url;
}
