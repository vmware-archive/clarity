/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE_1 = `
<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-danger" disabled>Disabled</button>
`;

const HTML_EXAMPLE_2 = `
<button class="btn btn-outline">Regular</button>
<button class="btn btn-success-outline">Success-Outline</button>
<button class="btn btn-info-outline">Info</button>
<button class="btn btn-warning-outline">Warning</button>
<button class="btn btn-danger-outline">Danger</button>
<button class="btn btn-outline" disabled>Disabled</button>
`;

const HTML_EXAMPLE_3 = `
<button class="btn btn-link">Regular</button>
<button class="btn btn-link" disabled>Disabled</button>
<button class="btn btn-sm btn-link">Regular</button>
<button class="btn btn-sm btn-link" disabled>Disabled</button>
`;

@Component({
    selector: "clr-buttons-demo-real-button",
    templateUrl: "./real-button.html",
    styleUrls: ["./buttons.demo.scss"]
})
export class RealButtonDemo {
    htmlExample1 = HTML_EXAMPLE_1;
    htmlExample2 = HTML_EXAMPLE_2;
    htmlExample3 = HTML_EXAMPLE_3;
}
