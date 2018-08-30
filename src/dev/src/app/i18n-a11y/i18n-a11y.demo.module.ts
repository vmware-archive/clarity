/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule, registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr';

import { ClarityModule, ClrCommonStrings } from '@clr/angular';

import { I18nA11yDemo } from './i18n-a11y.demo';
import { CommonStringsService } from './common-strings.service';
import { ROUTING } from './i18n-a11y.demo.routing';

registerLocaleData(localeFr);

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING],
  declarations: [I18nA11yDemo],
  exports: [I18nA11yDemo],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }, { provide: ClrCommonStrings, useClass: CommonStringsService }],
})
export class I18nA11yDemoModule {}
