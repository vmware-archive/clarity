/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'status-dot',
  template: `
    <img src="assets/images/documentation/status/{{ image }}.svg" title="{{ message }}" alt="{{ message }}" />
  `,
})
export class StatusDotComponent {
  image = 'na';
  message = 'Not applicable';

  @Input()
  set status(value: number) {
    if (value === 20) {
      this.image = 'done';
      this.message = 'Work completed';
    } else if (value === 10) {
      this.image = 'in-progress';
      this.message = 'Work in progress';
    } else if (value === 5) {
      this.image = 'in-queue';
      this.message = 'Work planned but not in progress';
    } else {
      this.image = 'na';
      this.message = 'Not applicable';
    }
  }
}
