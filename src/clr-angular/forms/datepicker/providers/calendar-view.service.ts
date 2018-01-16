/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {ElementRef, Injectable, NgZone} from "@angular/core";
import {first} from "rxjs/operator/first";

@Injectable()
export class CalendarViewService {

    constructor(private _ngZone: NgZone) {}

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

    //Credit: Material: https://github.com/angular/material2/blob/master/src/lib/datepicker/calendar.ts
    focusCell(elRef: ElementRef): void {
        this._ngZone.runOutsideAngular(() => {
            first.call(this._ngZone.onStable.asObservable()).subscribe(() => {
                const focusEl = elRef.nativeElement.querySelector('[tabindex="0"]');
                if (focusEl) {
                    focusEl.focus();
                }
            });
        });
    }
}
