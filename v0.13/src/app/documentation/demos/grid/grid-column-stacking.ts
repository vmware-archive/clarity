/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<div class="clr-row">
    <div class="clr-col-sm-12 clr-col-md-6">
        <span>clr-col-sm-12 clr-col-md-6</span>
    </div>
    <div class="clr-col-sm-12 clr-col-md-6">
        <span>clr-col-sm-12 clr-col-md-6</span>
    </div>
    <div class="clr-col-sm-12 clr-col-md-12">
        <span>clr-col-sm-12 clr-col-md-12</span>
    </div>
</div>
`;

@Component({
    selector: "clr-grid-demo-column-stacking",
    templateUrl: "./grid-column-stacking.html",
    styleUrls: ["./grid.demo.scss"]
})
export class GridColumnStackingDemo {
    example = EXAMPLE;
}
