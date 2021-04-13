/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
} from '@angular/core';
import { ClrAlert } from './alert';
import { MultiAlertService } from './providers/multi-alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'clr-alerts',
  templateUrl: './alerts.html',
  providers: [MultiAlertService],
  host: {
    '[class.alerts]': 'true',
    '[class.alert-danger]': "this.currentAlertType == 'danger'",
    '[class.alert-info]': "this.currentAlertType == 'info'",
    '[class.alert-success]': "this.currentAlertType == 'success'",
    '[class.alert-warning]': "this.currentAlertType == 'warning'",
  },
  styles: [':host { display: block }'],
})
export class ClrAlerts implements AfterContentInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  @ContentChildren(ClrAlert)
  set allAlerts(value: QueryList<ClrAlert>) {
    this.multiAlertService.manage(value); // provide alerts
  }

  /**
   * Input/Output to support two way binding on current alert index
   */
  @Input('clrCurrentAlertIndex')
  public set _inputCurrentIndex(index: number) {
    if (Number.isInteger(index) && index >= 0) {
      this.multiAlertService.current = index;
    }
  }

  @Output('clrCurrentAlertIndexChange') public currentAlertIndexChange = new EventEmitter<number>(false);

  set currentAlertIndex(index: number) {
    this.multiAlertService.current = index;
  }
  get currentAlertIndex() {
    return this.multiAlertService.current;
  }

  /**
   * Input/Output to support two way binding on current alert instance
   */
  @Input('clrCurrentAlert')
  set currentAlert(alert: ClrAlert) {
    if (alert) {
      this.multiAlertService.currentAlert = alert;
    }
  }
  get currentAlert() {
    return this.multiAlertService.currentAlert;
  }
  @Output('clrCurrentAlertChange') public currentAlertChange = new EventEmitter<ClrAlert>(false);

  /**
   * Ensure we are only dealing with alerts that have not been closed yet
   */
  get alerts() {
    return this.allAlerts.filter(alert => {
      return alert.hidden === false;
    });
  }

  get currentAlertType(): string {
    if (this.multiAlertService.currentAlert) {
      return this.multiAlertService.currentAlert.alertType;
    }
    return '';
  }

  constructor(public multiAlertService: MultiAlertService) {}

  ngAfterContentInit() {
    this.subscriptions.push(
      this.multiAlertService.changes.subscribe(index => {
        this.currentAlertIndexChange.next(index);
        this.currentAlertChange.next(this.multiAlertService.currentAlert);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.multiAlertService.destroy();
  }
}
