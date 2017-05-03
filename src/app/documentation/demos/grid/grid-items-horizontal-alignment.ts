/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE_1 = `
<div class="row flex-items-xs-left">
    <div class="col-xs-4">
        <span class="clr-example-col-value">
            .col-xs-4
        </span>
    </div>
    <div class="col-xs-4">
        <span class="clr-example-col-value">
            .col-xs-4
        </span>
    </div>
</div>
`;

const EXAMPLE_2 = `
<div class="row flex-items-xs-center">
    <div class="col-xs-4">
        <span class="clr-example-col-value">
            .col-xs-4
        </span>
    </div>
    <div class="col-xs-4">
        <span class="clr-example-col-value">
            .col-xs-4
        </span>
    </div>
</div>
`;

const EXAMPLE_3 = `
<div class="row flex-items-xs-right">
    <div class="col-xs-4">
        <span class="clr-example-col-value">
            .col-xs-4
        </span>
    </div>
    <div class="col-xs-4">
        <span class="clr-example-col-value">
            .col-xs-4
        </span>
    </div>
</div>
`;

const EXAMPLE_4 = `
<div class="row flex-items-xs-around">
    <div class="col-xs-4">
        <span class="clr-example-col-value">
            .col-xs-4
        </span>
    </div>
    <div class="col-xs-4">
        <span class="clr-example-col-value">
            .col-xs-4
        </span>
    </div>
</div>
`;

const EXAMPLE_5 = `
<div class="row flex-items-xs-between">
    <div class="col-xs-4">
        <span class="clr-example-col-value">
            .col-xs-4
        </span>
    </div>
    <div class="col-xs-4">
        <span class="clr-example-col-value">
            .col-xs-4
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
