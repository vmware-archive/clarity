/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<div class="card">
    <div class="card-block">
        <div class="alert alert-warning alert-sm">
            <div class="alert-items">
                <div class="alert-item static">
                    <div class="alert-icon-wrapper">
                        <clr-icon class="alert-icon" shape="exclamation-triangle"></clr-icon>
                    </div>
                    <div class="alert-text">
                        Use small alerts in a card.
                    </div>
                </div>
            </div>
            <button type="button" class="close" aria-label="Close">
                <clr-icon aria-hidden="true" shape="close"></clr-icon>
            </button>
        </div>
        <div class="card-media-block wrap">
            <img class="card-media-image" src="//placehold.it/60x60" />
            <div class="card-media-description">
                <span class="card-media-title">Project B</span>
                <span class="card-media-text">Owner: Jane Doe</span>
            </div>
        </div>
        <p class="card-text">...</p>
    </div>
    <div class="card-footer">
        <a class="card-link">Button One</a>
        <a class="card-link">Button Two</a>
    </div>
</div>
`;

@Component({
    selector: "clr-alert-demo-cards",
    styleUrls: ["../alerts.demo.scss"],
    templateUrl: "./alert-cards.demo.html"
})
export class AlertCardsDemo {
    htmlExample = HTML_EXAMPLE;
}
