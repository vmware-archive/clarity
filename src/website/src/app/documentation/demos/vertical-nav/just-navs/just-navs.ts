/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'clr-just-navs-demo',
  templateUrl: './just-navs.html',
  styleUrls: ['../vertical-nav.demo.scss'],
})
export class JustNavsDemo {
  @Input() demoWithDividers = false;
  @Input() demoWithHeadersAndDividers = false;
  @Input() demoLongLabel = false;
}
