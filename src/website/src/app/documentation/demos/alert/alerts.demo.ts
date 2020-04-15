/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClarityDocComponent } from '../clarity-doc';
import { ÇlrFocusTrapTracker, FOCUS_ON_VIEW_INIT } from '@clr/angular';
import { DisableFocusTrap } from '../../utils/disable-focus-trap';

@Component({
  selector: 'clr-alerts-demo',
  templateUrl: './alerts.demo.html',
  styleUrls: ['./alerts.demo.scss'],
  host: {
    '[class.content-area]': 'true',
    '[class.dox-content-panel]': 'true',
  },
  providers: [
    { provide: ÇlrFocusTrapTracker, useClass: DisableFocusTrap },
    { provide: FOCUS_ON_VIEW_INIT, useValue: false },
  ],
})
export class AlertsDemo extends ClarityDocComponent {
  expanded = false;
  basic = true;

  constructor() {
    super('alerts');
  }
}
