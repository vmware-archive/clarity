/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnDestroy } from '@angular/core';
import { ClrCommonStringsService, commonStringsDefault, ClrCommonStrings } from '@clr/angular';

import { USERS } from './users';
import { frenchTranslation } from './fr-translation';

@Component({
  templateUrl: './i18n-a11y.demo.html',
  host: {
    lang: 'fr',
  },
})
export class I18nA11yDemo implements OnDestroy {
  users = USERS;
  selected: any[] = [];
  test: ClrCommonStrings;

  constructor(private commonStrings: ClrCommonStringsService) {
    this.commonStrings.localize(frenchTranslation);
  }

  // We want to reset the strings when leaving this demo.
  ngOnDestroy() {
    this.commonStrings.localize(commonStringsDefault);
  }
}
