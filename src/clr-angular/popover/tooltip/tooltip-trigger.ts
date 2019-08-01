/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, HostListener, Input } from '@angular/core';
import { IfOpenService } from '../../utils/conditional/if-open.service';
import { TooltipIdService } from './providers/tooltip-id.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[clrTooltipTrigger]',
  host: {
    tabindex: '0',
    '[class.tooltip-trigger]': 'true',
    '[attr.aria-describedby]': 'ariaDescribedBy',
    '[attr.aria-label]': 'tooltipLabel',
    role: 'button',
  },
})
export class ClrTooltipTrigger {
  public ariaDescribedBy;
  private subs: Subscription[] = [];
  constructor(private ifOpenService: IfOpenService, private tooltipIdService: TooltipIdService) {
    this.subs.push(this.tooltipIdService.id.subscribe(idChange => (this.ariaDescribedBy = idChange)));
  }

  // This must be supplied by consumers
  // This must be unique (among tooltips)
  // This must make sense to a human e.g 'Tooltip 1' or 'Email formfield tooltip`
  @Input('clrTooltipLabel') tooltipLabel;

  @HostListener('mouseenter')
  @HostListener('focus')
  showTooltip(): void {
    this.ifOpenService.open = true;
  }

  @HostListener('mouseleave')
  @HostListener('blur')
  hideTooltip(): void {
    this.ifOpenService.open = false;
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
