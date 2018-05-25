/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isPlatformBrowser } from '@angular/common';
import { ElementRef, Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { first } from 'rxjs/operators';

/**
 * This service focuses the day that is focusable in the calendar.
 */
@Injectable()
export class DatepickerFocusService {
  constructor(private _ngZone: NgZone, @Inject(PLATFORM_ID) private platformId: Object) {}

  // Credit: Material: https://github.com/angular/material2/blob/master/src/lib/datepicker/calendar.ts
  focusCell(elRef: ElementRef): void {
    this._ngZone.runOutsideAngular(() => {
      this._ngZone.onStable
        .asObservable()
        .pipe(first())
        .subscribe(() => {
          if (isPlatformBrowser(this.platformId)) {
            const focusEl = elRef.nativeElement.querySelector('[tabindex="0"]');
            if (focusEl) {
              focusEl.focus();
            }
          }
        });
    });
  }
}
