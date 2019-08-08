/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Inject } from '@angular/core';
import { UNIQUE_ID } from '../../utils/id-generator/id-generator.service';

@Directive({
  selector: '[clrStackInput]',
  host: {
    '[class.clr-input]': 'true',
    '[attr.aria-labelledby]': 'uniqueId',
  },
})
export class ClrStackContentInput {
  constructor(@Inject(UNIQUE_ID) public uniqueId: string) {}
}
