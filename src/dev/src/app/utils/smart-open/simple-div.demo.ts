/*
 *  Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */
import { Component } from '@angular/core';
import { IfOpenService } from '../../../../../clr-angular/utils/conditional/if-open.service';

@Component({
  selector: 'simple-div-demo',
  template: `
      <section>
          <h6>Simple Div</h6>
          <button (click)="toggleUI()"
                  class="btn btn-sm btn-link" type="button">
              <clr-icon shape="view-columns"></clr-icon>
              Toggle Div
          </button>
          <!-- yes, I know style is barf. This is faster than adding stylesheet to remove later when positioning is working -->
          <div *clrSmartOpen style="position: absolute; top: 0; left: 0; padding: 25px; background: greenyellow">
              <header>Popover Header</header>
              <section>Popover body</section>
              <footer>Popover footer</footer>
          </div>
      </section>
  `,
  host: { '[class.active]': 'open' },
  providers: [IfOpenService],
})
export class SimpleDivDemo {
  public open: boolean = false;

  constructor(private ifOpenService: IfOpenService) {
    ifOpenService.openChange.subscribe(openChange => {
      this.open = openChange;
    });
  }

  toggleUI(event: MouseEvent) {
    this.ifOpenService.toggleWithEvent(event);
  }
}
