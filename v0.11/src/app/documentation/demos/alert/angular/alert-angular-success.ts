/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<clr-alert [clrAlertType]="'alert-success'">
    <div class="alert-item">
        <span class="alert-text">
            This alert indicates success.
        </span>
    </div>
</clr-alert>
<clr-alert>
    <div class="alert-item">
        <span class="alert-text">
            This is a default info alert.
        </span>
    </div>
</clr-alert>
`;

@Component({
    selector: "clr-alert-success-demo-angular",
    styleUrls: ["../alerts.demo.scss"],
    templateUrl: "./alert-angular-success.demo.html"
})
export class AlertAngularSuccessDemo {
    htmlExample = HTML_EXAMPLE;
}
