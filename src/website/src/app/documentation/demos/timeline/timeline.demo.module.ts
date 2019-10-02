/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';

import { TimelineDemo } from './timeline.demo';
import { DocWrapperModule } from '../_doc-wrapper/doc-wrapper.module';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '../../../utils/utils.module';
import { TimelineFullDemo } from './timeline-full-demo.component';
import { TimelineContainerDemo } from './timeline-container-demo';
import { TimelineBodyDemo } from './timeline-body-demo';
import { TimelineStepDemo } from './timeline-step-demo';
import { TimelineComponentDemo } from './timeline-component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TimelineDemo }]),
    DocWrapperModule,
    UtilsModule,
  ],
  declarations: [
    TimelineDemo,
    TimelineFullDemo,
    TimelineStepDemo,
    TimelineContainerDemo,
    TimelineBodyDemo,
    TimelineComponentDemo,
  ],
  exports: [TimelineDemo],
})
export class TimelineDemoModule {}
