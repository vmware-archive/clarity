/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, HostListener, OnDestroy, Renderer2, PLATFORM_ID, Inject } from '@angular/core';
import { Subscription } from 'rxjs';

import { IfOpenService } from '../../utils/conditional/if-open.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
import { SignpostIdService } from './providers/signpost-id.service';

@Directive({
  selector: '[clrSignpostTrigger]',
  host: {
    class: 'signpost-trigger',
    '[attr.aria-label]': 'commonStrings.signpostToggle',
    '[attr.aria-expanded]': 'ariaExpanded',
    '[attr.aria-controls]': 'ariaControl',
  },
})

/*********
 *
 * @description
 * A Directive added to the ClrSignpost Trigger button that will call the ClrSignpost.toggle() function to hide/show the
 * ClrSignpostContent.
 *
 */
export class ClrSignpostTrigger implements OnDestroy {
  private subscriptions: Subscription[] = [];
  public ariaExpanded: boolean;
  public ariaControl: string;

  constructor(
    private ifOpenService: IfOpenService,
    private renderer: Renderer2,
    private el: ElementRef,
    public commonStrings: ClrCommonStrings,
    private signpostIdService: SignpostIdService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.subscriptions.push(
      this.ifOpenService.openChange.subscribe((isOpen: boolean) => {
        if (isOpen) {
          this.renderer.addClass(this.el.nativeElement, 'active');
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'active');
          if (isPlatformBrowser(this.platformId)) {
            this.el.nativeElement.focus();
          }
        }
        this.ariaExpanded = isOpen;
      }),
      this.signpostIdService.id.subscribe(idChange => (this.ariaControl = idChange))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  /**********
   *
   * @description
   * click handler for the ClrSignpost trigger button used to hide/show ClrSignpostContent.
   */
  @HostListener('click', ['$event'])
  onSignpostTriggerClick(event: Event): void {
    this.ifOpenService.toggleWithEvent(event);
  }
}
