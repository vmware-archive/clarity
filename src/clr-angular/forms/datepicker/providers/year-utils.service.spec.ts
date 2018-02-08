/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {YearUtilsService} from "./year-utils.service";

export default function () {
    describe("Year Utils Service", () => {
        let yearService: YearUtilsService;
        let startYear: number;
        let minYear: number;
        let maxYear: number;

        beforeEach(() => {
            yearService = new YearUtilsService();
            startYear = (new Date()).getFullYear();
            const rem: number = startYear % 10;
            minYear = startYear - rem;
            maxYear = startYear + (10 - rem) - 1;
            yearService.initializeYearPicker(startYear);
        });

        it("Initializes the years correctly", () => {
            expect(yearService.years.length).toBe(10);

            for (let year of yearService.years) {
                expect(year).toBe(minYear++);
            }

            expect(yearService.years[yearService.years.length - 1]).toBe(maxYear);
        });

        it("generates a year range based on the year passed", () => {
            let test: number[] = yearService.generateYearRange(2000);

            expect(yearService.years.length).toBe(10);

            let yearCount: number = 2000;
            for (let year of test) {
                expect(year).toBe(yearCount++);
            }

            test = yearService.generateYearRange(2002);

            yearCount = 2000;
            for (let year of test) {
                expect(year).toBe(yearCount++);
            }
        });

        it("moves to the next decade", () => {
            let count: number = 3;
            while (count !== 0) {
                minYear = minYear + 10;
                maxYear = maxYear + 10;
                yearService.moveToNextDecade();

                expect(yearService.years.length).toBe(10);

                let yearCount: number = minYear;
                for (let year of yearService.years) {
                    expect(year).toBe(yearCount++);
                }
                expect(yearService.years[yearService.years.length - 1]).toBe(maxYear);
                count--;
            }
        });

        it("moves to the previous decade", () => {
            let count: number = 3;
            while (count !== 0) {
                minYear = minYear - 10;
                maxYear = maxYear - 10;
                yearService.moveToPreviousDecade();

                expect(yearService.years.length).toBe(10);

                let yearCount: number = minYear;
                for (let year of yearService.years) {
                    expect(year).toBe(yearCount++);
                }

                expect(yearService.years[yearService.years.length - 1]).toBe(maxYear);
                count--;
            }
        });

        it("moves to the current decade", () => {
            yearService.moveToPreviousDecade();
            yearService.moveToPreviousDecade();
            yearService.moveToPreviousDecade();

            let yearCount: number = minYear - 30;
            for (let year of yearService.years) {
                expect(year).toBe(yearCount++);
            }

            yearService.moveToCurrentDecade();
            yearCount = minYear;
            for (let year of yearService.years) {
                expect(year).toBe(yearCount++);
            }

            yearService.moveToNextDecade();
            yearService.moveToNextDecade();
            yearService.moveToNextDecade();

            yearCount = minYear + 30;
            for (let year of yearService.years) {
                expect(year).toBe(yearCount++);
            }

            yearService.moveToCurrentDecade();
            yearCount = minYear;
            for (let year of yearService.years) {
                expect(year).toBe(yearCount++);
            }
        });
    });
}
