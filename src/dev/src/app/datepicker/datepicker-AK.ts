/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'clr-datepicker-ak-demo',
  // Note the .css extension here, not .scss. That's the best we can have at the moment.
  styleUrls: ['./datepicker.demo.scss'],
  template: ` 
      <div clrForm>
        <input type="date" clrDate>
      </div>
    `,
  providers: [{ provide: LOCALE_ID, useValue: 'ak' }],
})
export class DatepickerAKDemo {}
