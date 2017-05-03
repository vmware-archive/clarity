/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE_1 = `
<div class="alert alert-app-level alert-danger">
    <button type="button" class="close" aria-label="Close">
        <clr-icon aria-hidden="true" shape="close"></clr-icon>
    </button>
    <div class="alert-item">
        <div class="alert-text">
            Alert Type: Danger
        </div>
        <div class="alert-actions">
            <button class="btn alert-action">Action</button>
        </div>
    </div>
</div>

<div class="alert alert-app-level alert-warning">
    <button type="button" class="close" aria-label="Close">
        <clr-icon aria-hidden="true" shape="close"></clr-icon>
    </button>
    <div class="alert-item">
        <div class="alert-text">
            Alert Type: Warning
        </div>
        <div class="alert-actions">
            <button class="btn alert-action">Action</button>
        </div>
    </div>
</div>

<div class="alert alert-app-level alert-info">
    <button type="button" class="close" aria-label="Close">
        <clr-icon aria-hidden="true" shape="close"></clr-icon>
    </button>
    <div class="alert-item">
        <div class="alert-text">
            Alert Type: Info
        </div>
        <div class="alert-actions">
            <button class="btn alert-action">Action</button>
        </div>
    </div>
</div>
`;

const HTML_EXAMPLE_2 = `
<div class="main-container">
    <div class="alert alert-app-level alert-info">
        <button type="button" class="close" aria-label="Close">
            <clr-icon aria-hidden="true" shape="close"></clr-icon>
        </button>
        <div class="alert-item">
            <div class="alert-text">
                A new update is now available. Upgrade to v.1234.
            </div>
            <div class="alert-actions">
                <button class="btn alert-action">Install Update</button>
            </div>
        </div>
    </div>
    <header class="header">
        <div class="branding">
            <span class="title">Header</span>
        </div>
    </header>
    <div class="content-container">
        <div class="content-area">
            <p>...</p>
        </div>
    </div>
</div>
`;

const HTML_EXAMPLE_3 = `
<div class="main-container">
    <div class="alert alert-app-level alert-warning">
        <button type="button" class="close" aria-label="Close">
            <clr-icon aria-hidden="true" shape="close"></clr-icon>
        </button>
        <div class="alert-item">
            <div class="clr-icon clr-icon-update"></div>
            <div class="alert-text">
                A new update is now available. Upgrade to v.1234.
            </div>
            <div class="alert-actions">
                <button class="btn alert-action">Install Update</button>
            </div>
        </div>
    </div>
    <header class="header">
        <div class="branding">
            <span class="title">Header</span>
        </div>
    </header>
    <div class="content-container">
        <div class="content-area">
            <p>...</p>
        </div>
    </div>
</div>
`;

@Component({
    selector: "clr-alert-demo-app-level",
    styleUrls: ["../alerts.demo.scss"],
    templateUrl: "./alert-app-level.demo.html"
})
export class AlertAppLevelDemo {
    htmlExample1 = HTML_EXAMPLE_1;
    htmlExample2 = HTML_EXAMPLE_2;
    htmlExample3 = HTML_EXAMPLE_3;
}
