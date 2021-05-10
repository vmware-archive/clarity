/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { APP_ROUTES } from './app.routing';

import '@cds/core/icon/register.js';
import {
  loadChartIconSet,
  loadCommerceIconSet,
  loadCoreIconSet,
  loadEssentialIconSet,
  loadMediaIconSet,
  loadMiniIconSet,
  loadSocialIconSet,
  loadTechnologyIconSet,
  loadTextEditIconSet,
  loadTravelIconSet,
} from '@cds/core/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public routes: Route[] = APP_ROUTES;

  constructor() {
    loadChartIconSet();
    loadCommerceIconSet();
    loadCoreIconSet();
    loadEssentialIconSet();
    loadMediaIconSet();
    loadMiniIconSet();
    loadSocialIconSet();
    loadTechnologyIconSet();
    loadTextEditIconSet();
    loadTravelIconSet();
  }
}
