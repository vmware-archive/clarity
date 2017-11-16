/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    selector: "clr-alert-app-level-alerts-demo-angular",
    styleUrls: ["../alert.demo.scss"],
    templateUrl: "./alert-angular-app-level-alerts.demo.html"
})
export class AlertAngularAppLevelAlertsDemo {
    toggle1: boolean = true;
    toggle2: boolean = true;
    toggle3: boolean = true;

    toggleAlert(alertNum: number): void {
        if (alertNum === 1) {
            this.toggle1 = !this.toggle1;
        } else if (alertNum === 2) {
            this.toggle2 = !this.toggle2;
        } else if (alertNum === 3) {
            this.toggle3 = !this.toggle3;
        }
    }
}
