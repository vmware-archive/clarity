/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<div class="alert alert-danger">
    <div class="alert-item">
        <span class="alert-text">
            ...
        </span>
        <div class="alert-actions">
            <div class="alert-action dropdown bottom-right">
            <button class="dropdown-toggle">
                Actions
                <clr-icon shape="caret down"></clr-icon>
            </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="...">Shutdown</a>
                    <a class="dropdown-item" href="...">Suspend</a>
                    <a class="dropdown-item" href="...">Reboot</a>
                </div>
            </div>
        </div>
    </div>
    <div class="alert-item">
        <span class="alert-text">
            ...
        </span>
        <div class="alert-actions">
            <div class="alert-action dropdown bottom-right">
                <button class="dropdown-toggle">
                    Actions
                    <clr-icon shape="caret down"></clr-icon>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="...">Shutdown</a>
                    <a class="dropdown-item" href="...">Suspend</a>
                    <a class="dropdown-item" href="...">Reboot</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="alert alert-warning">
    <button type="button" class="close" aria-label="Close">
        <clr-icon aria-hidden="true" shape="close"></clr-icon>
    </button>
    <div class="alert-item">
        <span class="alert-text">
            ...
        </span>
        <div class="alert-actions">
            <div class="alert-action dropdown bottom-right open">
                <button class="dropdown-toggle">
                    Actions
                    <clr-icon shape="caret down"></clr-icon>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="...">Shutdown</a>
                    <a class="dropdown-item" href="...">Suspend</a>
                    <a class="dropdown-item" href="...">Reboot</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="alert alert-info">
    <button type="button" class="close" aria-label="Close">
        <clr-icon aria-hidden="true" shape="close"></clr-icon>
    </button>
    <div class="alert-item">
        <span class="alert-text">
            ...
        </span>
        <div class="alert-actions">
            <a href="..." class="alert-action">Acknowledge</a>
            <a href="..." class="alert-action">Reset to green</a>
        </div>
    </div>
</div>
<div class="alert alert-success">
    <div class="alert-item">
        <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </span>
    </div>
</div>
`;

@Component({
    selector: "clr-alert-demo-styles",
    styleUrls: ["../alerts.demo.scss"],
    templateUrl: "./alert-styles.demo.html"
})
export class AlertStylesDemo {
    htmlExample = HTML_EXAMPLE;
}
