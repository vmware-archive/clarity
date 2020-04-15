/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE = `
<clr-modal [(clrModalOpen)]="opened" [clrModalSize]="'sm'">
...
</clr-modal>

<clr-modal [(clrModalOpen)]="opened" [clrModalSize]="'lg'">
...
</clr-modal>

<clr-modal [(clrModalOpen)]="opened" [clrModalSize]="'xl'">
...
</clr-modal>
`;

@Component({
  selector: 'clr-modal-angular-size-demo',
  templateUrl: './modal-angular-size.demo.html',
})
export class ModalAngularSizeDemo {
  // Booleans to open each example modal
  public small = false;
  public large = false;
  public extraLarge = false;

  example = EXAMPLE;
}
