/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { commonStringsDefault, commonStringsService } from '@clr/core/common';
import { frenchTranslation } from './fr-translation';

@Component({
  selector: 'app-i18n-demo',
  templateUrl: './i18n.demo.html',
})
export class I18nDemoComponent {
  clrCommonStringsService = commonStringsService;

  english() {
    commonStringsService.localize(commonStringsDefault);
  }

  french() {
    commonStringsService.localize(frenchTranslation);
  }
}
