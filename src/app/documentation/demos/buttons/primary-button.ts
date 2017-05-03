/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<button class="btn btn-primary">Primary</button>
`;

@Component({
    selector: "clr-buttons-demo-primary-button",
    templateUrl: "./primary-button.html",
    styleUrls: ["./buttons.demo.scss"]
})
export class PrimaryButtonDemo {
    htmlExample = HTML_EXAMPLE;
}
