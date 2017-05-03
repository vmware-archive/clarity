/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<clr-alert [clrAlertClosable]="false">
    <div class="alert-item">
        <span class="alert-text">
            This alert cannot be dismissed.
        </span>
        <div class="alert-actions">
            <clr-dropdown [clrMenuPosition]="'bottom-right'">
                <button class="dropdown-toggle" clrDropdownToggle>
                    Actions
                    <clr-icon shape="caret down"></clr-icon>
                </button>
                <div class="dropdown-menu">
                    <a href="..." class="dropdown-item" clrDropdownItem>Shutdown</a>
                    <a href="..." class="dropdown-item" clrDropdownItem>Delete</a>
                    <a href="..." class="dropdown-item" clrDropdownItem>Reboot</a>
                </div>
            </clr-dropdown>
        </div>
    </div>
</clr-alert>
<clr-alert [clrAlertType]="'alert-warning'">
    <div class="alert-item">
        <span class="alert-text">
            Try closing this alert.
        </span>
    </div>
</clr-alert>
`;

@Component({
    selector: "clr-alert-not-closable-demo-angular",
    styleUrls: ["../alerts.demo.scss"],
    templateUrl: "./alert-angular-not-closable.demo.html"
})
export class AlertAngularNotClosableDemo {
    htmlExample = HTML_EXAMPLE;
}
