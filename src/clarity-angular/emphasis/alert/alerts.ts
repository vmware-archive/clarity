/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    AfterContentInit,
    Component,
    ContentChildren,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
    QueryList
} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {Alert} from "./alert";
import {MultiAlertService} from "./providers/multi-alert-service";

@Component({
    selector: "clr-alerts",
    templateUrl: "./alerts.html",
    providers: [MultiAlertService],
    host: {
        "[class.alerts]": "true",
        "[class.alert-danger]": "this.currentAlertType == 'danger'",
        "[class.alert-info]": "this.currentAlertType == 'info'",
        "[class.alert-success]": "this.currentAlertType == 'success'",
        "[class.alert-warning]": "this.currentAlertType == 'warning'"
    }
})
export class Alerts implements AfterContentInit, OnDestroy {
    @ContentChildren(Alert) allAlerts: QueryList<Alert>;

    private subscriptions: Subscription[] = [];

    /**
     * Input/Output to support two way binding on current alert index
     */
    @Input("clrCurrentAlertIndex")
    public set _inputCurrentIndex(index: number) {
        if (index) {
            this.multiAlertService.current = index;
        }
    }

    @Output("clrCurrentAlertIndexChange") public currentAlertIndexChange = new EventEmitter<number>(false);

    set currentAlertIndex(index: number) {
        this.multiAlertService.current = index;
    }
    get currentAlertIndex() {
        return this.multiAlertService.current;
    }

    /**
     * Input/Output to support two way binding on current alert instance
     */
    @Input("clrCurrentAlert")
    set currentAlert(alert: Alert) {
        if (alert) {
            this.multiAlertService.currentAlert = alert;
        }
    }
    get currentAlert() {
        return this.multiAlertService.currentAlert;
    }
    @Output("clrCurrentAlertChange") public currentAlertChange = new EventEmitter<Alert>(false);

    /**
     * Ensure we are only dealing with alerts that have not been closed yet
     */
    get alerts() {
        return this.allAlerts.filter((alert) => {
            return alert.isHidden === false;
        });
    }

    get currentAlertType(): string {
        if (this.multiAlertService.currentAlert) {
            return this.multiAlertService.currentAlert.alertType;
        }
        return "";
    }

    constructor(public multiAlertService: MultiAlertService) {}

    ngAfterContentInit() {
        this.multiAlertService.manage(this.allAlerts);
        this.subscriptions.push(this.multiAlertService.changes.subscribe((index) => {
            this.currentAlertIndexChange.next(index);
            this.currentAlertChange.next(this.multiAlertService.currentAlert);
        }));
        // This sub updates the current index of the alerts pager component based on the
        // changes in the alert content children.
        this.subscriptions.push(this.allAlerts.changes.subscribe(changes => {
            if (this.currentAlertIndex >= changes.length) {
                this.currentAlertIndex = changes.length - 1;
            }
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }
}
