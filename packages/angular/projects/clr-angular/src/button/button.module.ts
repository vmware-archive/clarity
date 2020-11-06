/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from '@angular/core';
import { ClarityIcons, ellipsisHorizontalIcon } from '@cds/core/icon';

import { ClrButtonGroupModule } from './button-group/button-group.module';
import { ClrLoadingButtonModule } from './button-loading/loading-button.module';

@NgModule({
  exports: [ClrLoadingButtonModule, ClrButtonGroupModule],
})
export class ClrButtonModule {
  constructor() {
    ClarityIcons.addIcons(ellipsisHorizontalIcon);
  }
}
