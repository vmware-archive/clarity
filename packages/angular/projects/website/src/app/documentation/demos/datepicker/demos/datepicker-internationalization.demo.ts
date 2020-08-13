/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const PROVIDE_LOCALE_EXAMPLE = `
providers: [
    {provide: LOCALE_ID, useValue: 'fr'}
]
`;

const REGISTER_LOCALE_EXAMPLE = `
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);
`;

@Component({
  selector: 'clr-datepicker-internationalization-demo',
  templateUrl: './datepicker-internationalization.demo.html',
})
export class DatepickerInternationalizationDemo {
  registerLocaleExample = REGISTER_LOCALE_EXAMPLE;
  provideLocaleExample = PROVIDE_LOCALE_EXAMPLE;
}
