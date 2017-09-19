/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {ClrAlertModule} from "../../clarity-angular/emphasis/alert/alert.module";
import {ClrVirtualScrollModule} from "../../clarity-angular/utils/virtual-scroll/virtual-scroll.module";

import {VirtualScrollArrayDemo} from "./virtual-scroll-array";
import {VirtualScrollInfiniteGeneratorDemo} from "./virtual-scroll-infinite-generator";
import {VirtualScrollSlotMachineDemo} from "./virtual-scroll-slot-machine";
import {VirtualScrollDemo} from "./virtual-scroll.demo";
import {ROUTING} from "./virtual-scroll.demo.routing";

@NgModule({
    imports: [CommonModule, ClrVirtualScrollModule, ClrAlertModule, ROUTING],
    declarations:
        [VirtualScrollDemo, VirtualScrollArrayDemo, VirtualScrollInfiniteGeneratorDemo, VirtualScrollSlotMachineDemo]
})
export default class VirtualScrollDemoModule {}
