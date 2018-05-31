/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

import { DATEPICKER_ENABLE_BREAKPOINT } from '../../../utils/breakpoints/breakpoints';
import { MOBILE_USERAGENT_REGEX } from '../utils/constants';

@Injectable()
export class DatepickerEnabledService {
  constructor(@Inject(DOCUMENT) private _document: any) {
    if (this._document) {
      this._isUserAgentMobile = MOBILE_USERAGENT_REGEX.test(_document.defaultView.navigator.userAgent);
      this._innerWidth = _document.defaultView.innerWidth;
    }
  }

  private _isUserAgentMobile: boolean = false;
  private _innerWidth: number;

  /**
   * Returns if the calendar should be active or not.
   * If the user agent is mobile and the screen width is less than DATEPICKER_ACTIVE_BREAKPOINT
   * then the calendar is inactive.
   */
  get isEnabled(): boolean {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
    // What they recommend is:
    //"In summary, we recommend looking for the string 'Mobi'
    // anywhere in the User Agent to detect a mobile device."
    if (this._document) {
      if (this._innerWidth < DATEPICKER_ENABLE_BREAKPOINT && this._isUserAgentMobile) {
        return false;
      }
    }
    return true;
  }
}
