/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {registerLocaleData} from "@angular/common";
import localeAk from "@angular/common/locales/ak";

import {assertEqualDates} from "../utils/test-utils";

import {DateIOService} from "./date-io.service";
import {LocaleHelperService} from "./locale-helper.service";

registerLocaleData(localeAk);

export default function() {
    describe("Date IO Service", () => {
        let dateIOService: DateIOService;
        let localeHelperService: LocaleHelperService;


        describe("Locale Formatting", function() {
            it("updates the cldrLocaleDateFormat based on the locale helper service", () => {
                const localeHelperServ: LocaleHelperService = new LocaleHelperService("en-US");
                const dateIOServ: DateIOService = new DateIOService(localeHelperServ);
                expect(dateIOServ.cldrLocaleDateFormat).toBe("M/d/yy");

                const localeHelperServ1: LocaleHelperService = new LocaleHelperService("ak");
                const dateIOServ1: DateIOService = new DateIOService(localeHelperServ1);

                expect(dateIOServ1.cldrLocaleDateFormat).toBe("yy/MM/dd");
            });

            it("supports a method to convert a Date object to date string based on the locale", () => {
                const localeHelperServ: LocaleHelperService = new LocaleHelperService("en-US");
                const dateIOServ: DateIOService = new DateIOService(localeHelperServ);

                expect(dateIOServ.toLocaleDisplayFormatString(new Date(2015, 1, 1))).toBe("02/01/2015");

                const localeHelperServ1: LocaleHelperService = new LocaleHelperService("ak");
                const dateIOServ1: DateIOService = new DateIOService(localeHelperServ1);

                expect(dateIOServ1.toLocaleDisplayFormatString(new Date(2015, 1, 1))).toBe("2015/02/01");
            });

            it("processes an invalid date object as an empty string", () => {
                const localeHelperServ: LocaleHelperService = new LocaleHelperService("en-US");
                const dateIOServ: DateIOService = new DateIOService(localeHelperServ);

                expect(dateIOServ.toLocaleDisplayFormatString(new Date("Test"))).toBe("");
            });

            it("processes a null object as an empty string", () => {
                const localeHelperServ: LocaleHelperService = new LocaleHelperService("en-US");
                const dateIOServ: DateIOService = new DateIOService(localeHelperServ);

                expect(dateIOServ.toLocaleDisplayFormatString(null)).toBe("");
            });
        });

        describe("Date Processing", () => {
            beforeEach(() => {
                localeHelperService = new LocaleHelperService("en-US");
                dateIOService = new DateIOService(localeHelperService);
            });

            it("ignores text", () => {
                const inputDate: string = "abc";
                const date: Date = dateIOService.isValidInput(inputDate);
                expect(date).toBeNull();
            });

            it("ignores empty strings", () => {
                const inputDate: string = "";
                const date: Date = dateIOService.isValidInput(inputDate);
                expect(date).toBeNull();
            });

            it("parse a two digit year", () => {
                let inputDate: string = "01/02/20";
                let date: Date = dateIOService.isValidInput(inputDate);
                expect(date).not.toBeNull();
                expect(assertEqualDates(date, new Date(2020, 0, 2))).toBe(true);

                // Invalid date with 2 digit year
                inputDate = "51/02/20";
                date = dateIOService.isValidInput(inputDate);
                expect(date).toBeNull();
            });

            it("should not parse a five digit year", () => {
                const inputDate: string = "01/02/10000";
                expect(dateIOService.isValidInput(inputDate)).toBeNull();
            });

            it("should not parse a three digit year", () => {
                const inputDate: string = "01/02/201";
                expect(dateIOService.isValidInput(inputDate)).toBeNull();
            });

            it("should not parse a 1 digit year", () => {
                const inputDate: string = "01/02/2";
                expect(dateIOService.isValidInput(inputDate)).toBeNull();
            });

            it("parse a 1 digit date", () => {
                const inputDate: string = "01/2/2015";
                const date: Date = dateIOService.isValidInput(inputDate);
                expect(date).not.toBeNull();
                expect(assertEqualDates(date, new Date(2015, 0, 2))).toBe(true);
            });

            it("parses a 1 digit month", () => {
                const inputDate: string = "1/02/2015";
                const date: Date = dateIOService.isValidInput(inputDate);
                expect(date).not.toBeNull();
                expect(assertEqualDates(date, new Date(2015, 0, 2))).toBe(true);
            });

            it("ignores invalid months", () => {
                const inputDate: string = "13/02/2015";
                expect(dateIOService.isValidInput(inputDate)).toBeNull();
            });

            it("ignores negative numbers", () => {
                let inputDate: string = "13/-2/2015";
                let date: Date = dateIOService.isValidInput(inputDate);
                expect(date).toBeNull();

                inputDate = "-13/2/2015";
                date = dateIOService.isValidInput(inputDate);
                expect(date).toBeNull();

                inputDate = "13/2/-2015";
                date = dateIOService.isValidInput(inputDate);
                expect(date).toBeNull();
            });
        });
    });
}
