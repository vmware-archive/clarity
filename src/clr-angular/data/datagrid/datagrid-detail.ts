/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  Component,
  Directive,
  EventEmitter,
  Input,
  TemplateRef,
  ViewContainerRef,
  Output,
  OnInit,
  OnDestroy,
  ViewChild,
  HostListener,
} from '@angular/core';
import { DetailService } from './providers/detail.service';
import { Subscription } from 'rxjs';
import { FocusTrapDirective } from '../../utils/focus-trap/focus-trap.directive';

@Component({
  selector: 'clr-dg-detail',
  host: {
    '[class.datagrid-detail-pane-wrapper]': 'true',
  },
  template: `
    <div clrFocusTrap class="datagrid-detail-pane">
      <ng-content></ng-content>
    </div>
    `,
})
export class ClrDatagridDetail {
  constructor(private detailService: DetailService) {}

  @HostListener('body:keyup.escape')
  close() {
    this.detailService.close();
  }
}

@Directive({
  selector: '[clrIfDetail]',
})
export class ClrDatagridDetailDirective implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  @Input('clrIfDetail')
  set state(model) {
    if (model) {
      this.detailService.toggle(model);
    } else {
      this.detailService.close();
    }
  }

  @Output('clrIfDetailChange') public stateChange = new EventEmitter<any | null>(null);

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private detailService: DetailService
  ) {
    this.detailService.close();
  }

  ngOnInit() {
    this.subscriptions.push(
      this.detailService.stateChange.subscribe(state => {
        this.hidePanel();
        if (state) {
          this.showPanel();
        }
      })
    );
  }

  private showPanel() {
    this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: this.detailService.state });
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
