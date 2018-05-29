/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

/*
 * Preferred solution, but doesn't work yet because Angular iterates over it.
 */
// function* yearsGenerator() {
//     let index = 0;
//     while (true) {
//         index = yield index + 2017;
//     }
// }

@Component({
  selector: 'clr-virtual-scroll-infinite-generator-demo',
  template: `
        <h2>Generator for ordered infinite items</h2>
        <ul class="container">
            <li *clrVirtualFor="let y of years">
                {{y}}
            </li>
        </ul>
    `,
  styleUrls: ['./virtual-scroll.demo.scss'],
})
export class VirtualScrollInfiniteGeneratorDemo {
  years = {
    get(index: number) {
      return index + 2017;
    },
  };
}
