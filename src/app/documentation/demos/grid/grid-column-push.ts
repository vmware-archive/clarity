/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<div class="row">
    <div class="col-md-4 push-md-8">
        <span>.col-md-4.push-md-8</span>
    </div>
    <div class="col-md-2">
        <span>.col-md-2</span>
    </div>
</div>
`;

@Component({
    selector: "clr-grid-demo-column-push",
    templateUrl: "./grid-column-push.html",
    styleUrls: ["./grid.demo.scss"]
})
export class GridColumnPushDemo {
    example = EXAMPLE;
}
