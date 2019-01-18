/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */
import { Component } from '@angular/core';
// Consumer uses a service from Clarity to demo a simple popover instance for dev purposes.
import { IfOpenService } from '../../../../../clr-angular/utils/conditional/if-open.service';

@Component({
  templateUrl: './smart-open.demo.html',
  host: { '[class.active]': 'open' },
  providers: [IfOpenService],
})
export class SmartOpenDemo {
  public simpleDiv = true;
}
