/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'clr-datepicker-ar-demo',
  styleUrls: ['./datepicker.demo.scss'],
  template: `
    <div clrForm>
      <input type="date" clrDate />
    </div>
  `,
  providers: [{ provide: LOCALE_ID, useValue: 'ar-AE' }],
})
export class DatepickerARDemo {}
