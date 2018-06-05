/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<div class="row flex-items-xs-top">
    <div class="col-xs">
        <span>1/2</span>
    </div>
    <div class="col-xs">
        <span>1/2</span>
    </div>
</div>
`;

const EXAMPLE1 = `
<div class="row flex-items-xs-middle">
    <div class="col-xs">
        <span>1/2</span>
    </div>
    <div class="col-xs">
        <span>1/2</span>
    </div>
</div>
`;

const EXAMPLE2 = `
<div class="row flex-items-xs-bottom">
    <div class="col-xs">
        <span>1/2</span>
    </div>
    <div class="col-xs">
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
