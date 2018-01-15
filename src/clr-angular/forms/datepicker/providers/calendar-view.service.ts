/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable} from "@angular/core";

@Injectable()
export class CalendarViewService {

    constructor() {}

    private _isMonthView: boolean = false;

    get isMonthView(): boolean {
        return this._isMonthView;
    }

    set isMonthView(value: boolean) {
        if (this._isMonthView !== value) {
            this._isMonthView = value;
        }
    }

    private _isYearView: boolean = false;

    get isYearView(): boolean {
        return this._isYearView;
    }

    set isYearView(value: boolean) {
        if (this._isYearView !== value) {
            this._isYearView = value;
        }
    }
}
