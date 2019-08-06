/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, HostListener, Inject, Input } from '@angular/core';
import { IfOpenService } from '../../utils/conditional/if-open.service';
import { Subscription } from 'rxjs';
import { UNIQUE_ID } from '../../utils/id-generator/id-generator.service';

@Directive({
  selector: '[clrTooltipTrigger]',
  host: {
    tabindex: '0',
    '[class.tooltip-trigger]': 'true',
    '[attr.aria-describedby]': 'tooltipId',
    '[attr.aria-label]': 'tooltipLabel',
    role: 'button',
  },
})
export class ClrTooltipTrigger {
  public ariaDescribedBy;
  private subs: Subscription[] = [];
  constructor(@Inject(UNIQUE_ID) public tooltipId: string, private ifOpenService: IfOpenService) {}

  // This must be supplied by consumers
  // This must be unique (among tooltips)
  // This must be human readable e.g 'Tooltip 1' or 'Email input field tooltip`
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
