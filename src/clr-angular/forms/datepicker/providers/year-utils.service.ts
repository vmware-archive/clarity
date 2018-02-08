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

    private _years: number[];

    private _focusedYear: number;

    get focusedYear(): number {
        return this._focusedYear;
    }

    set focusedYear(value: number) {
        this._focusedYear = value;
    }

    /**
     * Gets the generated year range.
     */
    get years(): number[] {
        return this._years;
    }

    /**
     * Generates the year range based on the year parameter.
     * eg: If 2018 is passed the output will be [2010, 2011, ..., 2019]
     */
    generateYearRange(year: number): number[] {
        const remainder: number = year % NO_YEAR_IN_VIEW;
        const floor: number = year - remainder;
        const ceil: number = floor + NO_YEAR_IN_VIEW;
        const arr: number[] = this.generateRange(floor, ceil);
        return arr;
    }

    /**
     * Function which generate a range of number from floor to ceil.
     */
    private generateRange(floor: number, ceil: number) {
        return Array.from({length: (ceil - floor)}, (v, k) => k + floor);
    }

    /**
     * Initializes the year picker based on the calendar year.
     */
    initializeYearPicker(calYear: number): void {
        this._startYear = calYear;
        this.populateYearRange();
    }

    /**
     * Populates the generated year range.
     */
    private populateYearRange(): void {
        this._years = this.generateYearRange(this._startYear);
        const floor: number = this._years[0];
        const ceil: number = this._years[this.years.length - 1];
        if (!this.focusedYear || this._focusedYear < floor || this.focusedYear > ceil) {
            this._focusedYear = Math.floor((floor + ceil) / 2);
        }
    }

    /**
     * Generates the year range for the next decade.
     */
    moveToNextDecade(): void {
        this._startYear = this._startYear + 10;
        this.populateYearRange();
    }

    /**
     * Generates the year range for the current decade.
     */
    moveToCurrentDecade(): void {
        this._startYear = (new Date().getFullYear());
        this.populateYearRange();
    }

    /**
     * Generates the year range for the previous decade.
     */
    moveToPreviousDecade(): void {
        this._startYear = this._startYear - 10;
        this.populateYearRange();
    }
}
