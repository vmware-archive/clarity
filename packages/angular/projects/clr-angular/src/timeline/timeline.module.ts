/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ClrIconModule } from '../icon/icon.module';
import { ClrSpinnerModule } from '../progress/spinner/spinner.module';

import { ClrTimeline } from './timeline';
import { ClrTimelineStep } from './timeline-step';
import { ClrTimelineStepDescription } from './timeline-step-description';
import { ClrTimelineStepHeader } from './timeline-step-header';
import { ClrTimelineStepTitle } from './timeline-step-title';

const CLR_TIMELINE_DIRECTIVES: Type<any>[] = [
  ClrTimeline,
  ClrTimelineStep,
  ClrTimelineStepDescription,
  ClrTimelineStepHeader,
  ClrTimelineStepTitle,
];

@NgModule({
  imports: [CommonModule, ClrIconModule, ClrSpinnerModule],
  exports: [...CLR_TIMELINE_DIRECTIVES, ClrIconModule, ClrSpinnerModule],
  declarations: [CLR_TIMELINE_DIRECTIVES],
})
export class ClrTimelineModule {}
