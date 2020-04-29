/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  ContentChildren,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  PLATFORM_ID,
  QueryList,
  Input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LayoutService } from './providers/layout.service';
import { MarkControlService } from './providers/mark-control.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { ClrLabel } from './label';
import { ClrAriaLiveService } from '../../utils/a11y/aria-live.service';

@Directive({
  selector: '[clrForm]',
  providers: [LayoutService, MarkControlService, ClrAriaLiveService],
  host: {
    '[class.clr-form]': 'true',
    '[class.clr-form-horizontal]': 'layoutService.isHorizontal()',
    '[class.clr-form-compact]': 'layoutService.isCompact()',
  },
})
export class ClrForm {
  private invalidControls: HTMLElement[] = [];

  @Input('clrLabelSize')
  set labelSize(size: number) {
    this.layoutService.labelSize = size;
  }

  constructor(
    public layoutService: LayoutService,
    private markControlService: MarkControlService,
    @Inject(PLATFORM_ID) private platformId: any,
    private el: ElementRef,
    private commonStrings: ClrCommonStringsService,
    private ariaLiveService: ClrAriaLiveService
  ) {}

  /** @deprecated since 2.0 */
  markAsDirty(updateAriaLiveText?: boolean) {
    this.markAsTouched(updateAriaLiveText);
  }

  // Trying to avoid adding an input and keep this backwards compatible at the same time
  markAsTouched(updateAriaLiveText?: boolean) {
    this.markControlService.markAsTouched();

    // I don't think consumers will call this with undefined, null or other values but
    // want to make sure this only guards against when this is called with false
    if (updateAriaLiveText !== false && isPlatformBrowser(this.platformId)) {
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

  /** @deprecated since 3.0, remove in 4.0 */
  private updateAriaLive(): void {
    if (this.invalidControls.length === 0) {
      return;
    }

    const errorList = this.labels.filter(label => !!this.invalidControls.find(control => label.forAttr === control.id));

    this.ariaLiveService.announce(
      this.commonStrings.parse(this.commonStrings.keys.formErrorSummary, { ERROR_NUMBER: errorList.length.toString() })
    );
  }
}
