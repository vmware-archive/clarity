/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<div class="row">
    <div class="col-xs-12 col-sm-4">
        <div class="card">
            <div class="card-block">
                <div class="progress top">
                    <progress value="..." max="100"></progress>
                </div>
                <h4 class="card-title">Card title</h4>
                <p class="card-text">...</p>
            </div>
            <div class="card-footer">
                <a href="..." class="card-link">Click</a>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-4">
        <div class="card">
            <div class="card-block">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">...</p>
            </div>
            <div class="card-footer">
                <div class="progress">
                    <progress value="..." max="100"></progress>
                </div>
                <a href="..." class="card-link">Click</a>
            </div>
        </div>
    </div>
</div>
`;

@Component({
    selector: "clr-progress-bar-cards-demo",
    styleUrls: ["../progress-bars/progress-bars.demo.scss"],
    templateUrl: "./progress-bar-cards.html"
})

export class ProgressBarCardsDemo {
    htmlExample = HTML_EXAMPLE;
}
