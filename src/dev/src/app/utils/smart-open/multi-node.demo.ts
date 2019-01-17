/*
 *  Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { Component } from '@angular/core';
import { IfOpenService } from '../../../../../clr-angular/utils/conditional/if-open.service';

@Component({
  selector: 'multi-node-demo',
  template: `
      <section>
          <h6>ng-template with multiple nodes</h6>
          <button
                  #anchor
                  (click)="toggleUI()"
                  class="btn btn-sm btn-link" type="button">
              <clr-icon shape="view-columns"></clr-icon>
              Toggle Template
          </button>

          <ng-template clrSmartOpen>
              <!-- yes, I know style is barf. This is faster than adding stylesheet to remove later when positioning is working -->
              <div style="position: absolute; top: 0; left: 0; background-color: red; border: 1px solid forestgreen">First node</div>
              <div style="position: absolute; top: 25px; left: 0; background-color: deepskyblue; border: 1px solid goldenrod">
                  <header>Header</header>
                  <p style="height: 100px;">Second Node</p>
                  <footer>footer</footer>
              </div>
          </ng-template>
      </section>
  `,
  host: { '[class.active]': 'open' },
  providers: [IfOpenService],
})
export class MultiNodeDemo {
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
