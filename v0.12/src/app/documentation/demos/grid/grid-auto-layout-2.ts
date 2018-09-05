/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE1 = `
<div class="clr-row">
    <div class="clr-col-4">
        <span>1/3 (auto)</span>
    </div>
    <div class="clr-col">
        <span>Remaining</span>
    </div>
</div>
`;

const EXAMPLE2 = `
<div class="clr-row">
    <div class="clr-col">
        <span>1/4 (auto)</span>
    </div>
    <div class="clr-col-6">
        <span>1/2 (fixed)</span>
    </div>
    <div class="clr-col">
        <span>1/4 (auto)</span>
    </div>
</div>
`;

@Component({
    selector: "clr-grid-demo-auto-layout-2",
    templateUrl: "./grid-auto-layout-2.html",
    styleUrls: ["./grid.demo.scss"]
})
export class GridAutoLayout2Demo {
    example1 = EXAMPLE1;
    example2 = EXAMPLE2;
}
