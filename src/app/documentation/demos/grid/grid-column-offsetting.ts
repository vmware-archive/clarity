/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<div class="row">
    <div class="col-sm-4">
        <span>.col-sm-4</span>
    </div>
    <div class="col-sm-6 offset-sm-2">
        <span>.col-sm-6.offset-sm-2</span>
    </div>
</div>
`;

@Component({
    selector: "clr-grid-demo-column-offsetting",
    templateUrl: "./grid-column-offsetting.html",
    styleUrls: ["./grid.demo.scss"]
})
export class GridColumnOffsettingDemo {
    example = EXAMPLE;
}
