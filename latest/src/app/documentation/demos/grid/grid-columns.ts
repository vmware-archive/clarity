/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<div class="clr-row">
    <div class="clr-col-4">
        <span>4</span>
    </div>
    <div class="clr-col-6">
        <span>6</span>
    </div>
    <div class="clr-col-2">
        <span>2</span>
    </div>
</div>
`;

@Component({
    selector: "clr-grid-demo-columns",
    templateUrl: "./grid-columns.html",
    styleUrls: ["./grid.demo.scss"]
})
export class GridColumnsDemo {
    example = EXAMPLE;
}
