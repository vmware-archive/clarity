/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<span class="spinner spinner-sm">
    Loading...
</span>
`;

const EXAMPLE1 = `
<span class="spinner spinner-md">
    Loading...
</span>
`;

const EXAMPLE2 = `
<span class="spinner spinner-lg">
    Loading...
</span>
`;

@Component({
    selector: "clr-spinner-sizes",
    templateUrl: "./spinner-sizes.html",
    styleUrls: ["./spinner.demo.scss"]
})
export class SpinnerSizesDemo {
    example = EXAMPLE;
    example1 = EXAMPLE1;
    example2 = EXAMPLE2;
}
