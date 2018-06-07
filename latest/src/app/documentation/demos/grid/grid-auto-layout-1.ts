/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<div class="clr-row">
    <div class="clr-col">
        <span>1/5</span>
    </div>
    <div class="clr-col">
        <span>1/5</span>
    </div>
    <div class="clr-col">
        <span>1/5</span>
    </div>
    <div class="clr-col">
        <span>1/5</span>
    </div>
    <div class="clr-col">
        <span>1/5</span>
    </div>
</div>
<div class="clr-row">
    <div class="clr-col">
        <span>1/3</span>
    </div>
    <div class="clr-col">
        <span>1/3</span>
    </div>
    <div class="clr-col">
        <span>1/3</span>
    </div>
</div>
`;

@Component({
    selector: "clr-grid-demo-auto-layout-1",
    templateUrl: "./grid-auto-layout-1.html",
    styleUrls: ["./grid.demo.scss"]
})
export class GridAutoLayout1Demo {
    example = EXAMPLE;
}
