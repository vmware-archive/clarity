/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  Component,
  ContentChildren,
  QueryList,
  ChangeDetectionStrategy,
  Input,
  SimpleChanges,
  OnInit,
  OnChanges,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { startWith } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { AccordionService } from './providers/accordion.service';
import { ClrAccordionPanel } from './accordion-panel';
import { AccordionStrategy } from './enums/accordion-strategy.enum';

@Component({
  selector: 'clr-accordion',
  template: `<ng-content></ng-content>`,
  host: { '[class.clr-accordion]': 'true' },
  providers: [AccordionService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClrAccordion implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input('clrAccordionMultiPanel') multiPanel = false;
  @ContentChildren(ClrAccordionPanel, { descendants: true })
  panels: QueryList<ClrAccordionPanel>;
  subscriptions: Subscription[] = [];

  constructor(private accordionService: AccordionService) {}

  ngOnInit() {
    this.setAccordionStrategy();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.multiPanel.currentValue !== changes.multiPanel.previousValue) {
      this.setAccordionStrategy();
    }
  }

  ngAfterViewInit() {
    this.subscriptions.push(this.listenForDOMChanges());
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private setAccordionStrategy() {
    const strategy = this.multiPanel ? AccordionStrategy.Multi : AccordionStrategy.Default;
    this.accordionService.setStrategy(strategy);
  }

  private listenForDOMChanges() {
    return this.panels.changes
      .pipe(startWith(this.panels))
      .subscribe((panels: QueryList<ClrAccordionPanel>) =>
        this.accordionService.updatePanelOrder(panels.toArray().map(p => p.id))
      );
  }
}
