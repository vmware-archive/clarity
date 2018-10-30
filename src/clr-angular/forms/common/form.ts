/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive } from '@angular/core';
import { LayoutService } from './providers/layout.service';
import { IS_NEW_FORMS_LAYOUT_TRUE_PROVIDER } from './providers/new-forms.service';
import { MarkControlService } from './providers/mark-control.service';

@Directive({
  selector: '[clrForm]',
  providers: [LayoutService, MarkControlService, IS_NEW_FORMS_LAYOUT_TRUE_PROVIDER],
  host: {
    '[class.clr-form]': 'true',
    '[class.clr-form-horizontal]': 'layoutService.isHorizontal()',
    '[class.clr-form-compact]': 'layoutService.isCompact()',
  },
})
export class ClrForm {
  constructor(public layoutService: LayoutService, private markControlService: MarkControlService) {}

  markAsDirty() {
    this.markControlService.markAsDirty();
  }
}
