/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE_1 = `
<div class="alert alert-app-level alert-danger" style="margin-bottom:24px">
    <div class="alert-items">
        <div class="alert-item static">
            <div class="alert-icon-wrapper">
                <clr-icon class="alert-icon" shape="exclamation-circle"></clr-icon>
            </div>
            <div class="alert-text">
                Alert Type: Danger
            </div>
            <div class="alert-actions">
                <button class="btn alert-action">Action</button>
            </div>
        </div>
    </div>
    <button type="button" class="close" aria-label="Close">
        <clr-icon aria-hidden="true" shape="close"></clr-icon>
    </button>
</div>
<div class="alert alert-app-level alert-warning" style="margin-bottom:24px">
    <div class="alert-items">
        <div class="alert-item static">
            <div class="alert-icon-wrapper">
                <clr-icon class="alert-icon" shape="exclamation-triangle"></clr-icon>
            </div>
            <div class="alert-text">
                Alert Type: Warning
            </div>
            <div class="alert-actions">
                <button class="btn alert-action">Action</button>
            </div>
        </div>
    </div>
    <button type="button" class="close" aria-label="Close">
        <clr-icon aria-hidden="true" shape="close"></clr-icon>
    </button>
</div>
<div class="alert alert-app-level alert-info">
    <div class="alert-items">
        <div class="alert-item static">
            <div class="alert-icon-wrapper">
                <clr-icon class="alert-icon" shape="info-circle"></clr-icon>
            </div>
            <div class="alert-text">
                Alert Type: Info
            </div>
            <div class="alert-actions">
                <button class="btn alert-action">Action</button>
            </div>
        </div>
    </div>
    <button type="button" class="close" aria-label="Close">
        <clr-icon aria-hidden="true" shape="close"></clr-icon>
    </button>
</div>
`;

const HTML_EXAMPLE_2 = `
<div class="main-container">
    <div class="alert alert-app-level alert-info">
        <div class="alert-items">
            <div class="alert-item static">
                <div class="alert-icon-wrapper">
                    <clr-icon class="alert-icon" shape="info-circle"></clr-icon>
                </div>
                <div class="alert-text">
                    A new update is now available. Upgrade to v.1234.
                </div>
                <div class="alert-actions">
                    <button class="btn alert-action">Install Update</button>
                </div>
            </div>
        </div>
        <button type="button" class="close" aria-label="Close">
            <clr-icon aria-hidden="true" shape="close"></clr-icon>
        </button>
    </div>
    <header class="header header-6">
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
        <div class="alert-items">
            <div class="alert-item static">
                <div class="alert-icon-wrapper">
                    <clr-icon class="alert-icon" shape="download"></clr-icon>
                </div>
                <div class="alert-text">
                    A new update is now available. Upgrade to v.1234.
                </div>
                <div class="alert-actions">
                    <button class="btn alert-action">Install Update</button>
                </div>
            </div>
        </div>
        <button type="button" class="close" aria-label="Close">
            <clr-icon aria-hidden="true" shape="close"></clr-icon>
        </button>
    </div>
    <header class="header header-6">
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
