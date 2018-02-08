/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<div class="row">
    <div class="col-xs flex-xs-top">
        <span>1/3</span>
    </div>
    <div class="col-xs flex-xs-middle">
        <span>1/3</span>
    </div>
    <div class="col-xs flex-xs-bottom">
        <span>1/3</span>
    </div>
</div>
`;

@Component({
    selector: "clr-grid-demo-individual-vertical-alignment",
    templateUrl: "./grid-items-individual-vertical-alignment.html",
    styleUrls: ["./grid.demo.scss"]
})
export class GridItemsIndividualVerticalAlignmentDemo {
    example = EXAMPLE;
}
