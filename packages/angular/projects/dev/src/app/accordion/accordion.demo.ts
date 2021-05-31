/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

@Component({
  templateUrl: 'accordion.demo.html',
  styleUrls: ['./accordion.demo.scss'],
})
export class AccordionDemo {
  stepOpen = true;
  disableThirdPanel = true;

  change(event) {
    console.log('Accordion Changed', event);
  }
}
