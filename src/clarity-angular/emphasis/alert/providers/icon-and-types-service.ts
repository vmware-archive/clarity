/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable} from "@angular/core";

import {AlertInfoObject} from "../utils/alert-info-object";
import {ALERT_TYPES} from "../utils/alert-types";

@Injectable()
export class AlertIconAndTypesService {
    private defaultIconShape = "info-circle";
    private _alertIconShape = "";
    private _alertType = "info";

    get alertType(): string {
        return this._alertType;
    }
    set alertType(val: string) {
        if (ALERT_TYPES.indexOf(val) > -1) {
            this._alertType = val;
        }
    }

    get alertIconShape(): string {
        if ("" === this._alertIconShape) {
            return this.iconInfoFromType(this._alertType).shape;
        }
        return this._alertIconShape;
    }
    set alertIconShape(val: string) {
        if (!val) {
            this._alertIconShape = "";
        } else if (val !== this._alertIconShape) {
            this._alertIconShape = val;
        }
    }

    public iconInfoFromType(type: string, classOrShape: string = "shape"): AlertInfoObject {
        const returnObj = {shape: "", cssClass: ""};

        switch (type) {
            case "warning":
            case "alert-warning":
                returnObj.shape = "exclamation-triangle";
                returnObj.cssClass = "alert-warning";
                break;
            case "danger":
            case "alert-danger":
                returnObj.shape = "exclamation-circle";
                returnObj.cssClass = "alert-danger";
                break;
            case "success":
            case "alert-success":
                returnObj.shape = "check-circle";
                returnObj.cssClass = "alert-success";
                break;
            default:
                returnObj.shape = this.defaultIconShape;
                returnObj.cssClass = "alert-info";
                break;
        }

        return returnObj;
    }
}