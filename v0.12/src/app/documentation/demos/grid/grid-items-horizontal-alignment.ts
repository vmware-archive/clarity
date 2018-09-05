/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE_1 = `
<div class="clr-row clr-justify-content-start">
    <div class="clr-col-4">
        <span>
            1/3
        </span>
    </div>
    <div class="clr-col-4">
        <span>
            1/3
        </span>
    </div>
</div>
`;

const EXAMPLE_2 = `
<div class="clr-row clr-justify-content-center">
    <div class="clr-col-4">
        <span>
            1/3
        </span>
    </div>
    <div class="clr-col-4">
        <span>
            1/3
        </span>
    </div>
</div>
`;

const EXAMPLE_3 = `
<div class="clr-row clr-justify-content-end">
    <div class="clr-col-4">
        <span>
            1/3
        </span>
    </div>
    <div class="clr-col-4">
        <span>
            1/3
        </span>
    </div>
</div>
`;

const EXAMPLE_4 = `
<div class="clr-row clr-justify-content-around">
    <div class="clr-col-4">
        <span>
            1/3
        </span>
    </div>
    <div class="clr-col-4">
        <span>
            1/3
        </span>
    </div>
</div>
`;

const EXAMPLE_5 = `
<div class="clr-row clr-justify-content-between">
    <div class="clr-col-4">
        <span>
            1/3
        </span>
    </div>
    <div class="clr-col-4">
        <span>
            1/3
        </span>
    </div>
</div>
`;

@Component({
    selector: "clr-grid-demo-horizontal-alignment",
    templateUrl: "./grid-items-horizontal-alignment.html",
    styleUrls: ["./grid.demo.scss"]
})
export class GridItemsHorizontalAlignmentDemo {
    example1 = EXAMPLE_1;
    example2 = EXAMPLE_2;
    example3 = EXAMPLE_3;
    example4 = EXAMPLE_4;
    example5 = EXAMPLE_5;
}
