/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'clr-vertical-nav-groups-demo',
  templateUrl: './nav-groups.html',
  styleUrls: ['../vertical-nav.demo.scss'],
})
export class NavGroupsDemo {
  @Input() demoHideIcons = false;
  @Input() demoMixedNav = false;
  @Input() demoMixedNavWithIcons = false;
  @Input() demoExpandedGroup = false;
  @Input() demoCollapsible = false;
  @Input() demoLongLabel = false;
}
