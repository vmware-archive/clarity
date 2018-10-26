/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<clr-alert [clrAlertType]="'danger'" [clrAlertAppLevel]="true">
    <clr-alert-item>
        <span class="alert-text">
            This is an app level alert.
        </span>
        <div class="alert-actions">
            <button class="btn alert-action">Fix</button>
        </div>
    </clr-alert-item>
</clr-alert>
`;

@Component({
    selector: "clr-alert-app-level-demo-angular",
    styleUrls: ["../alerts.demo.scss"],
    templateUrl: "./alert-angular-app-level.demo.html"
})
export class AlertAngularAppLevelDemo {
    htmlExample = HTML_EXAMPLE;
}
