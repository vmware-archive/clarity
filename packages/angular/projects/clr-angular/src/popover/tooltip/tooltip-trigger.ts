/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, HostListener } from '@angular/core';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { TooltipIdService } from './providers/tooltip-id.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[clrTooltipTrigger]',
  host: {
    tabindex: '0',
    '[class.tooltip-trigger]': 'true',
    '[attr.aria-describedby]': 'ariaDescribedBy',
    '[attr.role]': '"button"',
  },
})
export class ClrTooltipTrigger {
  public ariaDescribedBy: string;
  private subs: Subscription[] = [];
  constructor(private toggleService: ClrPopoverToggleService, private tooltipIdService: TooltipIdService) {
    // The aria-described by comes from the id of content. It
    this.subs.push(this.tooltipIdService.id.subscribe(tooltipId => (this.ariaDescribedBy = tooltipId)));
  }

  @HostListener('mouseenter')
  @HostListener('focus')
  showTooltip(): void {
    this.toggleService.open = true;
  }

  @HostListener('mouseleave')
  @HostListener('blur')
  hideTooltip(): void {
    this.toggleService.open = false;
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
