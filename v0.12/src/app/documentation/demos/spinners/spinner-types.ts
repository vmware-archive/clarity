/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<span class="spinner">
    Loading...
</span>
`;

const EXAMPLE1 = `
<span class="spinner spinner-inline">
    Loading...
</span>
<span>
    Loading...
</span>
`;

const EXAMPLE2 = `
<span class="spinner spinner-inverse">
    Loading...
</span>
`;

@Component({
    selector: "clr-spinner-types",
    templateUrl: "./spinner-types.html",
    styleUrls: ["./spinner.demo.scss"]
})
export class SpinnerTypesDemo {
    example = EXAMPLE;
    example1 = EXAMPLE1;
    example2 = EXAMPLE2;
}
