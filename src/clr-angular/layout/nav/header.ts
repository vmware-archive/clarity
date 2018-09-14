/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ResponsiveNavigationService } from './providers/responsive-navigation.service';
import { ResponsiveNavCodes } from './responsive-nav-codes';

@Component({
  selector: 'clr-header',
  template: `
        <button
            type="button"
            *ngIf="isNavLevel1OnPage"
            class="header-hamburger-trigger"
            (click)="toggleNav(responsiveNavCodes.NAV_LEVEL_1)">
            <span></span>
        </button>
        <ng-content></ng-content>
        <button
            type="button"
            *ngIf="isNavLevel2OnPage"
            class="header-overflow-trigger"
            (click)="toggleNav(responsiveNavCodes.NAV_LEVEL_2)">
            <span></span>
        </button>
        <div class="header-backdrop" (click)="closeOpenNav()"></div>
    `,
  host: { '[class.header]': 'true' },
})
export class ClrHeader implements OnDestroy {
  private _subscription: Subscription;
  public isNavLevel1OnPage: boolean = false;
  public isNavLevel2OnPage: boolean = false;
  public responsiveNavCodes = ResponsiveNavCodes;

  constructor(private responsiveNavService: ResponsiveNavigationService) {
    this._subscription = this.responsiveNavService.registeredNavs.subscribe({
      next: (navLevelList: number[]) => {
        this.initializeNavTriggers(navLevelList);
      },
    });
  }

  // reset triggers. handles cases when an application has different nav levels on different pages.
  resetNavTriggers() {
    this.isNavLevel1OnPage = false;
    this.isNavLevel2OnPage = false;
  }

  // decides which triggers to show on the header
  initializeNavTriggers(navList: number[]): void {
    this.resetNavTriggers();
    if (navList.length > 2) {
      console.error('More than 2 Nav Levels detected.');
      return;
    }
    navList.forEach(navLevel => {
      if (navLevel === ResponsiveNavCodes.NAV_LEVEL_1) {
        this.isNavLevel1OnPage = true;
      } else if (navLevel === ResponsiveNavCodes.NAV_LEVEL_2) {
        this.isNavLevel2OnPage = true;
      }
    });
  }

  // closes the nav that is open
  closeOpenNav() {
    this.responsiveNavService.closeAllNavs();
  }

  // toggles the nav that is open
  toggleNav(navLevel: number) {
    this.responsiveNavService.sendControlMessage(ResponsiveNavCodes.NAV_TOGGLE, navLevel);
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
