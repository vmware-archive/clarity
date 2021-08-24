/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { componentRoutes, getStartedRoutes } from './app-routing.module';

import { ClarityIcons, cogIcon, helpInfoIcon, wrenchIcon } from '@cds/core/icon';

ClarityIcons.addIcons(cogIcon, helpInfoIcon, wrenchIcon);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  componentRoutes = componentRoutes;
  getStartedRoutes = getStartedRoutes;
  today = new Date();
}
