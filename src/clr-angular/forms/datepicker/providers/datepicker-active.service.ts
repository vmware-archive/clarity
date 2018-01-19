/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable} from "@angular/core";
import {DATEPICKER_ACTIVE_BREAKPOINT} from "../utils/constants";

@Injectable()
export class DatepickerActiveService {
    constructor() {
        this._isUserAgentMobile = /Mobi/.test(navigator.userAgent);
    }

    private _isUserAgentMobile: boolean = false;

    /**
     * Returns if the calendar should be active or not.
     * If the user agent is mobile and the screen width is less than DATEPICKER_ACTIVE_BREAKPOINT
     * then the calendar is inactive.
     * @returns {boolean}
     */
    get active(): boolean {
        //https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
        //What they recommend is:
        //"In summary, we recommend looking for the string 'Mobi'
        // anywhere in the User Agent to detect a mobile device."
        if (window) {
            if (window.innerWidth < DATEPICKER_ACTIVE_BREAKPOINT && this.isUserAgentMobile()) {
                return false;
            }
        }
        return true;
    }

    /**
     * Checks if the user agent string has the word "mobile" in it.
     * @returns {boolean}
     */
    private isUserAgentMobile(): boolean {
        return this._isUserAgentMobile;
    }
}
