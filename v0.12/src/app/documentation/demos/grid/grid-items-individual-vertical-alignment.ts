/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<div class="clr-row">
    <div class="clr-col clr-align-self-start">
        <span>1/3</span>
    </div>
    <div class="clr-col clr-align-self-center">
        <span>1/3</span>
    </div>
    <div class="clr-col clr-align-self-end">
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
