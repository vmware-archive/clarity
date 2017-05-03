/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<div class="alert alert-danger">
    <button type="button" class="close" aria-label="Close">
        <clr-icon aria-hidden="true" shape="close"></clr-icon>
    </button>
    <div class="alert-item">
        <span>
            This is an alert with 36px height.
        </span>
    </div>
</div>
<div class="alert alert-success alert-sm">
    <div class="alert-item">
        <span>
            This is an alert with 24px height.
        </span>
    </div>
</div>
`;

@Component({
    selector: "clr-alert-demo-sizes",
    styleUrls: ["../alerts.demo.scss"],
    templateUrl: "./alert-sizes.demo.html"
})
export class AlertSizesDemo {
    htmlExample = HTML_EXAMPLE;
}
