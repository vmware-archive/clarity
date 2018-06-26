/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive } from '@angular/core';
import { LayoutService } from './providers/layout.service';

@Directive({
  selector: '[clrForm]',
  providers: [LayoutService],
  host: { '[class.clr-form]': 'true' },
})
export class ClrForm {}
