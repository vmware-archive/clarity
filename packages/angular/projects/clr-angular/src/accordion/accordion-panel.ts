/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
  SimpleChanges,
  Inject,
  OnInit,
  OnChanges,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UNIQUE_ID_PROVIDER, UNIQUE_ID } from '../utils/id-generator/id-generator.service';
import { ClrCommonStringsService } from '../utils/i18n/common-strings.service';
import { AccordionService } from './providers/accordion.service';
import { AccordionStatus } from './enums/accordion-status.enum';
import { panelAnimation } from './utils/animation';
import { IfExpandService } from '../utils/conditional/if-expanded.service';
import { AccordionPanelModel } from './models/accordion.model';
import { ClrAccordionDescription } from './accordion-description';

@Component({
  selector: 'clr-accordion-panel',
  templateUrl: './accordion-panel.html',
  host: { '[class.clr-accordion-panel]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: panelAnimation,
  providers: [IfExpandService, UNIQUE_ID_PROVIDER],
})
export class ClrAccordionPanel implements OnInit, OnChanges {
  @Input('clrAccordionPanelDisabled') disabled = false;
  @Input('clrAccordionPanelOpen') panelOpen = false;
  @Output('clrAccordionPanelOpenChange') panelOpenChange = new EventEmitter<boolean>();
  @ContentChildren(ClrAccordionDescription) accordionDescription: QueryList<ClrAccordionDescription>;

  panel: Observable<AccordionPanelModel>;
  readonly AccordionStatus = AccordionStatus;
  isAccordion = true;

  constructor(
    public commonStrings: ClrCommonStringsService,
    private accordionService: AccordionService,
    private ifExpandService: IfExpandService,
    @Inject(UNIQUE_ID) public id: string
  ) {}

  ngOnInit() {
    this.panel = this.accordionService.getPanelChanges(this.id).pipe(tap(panel => this.emitPanelChange(panel)));
    this.accordionService.addPanel(this.id, this.panelOpen);
    this.accordionService.togglePanel(this.id, this.panelOpen);
    this.accordionService.disablePanel(this.id, this.disabled);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.panel && changes.panelOpen && changes.panelOpen.currentValue !== changes.panelOpen.previousValue) {
      this.accordionService.togglePanel(this.id, changes.panelOpen.currentValue);
    }

    if (this.panel && changes.disabled && changes.disabled.currentValue !== changes.disabled.previousValue) {
      this.accordionService.disablePanel(this.id, changes.disabled.currentValue);
    }
  }

  togglePanel() {
    this.accordionService.togglePanel(this.id);
  }

  collapsePanelOnAnimationDone(panel: AccordionPanelModel) {
    if (!panel.open) {
      this.ifExpandService.expanded = false;
    }
  }

  getPanelStateClasses(panel: AccordionPanelModel) {
    return `clr-accordion-panel-${panel.status} ${panel.open ? 'clr-accordion-panel-open' : ''}`;
  }

  getAccordionContentId(id: string) {
    return `clr-accordion-content-${id}'`;
  }

  getAccordionHeaderId(id: string) {
    return `clr-accordion-header-${id}`;
  }

  private emitPanelChange(panel: AccordionPanelModel) {
    this.panelOpenChange.emit(panel.open);

    if (panel.open) {
      this.ifExpandService.expanded = true;
    }
  }
}
