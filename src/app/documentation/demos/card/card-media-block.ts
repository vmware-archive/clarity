/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<div class="row">
    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
            <div class="card-header">
                Header
            </div>
            <div class="card-block">
                <div class="card-media-block">
                    <img src="..." class="card-media-image">
                    <div class="card-media-description">
                        <span class="card-media-title">
                            Project A
                        </span>
                        <span class="card-media-text">
                            Owner: John Doe
                        </span>
                    </div>
                </div>
                <div class="card-text">
                    ...
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-sm btn-link">Action</button>
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
            <div class="card-header">
                Header
            </div>
            <div class="card-block">
                <div class="card-media-block wrap">
                    <img src="..." class="card-media-image">
                    <div class="card-media-description">
                        <span class="card-media-title">
                            Project B
                        </span>
                        <span class="card-media-text">
                            Owner: Jane Doe
                        </span>
                    </div>
                </div>
                <div class="card-text">
                    ...
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-sm btn-link">Action</button>
            </div>
        </div>
    </div>
</div>
`;

@Component({
    selector: "clr-card-media-block-demo",
    styleUrls: ["./card.demo.scss"],
    templateUrl: "./card-media-block.html"
})
export class CardMediaBlockDemo {
    htmlExample = HTML_EXAMPLE;
}
