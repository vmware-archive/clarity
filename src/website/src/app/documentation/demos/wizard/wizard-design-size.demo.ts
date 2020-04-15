/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'clr-wizard-design-size-demo',
  templateUrl: './wizard-design-size.demo.html',
})
export class WizardDesignSizeDemo {
  @ViewChild('wizard', { static: true })
  wizard: ClrWizard;
  open = false;
  size = 'xl';

  get textSize(): string {
    let returnVal = 'X-Large';

    switch (this.size) {
      case 'md':
        returnVal = 'Medium';
        break;
      case 'lg':
      default:
        returnVal = 'Large';
        break;
    }

    return returnVal;
  }

  openWizard(size: string): void {
    this.size = size;
    this.open = true;
  }
}
