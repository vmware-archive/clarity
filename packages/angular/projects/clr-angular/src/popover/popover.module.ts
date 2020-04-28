/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';

import { ClrDropdownModule } from './dropdown/dropdown.module';
import { ClrSignpostModule } from './signpost/signpost.module';
import { ClrTooltipModule } from './tooltip/tooltip.module';

@NgModule({ exports: [ClrDropdownModule, ClrSignpostModule, ClrTooltipModule] })
export class ClrPopoverModule {}
