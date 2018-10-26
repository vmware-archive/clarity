/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<div class="row">
    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
            <div class="card-block">
                <h3 class="card-title">Card 1</h3>
                <p class="card-text">
                    ...
                </p>
            </div>
            <div class="card-footer">
                <a href="..." class="btn btn-sm btn-link">Action 1</a>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
            <div class="card-block">
                <h3 class="card-title">Card 2</h3>
                <p class="card-text">
                    ...
                </p>
            </div>
            <div class="card-footer">
                <a href="..." class="btn btn-sm btn-link">Action 2</a>
            </div>
        </div>
    </div>
    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
            <div class="card-block">
                <h3 class="card-title">Card 3</h3>
                <p class="card-text">
                    ...
                </p>
            </div>
            <div class="card-footer">
                <a href="..." class="btn btn-sm btn-link">Action 3</a>
            </div>
        </div>
    </div>
</div>
`;

@Component({
    selector: "clr-card-grid-demo",
    styleUrls: ["./card.demo.scss"],
    templateUrl: "./card-grid.html"
})
export class CardGridDemo {
    htmlExample = HTML_EXAMPLE;
}
