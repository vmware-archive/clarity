/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isPlatformBrowser } from '@angular/common';
import { ElementRef, Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { first, filter } from 'rxjs/operators';

/**
 * This service focuses the day that is focusable in the calendar.
 */
@Injectable()
export class DatepickerFocusService {
  constructor(private _ngZone: NgZone, @Inject(PLATFORM_ID) private platformId: any) {}

  focusCell(elRef: ElementRef): void {
    this._ngZone.runOutsideAngular(() => {
      this.ngZoneIsStableInBrowser().subscribe(() => {
        const focusEl = elRef.nativeElement.querySelector('[tabindex="0"]');
        if (focusEl) {
          focusEl.focus();
        }
      });
    });
  }

  focusInput(element: HTMLInputElement): void {
    this._ngZone.runOutsideAngular(() => this.ngZoneIsStableInBrowser().subscribe(() => element.focus()));
  }

  elementIsFocused(element: HTMLInputElement) {
    return isPlatformBrowser(this.platformId) && document.activeElement === element;
  }

  private ngZoneIsStableInBrowser() {
    // Credit: Material: https://github.com/angular/material2/blob/master/src/lib/datepicker/calendar.ts
    return this._ngZone.onStable.asObservable().pipe(
      first(),
      filter(() => isPlatformBrowser(this.platformId))
    );
  }
}
