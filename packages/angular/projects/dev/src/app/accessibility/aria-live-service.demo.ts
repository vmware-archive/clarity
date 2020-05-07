/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-aria-live-service-demo',
  template: `
    <div class="container">
      <h3>ClrSpinner</h3>

      <p>Display single ClrSpinner</p>
      <button (click)="showClrSpinner = !showClrSpinner" class="btn">Toggle ClrSpinner</button>
      <div *ngIf="showClrSpinner">
        <br />
        <clr-spinner clrMedium>AriaLive Clarity Spinner is visible</clr-spinner>
      </div>

      <p>Never ending creation of ClrSpinner's</p>
      <button (click)="endlessCreation()" class="btn">Toggle Endless Creation</button>
      <br />
      <div *ngFor="let row of spinners; let i = index" style="display: inline">
        <clr-spinner clrMedium>Creating new clrSpinner {{ i }}</clr-spinner>
      </div>

      <h3>ClrProgressBar</h3>

      <p>Announce ClrProgressBar in Assertive mode</p>
      <button (click)="showClrProgressBar = !showClrProgressBar" class="btn">Toggle ClrProgressBar</button>
      <div *ngIf="showClrProgressBar">
        <br />
        <clr-progress-bar clrMax="100" clrValue="45" clrSuccess="true" clrAssertive></clr-progress-bar>
      </div>

      <p>Monitor ClrProgressBar changes</p>
      <button (click)="toggleClrProgressBar()" class="btn">Toggle test</button>
      <div *ngIf="showMonitorTest">
        <br />
        <clr-progress-bar [clrValue]="monitorValue" clrAssertive></clr-progress-bar>
      </div>

      <h3>ClrControllError</h3>

      <button (click)="showErrorControlTest = !showErrorControlTest" class="btn">Toggle Error box</button>
      <div *ngIf="showErrorControlTest">
        <clr-control-error>Must be at least 5 characters</clr-control-error>
      </div>

      <h3>ClrAlert</h3>
      <button (click)="toggleClrAlert()" class="btn">Toggle Alert Demo</button>
      <div *ngIf="showAlertTest">
        <clr-alert [clrAlertType]="'success'">
          <clr-alert-item>
            <span class="alert-text">
              This alert indicates a success!
            </span>
          </clr-alert-item>
        </clr-alert>
      </div>
    </div>
  `,
})
export class AriaLiveServiceDemo {
  public showClrSpinner = false;
  public showClrProgressBar = false;
  public showMonitorTest = false;
  public showErrorControlTest = false;
  public showAlertTest = false;

  spinners: boolean[] = [];
  endlessToggle = false;
  endglessInterval: any;
  endlessCreation() {
    this.endlessToggle = !this.endlessToggle;
    if (this.endlessToggle) {
      this.endglessInterval = setInterval(() => {
        this.spinners.push(true);
      }, 1500);
    } else {
      clearInterval(this.endglessInterval);
      this.spinners = [];
    }
  }

  // Progress

  public monitorValue = 0;
  private monitorInterval: any;
  toggleClrProgressBar() {
    this.showMonitorTest = !this.showMonitorTest;
    if (this.showMonitorTest) {
      this.monitorInterval = setInterval(() => {
        if (this.monitorValue >= 100) {
          this.monitorValue = 0;
          return;
        }
        this.monitorValue = this.monitorValue + 5;
      }, 1000);
    } else {
      clearInterval(this.monitorInterval);
    }
  }

  // Alert
  toggleClrAlert() {
    this.showAlertTest = !this.showAlertTest;
  }
}
