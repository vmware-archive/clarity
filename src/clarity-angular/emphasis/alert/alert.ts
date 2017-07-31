/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, EventEmitter, Input, Output} from "@angular/core";

// providers
import {AlertIconAndTypesService} from "./providers/icon-and-types-service";

@Component({selector: "clr-alert", providers: [AlertIconAndTypesService], templateUrl: "./alert.html"})
export class Alert {
    constructor(public iconService: AlertIconAndTypesService) {}

    @Input("clrAlertSizeSmall") isSmall: boolean = false;
    @Input("clrAlertClosable") closable: boolean = true;
    @Input("clrAlertAppLevel") isAppLevel: boolean = false;

    @Input("clrAlertClosed") _closed: boolean = false;
    @Output("clrAlertClosedChange") _closedChanged: EventEmitter<boolean> = new EventEmitter<boolean>(false);

    @Input("clrAlertType")
    set alertType(val: string) {
        this.iconService.alertType = val;
    }
    get alertType(): string {
        return this.iconService.alertType;
    }

    @Input("clrAlertIcon")
    set alertIconShape(value: string) {
        this.iconService.alertIconShape = value;
    }

    get alertClass(): string {
        return this.iconService.iconInfoFromType(this.iconService.alertType).cssClass;
    }

    close(): void {
        if (!this.closable) {
            return;
        }
        this._closed = true;
        this._closedChanged.emit(true);
    }

    open(): void {
        this._closed = false;
        this._closedChanged.emit(false);
    }
}
