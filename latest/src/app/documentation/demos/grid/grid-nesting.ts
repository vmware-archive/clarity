/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<div class="clr-row">
    <div class="clr-col-9">
        <span>9</span>
        <div class="clr-row">
            <div class="clr-col-3">
                <span>3</span>
            </div>
            <div class="clr-col-9">
                <span>9</span>
            </div>
        </div>
    </div>
    <div class="clr-col-3">
        <span>3</span>
    </div>
</div>
`;

@Component({
    selector: "clr-grid-demo-nesting",
    templateUrl: "./grid-nesting.html",
    styleUrls: ["./grid.demo.scss"]
})
export class GridNestingDemo {
    example = EXAMPLE;
}
