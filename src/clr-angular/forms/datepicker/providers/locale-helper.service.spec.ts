/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {registerLocaleData} from "@angular/common";
import localeFr from "@angular/common/locales/fr";

import {LocaleHelperService} from "./locale-helper.service";

registerLocaleData(localeFr);

export default function() {
    describe("Locale Helper Service", () => {
        let localeHelperServiceUS: LocaleHelperService;
        let localeHelperServiceFr: LocaleHelperService;

        const usDays: string[] = ["S", "M", "T", "W", "T", "F", "S"];
        const frDays: string[] = ["L", "M", "M", "J", "V", "S", "D"];

        beforeEach(() => {
            localeHelperServiceFr = new LocaleHelperService("fr");
            localeHelperServiceUS = new LocaleHelperService("en-US");
        });

        it("returns the first day of the week", () => {
            expect(localeHelperServiceUS.firstDayOfWeek).toBe(0);
            expect(localeHelperServiceFr.firstDayOfWeek).toBe(1);
        });

        it("returns the months in abbreviated format", () => {
            expect(localeHelperServiceUS.localeMonthsAbbreviated.length).toBe(12);
            expect(localeHelperServiceFr.localeMonthsAbbreviated.length).toBe(12);
        });

        it("returns the months in wide format", () => {
            expect(localeHelperServiceUS.localeMonthsWide.length).toBe(12);
            expect(localeHelperServiceFr.localeMonthsWide.length).toBe(12);
        });

        it("returns the locale date format", () => {
            expect(localeHelperServiceUS.localeDateFormat).toBe("M/d/yy");
            expect(localeHelperServiceFr.localeDateFormat).toBe("dd/MM/y");
        });

        it("returns the locale days in narrow format " +
               "according to the first day of the week",
           () => {
               const a1: ReadonlyArray<string> = localeHelperServiceUS.localeDaysNarrow;
               const a2: ReadonlyArray<string> = localeHelperServiceFr.localeDaysNarrow;

               expect(a1.length === usDays.length && a1.every((v, i) => v === usDays[i])).toBe(true);
               expect(a2.length === usDays.length && a2.every((v, i) => v === frDays[i])).toBe(true);
           });
    });
}
