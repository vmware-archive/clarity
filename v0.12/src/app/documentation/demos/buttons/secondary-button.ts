/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<button class="btn">Secondary</button>
`;

@Component({
    selector: "clr-buttons-demo-secondary-button",
    templateUrl: "./secondary-button.html",
    styleUrls: ["./buttons.demo.scss"]
})
export class SecondaryButtonDemo {
    htmlExample = HTML_EXAMPLE;
}
