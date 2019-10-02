/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ClrTimelineModule } from '@clr/angular';
import { ROUTING } from './timeline.demo.routing';
import { TimelineDemo } from './timeline.demo';
import { TimelineStaticDemo } from './static/timeline-static';
import { TimelineAngularDemo } from './angular/timeline-angular';

const TIMELINE_DEMO_DIRECTIVES: Type<any>[] = [TimelineDemo, TimelineStaticDemo, TimelineAngularDemo];

@NgModule({
  imports: [CommonModule, ROUTING, ClrTimelineModule],
  declarations: [TIMELINE_DEMO_DIRECTIVES],
  exports: [TIMELINE_DEMO_DIRECTIVES],
})
export class TimelineDemoModule {}
