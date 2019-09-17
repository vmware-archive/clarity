/**
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  ContentChildren,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  QueryList,
  Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LayoutService } from './providers/layout.service';
import { MarkControlService } from './providers/mark-control.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { ClrLabel } from './label';

@Directive({
  selector: '[clrForm]',
  providers: [LayoutService, MarkControlService],
  host: {
    '[class.clr-form]': 'true',
    '[class.clr-form-horizontal]': 'layoutService.isHorizontal()',
    '[class.clr-form-compact]': 'layoutService.isCompact()',
  },
})
export class ClrForm implements OnInit, OnDestroy {
  private ariaLiveElement: HTMLDivElement;
  private invalidControls = [];

  constructor(
    public layoutService: LayoutService,
    private markControlService: MarkControlService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef,
    private renderer: Renderer2,
    private commonStrings: ClrCommonStringsService
  ) {}

  /** @deprecated since 2.0 */
  markAsDirty(updateAriaLiveText?: boolean) {
    this.markAsTouched((updateAriaLiveText = true));
  }

  // Trying to avoid adding an input and keep this backwards compatible at the same time
  markAsTouched(updateAriaLiveText?: boolean) {
    this.markControlService.markAsTouched();

    // I don't think consumers will call this with undefined, null or other values but
    // want to make sure this only guards against when this is called with false
    if (updateAriaLiveText !== false && isPlatformBrowser(this.platformId) && this.ariaLiveElement) {
      this.invalidControls = Array.from(this.el.nativeElement.querySelectorAll('.ng-invalid'));
      if (this.invalidControls.length > 0) {
        this.invalidControls[0].focus();
        this.updateAriaLive();
      }
    }
  }

  @ContentChildren(ClrLabel, { descendants: true })
  labels: QueryList<ClrLabel>;

  @HostListener('submit')
  onFormSubmit() {
    this.markAsTouched();
  }

  ngOnInit() {
    this.createAriaLiveElement();
  }

  private updateAriaLive(): void {
    if (this.invalidControls.length === 0) {
      return;
    }

    const errorList = this.labels.filter(label => this.invalidControls.find(control => label.forAttr === control.id));

    this.ariaLiveElement.textContent = this.commonStrings.parse(this.commonStrings.keys.formErrorSummary, {
      ERROR_NUMBER: errorList.length.toString(),
    });
  }

  // TODO: refactor to a more generic service
  private createAriaLiveElement() {
    if (isPlatformBrowser(this.platformId)) {
      // ClrForms need to have aria live element for screen readers.
      this.ariaLiveElement = document.createElement('div');
      this.renderer.setAttribute(this.ariaLiveElement, 'aria-live', 'polite');
      this.renderer.setAttribute(this.ariaLiveElement, 'role', 'status');
      this.renderer.setAttribute(this.ariaLiveElement, 'aria-atomic', 'true');
      this.renderer.setAttribute(this.ariaLiveElement, 'aria-relevent', 'text');
      this.renderer.addClass(this.ariaLiveElement, 'clr-sr-only');
      this.renderer.insertBefore(this.el.nativeElement, this.ariaLiveElement, this.el.nativeElement.firstChild);
    }
  }

  // TODO: refactor to a more generic service
  private removeAriaLiveElement() {
    if (isPlatformBrowser(this.platformId) && this.ariaLiveElement) {
      this.el.nativeElement.removeChild(this.ariaLiveElement);
      delete this.ariaLiveElement;
    }
  }

  ngOnDestroy() {
    this.removeAriaLiveElement();
  }
}
