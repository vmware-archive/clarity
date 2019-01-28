/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { NgModule } from '@angular/core';
import { ClrSmartPopoverContent } from './smart-popover-content';
import { ClrSmartOpenCloseButton } from './smart-open-close-button';
import { ClrSmartCloseButton } from './smart-close-button';
import { ClrSmartPopoverAnchor } from './smart-anchor';

@NgModule({
  imports: [],
  declarations: [ClrSmartPopoverAnchor, ClrSmartCloseButton, ClrSmartOpenCloseButton, ClrSmartPopoverContent],
  exports: [ClrSmartPopoverAnchor, ClrSmartCloseButton, ClrSmartOpenCloseButton, ClrSmartPopoverContent],
})
export class ClrSmartPopoverModule {}
