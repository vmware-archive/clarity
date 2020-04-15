/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<clr-alert [clrAlertType]="'success'" (clrAlertClosedChange)="onClose()">
    <clr-alert-item>
        <span class="alert-text">
            This alert indicates a success!
        </span>
    </clr-alert-item>
</clr-alert>
<div>{{closeMessage}}</div>
`;

const TS_EXAMPLE = `
export class AlertAngularDemo  {
    closeMessage: string = "";

    onClose() {
        this.closeMessage = "The alert has been closed";
    }
}
`;

@Component({
  selector: 'clr-alert-close-event-demo-angular',
  styleUrls: ['../alerts.demo.scss'],
  templateUrl: './alert-angular-close-event.demo.html',
})
export class AlertAngularCloseEventDemo {
  closeMessage = '';
  htmlExample = HTML_EXAMPLE;
  tsExample = TS_EXAMPLE;

  onClose(): void {
    this.closeMessage = 'The alert has been closed';
  }
}
