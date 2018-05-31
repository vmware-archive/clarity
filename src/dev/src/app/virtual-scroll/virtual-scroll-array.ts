/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-virtual-scroll-array-demo',
  template: `
        <h3>100 items array</h3>
        <ul class="container">
            <li *clrVirtualFor="let n of numbers">
                {{n}}
            </li>
        </ul>
    `,
  styleUrls: ['./virtual-scroll.demo.scss'],
})
export class VirtualScrollArrayDemo {
  numbers = Array.from(Array(100).keys());
}
