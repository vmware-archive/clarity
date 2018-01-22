/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Inject, Injectable, LOCALE_ID} from "@angular/core";
import {FormatWidth, getLocaleDateFormat} from "@angular/common";
import {
    BIG_ENDIAN,
    DEFAULT_LOCALE_FORMAT,
    LITTLE_ENDIAN,
    LITTLE_ENDIAN_REGEX,
    MIDDLE_ENDIAN,
    MIDDLE_ENDIAN_REGEX,
    SEPARATORS,
    InputDateDisplayFormat
} from "../utils/constants";
import {getNumberOfDaysInTheMonth, parseToFourDigitYear} from "../utils/date-utils";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DateIOService {
    public cldrLocaleDateFormat: string = DEFAULT_LOCALE_FORMAT;
    private localeDisplayFormat: InputDateDisplayFormat = BIG_ENDIAN;

    private _inputDate: string;

    get inputDate(): string {
        return this._inputDate;
    }

    set inputDate(value: string) {
        this._inputDate = value;
        let date: Date = this.processInput();
        if (date) {
            this._dateValidated.next(date);
        }
    }

    constructor(@Inject(LOCALE_ID) public locale: string) {
        this.cldrLocaleDateFormat = getLocaleDateFormat(this.locale, FormatWidth.Short);
        this.processLocaleFormat(this.cldrLocaleDateFormat);
    }

    processInput(): Date {
        return this.isValidInput(this._inputDate);
    }

    toLocaleDisplayFormatString(date: Date): string {
        const dateNo: number = date.getDate();
        const monthNo: number = date.getMonth() + 1;
        const dateStr: string = dateNo > 9 ? dateNo.toString() : "0" + dateNo;
        const monthStr: string = monthNo > 9 ? monthNo.toString() : "0" + monthNo;
        if (this.localeDisplayFormat === LITTLE_ENDIAN) {
            return dateStr + "/" + monthStr + "/" + date.getFullYear();
        } else if (this.localeDisplayFormat === MIDDLE_ENDIAN) {
            return monthStr + "/" + dateStr + "/" + date.getFullYear();
        } else {
            return date.getFullYear() + "/" + monthStr + "/" + dateStr;
        }
    }

    get placeholderText(): string {
        return this.localeDisplayFormat.format;
    }

    /**
     * Process the locale format provided by CLDR to order the basic date components.
     * The order of the date parts results in either of these 3 formats:
     * MIDDLE_ENDIAN, LITTLE_ENDIAN, or BIG_ENDIAN
     * More info here: https://en.wikipedia.org/wiki/Date_format_by_country
     */
    processLocaleFormat(format: string): void {
        format = format.toLocaleLowerCase();
        if (LITTLE_ENDIAN_REGEX.test(format)) {
            this.localeDisplayFormat = LITTLE_ENDIAN;
        } else if (MIDDLE_ENDIAN_REGEX.test(format)) {
            this.localeDisplayFormat = MIDDLE_ENDIAN;
        } else {
            //everything else is set to BIG-ENDIAN FORMAT
            this.localeDisplayFormat = BIG_ENDIAN;
        }
        /*
        console.log(this.localeDisplayFormat);
        console.log(this.placeholderText);
        console.log(this.isValidInput("02/29/2017")); //invalid
        console.log(this.isValidInput("02/28/2017")); //valid
        console.log(this.isValidInput("03/30/2017")); //valid
        console.log(this.isValidInput("03/31/2017")); //valid
        console.log(this.isValidInput("03/32/2017")); //invalid
        console.log(this.isValidInput("04/1/2017")); //valid
        console.log(this.isValidInput("04/30/2017")); //valid
        console.log(this.isValidInput("04/31/2017")); //invalid
        console.log(this.isValidInput("aa/31/2017")); //invalid
        console.log(this.isValidInput("12/aa/2017")); //invalid
        console.log(this.isValidInput("01/31/bb")); //invalid
        */
    }

    /**
     * Detects if the input date string contains any one
     * of the separators from the SEPARTORS array.
     */
    private detectSeparator(date: string): string {
        let separatorUsed: string;
        for (const separator of SEPARATORS) {
            if (date.indexOf(separator) > -1) {
                separatorUsed = separator;
                break;
            }
        }
        return separatorUsed;
    }

    /**
     * Checks if the date parts are numbers
     */
    private areDatePartsNumbers(dateParts: string[]): boolean {
        for (const part of dateParts) {
            if (!this.isNonNegativeNumber(part)) {
                return false;
            }
        }
        return true;
    }

    /**
     * Checks if the month entered by the user is valid or not.
     * Note: Month is 0 based.
     */
    isValidMonth(month: number): boolean {
        if (month > -1 && month < 12) {
            return true;
        }
        return false;
    }

    /**
     * Checks if the date is valid depending on the year and month provided.
     */
    isValidDate(year: number, month: number, date: number): boolean {
        if (date > 0 && date <= getNumberOfDaysInTheMonth(year, month)) {
            return true;
        }
        return false;
    }

    /**
     * Checks if the string is a non negative number.
     * Credit: https://stackoverflow.com/a/24457420/8960224
     */
    isNonNegativeNumber(num: string): boolean {
        return /^\d+$/.test(num);
    }

    /**
     * Validates the parameters provided and returns the date.
     * If the parameters are not valid (eg: month > 11 because month is 0 based) then return null
     */
    private validateAndGetDate(year: number, month: number, date: number): Date {
        if (year < -1) {
            return null;
        } else if (year > 99 && year < 1000) {
            return null;
        } else if (year > -1 && year < 100) {
            const fourDigitYear: number = parseToFourDigitYear(year);
            if (fourDigitYear === -1) {
                return null;
            }
            year = fourDigitYear;
        }
        if (this.isValidMonth(month) && this.isValidDate(year, month, date)) {
            return new Date(year, month, date);
        }
        return null;
    }

    /**
     * Checks if the input provided by the user is valid.
     */
    isValidInput(date: string): Date {
        if (!date) {
            return null;
        }
        const separator: string = this.detectSeparator(date);
        if (!separator) {
            return null;
        }
        const dateParts: string[] = date.split(separator);
        if (dateParts.length !== 3) {
            return null;
        }
        if (!this.areDatePartsNumbers(dateParts)) {
            return null;
        }
        let firstPart: number = +dateParts[0];
        let secondPart: number = +dateParts[1];
        const thirdPart: number = +dateParts[2];
        if (this.localeDisplayFormat === LITTLE_ENDIAN) {
            //secondPart is month && firstPart is date
            return this.validateAndGetDate(thirdPart, secondPart - 1, firstPart);
        } else if (this.localeDisplayFormat === MIDDLE_ENDIAN) {
            //firstPart is month && secondPart is date
            return this.validateAndGetDate(thirdPart, firstPart - 1,secondPart);
        } else {
            //secondPart is month && thirdPart is date
            return this.validateAndGetDate(firstPart , secondPart - 1, thirdPart);
        }
    }

    private _dateChanged: Subject<string> = new Subject<string>();

    /**
     * Observable to let the subscribers know that the date has been updated.
     */
    get dateChanged(): Observable<string> {
        return this._dateChanged.asObservable();
    }

    private _dateValidated: Subject<Date> = new Subject<Date>();

    get dateValidated(): Observable<Date> {
        return this._dateValidated.asObservable();
    }

    /**
     * Function to update the date and emit it to the dateChanged subscribers.
     */
    updateDate(date: Date) {
        this.inputDate = this.toLocaleDisplayFormatString(date);
        this._dateChanged.next(this.inputDate);
    }
}
