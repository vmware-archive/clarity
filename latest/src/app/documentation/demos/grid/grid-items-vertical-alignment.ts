/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<div class="clr-row clr-align-items-start">
    <div class="clr-col">
        <span>1/2</span>
    </div>
    <div class="clr-col">
        <span>1/2</span>
    </div>
</div>
`;

const EXAMPLE1 = `
<div class="clr-row clr-align-items-center">
    <div class="clr-col">
        <span>1/2</span>
    </div>
    <div class="clr-col">
        <span>1/2</span>
    </div>
</div>
`;

const EXAMPLE2 = `
<div class="clr-row clr-align-items-end">
    <div class="clr-col">
        <span>1/2</span>
    </div>
    <div class="clr-col">
        <span>1/2</span>
    </div>
</div>
`;

@Component({
    selector: "clr-grid-demo-vertical-alignment",
    templateUrl: "./grid-items-vertical-alignment.html",
    styleUrls: ["./grid.demo.scss"]
})
export class GridItemsVerticalAlignmentDemo {
    example = EXAMPLE;
    example1 = EXAMPLE1;
    example2 = EXAMPLE2;
}
