/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<div class="clr-row">
    <div class="clr-col">
        <span>1st, Unordered</span>
    </div>
    <div class="clr-col clr-order-3">
        <span>2nd, Order 3</span>
    </div>
    <div class="clr-col clr-order-2">
        <span>3rd, Order 2</span>
    </div>
</div>
`;

@Component({
    selector: "clr-grid-demo-column-ordering",
    templateUrl: "./grid-column-ordering.html",
    styleUrls: ["./grid.demo.scss"]
})
export class GridColumnOrderingDemo {
    example = EXAMPLE;
}
