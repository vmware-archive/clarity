/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, HostListener } from '@angular/core';
import { IfOpenService } from '../../utils/conditional/if-open.service';

@Directive({ selector: '[clrTooltipTrigger]', host: { '[attr.tabindex]': '0', '[class.tooltip-trigger]': 'true' } })
export class ClrTooltipTrigger {
  constructor(private ifOpenService: IfOpenService) {}

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
}
