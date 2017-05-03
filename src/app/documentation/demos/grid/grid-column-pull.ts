/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<div class="row">
    <div class="col-xs-4 offset-xs-5">
        <span>.col-xs-4.offset-xs-5</span>
    </div>
    <div class="col-xs-3 pull-xs-9">
        <span>.col-xs-3.pull-xs-9</span>
    </div>
</div>
`;

@Component({
    selector: "clr-grid-demo-column-pull",
    templateUrl: "./grid-column-pull.html",
    styleUrls: ["./grid.demo.scss"]
})
export class GridColumnPullDemo {
    example = EXAMPLE;
}
