/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";
import {
    Alert,
    AlertItem,
    Alerts,
    AlertsPager,
    ClrAlert,
    ClrAlertItem,
    ClrAlerts,
    ClrAlertsPager,
    ClrTreeNode,
    TreeNode
} from "@clr/angular";

@Component({templateUrl: "./alerts.component.html"})
export class KSAlerts {
    /**
     * @description
     * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
     */
    private aAlert: Alert;
    private aClrAlert: ClrAlert;
    private aAlertItem: AlertItem;
    private aClrAlertItem: ClrAlertItem;
    private aAlerts: Alerts;
    private aClrAlerts: ClrAlerts;
    private aAlertsPager: AlertsPager;
    private aClrAlertsPager: ClrAlertsPager;
    // END Clarity Stackview Entities
}
