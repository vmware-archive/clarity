/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<div class="card-columns">
    <div class="card">
        <div class="card-img">
            <img src="...">
        </div>
        <div class="card-block">
            <p class="card-text">
                ...
            </p>
        </div>
    </div>
    <div class="card card-block">
        <h3 class="card-title">Title</h3>
        <p class="card-text">
            ...
        </p>
    </div>
    <div class="card">
        <div class="card-block">
            <p class="card-text">
                ...
            </p>
        </div>
        <div class="card-img">
            <img src="...">
        </div>
        <div class="card-block">
            <p class="card-text">
                ...
            </p>
        </div>
    </div>
    <div class="card card-block">
        <h3 class="card-title">Title</h3>
        <p class="card-text">
            ...
        </p>
    </div>
    <div href="..." class="card">
        <div class="card-block">
            <p class="card-text">
                ...
            </p>
        </div>
        <div class="card-img">
            <img src="...">
        </div>
    </div>
    <div class="card card-block">
        <h3 class="card-title">Title</h3>
        <p class="card-text">
            ...
        </p>
    </div>
    <div class="card">
        <div class="card-block">
            <h3 class="card-title">Title</h3>
            <p class="card-text">
                ...
            </p>
        </div>
        <div class="card-footer">
            <a href="..." class="btn btn-primary">Action</a>
        </div>
    </div>
    <a href="..." class="card clickable">
        <div class="card-block">
            <p class="card-text">
                ...
            </p>
        </div>
        <div class="card-img">
            <img src="...">
        </div>
    </a>
</div>
`;

@Component({
    selector: "clr-card-masonry-demo",
    styleUrls: ["./card.demo.scss"],
    templateUrl: "./card-masonry.html"
})
export class CardMasonryDemo {
    htmlExample = HTML_EXAMPLE;
}
