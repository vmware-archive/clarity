/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const NO_YEAR_IN_VIEW: number = 10;

import {Injectable} from "@angular/core";

@Injectable()
export class YearUtilsService {

    private _startYear: number;
    private _currYear: number;

    private _years: number[];

    get years(): number[] {
        return this._years;
    }

    generateYearRange(year: number): number[] {
        const remainder: number = year % NO_YEAR_IN_VIEW;
        let floor: number = year - remainder;
        let ceil: number = floor + NO_YEAR_IN_VIEW;
        const arr: number[] = this.generateRange(floor, ceil);
        return arr;
    }

    private generateRange(floor: number, ceil: number) {
        return Array.from({length: (ceil - floor)}, (v, k) => k + floor);
    }

    initializeYearPicker(calYear: number, currYear: number): void {
        this._startYear = calYear;
        this._currYear = currYear;
        this.populateYearRange();
    }

    private populateYearRange(): void {
        this._years = this.generateYearRange(this._startYear);
    }

    moveToNextDecade(): void {
        this._startYear = this._startYear + 10;
        this.populateYearRange();
    }

    moveToCurrentDecade(): void {
        this._startYear = this._currYear;
        this.populateYearRange();
    }

    moveToPreviousDecade(): void {
        this._startYear = this._startYear - 10;
        this.populateYearRange();
    }
}
