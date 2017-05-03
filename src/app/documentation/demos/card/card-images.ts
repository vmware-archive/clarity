/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<div class="row">
    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <a href="..." class="card clickable">
            <div class="card-img">
                <img src="..." alt="..." />
            </div>
            <div class="card-block">
                <p class="card-text">
                    ...
                </p>
            </div>
        </a>
    </div>
    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <a href="..." class="card clickable">
            <div class="card-block">
                <p class="card-text">
                    ...
                </p>
            </div>
            <div class="card-img">
                <img src="..." alt="..." />
            </div>
        </a>
    </div>
    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <a href="..." class="card clickable">
            <div class="card-block">
                <p class="card-text">
                    ...
                </p>
            </div>
            <div class="card-img">
                <img src="..." alt="..." />
            </div>
            <div class="card-block">
                <p class="card-text">
                    ...
                </p>
            </div>
        </a>
    </div>
</div>
<div class="row">
    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <a href="..." class="card clickable card-img">
            <img src="..." alt="..." />
        </a>
    </div>
    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <a href="..." class="card clickable">
            <div class="card-img">
                <img src="..." alt="..." />
            </div>
        </a>
    </div>
</div>
`;

@Component({
    selector: "clr-card-images-demo",
    styleUrls: ["./card.demo.scss"],
    templateUrl: "./card-images.html"
})
export class CardImagesDemo {
    htmlExample = HTML_EXAMPLE;
}
