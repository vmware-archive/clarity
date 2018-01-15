/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Inject, Injectable, LOCALE_ID} from "@angular/core";
import {FormStyle, getLocaleDayNames, getLocaleFirstDayOfWeek, TranslationWidth, WeekDay} from "@angular/common";

const TOTAL_DAYS_IN_MONTH_VIEW: number = 42;
const NO_OF_DAYS_IN_A_WEEK: number = 7;

@Injectable()
export class DateUtilsService {
    constructor(@Inject(LOCALE_ID) public locale: string) {
        this.initializeLocaleDaysShort();
    }

    private _localeDaysShort: ReadonlyArray<string>;

    private initializeLocaleDaysShort(): void {
        //Get locale day names starting with Sunday
        const tempArr: string[] = getLocaleDayNames(this.locale, FormStyle.Format, TranslationWidth.Narrow);
        //Get first day of the week based on the locale
        const firstDayOfWeek: number = getLocaleFirstDayOfWeek(this.locale);
        //Rearrange the tempArr to start with the first day of the week based on the locale.
        if (firstDayOfWeek > 0) {
            const prevDays: string[] = tempArr.splice(0, firstDayOfWeek);
            prevDays.forEach((item) => {
                tempArr.push(item);
            });
        }
        this._localeDaysShort = tempArr;
    }

    get localeDaysShort(): ReadonlyArray<string> {
        return this._localeDaysShort;
    }
}
