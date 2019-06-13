/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive } from '@angular/core';

@Directive({
  selector: '.modal-body',
  host: {
    '[attr.tabindex]': '"0"',
  },
})
export class ClrModalBody {}
