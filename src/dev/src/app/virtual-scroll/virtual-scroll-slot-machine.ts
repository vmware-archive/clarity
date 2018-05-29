/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { slotGenerator } from './slots';

@Component({
  selector: 'clr-virtual-scroll-slot-machine-demo',
  template: `
        <div class="slot-machine">
            <div class="slot" *ngFor="let slot of slots">
                <img *clrVirtualFor="let imageSrc of slot" [src]="imageSrc"/>
            </div>
        </div>
    `,
  styleUrls: ['./virtual-scroll.demo.scss'],
})
export class VirtualScrollSlotMachineDemo {
  slots = [slotGenerator(0), slotGenerator(1), slotGenerator(2)];
}
