/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<span class="badge badge-info">2 <span class="clr-sr-only">items in an info badge</span></span>
<span class="badge badge-success">3 <span class="clr-sr-only">items in a sucess badge</span></span>
<span class="badge badge-warning">12 <span class="clr-sr-only">items in a warning badge</span></span>
<span class="badge badge-danger">15 <span class="clr-sr-only">items in a danger badge</span></span>
`;

@Component({
  selector: 'clr-badge-statuses-demo',
  templateUrl: './badge-statuses.demo.html',
})
export class BadgeStatusesDemo {
  htmlExample = HTML_EXAMPLE;
}
