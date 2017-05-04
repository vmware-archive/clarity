/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE1 = `
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-xs">
    <span class="example-icon example-add-icon"></span>
    <span class="tooltip-content">Lorem</span>
</a>
`;
const EXAMPLE2 = `
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-sm">
    <span class="example-icon example-add-icon"></span>
    <span class="tooltip-content">Lorem</span>
</a>
`;

const EXAMPLE3 = `
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-md">
    <span class="example-icon example-add-icon"></span>
    <span class="tooltip-content">Lorem</span>
</a>
`;

const EXAMPLE4 = `
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-lg">
    <span class="example-icon example-add-icon"></span>
    <span class="tooltip-content">Lorem</span>
</a>
`;

@Component({
    selector: "clr-tooltips-sizes-demo",
    styleUrls: ["./tooltips.demo.scss"],
    templateUrl: "./tooltips-sizes.html"
})
export class TooltipsSizesDemo {
    example1 = EXAMPLE1;
    example2 = EXAMPLE2;
    example3 = EXAMPLE3;
    example4 = EXAMPLE4;
}
