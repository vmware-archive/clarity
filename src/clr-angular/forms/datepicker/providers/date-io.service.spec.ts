/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {DateIOService} from "./date-io.service";
import {registerLocaleData} from "@angular/common";
import localeDe from "@angular/common/locales/de";
import localeAk from "@angular/common/locales/ak";
import {Subscription} from "rxjs/Subscription";

registerLocaleData(localeDe);
registerLocaleData(localeAk);

export default function () {
    fdescribe("Date IO Service", () => {
        let dateIOUS: DateIOService;
        let dateIODE: DateIOService;
        let dateIOAK: DateIOService;
        let services: DateIOService[];

        beforeEach(() => {
            dateIOUS = new DateIOService("en-US");
            dateIODE = new DateIOService("de");
            dateIOAK = new DateIOService("ak");
            services = [dateIOUS, dateIODE, dateIOAK];
        });

        function assertDateValue(date1: Date, date2: Date) {
            expect(date1.getDate()).toBe(date2.getDate());
            expect(date1.getMonth()).toBe(date2.getMonth());
            expect(date1.getFullYear()).toBe(date2.getFullYear());
        }

        describe("Initializing Locale Data", () => {
            it("Retrieves the correct locale format from Angular " +
                "when the date IO service is initialized", () => {
                expect(dateIOUS.locale).toBe("en-US");
                expect(dateIOUS.cldrLocaleDateFormat).toBe("M/d/yy");

                expect(dateIODE.locale).toBe("de");
                expect(dateIODE.cldrLocaleDateFormat).toBe("dd.MM.yy");

                expect(dateIOAK.locale).toBe("ak");
                expect(dateIOAK.cldrLocaleDateFormat).toBe("yy/MM/dd");
            });

            it("displays the placeholder text according to the locale", () => {
                expect(dateIOUS.placeholderText).toBe("MM/DD/YYYY");
                expect(dateIODE.placeholderText).toBe("DD/MM/YYYY");
                expect(dateIOAK.placeholderText).toBe("YYYY/MM/DD");
            });
        });


        describe("Date Input Processing", () => {

            function generateDateStringAndCheck(year: string, month: string, date: string, dateObj: Date, checkForValid: boolean = true) {
                dateIOUS.inputDate = month + "/" + date + "/" + year;
                dateIODE.inputDate = date + "/" + month + "/" + year;
                dateIOAK.inputDate = year + "/" + month + "/" + date;
                for (const service of services) {
                    if (checkForValid) {
                        assertDateValue(service.processInput(), dateObj);
                    } else {
                        expect(service.processInput()).toBeNull();
                    }
                }
            }

            it("processes the user input correctly", () => {
                //Successful checks
                const date: Date = new Date(2015, 1, 1);
                generateDateStringAndCheck("2015", "02", "01", date);

                const date1: Date = new Date(2015, 0, 1);
                generateDateStringAndCheck("2015", "1", "1", date1);

                const date2: Date = new Date(2015, 10, 24);
                generateDateStringAndCheck("2015", "11", "24", date2);

                //Null Checks

                //Invalid Month
                generateDateStringAndCheck("2015", "51", "21", null, false);
                generateDateStringAndCheck("2015", "-1", "21", null, false);

                //Invalid Date
                generateDateStringAndCheck("2015", "2", "29", null, false);
                generateDateStringAndCheck("2015", "2", "-1", null, false);

                //Invalid Year
                generateDateStringAndCheck("5", "2", "1", null, false);
                generateDateStringAndCheck("514", "2", "1", null, false);
                generateDateStringAndCheck("51444", "2", "1", null, false);
            });

            it("processes 2 digit years correctly", () => {
                const date: Date = new Date();
                date.setMonth(0);
                date.setDate(1);
                generateDateStringAndCheck("" + ((date).getFullYear() % 1000), "1", "1", date);
            });
        });

        describe("Subscriptions", () => {

            function subscribeDateUpdatedAndAssert(inputDate: Date) {
                let count: number = 0;
                const subs: Subscription[] = [];
                for (let service of services) {
                    subs.push(service.dateUpdated.subscribe((outputDate) => {
                        count++;
                        assertDateValue(outputDate, inputDate);
                    }));
                }
                const month: number = inputDate.getMonth() + 1;
                const date: number = inputDate.getDate();
                const year: number = inputDate.getFullYear();
                dateIOUS.inputDate = month + "/" + date + "/" + year;
                dateIODE.inputDate = date + "/" + month + "/" + year;
                dateIOAK.inputDate = year + "/" + month + "/" + date;
                expect(count).toBe(3);
                unsubscribe(subs);
            }

            function suscribeDateStrAndAssert(date: Date) {
                let count: number = 0;
                const subs: Subscription[] = [];
                for (let service of services) {
                    subs.push(service.dateStrUpdated.subscribe((dateStr) => {
                       count++;
                       assertDateValue(service.processInput(), date);
                    }));
                }

                dateIOUS.updateDate(date);
                dateIODE.updateDate(date);
                dateIOAK.updateDate(date);

                unsubscribe(subs);
            }

            function unsubscribe(subs: Subscription[]) {
                for (let sub of subs) {
                    sub.unsubscribe();
                }
            }

            it("Emits the Date object when a valid input is passed", () => {
                subscribeDateUpdatedAndAssert(new Date(2015, 1, 1));
            });

            it("Emits the date string when the date is update", () => {
                suscribeDateStrAndAssert(new Date(2015, 4, 24));
            });
        });
    });
}
