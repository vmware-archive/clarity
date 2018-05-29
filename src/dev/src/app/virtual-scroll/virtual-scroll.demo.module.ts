/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClrAlertModule } from '@clr/angular';
import { ClrVirtualScrollModule } from '../../../../clr-angular/utils/virtual-scroll/virtual-scroll.module';

import { VirtualScrollArrayDemo } from './virtual-scroll-array';
import { VirtualScrollInfiniteGeneratorDemo } from './virtual-scroll-infinite-generator';
import { VirtualScrollSlotMachineDemo } from './virtual-scroll-slot-machine';
import { VirtualScrollDemo } from './virtual-scroll.demo';
import { ROUTING } from './virtual-scroll.demo.routing';

@NgModule({
  imports: [CommonModule, ClrVirtualScrollModule, ClrAlertModule, ROUTING],
  declarations: [
    VirtualScrollDemo,
    VirtualScrollArrayDemo,
    VirtualScrollInfiniteGeneratorDemo,
    VirtualScrollSlotMachineDemo,
  ],
})
export class VirtualScrollDemoModule {}
