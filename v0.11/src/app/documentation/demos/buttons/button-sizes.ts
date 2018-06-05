/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE_1 = `
<button class="btn">Regular</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-danger">Danger</button>
<button class="btn" disabled>Disabled</button>
`;

const HTML_EXAMPLE_2 = `
<button class="btn btn-sm">Regular</button>
<button class="btn btn-primary btn-sm">Primary</button>
<button class="btn btn-success btn-sm">Success</button>
<button class="btn btn-info btn-sm">Info</button>
<button class="btn btn-warning btn-sm">Warning</button>
<button class="btn btn-danger btn-sm">Danger</button>
<button class="btn btn-sm" disabled>Disabled</button>
`;

const HTML_EXAMPLE_3 = `
<button class="btn btn-primary btn-block">Primary</button>
<button class="btn btn-success btn-block">Success</button>
`;

const HTML_EXAMPLE_4 = `
<button class="btn btn-link">Flat Regular</button>
<button class="btn btn-link" disabled>Flat Disabled</button>
`;

const HTML_EXAMPLE_5 = `
<button class="btn btn-link btn-sm">Flat Regular</button>
<button class="btn btn-link btn-sm" disabled>Flat Disabled</button>
`;

@Component({
    selector: "clr-buttons-demo-button-sizes",
    templateUrl: "./button-sizes.html",
    styleUrls: ["./buttons.demo.scss"]
})
export class ButtonSizesDemo {
    htmlExample1 = HTML_EXAMPLE_1;
    htmlExample2 = HTML_EXAMPLE_2;
    htmlExample3 = HTML_EXAMPLE_3;
    htmlExample4 = HTML_EXAMPLE_4;
    htmlExample5 = HTML_EXAMPLE_5;
}
