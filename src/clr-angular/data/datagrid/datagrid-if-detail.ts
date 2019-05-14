/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  Directive,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailService } from './providers/detail.service';
import { skip } from 'rxjs/operators';

@Directive({
  selector: '[clrIfDetail]',
})
export class ClrIfDetail implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private skip = false;

  @Input('clrIfDetail')
  set state(model) {
    if (!this.skip) {
      this.detailService.toggle(model);
    }
    this.skip = false;
  }

  @Output('clrIfDetailChange') public stateChange = new EventEmitter<any>(null);

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private detailService: DetailService
  ) {
    this.detailService.enabled = true;
  }

  ngOnInit() {
    this.subscriptions.push(
      this.detailService.stateChange.subscribe(state => {
        if (state === true) {
          this.showPanel();
        } else {
          this.hidePanel();
        }
      })
    );
  }

  private showPanel() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: this.detailService.state });
    // This keeps us from resetting the input and calling the toggle twice
    this.skip = true;
    this.stateChange.emit(this.detailService.state);
  }

  private hidePanel() {
    this.viewContainer.clear();
    this.stateChange.emit(null);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
