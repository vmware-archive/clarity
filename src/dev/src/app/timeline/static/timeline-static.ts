/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit } from '@angular/core';

import '@clr/icons';
import { ClarityIcons } from '@clr/icons';

@Component({
  selector: 'clr-timeline-demo-static',
  templateUrl: './timeline-static.html',
})
export class TimelineStaticDemo implements OnInit {
  ngOnInit() {
    ClarityIcons.add({
      spinner: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><title>spinner 23</title><rect width="36" height="36" fill-opacity="0"/><circle cx="18" cy="18" r="14.85" fill="none" stroke="#000" stroke-miterlimit="10" stroke-opacity="0.15" stroke-width="2.3"/><path d="M8.24,29.2A14.86,14.86,0,0,1,18,3.15" fill="none" stroke="#007cbb" stroke-miterlimit="10" stroke-width="2.3"/></svg>`,
    });
  }
}
