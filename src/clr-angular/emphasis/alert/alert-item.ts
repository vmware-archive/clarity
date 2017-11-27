/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";
import {AlertIconAndTypesService} from "./providers/icon-and-types-service";

@Component({
    // the .alert-item selector is deprecated; the :not clause is to allow us to use static
    // examples in demos on the demo-app and website
    selector: ".alert-item:not(.static), clr-alert-item",
    template: `
        <div class="alert-icon-wrapper">
            <clr-icon class="alert-icon" [attr.shape]="iconService.alertIconShape"></clr-icon>
        </div>
        <ng-content></ng-content>
    `,
    host: {"class": "alert-item"}
})
export class AlertItem {
    constructor(public iconService: AlertIconAndTypesService) {}
}
