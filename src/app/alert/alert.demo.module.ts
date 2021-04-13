/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';

import { AlertsDemo } from './alert.demo';
import { ROUTING } from './alert.demo.routing';
import { AlertAngularDemo } from './angular/alert-angular';
import { AlertAngularAppLevelDemo } from './angular/alert-angular-app-level';
import { AlertAngularAppLevelAlertsDemo } from './angular/alert-angular-app-level-alerts';
import { AlertAngularCloseEventDemo } from './angular/alert-angular-close-event';
import { AlertAngularNotClosableDemo } from './angular/alert-angular-not-closable';
import { AlertAngularSmallDemo } from './angular/alert-angular-small';
import { AlertAngularSuccessDemo } from './angular/alert-angular-success';
import { AlertAppLevelDemo } from './static/alert-app-level';
import { AlertCardsDemo } from './static/alert-cards';
import { AlertContentAreaDemo } from './static/alert-content-area';
import { AlertModalsDemo } from './static/alert-modals';
import { AlertSizesDemo } from './static/alert-sizes';
import { AlertStaticDemo } from './static/alert-static';
import { AlertStylesDemo } from './static/alert-styles';

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING],
  declarations: [
    AlertsDemo,
    AlertStaticDemo,
    AlertStylesDemo,
    AlertContentAreaDemo,
    AlertCardsDemo,
    AlertModalsDemo,
    AlertSizesDemo,
    AlertAppLevelDemo,

    AlertAngularDemo,
    AlertAngularAppLevelDemo,
    AlertAngularAppLevelAlertsDemo,
    AlertAngularNotClosableDemo,
    AlertAngularSuccessDemo,
    AlertAngularSmallDemo,
    AlertAngularCloseEventDemo,
  ],
  exports: [
    AlertsDemo,
    AlertStaticDemo,
    AlertStylesDemo,
    AlertContentAreaDemo,
    AlertCardsDemo,
    AlertModalsDemo,
    AlertSizesDemo,
    AlertAppLevelDemo,

    AlertAngularDemo,
    AlertAngularAppLevelDemo,
    AlertAngularAppLevelAlertsDemo,
    AlertAngularNotClosableDemo,
    AlertAngularSuccessDemo,
    AlertAngularSmallDemo,
    AlertAngularCloseEventDemo,
  ],
})
export class AlertDemoModule {}
