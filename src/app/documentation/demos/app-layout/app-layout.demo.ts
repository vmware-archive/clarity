/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import {ClarityDocComponent} from "../clarity-doc";

const HTML_EXAMPLE = `
html {
    /* the following line of CSS would change Clarity to a 20px vertical rhythm with a 5px grid */
    font-size: 20px;
}
`;

@Component({
    selector: "clr-app-layout-demo",
    templateUrl: "./app-layout.demo.html",
    host: {
        "[class.content-area]": "true",
        "[class.dox-content-panel]": "true"
    }
})
export class AppLayoutDemo extends ClarityDocComponent {
    constructor() {
        super("app-layout");
    }

    htmlExample = HTML_EXAMPLE;
}
