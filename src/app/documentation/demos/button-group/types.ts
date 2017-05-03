/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE_1 = `
<div class="btn-group btn-primary">
    <button class="btn">Add</button>
    <button class="btn">Edit</button>
    <button class="btn">Download</button>
    <button class="btn">Delete</button>
</div>
`;

const HTML_EXAMPLE_2 = `
<div class="btn-group">
    <button class="btn">Add</button>
    <button class="btn">Edit</button>
    <button class="btn">Download</button>
    <button class="btn">Delete</button>
</div>
`;

const HTML_EXAMPLE_3 = `
<div class="btn-group btn-link">
    <button class="btn">Add</button>
    <button class="btn">Edit</button>
    <button class="btn">Download</button>
    <button class="btn">Delete</button>
</div>
`;

const HTML_EXAMPLE_4 = `
<div class="btn-group btn-outline-primary btn-sm">
    <button class="btn">Add</button>
    <button class="btn">Edit</button>
    <button class="btn">Download</button>
    <button class="btn">Delete</button>
</div>
`;

@Component({
    selector: "clr-button-group-types-demo",
    templateUrl: "./types.html"
})
export class ButtonGroupTypes {
    htmlExample1 = HTML_EXAMPLE_1;
    htmlExample2 = HTML_EXAMPLE_2;
    htmlExample3 = HTML_EXAMPLE_3;
    htmlExample4 = HTML_EXAMPLE_4;
}
