/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClrIconModule } from '@clr/angular';
import { TimelineDemo } from './timeline.demo';
import { ROUTING } from './timeline.demo.routing';

@NgModule({
  imports: [CommonModule, ROUTING, ClrIconModule],
  declarations: [TimelineDemo],
  exports: [TimelineDemo],
})
export class TimelineDemoModule {}
