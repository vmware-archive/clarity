/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  host: {
    '[class.content-container]': 'true',
  },
})
export class HomeComponent {
  currentSeason = `bg-img-${this.getCurrentSeason()}`;

  private getCurrentSeason() {
    const now = new Date();
    const currentYear = now.getFullYear();

    if (now < new Date(currentYear, 2, 1)) {
      return 'winter'; // Jan 1 - Mar 1
    }

    if (now < new Date(currentYear, 5, 1)) {
      return 'spring'; // Mar 1 - Jun 1
    }

    if (now < new Date(currentYear, 8, 1)) {
      return 'summer'; // Jun 1 - Sep 1
    }

    if (now < new Date(currentYear, 11, 1)) {
      return 'autumn'; // Sep 1 - Dec 1
    }

    return 'winter'; // Dec 1 - Dec 31
  }
}
